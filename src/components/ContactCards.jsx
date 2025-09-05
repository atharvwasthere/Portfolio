/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo } from "react";
import { SiGithub, SiLeetcode, SiLinkedin, SiSpotify, SiGmail } from "react-icons/si";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SocialLink = ({ href, icon: Icon, label }) => {
  return (
    <div className="group relative">
      <Link
        to={href}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Icon className="h-6 w-6" />
        <span className="sr-only">{label}</span>
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 bg-neutral-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

const TypewriterText = () => {
  const words = useMemo(() => ["create", "deploy", "build", "launch", "design", "develop"], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypingSpeed(150);

        if (currentText === currentWord) {
          // Word complete, start deleting after pause
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          // Deletion complete, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, words]);

  return (
    <span className="font-display dark:text-cyan-400 text-green-400 relative">
      {currentText}
      <span className="animate-pulse ml-1 text-current">|</span>
    </span>
  );
};

export default function ContactCards() {
  const socialLinks = [
    { href: "https://github.com/atharvwasthere", icon: SiGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/atharvwasthere/", icon: SiLinkedin, label: "LinkedIn" },
    { href: "mailto:singhatharv1919@gmail.com", icon: SiGmail, label: "Email" },
    { href: "https://hashnode.com/@AtharvBlogs", icon: FaHashnode, label: "Hashnode" },
    { href: "https://linktr.ee/find_Atharv_here", icon: SiLeetcode, label: "Coding Profile" },
    { href: "https://x.com/AtharvSingh619", icon: FaXTwitter, label: "Twitter" },
    { href: "https://open.spotify.com/user/ikb0sbf59ghyite93wmm048zv", icon: SiSpotify, label: "Spotify" }
  ];

  return (
    <div className="font-satoshi space-y-8">
      <div className="w-full flex justify-start items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>

        <Badge
          variant="success"
          className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-cyan-500/10 dark:text-cyan-400"
        >
          Available for work
        </Badge>
      </div>


      <h1 className=" text-4xl md:text-6xl font-satoshi tracking-tight text-left">
        Let&apos;s <TypewriterText /> your next big idea.
      </h1>

      <div className="flex flex-col items-left gap-4">
        <Button
          size="lg"
          href="mailto:singhatharv1919@gmail.com"
          className=" w-fit font-cabinet text-lg
             bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20
             dark:bg-cyan-500/10 dark:text-cyan-400 dark:hover:bg-cyan-500/20
             transition-colors"
        >
          Contact Me
        </Button>

        <div className="flex gap-4 pt-4">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}