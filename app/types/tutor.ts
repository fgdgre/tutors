import type { subjectsMap } from "~/constants/subject";

export type Subjects = keyof typeof subjectsMap;

export type Tutor = {
  name: string;
  avatar: string;
  description: string;
  subject: Subjects;
  students: number;
};
