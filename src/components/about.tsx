"use client";

import { About as AboutType, Timeline } from "@/utils/interfaces";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatDate } from "@/utils";
import { SlideIn, Transition } from "./ui";

interface AboutProps {
  about: AboutType;
  timeline: Timeline[];
}

const About = ({ about, timeline }: AboutProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const education = timeline
    .filter((line) => line.forEducation && line.enabled === true)
    .sort((a, b) => a.sequence - b.sequence);

  return (
    <section
      className="grid md:grid-cols-[1.8fr_1fr] gap-x-10 py-20 px-4 md:px-[10rem] relative"
      id="about"
    >
      <div>
        <h3 className="md:text-5xl text-2xl font-bold overflow-hidden uppercase pb-8">
          <SlideIn>Conversion Gets a Speed Boost⚡</SlideIn>
        </h3>
        <Transition viewport={{ once: true }}>
          <p className="text-xl md:text-4xl text-foreground/50">
            PixelFlow is revolutionizing image conversion for the new generation. By leveraging cutting-edge peer-to-peer technology, PixelFlow empowers users to instantly convert images between formats directly from their devices, without the need for cumbersome server processing. PixelFlow delivers blazing-fast conversions with unmatched convenience. Say hello to seamless image transformation with PixelFlow – because in a world where time is precious, speed is everything.
          </p>
        </Transition>
        {/* <div className="pt-10">
          <div className="py-10 overflow-hidden grid w-full">
            {education.map((edu, index) => (
              <Transition key={edu._id}>
                <TimelineCard
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  timeline={edu}
                />
              </Transition>
            ))}
          </div>
        </div> */}
      </div>
      <div className="relative">
        <div className="sticky top-6">
          <Transition>
            <Image
              src={about.avatar.url}
              width={400}
              height={400}
              alt={about.name}
              className="rounded-xl max-md:aspect-square object-contain mx-[10rem]"
            />
          </Transition>
        </div>
      </div>
      <div className="flex flex-col">
      <div className="border-b border-primary/20 py-4">
        <div
          className="flex items-center justify-between gap-4 cursor-pointer select-none"
          onClick={() => setActiveIndex(0)}
        >
          <span>01</span>
          <span className="text-xl md:text-3xl font-bold flex-1">
          Pixelflows Scope
          </span>
          <div className="relative size-6 flex items-center justify-center">
            <span className="bg-primary w-4 md:w-6 h-0.5 absolute" />
            <motion.span
              initial={{ rotate: 90 }}
              animate={{
                rotate: activeIndex === 0 ? 0 : 90,
              }}
              className="absolute bg-primary w-4 md:w-6 h-0.5 rotate-90"
            />
          </div>
        </div>
        <motion.div
          initial={{
            height: activeIndex === 0 ? "100%" : 0,
          }}
          animate={{
            height: activeIndex === 0 ? "100%" : 0,
          }}
          className="overflow-hidden"
        >
          <p className="text-foreground/60 py-4 max-md:text-sm">
          Its scope encompasses swift, high-quality conversions across platforms, enhancing productivity and catering to diverse digital needs, from social media optimization to web development and beyond.
          </p>
          {/* <div className="flex justify-between items-center pb-3 text-foreground/80">
            <div className="max-md:text-sm">
              <span></span>
              <span>jobLocation</span>
            </div>
            <div className="max-md:text-xs">
              <span className="italic">
                ayush
              </span>
              {" - "}
              <span className="italic">
                ayush
              </span>
            </div>
          </div> */}
          <ul className="list-disc list-inside">
              <li className="text-foreground/80 max-md:text-sm">
              Community and Collaboration
              </li>
              <li className="text-foreground/80 max-md:text-sm">
              Innovation and Future Development
              </li>
              <li className="text-foreground/80 max-md:text-sm">
              User Experience (UI/UX)
              </li>
          </ul>
        </motion.div>
      </div>
      <div className="border-b border-primary/20 py-4">
        <div
          className="flex items-center justify-between gap-4 cursor-pointer select-none"
          onClick={() => setActiveIndex(0)}
        >
          <span>02</span>
          <span className="text-xl md:text-3xl font-bold flex-1">
          Technology and Workflow
          </span>
          <div className="relative size-6 flex items-center justify-center">
            <span className="bg-primary w-4 md:w-6 h-0.5 absolute" />
            <motion.span
              initial={{ rotate: 90 }}
              animate={{
                rotate: activeIndex === 0 ? 0 : 90,
              }}
              className="absolute bg-primary w-4 md:w-6 h-0.5 rotate-90"
            />
          </div>
        </div>
        <motion.div
          initial={{
            height: activeIndex === 0 ? "100%" : 0,
          }}
          animate={{
            height: activeIndex === 0 ? "100%" : 0,
          }}
          className="overflow-hidden"
        >
          <p className="text-foreground/60 py-4 max-md:text-sm">
          PixelFlow employs cutting-edge peer-to-peer technology, enabling direct communication between users devices for instant image conversions. Its workflow seamlessly integrates user uploads, conversion algorithms, and real-time display, ensuring swift and efficient transformations without reliance on traditional server processing.
          </p>
          <ul className="list-disc list-inside">
              <li className="text-foreground/80 max-md:text-sm">
              Frontend: Web2 domain, Next.js, Tailwind CSS, Framer Motion, Lucid React
              </li>
              <li className="text-foreground/80 max-md:text-sm">
              Backend: Node.js, Web Assembly, FFmpeg
              </li>
              <li className="text-foreground/80 max-md:text-sm">
              Peer-to-peer client-to-client conversion for speed and security
              </li>
          </ul>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default About;

/* interface TimelineCardProps {
  timeline: Timeline;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  index: number;
}

const TimelineCard = ({
  timeline,
  activeIndex,
  setActiveIndex,
  index,
}: TimelineCardProps) => (
  <div className="border-b border-primary/20 py-4">
    <div
      className="flex items-center justify-between gap-4 cursor-pointer select-none"
      onClick={() => setActiveIndex(index)}
    >
      <span>0{index + 1}</span>
      <span className="text-xl md:text-3xl font-bold flex-1">
        {timeline.jobTitle}
      </span>
      <div className="relative size-6 flex items-center justify-center">
        <span className="bg-primary w-4 md:w-6 h-0.5 absolute" />
        <motion.span
          initial={{ rotate: 90 }}
          animate={{
            rotate: activeIndex === index ? 0 : 90,
          }}
          className="absolute bg-primary w-4 md:w-6 h-0.5 rotate-90"
        />
      </div>
    </div>
    <motion.div
      initial={{
        height: activeIndex === index ? "100%" : 0,
      }}
      animate={{
        height: activeIndex === index ? "100%" : 0,
      }}
      className="overflow-hidden"
    >
      <p className="text-foreground/60 py-4 max-md:text-sm">
        {timeline.summary}
      </p>
      <div className="flex justify-between items-center pb-3 text-foreground/80">
        <div className="max-md:text-sm">
          <span></span>
          <span>{timeline.jobLocation}</span>
        </div>
        <div className="max-md:text-xs">
          <span className="italic">
            {formatDate(timeline.startDate).month +
              ", " +
              formatDate(timeline.startDate).year}
          </span>
          {" - "}
          <span className="italic">
            {formatDate(timeline.endDate).month +
              ", " +
              formatDate(timeline.endDate).year}
          </span>
        </div>
      </div>
      <ul className="list-disc list-inside">
        {timeline.bulletPoints.map((point, index) => (
          <li key={index} className="text-foreground/80 max-md:text-sm">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  </div> */