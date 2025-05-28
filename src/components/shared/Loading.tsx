import React from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const Loading = ({ size = 'medium', color = '#00529b' }: LoadingProps) => {
  const dimensions = {
    small: 24,
    medium: 40,
    large: 64
  };

  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 1
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        style={{
          width: dimensions[size],
          height: dimensions[size],
          border: `4px solid ${color}`,
          borderTop: '4px solid transparent',
          borderRadius: '50%'
        }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
};

export default Loading; 