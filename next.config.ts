
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: '5.imimg.com' },
      { protocol: 'https', hostname: 'media.licdn.com' },
      { protocol: 'https', hostname: 'companieslogo.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'cdn.builder.io' },
      { protocol: 'https', hostname: 'whatthelogo.com' },
      { protocol: 'https', hostname: 'www.liblogo.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'img.thecompanycheck.com' },
      { protocol: 'https', hostname: 'www.rexnordindia.com' },
      { protocol: 'https', hostname: 'img500.exportersindia.com' },
      { protocol: 'https', hostname: 'lh6.googleusercontent.com' },
      { protocol: 'https', hostname: '4.imimg.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: '3.imimg.com' },
      { protocol: 'https', hostname: 'cpimg.tistatic.com' },
      { protocol: 'https', hostname: 'assets.new.siemens.com' },
      { protocol: 'https', hostname: 'download.schneider-electric.com' },
      { protocol: 'https', hostname: 'content.jdmagicbox.com' },
      { protocol: 'https', hostname: 'tiimg.tistatic.com' },
      { protocol: 'https', hostname: 'images.jdmagicbox.com' },
      { protocol: 'https', hostname: 'www.cnhaitan.net' },
      { protocol: 'https', hostname: 'wanducn.com' },
      { protocol: 'https', hostname: 'www.hxcablegland.com' },
      { protocol: 'https', hostname: 'www.pcb-hero.com' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'static.wixstatic.com' },
      { protocol: 'https', hostname: 'connectorsupplier.com' },
      { protocol: 'https', hostname: 'realswitchgears.com' },
      { protocol: 'https', hostname: 'www.logo.wine' },
      { protocol: 'https', hostname: 'kosmosindia.net' },
      { protocol: 'https', hostname: 'indcdn.indmoney.com' },
      { protocol: 'https', hostname: 'static.cdnlogo.com' },
    ],
  },
};

export default nextConfig;
