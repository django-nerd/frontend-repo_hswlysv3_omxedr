import React from 'react';
import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <div className="relative z-10">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-[110px] md:text-[150px] lg:text-[170px] font-black tracking-[-0.02em] leading-[0.9] text-black select-none"
        style={{ fontFamily: 'Playfair Display, ui-serif, Georgia, serif' }}
      >
        NEWSLY
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        className="mt-6 max-w-[600px] text-[18px] leading-[1.7] text-[#1f1f1f]"
        style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
      >
        Newsly brings together the world’s most real, verified, and valuable news — collected from trusted sources and presented clearly. No noise. No bias. Just truth that matters.
      </motion.p>
    </div>
  );
}
