// Decodes the base64-encoded social username injected at build time.
// The plain handle is never written into the shipped bundle, so bulk
// scrapers that only grep for recognizable url/username substrings
// don't find it; a real browser decodes it on first interaction.
export function useSocialUsername(): string {
  const runtimeConfig = useRuntimeConfig();
  return atob(runtimeConfig.public.SOCIAL_NETWORKS_USERNAME_B64 || "");
}
