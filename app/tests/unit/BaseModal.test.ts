// @vitest-environment nuxt
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import BaseModal from "~/components/base/BaseModal.vue";

describe("BaseModal", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("locks scroll on mount and restores on unmount", async () => {
    const wrapper = await mountSuspended(BaseModal, {
      props: { showCloseButton: true },
      slots: {
        default: "Content",
      },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });

    expect(document.body.style.overflow).toBe("hidden");

    wrapper.unmount();
    expect(document.body.style.overflow).toBe("");
  });

  it("emits close when backdrop is clicked", async () => {
    const wrapper = await mountSuspended(BaseModal, {
      props: { showCloseButton: true },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });

    const backdrop = wrapper.get('[data-testid="base-modal-backdrop"]');
    await backdrop.trigger("click");

    expect(wrapper.emitted().close).toBeTruthy();
  });

  it("emits close when close button is clicked", async () => {
    const wrapper = await mountSuspended(BaseModal, {
      props: { showCloseButton: true },
      global: {
        stubs: {
          teleport: true,
        },
      },
    });

    const closeButton = wrapper.get('[data-testid="base-modal-close-button"]');
    await closeButton.trigger("click");

    expect(wrapper.emitted().close).toBeTruthy();
  });
});
