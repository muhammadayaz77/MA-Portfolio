"use client";
import { FormikHelpers } from "formik";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function ContactUs() {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false); // ✅ new state

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("m.ayaz.developer@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().min(10, "Message too short").required("Message is required"),
  });

  const handleSubmit = (
    values: { name: string; email: string; subject: string; message: string },
    { resetForm }: FormikHelpers<{ name: string; email: string; subject: string; message: string }>
  ) => {
    const savedData = JSON.parse(localStorage.getItem("contactFormData") || "{}");
    savedData[values.email] = values;
    localStorage.setItem("contactFormData", JSON.stringify(savedData));

    setSaved(true); // ✅ show popup
    setTimeout(() => setSaved(false), 2000); // ✅ hide popup after 2s

    resetForm();
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 text-gray-100">
      <div className="max-w-3xl w-full rounded-xl border border-gray-800 p-6 sm:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Let's Start a Conversation</h2>
          <p className="text-gray-400 mt-2">Reach out to me directly</p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-4">
            <Link href="https://github.com/muhammadayaz77" target="_blank">
              <Github className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </Link>

            <Link href="https://www.linkedin.com/in/-muhammadayaz/" target="_blank">
              <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </Link>

            {/* Mail Icon */}
            <div className="relative">
              <button onClick={handleCopy}>
                <Mail className="w-6 h-6 hover:text-blue-400 transition-colors cursor-pointer" />
              </button>
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 
                               bg-blue-600 text-white text-xs sm:text-sm 
                               px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
                  >
                    ✅ Email copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Contact Form with Formik */}
        <div className="border border-gray-800 rounded-lg p-6">
          <h3 className="font-semibold mb-4">Send a Message</h3>

          <Formik
            initialValues={{ name: "", email: "", subject: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                    />
                    <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="w-full px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                    />
                    <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <Field
                    type="text"
                    name="subject"
                    placeholder="What is this regarding?"
                    className="w-full px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage name="subject" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Message */}
                <div>
                  <Field
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Your message here..."
                    className="w-full px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage name="message" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Submit Button with animation */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-400 text-white font-medium rounded-md hover:bg-blue-500 transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" /> Send Message
                </motion.button>
              </Form>
            )}
          </Formik>
        </div>
      </div>  
        {/* ✅ Popup at bottom center */}
        <AnimatePresence>
        {saved && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 
                       bg-green-600 text-white text-sm sm:text-base
                       px-6 py-3 rounded-lg shadow-lg z-50"
          >
            ✅ Your message has been sent!
          </motion.div>
        )}
      </AnimatePresence>
     
    </section>
  );
}
