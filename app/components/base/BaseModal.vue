<script setup lang="ts">
defineProps<{
  showCloseButton?: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <Teleport to="body">
    <div class="modal__backdrop" data-testid="base-modal-backdrop" @click="emit('close')" />

    <div v-bind="$attrs" class="modal__dialog" role="dialog" aria-modal="true" data-testid="base-modal">
      <div class="modal__dialog-wrapper">
        <BaseButton v-if="showCloseButton" class="modal__close" variant="outline" square data-testid="base-modal-close-button" @click="emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.7188 8.71875L13.4062 12L16.7188 15.2812C16.9062 15.4896 17 15.7292 17 16C17 16.2708 16.9062 16.5104 16.7188 16.7188C16.5104 16.9062 16.2708 17 16 17C15.7292 17 15.4896 16.9062 15.2812 16.7188L12 13.4062L8.71875 16.7188C8.51042 16.9062 8.27083 17 8 17C7.72917 17 7.48958 16.9062 7.28125 16.7188C7.09375 16.5104 7 16.2708 7 16C7 15.7292 7.09375 15.4896 7.28125 15.2812L10.5938 12L7.28125 8.71875C7.09375 8.51042 7 8.27083 7 8C7 7.72917 7.09375 7.48958 7.28125 7.28125C7.48958 7.09375 7.72917 7 8 7C8.27083 7 8.51042 7.09375 8.71875 7.28125L12 10.5938L15.2812 7.28125C15.4896 7.09375 15.7292 7 16 7C16.2708 7 16.5104 7.09375 16.7188 7.28125C16.9062 7.48958 17 7.72917 17 8C17 8.27083 16.9062 8.51042 16.7188 8.71875Z" fill="#5F6977" />
          </svg>
        </BaseButton>

        <div class="modal__body">
          <slot />
        </div>

        <footer v-if="$slots.actions" class="modal__footer">
          <slot name="actions" />
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.modal {
  &__backdrop {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(15, 23, 43, 0.2);
    z-index: 30;
  }

  &__dialog {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 40;

    width: calc(100% - 32px);
    max-width: 440px;
    max-height: calc(100% - 8rem);

    background-color: #fff;
    border-radius: 16px;
    border: 1px solid $color-border;
    overflow: hidden;
  }

  &__dialog-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid $color-border;
  }

  &__title {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: $color-text-main;
  }

  &__close {
    flex-shrink: 0;
    position: absolute;
    top: 0;
    right: 0;
  }

  &__body {
    flex: 1 1 auto;
    padding: 16px;
    overflow: hidden;
    overflow-y: auto;
  }

  &__footer {
    display: flex;
    gap: 12px;
    padding: 12px 16px;
  }
}
</style>
