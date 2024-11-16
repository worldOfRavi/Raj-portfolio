import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { Tooltip, Button } from "@material-tailwind/react";
import { useMailContext } from "../store/mailContext";

const Contact = () => {
  const {setClicked} = useMailContext();
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <Tooltip content="Click to send mail" placement="top" className="text-purple-500">
        <a href="#" className="border-b">
          <button onClick={()=>setClicked(true)}>{CONTACT.email}</button>
        </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default Contact;
