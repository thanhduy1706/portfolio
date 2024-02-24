"use client ";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitBtn from "./submit-btn";
import { motion } from "framer-motion";
import { sendEmail } from "@/action/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-28 sm:mb-40"
      id="contact"
      ref={ref}
    >
      <SectionHeading>Contact</SectionHeading>

      <p>
        Please contact me via{" "}
        <a
          className="underline hover:text-gray-900"
          href="mailto:ndtduy.work@gmail.com"
        >
          ndtduy.work@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="flex flex-col mt-10"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          console.log("On client");
          console.log(formData.get("senderEmail"));
          console.log(formData.get("message"));

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="px-4 transition-all rounded-lg borderBlack h-14 "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="p-4 my-3 transition-all rounded-lg borderBlack h-52"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
