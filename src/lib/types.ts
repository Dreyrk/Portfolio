import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Tag = {
  name: string;
  color: string;
  documentation: string;
};
