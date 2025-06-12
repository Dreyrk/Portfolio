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
      <SectionHeading>À propos</SectionHeading>
      <p className="mb-3">
        Issu d&apos;une formation scientifique, j&apos;ai toujours été animé par la résolution de problèmes. Je trouvais
        une grande satisfaction à analyser et structurer l&apos;information, mais ma véritable vocation s&apos;est
        révélée quand j&apos;ai découvert que je pouvais utiliser cette compétence pour{" "}
        <span className="font-medium">bâtir</span>. Le développement web a été le chaînon manquant, le moyen de
        transformer la théorie en applications concrètes et utiles.
      </p>
      <p>
        Ma passion pour ce métier vient de là: de ce pouvoir de traduire une vision en une réalité fonctionnelle.
        J&apos;aime profondément plonger dans un nouveau projet, en comprendre les enjeux métier et le sculpter ligne de
        code après ligne de code. C&apos;est ce défi intellectuel et créatif constant qui me pousse à apprendre et à
        m&apos;améliorer chaque jour.
      </p>
    </motion.section>
  );
}
