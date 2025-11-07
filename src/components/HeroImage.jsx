import React from 'react';
import { motion } from 'framer-motion';

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative"
    >
      <img
        src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop"
        alt="Person reading a newspaper"
        loading="lazy"
        className="h-[460px] md:h-[500px] lg:h-[540px] w-auto object-cover object-center grayscale rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
      />
    </motion.div>
  );
}
