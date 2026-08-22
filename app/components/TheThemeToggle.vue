<script setup lang="ts">
import { useColorTheme } from "~/composables/useColorTheme";

defineProps<{
  /** Style as a floating, elevated circular button (used on mobile). */
  fab?: boolean;
}>();

const { isDark, disabledTheme, themeToggleIcon, toggle } = useColorTheme();

// v-tooltip's default `open-on-hover` opens the tooltip on the
// "mouseenter" event. On touch devices, browsers fire a synthetic
// "mouseenter" to emulate hover as soon as you tap the button, which
// opens the tooltip and mutates the DOM mid-gesture. That can swallow
// the tap's "click" event, so the theme toggle only reacted on the
// *second* tap. Only enable hover-opening on devices that have real
// hover/pointer support; keyboard focus keeps working regardless.
const supportsHover = ref(false);

onMounted(() => {
  supportsHover.value = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
});
</script>

<template>
  <v-tooltip
    location="bottom end"
    :open-on-hover="supportsHover"
    :open-on-focus="true"
  >
    <template #activator="{ props: tooltipProps }">
      <button
        type="button"
        class="theme-toggle"
        :class="{ 'theme-toggle--fab': fab }"
        v-bind="tooltipProps"
        :aria-pressed="isDark"
        :aria-label="`Enable ${disabledTheme} mode`"
        @click="toggle"
      >
        <font-awesome-icon
          :icon="['fas', themeToggleIcon]"
          aria-hidden="true"
        />
      </button>
    </template>

    <span>Enable {{ disabledTheme }} mode</span>
  </v-tooltip>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0.5rem;
  border-radius: 50%;
}

.theme-toggle:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.theme-toggle--fab {
  position: fixed;
  top: 72px;
  right: 16px;
  z-index: 1006;
  width: 40px;
  height: 40px;
  background: rgb(var(--v-theme-surface));
  box-shadow:
    0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0 1px 18px 0 rgba(0, 0, 0, 0.12);
}
</style>
