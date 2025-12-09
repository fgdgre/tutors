<script setup lang="ts">
const handleBookLesson = () => {
  console.log("book lesson");
};
const handleOpenTutorInfo = () => {
  console.log("open tutor info");
};
</script>

<template>
  <section class="tutors">
    <div class="tutors__list-wrapper">
      <h1 class="tutors__title">Choose tutor</h1>
      <ul class="tutors__list">
        <li class="tutors__list-item">
          <!-- <TutorCard :tutor /> -->
          <article class="tutor-card">
            <header class="tutor-card__header">
              <div class="tutor-card__personal-info">
                <img class="tutor-card__avatar" src="" :alt="`profile picture`" />

                <h2 class="tutor-card__title"></h2>
              </div>

              <div class="tutor-card__professional-info">
                <p class="tutor-card__subject"></p>
                <p class="tutor-card__students-number"></p>
              </div>
            </header>

            <p class="tutor-card__description"></p>

            <div class="tutor-card__actions">
              <BaseButton variant="primary" full-width @click="handleBookLesson"> Book a lesson </BaseButton>
              <!-- <BaseButton color="primary" @click="handleBookLesson"> Book a lesson </BaseButton> -->

              <BaseButton variant="outline" full-width @click="handleOpenTutorInfo"> Read more </BaseButton>
              <!-- <BaseButton @click="handleOpenTutorInfo"> Read more </BaseButton> -->
            </div>
          </article>
          <!-- <TutorCard :tutor /> -->
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
@use "@/assets/scss/variables" as *;
</style>
