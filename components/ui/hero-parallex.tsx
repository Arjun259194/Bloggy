"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({ cats }: { cats: string[] }) => {
  const firstRow = cats.slice(0, 5);
  const secondRow = cats.slice(5, 10);
  const thirdRow = cats.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((cat, i) => (
            <ProductCard cat={cat} translate={translateX} key={i} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((cat, i) => (
            <ProductCard cat={cat} translate={translateXReverse} key={i} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((cat, i) => (
            <ProductCard cat={cat} translate={translateX} key={i} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-30 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Welcome to <br /> Boggy
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Discover engaging and insightful blogs crafted with the latest trends
        and technologies. Our team of passionate writers and creators is
        dedicated to delivering captivating content that inspires and informs.
      </p>
    </div>
  );
};

export const ProductCard = ({
  cat,
  translate,
}: {
  cat: string;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      // key={product.title}
      className="group/product flex items-center rounded-full border-2 border-black justify-center h-96 w-[30rem] relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl p-2 rounded-3xl group-hover/product:border-2  group-hover/product:border-gray-300">
        <p className="font-bold text-6xl text-center capitalize">{cat}</p>
      </div>
    </motion.div>
  );
};
