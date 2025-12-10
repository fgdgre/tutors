<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "primary" | "outline";
    square?: boolean;
  }>(),
  {
    variant: "primary",
  }
);
</script>

<template>
  <button
    class="button"
    :class="[
      `button--${variant}`,
      {
        'button--square': square,
      },
    ]"
    type="button"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: $button-border-radius;
  border: 1px solid transparent;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  min-height: 40px;

  &--primary {
    background-color: $color-primary;
    color: #fff;

    &:hover {
      background-color: #889bff;
    }

    &:active {
      background-color: #5264c6;
    }
  }

  &--outline {
    background-color: transparent;
    color: $color-button-text;
    border-color: $color-border;

    &:hover {
      background-color: #f0f7ff;
    }

    &:active {
      color: #000;
    }
  }

  &--square {
    padding: 8px;
    border: none;
  }
}
</style>
