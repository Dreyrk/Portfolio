"use client";

import React, { useTransition } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [isPending, startTransition] = useTransition();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}>
      <SectionHeading>Contactez-moi</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Contactez-moi directement à{" "}
        <a className="underline" href="mailto:lucas.rondepierre.dev@gmail.com">
          lucas.rondepierre.dev@gmail.com
        </a>{" "}
        ou bien via ce formulaire.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={(formData) => {
          startTransition(async () => {
            const { success, error } = await sendEmail(formData);
            if (error || !success) {
              toast.error(
                "Un problème est survenue...\n Veuillez réessayer ou me contacter par mail (lucas.rondepierre.dev@gmail.com)"
              );
              return;
            }
            toast.success("Message envoyé avec succès!");
          });
        }}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Votre email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Votre message"
          required
          maxLength={5000}
        />
        <SubmitBtn pending={isPending} />
      </form>
    </motion.section>
  );
}
