import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import HeroSection from "./HeroSection.vue";

describe("HeroSection", () => {
  it("will show correct text in first line of the headline", () => {
    const wrapper = shallowMount(HeroSection);

    const element = wrapper.find('[data-testid="headline-1"]');

    expect(wrapper.vm).toBeTruthy();
    expect(element.isVisible()).toBe(true);
    expect(element.text()).toBe(`I'm  Giorgos (/ɡi.ɔ̌ːr.ɡ.os/),`);
  });

  it("will show correct text in second line of the headline", () => {
    const wrapper = shallowMount(HeroSection);

    const element = wrapper.find('[data-testid="headline-2"]');

    expect(wrapper.vm).toBeTruthy();
    expect(element.isVisible()).toBe(true);
    expect(element.text()).toBe(
      "a Full-Stack Web Developer based in Heraklion of Crete."
    );
  });
});
