import React from 'react';
import { motion } from 'framer-motion';

export default function CTAButton() {
  return (
    <motion.button
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
      className="mt-5 inline-flex items-center justify-center uppercase text-[16px] tracking-[0.08em] px-6 py-2.5 border-2 border-black text-black rounded-[4px] transition-colors duration-200 hover:bg-black hover:text-white"
      style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
    >
      READ NOW
    </motion.button>
  );
}
