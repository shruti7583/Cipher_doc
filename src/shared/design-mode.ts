// Mock/Stub for missing shared design-mode
export type GetStyleInfo = (resolved: { element: Element }) => { className: string; styles: Record<string, string> | null };

export function initDesignMode(callback: any) {
  // Returns a dummy function so the code doesn't crash
  return () => console.log("Design mode is not enabled in this build.");
}
