"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import {Socials} from "@/constants";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>
            Hi i&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Rajeev kumawat
              {" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Developer and Student with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <div className="flex flex-row gap-5">

          <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[40px] h-[40px] flex items-center justify-center p-2"
          >
            <Image
                src="./gitwhite.png"
                alt="work icons"
                onClick={()=> window.open(Socials[1].url, "_blank")}

                height={30}
                width={30}
            />
          </motion.a>
          <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[40px] h-[40px] flex items-center justify-center p-2"
          >
            <Image
                src="./instagram.svg"
                alt="work icons"
                onClick={()=> window.open(Socials[0].url, "_blank")}
                height={30}
                width={30}
            />
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="./mainIconsdark.svg"
          alt="work icons"
          height={750}
          width={750}
          className="p-10"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
