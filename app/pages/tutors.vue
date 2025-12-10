<script setup lang="ts">
useSeoMeta({
  title: "Tutors | Tutors App",
  description: "Choose a tutor from the list of available teachers.",
});

const { data: tutors, pending, error } = useUsers();
</script>

<template>
  <section class="tutors">
    <div class="tutors__list-wrapper">
      <h1 class="tutors__title">Choose tutor</h1>

      <p v-if="pending">loading...</p>

      <p v-else-if="error">Something went wrong</p>

      <ul v-else-if="tutors?.length" class="tutors__list">
        <li v-for="(tutor, index) of tutors" :key="index" class="tutors__list-item">
          <TutorCard :tutor />
        </li>
      </ul>

      <p v-else>No tutors found</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.tutors {
  padding-inline: $space-inline-mobile;

  @include tablet {
    padding-inline: $space-inline-tablet;
  }

  overflow: auto;

  &__list-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;

    @include desktop {
      max-width: 620px;
      margin-inline: auto;
    }
  }

  &__title {
    margin-top: 16px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-block: 20px;
  }
}
</style>
