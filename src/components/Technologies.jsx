import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { Tooltip, Button } from "@material-tailwind/react";
import { RiTailwindCssFill } from "react-icons/ri";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 1.4 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
      <Tooltip content="React Js" placement="top" className="text-gray-200">
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 cursor-pointer" />
        </motion.div>
        </Tooltip>
        <Tooltip content="Next JS" placement="top" className="text-gray-200">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <button>
              <TbBrandNextjs className="text-7xl cursor-pointer" />
            </button>
          </motion.div>
        </Tooltip>

        <Tooltip content="TailWind CSS" placement="top" className="text-gray-200">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <button>
              <RiTailwindCssFill className="text-7xl cursor-pointer text-blue-400" />
            </button>
          </motion.div>
        </Tooltip>

        <Tooltip content="Mongo DB" placement="top" className="text-gray-200">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500 cursor-pointer" />
        </motion.div>
        </Tooltip>

        <Tooltip content="Redis" placement="top" className="text-gray-200">
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiRedis className="text-7xl text-red-700 cursor-pointer" />
        </motion.div>
        </Tooltip>
      
        <Tooltip content="Node Js" placement="top" className="text-gray-200">
        <motion.div
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500 cursor-pointer" />
        </motion.div>
        </Tooltip>

        <Tooltip content="Postgresql" placement="top" className="text-gray-200">
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700 cursor-pointer" />
        </motion.div>
        </Tooltip>
      </motion.div>
      
    </div>
  );
};

export default Technologies;
