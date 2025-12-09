<script setup lang="ts">
import type { ApiUser } from "~/types/api";
import type { Tutor } from "~/types/tutor";
import { defaultUserAvatar } from "~/constants/user-avatar";

const mockData: Omit<Tutor, "name" | "description">[] = [
  {
    avatar: defaultUserAvatar,
    students: 1200,
    subject: "math",
  },
  {
    avatar: defaultUserAvatar,
    students: 1560,
    subject: "math",
  },
  {
    avatar: defaultUserAvatar,
    students: 1100,
    subject: "math",
  },
  {
    avatar: defaultUserAvatar,
    students: 900,
    subject: "english",
  },
];

const {
  data: tutors,
  pending,
  error,
} = await useAsyncData<Tutor[]>("tutors", async () => {
  const users = await $fetch<ApiUser[]>("https://jsonplaceholder.typicode.com/users");

  return users.slice(0, 4).map((user, index): Tutor => {
    const mock = mockData[index];

    return {
      name: user.name,
      description: `${user.company.catchPhrase}. ${user.company.bs}.`,
      ...mock,
    } as Tutor;
  });
});
</script>

<template>
  <section class="tutors">
    <div class="tutors__list-wrapper">
      <h1 class="tutors__title">Choose tutor</h1>
      <ul class="tutors__list">
        <li v-for="tutor of tutors" class="tutors__list-item">
          <TutorCard :tutor />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
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
