import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light'; // 'dark' for dark text on light bg, 'light' for light text on dark bg
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "h-8", variant = 'dark' }) => {
  // TODO: Replace this URL with the actual path to your uploaded logo image
  // For 'light' variant (on dark background), we use brightness-0 invert to make it white if it's a black logo
  // Adjust the classes based on your actual logo image colors.
  
  const logoSrc = "https://placehold.co/150x40/transparent/312e81?text=MENTOR+X";

  return (
    <img 
      src={logoSrc}
      alt="MentorX" 
      className={`${className} w-auto object-contain ${variant === 'light' ? 'brightness-0 invert' : ''}`} 
    />
  );
};

export default BrandLogo;