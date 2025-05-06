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
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Salut, moi c’est Lucas Rondepierre.</span>
        Développeur <span className="font-bold">web full-stack</span> passionné, je conçois des applications
        <span className="italic"> modernes, rapides et adaptées aux besoins métier</span>, en m’appuyant sur des
        technologies comme
        <span className="underline"> React, Next.js, Node.js</span> ou encore des bases de données
        <span className="underline"> SQL ou NoSQL</span>. Après une formation intensive à la Wild Code School, j’ai
        renforcé mes compétences à travers une alternance chez
        <span className="font-semibold"> Les Clés de l’Atelier</span>, puis une expérience chez
        <span className="font-semibold"> Techni Concept Informatique</span>, où j’ai participé à des projets de
        développement et d’amélioration d’outils internes. Aujourd’hui, en tant que{" "}
        <span className="font-bold">freelance</span>, je suis disponible pour de nouveaux projets web.
        <span className="italic">Site vitrine, outil métier, ou plateforme sur mesure</span> : je vous accompagne de la
        conception à la mise en ligne, avec
        <span className="font-semibold"> rigueur, écoute et pédagogie</span>.
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
