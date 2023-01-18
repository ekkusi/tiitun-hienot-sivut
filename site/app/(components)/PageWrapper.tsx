"use client";

import { motion } from "framer-motion";

type PageWrapperProps = {
  children: React.ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
