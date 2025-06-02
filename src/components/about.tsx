"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>Mon histoire</SectionHeading>
      <p className="mb-3">
        Diplômé d&apos;une filière scientifique, j&apos;ai découvert ma passion pour le développement web en 2022 et ai
        suivi une formation intensive pour me lancer. J&apos;y ai maîtrisé des technologies comme{" "}
        <span className="font-medium">HTML/CSS, JavaScript, React.js, SQL, NoSQL et Node.js</span>, tout en adoptant des
        méthodologies agiles comme <span className="font-medium">SCRUM</span>. Mon parcours m&apos;a permis de
        développer une solide compréhension du développement frontend et backend, ainsi qu&apos;une capacité à
        travailler efficacement en équipe. Animé par la curiosité et l&apos;envie d&apos;apprendre, je suis à la
        recherche d&apos;une opportunité professionnelle où je pourrai contribuer efficacement aux projets d&apos;une
        entreprise dynamique.{" "}
      </p>
    </motion.section>
  );
}
