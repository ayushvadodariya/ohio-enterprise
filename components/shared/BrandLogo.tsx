"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface BrandLogoProps {
  name: string;
  fallbackSrc: string;
  className?: string; // Container classes (must set dimensions or be relative for fill)
  priority?: boolean;
}

const brandMap: Record<string, string> = {
  "schneider": "schneider-electric",
  "siemens": "siemens-ingenuity-for-life",
  "dowell's": "dowells",
  // Add others if special mapping is needed
};

export default function BrandLogo({ name, fallbackSrc, className, priority = false }: BrandLogoProps) {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    // Construct local path
    const lowerName = name.toLowerCase();
    
    // Check map or normalize
    let fileName = brandMap[lowerName];
    if (!fileName) {
      // Normalize: replace spaces with dashes, remove special chars (except dashes)
      // e.g. "Lauritz Knudsen" -> "lauritz-knudsen"
      fileName = lowerName.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    }
    
    // Try .jpeg as seen in the file system
    setImgSrc(`/brands/${fileName}.jpeg`);
    setErrored(false);
  }, [name]);

  return (
    <div className={`relative ${className}`}>
      <Image
        src={(errored || !imgSrc) ? fallbackSrc : imgSrc}
        alt={name}
        fill
        className="object-contain"
        quality={100}
        priority={priority}
        unoptimized={errored || !!fallbackSrc.startsWith('http')}
        onError={() => {
            if (!errored) setErrored(true);
        }}
      />
    </div>
  );
}
