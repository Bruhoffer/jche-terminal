"use client";

import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
}

export const MotionSection: FC<MotionSectionProps> = ({
  children,
  className,
}) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};
