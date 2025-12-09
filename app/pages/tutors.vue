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
          <TutorCard />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
@use "@/assets/scss/variables" as *;
</style>
