import { useTheme } from "vuetify";

const THEME_NAMES = ["customLight", "customDark"] as const;
const STORAGE_KEY = "dark_theme";

/**
 * Single source of truth for reading/persisting/toggling the light/dark
 * theme. Used by `app.vue` (to restore the theme once on load) and by
 * `TheThemeToggle` (to read/flip the current theme).
 */
export function useColorTheme() {
  const theme = useTheme();

  const isDark = computed(() => theme.global.current.value.dark);
  const disabledTheme = computed(() => (isDark.value ? "light" : "dark"));
  const themeToggleIcon = computed(() => (isDark.value ? "moon" : "sun"));

  function applyTheme(dark: boolean) {
    theme.global.name.value = dark ? THEME_NAMES[1] : THEME_NAMES[0];
  }

  function initFromStorage() {
    if (!import.meta.client) return;

    const stored = localStorage.getItem(STORAGE_KEY);
    const dark =
      stored === null
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : stored === "true";

    applyTheme(dark);
  }

  function toggle() {
    const nextIsDark = !isDark.value;
    applyTheme(nextIsDark);

    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, nextIsDark.toString());
    }
  }

  return { isDark, disabledTheme, themeToggleIcon, initFromStorage, toggle };
}
