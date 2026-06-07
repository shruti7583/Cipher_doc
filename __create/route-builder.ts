import { Hono } from 'hono';
import type { Handler } from 'hono/types';
import updatedFetch from '../src/__create/fetch';

const API_BASENAME = '/api';
const api = new Hono();

if (globalThis.fetch) {
  globalThis.fetch = updatedFetch;
}

// Vite statically gathers all route files at build-time.
// This is production-safe because it doesn't require filesystem access at runtime.
const routeFiles = import.meta.glob('../src/app/api/**/route.js', { eager: true });

function getHonoPath(path: string): { name: string; pattern: string }[] {
  // Remove the directory prefix and filename
  const relativePath = path.replace('../src/app/api/', '').replace('/route.js', '');
  const parts = relativePath.split('/').filter(Boolean);
  
  if (parts.length === 0) return [{ name: 'root', pattern: '' }];

  return parts.map((segment) => {
    const match = segment.match(/^\[(\.{3})?([^\]]+)\]$/);
    if (match) {
      const [_, dots, param] = match;
      return dots === '...'
        ? { name: param, pattern: `:${param}{.+}` }
        : { name: param, pattern: `:${param}` };
    }
    return { name: segment, pattern: segment };
  });
}

async function registerRoutes() {
  api.routes = [];

  // Convert glob object to array and sort to keep the root route priority
  const entries = Object.entries(routeFiles).sort((a, b) => b[0].length - a[0].length);

  for (const [path, routeModule] of entries) {
    try {
      const route = routeModule as any;
      const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

      for (const method of methods) {
        if (route[method]) {
          const parts = getHonoPath(path);
          const honoPath = `/${parts.map(({ pattern }) => pattern).join('/')}`;
          
          const handler: Handler = async (c) => {
            return await route[method](c.req.raw, { params: c.req.param() });
          };

          const methodLowercase = method.toLowerCase() as keyof Hono;
          if (typeof api[methodLowercase] === 'function') {
             (api[methodLowercase] as any)(honoPath, handler);
          }
        }
      }
    } catch (error) {
      console.error(`Error registering route ${path}:`, error);
    }
  }
}

// Initial registration
await registerRoutes();

export { api, API_BASENAME };
