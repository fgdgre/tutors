import { defaultUserAvatar } from "~/constants/user-avatar";
import type { ApiUser } from "~/types/api";
import type { Tutor } from "~/types/tutor";

const baseTutors: Omit<Tutor, "name" | "description">[] = [
  {
    avatar: defaultUserAvatar,
    students: 1200,
    subject: "math",
  },
  {
    avatar: defaultUserAvatar,
    students: 1560,
    subject: "reading",
  },
  {
    avatar: defaultUserAvatar,
    students: 1100,
    subject: "science",
  },
  {
    avatar: defaultUserAvatar,
    students: 900,
    subject: "english",
  },
];

export const useUsers = () => {
  const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl;

  return useAsyncData<Tutor[]>("tutors", async () => {
    const users = await $fetch<ApiUser[]>(`${apiBaseUrl}/users`);

    return baseTutors.map((base, index): Tutor => {
      const user = users[index];

      const name = user?.name ?? `Tutor #${index + 1}`;
      const companyName = user?.company?.name ?? "Unknown Company";
      const catchPhrase = user?.company?.catchPhrase ?? "";

      return {
        name,
        description: `${companyName}. ${catchPhrase}`,
        avatar: base.avatar,
        subject: base.subject,
        students: base.students,
      };
    });
  });
};
