"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import FlipPortrait from "./flip-portrait";

export default function Intro() {
  const { ref } = useSectionInView("Accueil", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <FlipPortrait />

          {/* <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            👋🏻
          </motion.span> */}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] space-x-1 sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Salut, moi c’est Lucas Rondepierre.</span>
        Développeur <span className="font-bold">web full-stack</span> passionné, je transforme des idées en applications
        <span className="italic"> modernes, rapides et sur mesure</span>. Spécialisé sur des technologies comme{" "}
        <span className="underline">React, Next.js et Node.js</span>, j&apos;ai affiné mon expertise dans le
        développement d&apos;outils métier chez
        <span className="font-semibold"> Les Clés de l’Atelier</span> et
        <span className="font-semibold"> Techni Concept Informatique</span>. À la recherche de mon prochain défi
        technique, je suis ouvert aux opportunités de
        <span className="font-bold"> poste en entreprise (CDI/CDD)</span> ainsi qu&apos;aux
        <span className="font-bold"> missions freelance</span>. Prêt à donner vie à votre projet ?
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}>
          Contactez-moi <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/assets/Lucas_Rondepierre.pdf"
          download>
          CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/lucas-rondepierre-b9b215237/"
          target="_blank">
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Dreyrk"
          target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
