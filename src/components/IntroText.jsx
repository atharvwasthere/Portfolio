import { useState } from "react";
import AnimatedUnderline from "./ui/AnimatedUnderline";

const IntroText = () => {
  const topMenuItems = ['For anyone', 'Recruiters', 'Product Managers', 'Finance Folks', 'Designers'];

  const content = {
    'For anyone': {
      description: "Hello there, I’m a .  developer who's into .  making cool things . that work for . people"
    },
    'Recruiters': {
      /* Whether it’s backend logic or frontend flair, I’ve got the skills to ship solid products. Let’s skip the buzzwords—if you need someone who gets stuff done, I’m ready. */
      description: "Whether it’s backend logic . or frontend flair,. I’ve got the skills to .   ship solid products. Let’s skip the buzzwords;). if you need someone who. gets stuff done,I’m ready."
    },
    'Finance Folks': {
      description: "Tracking stocks, . Decoding trends,  .  Figuring out if that . Dip is worth buying  . Let’s talk equities and MF!"
    },
    'Product Managers': {
      /* I bring a hands-on approach that hits every detail. */
      description: "I bring a hands-on approach. that hits every detail. I’ll partner closely with . you and turn your . vision 👀into reality.."
    },
    'Designers': {
      /* I crafted (this.project) from the ground up + (this.one) && (this.too). */
      description: "I’m {design-driven}🖌️. and while(I’m ≠ designer) . I know my way around . design tools & can speak . “creatively” with you"
    }
  }

  const [activeTopMenu, setActiveTopMenu] = useState('For anyone');

  return (
    <section className="mt-64 md:mt-14 p-2">
      <div className="text-foreground">
        <div id="intro-text" className="font-satoshiMedium flex flex-wrap gap-8">
          {topMenuItems.map((item) => (
            <AnimatedUnderline
              key={item}
              className={activeTopMenu === item ? 'font-bold' : 'opacity-50 hover:opacity-100'}
            >
              <button
                onClick={() => setActiveTopMenu(item)}
                className="font-medium cursor-pointer text-base transition-all duration-200"
              >
                {item}
              </button>
            </AnimatedUnderline>
          ))}
        </div>
        
        <div id="content" className="font-satoshi flex-grow text-large md:text-huge mt-6">
          {content[activeTopMenu].description.split('. ').map((text, index) => (
            <h1 key={index} className="leading-[0.975] text-foreground text-start">
              {text.trim()}
              {activeTopMenu === 'Product Managers' && text.includes('vision')}
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroText;