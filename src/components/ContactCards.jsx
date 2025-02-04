import { SiGithub, SiLeetcode , SiLinkedin , SiSpotify ,SiGmail, SiMonkeytype   } from "react-icons/si";
import { FaXTwitter ,FaHashnode } from "react-icons/fa6";





export default function ContactCards() {
  const links = [
    { name: "I promise I'll reply...", icon: SiGmail, url: 'mailto:singhatharv1919@gmail.com', username: 'singhatharv1919@gmail.com' },
    { name: 'Code goes here; sanity goes elsewhere', icon: SiGithub, url: 'https://github.com/AtharvSingh-Git', username: '@AtharvSingh-Git' },
    { name: "Let's network", icon: SiLinkedin, url: 'https://www.linkedin.com/in/atharv-singh-b83747250/', username: '' },
    { name: 'Coding Profiles', icon: SiLeetcode, url: 'https://linktr.ee/find_Atharv_here', username: '@find_Atharv_here' },
    { name: 'Hashnode', icon: FaHashnode, url: 'https://hashnode.com/@AtharvBlogs', username: '@AtharvBlogs' },
    { name: 'Rants & Thoughts ', icon: FaXTwitter, url: 'https://x.com/AtharvSingh619', username: '@AtharvatX' },
    { name: 'Spotify', icon: SiSpotify, url: 'https://open.spotify.com/user/ikb0sbf59ghyite93wmm048zv', username: '@Atharv🗿' },
    { name: 'MonkeyType', icon: SiMonkeytype, url: 'https://monkeytype.com/profile/Atharv_types', username: '@Atharv_Types' },
  ]

  return (
    <>
      <section className="mx-auto">
        <div className="mb-16">
          <div className=" px-4 py-2 mb-2">
            <h2 className="text-large p-6 ">Slide into my DMs (professionally;)!</h2>
          </div>
          {/* <div className="h-[1px] w-full bg-neutral-800" /> */}
        </div>

        <div className=" justify-center -mt-12 grid grid-cols-2 rows-3 md:grid-cols-2 bg-background ">
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background p-12 transition-colors duration-300 hover:bg-muted text-underline-offset-4 hover:underline "
            >
              {/* icons */}
              <div className="flex items-center justify-between mb-4">
                <link.icon className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                {/* <div className="text-xs text-neutral-500">
                  {(index + 1).toString().padStart(2, '0')}
                </div> */}
                
              </div>
              
              {/* text */}
              <h3 className="hidden md:block md:text-lg md:mb-1">{link.name}</h3>

            </a>
          ))}
        </div>
      </section>
    </>
  )
}