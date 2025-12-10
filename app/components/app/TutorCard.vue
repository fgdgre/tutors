<script setup lang="ts">
import type { Tutor } from "~/types/tutor";
import { subjectsMap } from "~/constants/subject";

defineProps<{
  tutor: Tutor;
}>();

const isMobile = useMediaQuery("(max-width: 739px)");

const isInfoModalOpen = ref(false);

const handleOpenInfoModal = () => {
  isInfoModalOpen.value = true;
};

const handleCloseInfoModal = () => {
  isInfoModalOpen.value = false;
};
</script>

<template>
  <article class="tutor-card">
    <img class="tutor-card__avatar tutor-card__avatar--tablet" :src="tutor.avatar" :alt="`Avatar of ${tutor.name}`" />
    <div class="tutor-card__wrapper">
      <header>
        <div class="tutor-card__personal-info">
          <img class="tutor-card__avatar tutor-card__avatar--mobile" :src="tutor.avatar" :alt="`Avatar of ${tutor.name}`" />

          <h2 class="tutor-card__title">{{ tutor.name }}</h2>
        </div>

        <div class="tutor-card__professional-info">
          <p class="tutor-card__subject">{{ subjectsMap[tutor.subject] }}</p>
          <p class="tutor-card__students-number">Students: {{ tutor.students }}</p>
        </div>
      </header>

      <p class="tutor-card__description">{{ tutor.description }}</p>

      <div class="tutor-card__actions">
        <BaseButton :full-width="isMobile" @click="console.log('Book a lesson')">Book a lesson</BaseButton>

        <BaseButton :full-width="isMobile" variant="outline" @click="handleOpenInfoModal">Read more</BaseButton>
      </div>
    </div>
  </article>

  <BaseModal v-if="isInfoModalOpen" show-close-button @close="handleCloseInfoModal">
    <template #default>
      <div class="info-modal">
        <img class="info-modal__avatar" :src="tutor.avatar" :alt="`Avatar of ${tutor.name}`" />

        <h2 class="info-modal__title">{{ tutor.name }}</h2>

        <div class="info-modal__professional-info">
          <p class="info-modal__subject">{{ subjectsMap[tutor.subject] }}</p>
          <p class="info-modal__students-number">Students: {{ tutor.students }}</p>
        </div>

        <p class="info-modal__description">{{ tutor.description }}</p>
      </div>
    </template>

    <template #actions>
      <BaseButton variant="outline" @click="handleCloseInfoModal">Close</BaseButton>
    </template>
  </BaseModal>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.tutor-card {
  padding: 16px;
  border: 1px solid $color-border;
  border-radius: 16px;

  @include tablet {
    display: flex;
    gap: 16px;
  }

  &__personal-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__avatar {
    width: 32px;
    height: 32px;
    border-radius: 999px;
    object-fit: cover;
  }

  &__avatar--mobile {
    @include tablet {
      display: none;
    }
  }

  &__avatar--tablet {
    display: none;
    width: 66px;
    height: 66px;
    border-radius: 16px;

    @include tablet {
      display: block;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 16px;
  }

  &__professional-info {
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: #62748e;
  }

  &__description {
    margin-top: 8px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  &__actions {
    margin-top: 8px;
    display: flex;
    gap: 16px;

    :deep(.button--full-width) {
      width: 100%;

      @include tablet {
        width: auto;
        flex: 0 0 auto;
      }
    }
  }
}

.info-modal {
  display: flex;
  flex-direction: column;

  &__avatar {
    margin-top: 40px;
    width: 66px;
    height: 66px;
    border-radius: 16px;
    flex-shrink: 0;
    margin-inline: auto;
  }

  &__title {
    font-weight: 500;
    font-size: 16px;
    margin-top: 16px;
    text-align: center;
  }

  &__professional-info {
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: #62748e;
  }

  &__description {
    margin-top: 24px;
  }
}
</style>
