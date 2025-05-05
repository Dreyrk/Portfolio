"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Clock from "./clock";

export default function FlipPortrait() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      className="relative w-48 h-48 perspective"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}>
      <motion.div
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}>
        {/* Face avant */}
        <motion.div
          className="absolute w-full h-full backface-hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}>
          <Image
            src="/assets/pdp.jpeg"
            alt="Lucas portrait"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-full w-full rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>

        {/* Face arrière */}
        <motion.div className="absolute w-full h-full backface-hidden rotateY-180 flex items-center justify-center rounded-full border-[0.35rem] border-white shadow-xl bg-white">
          <Clock />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
