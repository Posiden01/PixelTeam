"use client";

import { motion } from "framer-motion";
import {
  Input,
  SectionHeading,
  SlideIn,
  Textarea,
  TextReveal,
  Transition,
} from "./ui";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { About, SocialHandle } from "@/utils/interfaces";
import Link from "next/link";

interface ContactProps {
  email: string;
  social_handle: SocialHandle[];npm
        <Transition>
          <p>
            developed by @
            <Link
              href={"https://twitter.com/tehseen_type"}
              className="hover:underline"
            >
              Ayush Pratap Singh
            </Link>
          </p>
        </Transition>
      </footer>
    </motion.section>
  );
};

interface BackgroundScaleProps {
  children: ReactNode;
  className?: string;
}

export const BackgroundScale = ({
  children,
  className,
}: BackgroundScaleProps) => {
  return (
    <motion.div
      whileHover="whileHover"
      whileFocus="whileHover"
      whileTap="whileHover"
      initial="initial"
      className={cn("relative p-1 group", className)}
    >
      <motion.span
        variants={{
          initial: { scaleY: 0 },
          whileHover: { scaleY: 1 },
        }}
        className="absolute top-0 left-0 h-full w-full bg-primary -z-10 group-hover:text-black"
      />
      {children}
    </motion.div>
  );
};
