import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { Tag } from "./types";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Expériences",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Formation développeur web et web mobile",
    location: "Lyon, FR",
    description: "Formation de 6 mois pour apprendre les fondamentaux du web (front-end et back-end).",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Alternant développeur web",
    location: "Lyon, FR",
    description:
      "Formation en alternance au sein de l'entreprise 'Les Clés de l'Atelier' puis passage du diplôme 'Concepteur et Développeur d'Application' (titre RNCP Niveau 6)",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Développeur / Hotliner",
    location: "Saint-Genis-Laval, FR",
    description:
      "Chez Techni Concept Informatique, j'ai participé activement au développement d'applications sous Windev et apporté des solutions concrètes pour améliorer la satisfaction client et l'efficacité des processus internes.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
] as const;

export const allTags: Tag[] = [
  {
    name: "Next.js",
    color: "#000000",
    documentation: "https://nextjs.org/",
  },
  {
    name: "Vercel",
    color: "#000000",
    documentation: "https://vercel.com/docs",
  },
  {
    name: "shadcn/ui",
    color: "#000000",
    documentation: "https://ui.shadcn.com/",
  },
  {
    name: "TypeScript",
    color: "#007ACC",
    documentation: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Docker",
    color: "#2496ED",
    documentation: "https://docs.docker.com/",
  },
  {
    name: "Python",
    color: "#3776AB",
    documentation: "https://www.python.org/",
  },
  {
    name: "GraphQL",
    color: "#E10098",
    documentation: "https://graphql.org/learn/",
  },
  // {
  //   name: "Apollo",
  //   color: "#5a189a",
  //   documentation: "https://www.apollographql.com/docs/",
  // },
  {
    name: "Express",
    color: "#000000",
    documentation: "https://expressjs.com/",
  },
  {
    name: "NodeJS",
    color: "#8CC84B",
    documentation: "https://nodejs.org/en/",
  },
  {
    name: "React",
    color: "#61DAFB",
    documentation: "https://react.dev/",
  },
  // {
  //   name: "CSS",
  //   color: "#2965f1",
  //   documentation: "https://www.w3.org/Style/CSS/Overview.en.html",
  // },
  {
    name: "Tailwind CSS",
    color: "#0EA5E9",
    documentation: "https://tailwindcss.com/",
  },
  {
    name: "Styled Components",
    color: "#f72585",
    documentation: "https://styled-components.com/",
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    documentation: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  // {
  //   name: "HTML5",
  //   color: "#E44D26",
  //   documentation: "https://developer.mozilla.org/fr/docs/Web/HTML",
  // },
  {
    name: "Mocha / Chai",
    color: "#e70e02",
    documentation: "https://mochajs.org/",
  },
  {
    name: "PostgreSQL",
    color: "#0466c8",
    documentation: "https://www.postgresql.org/docs/",
  },
  {
    name: "MongoDB",
    color: "#589636",
    documentation: "https://www.mongodb.com/",
  },
  {
    name: "Firebase",
    color: "#FF9100",
    documentation: "https://firebase.google.com/docs",
  },
  {
    name: "Git",
    color: "#F1502F",
    documentation: "https://git-scm.com/",
  },
  // {
  //   name: "Github",
  //   color: "#202020",
  //   documentation: "https://github.com/marketplace",
  // },
  // {
  //   name: "Gitlab",
  //   color: "#f48c06",
  //   documentation: "https://about.gitlab.com/",
  // },
  // {
  //   name: "Jest",
  //   color: "#fb5607",
  //   documentation: "https://jestjs.io/fr/",
  // },
  {
    name: "JQuery",
    color: "#0466c8",
    documentation: "https://jquery.com/",
  },
  // {
  //   name: "Handlebars",
  //   color: "#fb8500",
  //   documentation: "https://handlebarsjs.com/guide/",
  // },
  {
    name: "Nginx",
    color: "#38b000",
    documentation: "https://docs.nginx.com/",
  },
  // {
  //   name: "Chart JS",
  //   color: "#202020",
  //   documentation: "https://www.chartjs.org/docs/latest/",
  // },
  // {
  //   name: "Bootstrap 5",
  //   color: "#202020",
  //   documentation: "https://getbootstrap.com/",
  // },
  {
    name: "Linux",
    color: "#000000",
    documentation: "https://github.com/torvalds/linux",
  },
];

export const projectsData = [
  {
    title: "Tonio Photographie",
    description:
      "J'ai conçu et développé un site web sur mesure pour un photographe, intégrant un back-office personnalisé lui permettant de gérer et mettre à jour facilement le contenu.",
    tags: [allTags[9], allTags[0], allTags[11], allTags[1], allTags[17]],
    imageUrl: "/assets/toniophotographie/2_desktop.png",
    link: "https://www.toniophotographie.fr/",
  },
  {
    title: "Lacy Investigations Conseils",
    description:
      "Réalisation d'un site internet 'responsive' pour une agence de détective privés avec un formulaire de contact adapté au besoin métier du client pour que les utilisateurs puissent communiquer leur demandes en toute confidentialité.",
    tags: [allTags[9], allTags[0], allTags[11], allTags[1]],
    imageUrl: "/assets/lacy/5_desktop.webp",
    link: "",
  },
  {
    title: "Drizzy Tales",
    description:
      "Plateforme spécialisée pour les amateurs d'animes japonais, permettant la création et la gestion de listes de visionnage personnalisées. Les utilisateurs peuvent interagir via un canal de discussion intégré, favorisant ainsi une communauté dynamique autour de leur passion commune pour les animes.",
    tags: [allTags[9], allTags[0], allTags[11], allTags[1], allTags[16]],
    imageUrl: "/assets/drizzy_tales/3.webp",
    link: "",
  },
  {
    title: "Yugioh Toolkit",
    description: "Plateforme de gestion de deck et de collection pour le jeu de cartes Yugioh.",
    tags: [allTags[9], allTags[3], allTags[0], allTags[11], allTags[1], allTags[16]],
    imageUrl: "/assets/yugioh/1.png",
    link: "https://yugioh-toolkit.vercel.app/",
  },
] as const;

export const skillsData = allTags.map(({ name, documentation }) => ({ name, documentation }));
