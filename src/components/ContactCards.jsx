import { SiGithub, SiLeetcode, SiLinkedin, SiSpotify, SiGmail} from "react-icons/si";
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
    <div className="space-y-8 ">
      <div className="w-full flex justify-start">
      <Badge variant="success" className=" bg-green-100 text-green-800 hover:bg-green-100 ">
        Available for work
      </Badge>
      </div>
      

      <h1 className="text-4xl md:text-6xl font-display tracking-tight text-left">
        Let&apos;s create your next big idea.
      </h1>

      <div className="flex flex-col items-left gap-4">
        <Button asChild size="lg" className="w-fit" >
          <Link  href="https://www.linkedin.com/in/atharvwasthere/">Contact Me</Link>
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