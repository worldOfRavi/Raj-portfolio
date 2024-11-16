"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Spinner from "@/components/ui/Spinner";

const ContactPage = () => {
  const [state, setState] = useState({
    loading: false,
    error: false,
    success: false,
  });

  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setState({ ...state, loading: true, error: false, success: false });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setState({ ...state, loading: false, success: true });
          form.current.reset();
        },
        () => {
          setState({ ...state, loading: false, error: true });
        }
      );
  };

  return (
    <section className="container mt-10 flex flex-col xl:flex-row h-full w-full gap-4 ">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex justify-center items-center text-center mb-8 xl:mb-0">
        <div className="flex flex-row justify-center items-center">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
              }}
              className="text-6xl font-bold"
            >
              {letter}
            </motion.span>
          ))}
          <span className="text-6xl font-bold">😊</span>
        </div>
      </div>

      {/* FORM CONTAINER */}
      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex-1 p-10 py-16 flex flex-col h-full border-2 border-secondary rounded-xl"
      >
        <span>
          Dear{" "}
          <span className=" text-semibold text-secondary">Gopal Gautam,</span>
        </span>
        <Textarea
          rows={6}
          className="bg-transparent outline-none resize-none"
          name="user_message"
        />
        <span className="mt-4">My mail address is:</span>
        <Input
          required
          name="user_email"
          type="email"
          className="bg-transparent  outline-none"
        />
        <span className="mt-4">Regards</span>
        <Button type="submit" className="mt-4" disabled={state.loading}>
          {state.loading ? <Spinner /> : "Send Email"}
        </Button>
        {state.success && (
          <span className="text-green-600 font-semibold text-center mt-2">
            Your message has been sent successfully!
          </span>
        )}
        {state.error && (
          <span className="text-red-600 font-semibold text-center mt-2">
            Something went wrong!
          </span>
        )}

        
      </form>
    </section>
  );
};

export default ContactPage;