"use client";

import Image from "next/image";
import { SlideIn, TextReveal, Transition } from "./ui";
import { About } from "@/utils/interfaces";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageLoad } from "./ui/page-load";
import logo from "../../public/pixel_logo.jpeg";

export const Hero = ({ about }: { about: About }) => {
  const [hideLoader, setHideLoader] = useState(true);

  return (
    <section className="h-dvh w-dvw overflow-hidden relative">
      <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
      {hideLoader ? (
        <PageLoad hideLoader={hideLoader} setHideLoader={setHideLoader} />
      ) : (
        <div className="relative h-full w-full">
          <div className="flex items-center justify-center flex-col h-full pb-10">
            <Transition>
              <Image
                src= { logo }
                width={200}
                height={200}
                alt={about.name}
                className="rounded-full size-28 object-cover"
              />
            </Transition>
            <div className="py-6 flex items-center flex-col">
              <h2 className="md:text-2xl text-4xl opacity-50 font-semibold overflow-hidden">
                <SlideIn>We Are PixelFlow , and</SlideIn>
              </h2>
              <h1 className="md:text-6xl text-3xl font-bold capitalize text-center leading-4 overflow-hidden">
                <SlideIn>we dont send your files <br /> to the server!!</SlideIn>
              </h1>
            </div>
            <Transition viewport={{ once: true }} className="w-full">
              <p className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/4 mx-auto flex flex-wrap justify-center text-center gap-2">
                {/* {about.subTitle.split(" ").map((word, index) => (
                  <span key={index}>{word}</span>
                ))} */}
                Stop waiting for the conversion fairy! Our client-to-client image converter puts the power in your hands, saving you time and headaches. Say goodbye to endless waiting and hello to instant transformation – because aint nobody got time for slow conversions!
              </p>
            </Transition>
            <Transition viewport={{ once: true }}>
              <Link
                href={"/convertor"}
                className="px-5 py-3 mt-4 rounded-full border border-white/50 flex items-center gap-4 group"
              >
                <TextReveal>Let&apos;s Convert</TextReveal>
                <ArrowRight
                  size={20}
                  className="group-hover:rotate-90 transition-transform"
                />
              </Link>
            </Transition>
          </div>
        </div>
      )}
    </section>
  );
};
