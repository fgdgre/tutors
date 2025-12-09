<template>
  <article class="tutor-card">
    <header>
      <div class="tutor-card__personal-info">
        <img class="tutor-card__avatar" src="" :alt="`profile picture`" />

        <h2 class="tutor-card__title">Title</h2>
      </div>

      <div class="tutor-card__professional-info">
        <p class="tutor-card__subject">subject</p>
        <p class="tutor-card__students-number">Students: 123213</p>
      </div>
    </header>

    <p class="tutor-card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, blanditiis fugit voluptates magni velit natus, laboriosam ipsum, rem nostrum facilis ea libero voluptas sequi quod mollitia veritatis harum unde. Iure?</p>

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
