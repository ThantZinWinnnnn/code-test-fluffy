// SocialMediaIcon.jsx
import Image from "next/image";
import Link from "next/link";

function CommunityPlatformIcon({ href, src, alt, ariaLabel }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || alt}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="w-10 h-10 transition-transform duration-300 cursor-pointer hover:scale-110"
      />
    </Link>
  );
}

function GalleryViewButton() {
  return (
    <div className="relative h-6 px-4 w-fit">
      <Link
        href="https://nft.fluffyhugs.io/gallery"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute mx-auto text-white hover:text-gray-200 transition-colors duration-300 left-12 md:left-20 z-10"
      >
        View collection
      </Link>
      <Image
        src="/assets/view.svg"
        alt="View collection button"
        width={250}
        height={250}
        className="-mt-28 md:-mt-32 w-[200px] h-[200px] md:w-[250px] md:h-[250px] transition-transform duration-300 hover:scale-105"
        priority
      />
    </div>
  );
}

const communityPlatforms = [
  {
    href: "https://discord.com/invite/PmWf27cY6p",
    src: "/assets/discord.svg",
    alt: "Discord",
    ariaLabel: "Join our Discord community",
  },
  {
    href: "https://opensea.io/ja/collection/fluffy-hugs89",
    src: "/assets/opensea.svg",
    alt: "OpenSea",
    ariaLabel: "Browse our NFT collection on OpenSea",
  },
  {
    href: "https://x.com/FluffyHUGS_prj",
    src: "/assets/twitter.svg",
    alt: "Twitter",
    ariaLabel: "Follow us on Twitter",
  },
];

function SocialFooter() {
  return (
    <footer className="fixed bottom-0 z-20 flex items-center justify-between w-full mx-6 mb-10">
      <nav className="flex items-center space-x-4">
        {communityPlatforms.map((platform, index) => (
          <CommunityPlatformIcon
            key={index}
            href={platform.href}
            src={platform.src}
            alt={platform.alt}
            ariaLabel={platform.ariaLabel}
          />
        ))}
      </nav>
      <GalleryViewButton />
    </footer>
  );
}

export default SocialFooter;
