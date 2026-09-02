// Lazily resolves an external URL: the href stays "#" in the DOM until
// a genuine interaction (focus/hover/touch) signals a real visitor, so
// bots that render-and-scrape every <a href> see an inert placeholder.
// The click handler is a fallback for activation paths (some assistive
// tech, programmatic clicks) that skip those events.
export function useResolvedExternalLink(buildUrl: () => string) {
  const href = ref("");

  function resolve() {
    if (!href.value) href.value = buildUrl();
  }

  function onActivate(event: MouseEvent) {
    if (href.value) return;
    event.preventDefault();
    resolve();
    window.open(href.value, "_blank", "noopener,noreferrer");
  }

  return { href, resolve, onActivate };
}
