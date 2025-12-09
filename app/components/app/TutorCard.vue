<script setup lang="ts">
import type { Subjects, Tutor } from "~/types/tutor";

defineProps<{
  tutor: Tutor;
}>();

defineEmits<{
  bookLesson: [];
  readMore: [];
}>();

const subjectsMap: Record<Subjects, string> = {
  english: "English Tutor",
  math: "Math Tutor",
  reading: "Reading Tutor",
  science: "Science Tutor",
};
</script>

<template>
  <article class="tutor-card">
    <header>
      <div class="tutor-card__personal-info">
        <img class="tutor-card__avatar" />

        <h2 class="tutor-card__title">{{ tutor.name }}</h2>
      </div>

      <div class="tutor-card__professional-info">
        <p class="tutor-card__subject">{{ subjectsMap[tutor.subject] }}</p>
        <p class="tutor-card__students-number">Students: {{ tutor.students }}</p>
      </div>
    </header>

    <p class="tutor-card__description">{{ tutor.description }}</p>

    <div class="tutor-card__actions">
      <BaseButton full-width @click="$emit('bookLesson')">Book a lesson</BaseButton>

      <BaseButton variant="outline" full-width @click="$emit('readMore')">Read more</BaseButton>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;

.tutor-card {
  padding: 16px;
  border: 1px solid $color-border;
  border-radius: 16px;

  &__personal-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__avatar {
    background-color: #62748e;
    width: 32px;
    height: 32px;
    border-radius: 999px;
    object-fit: contain;
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
  }
}
</style>
