import { useState } from "react";
import AnimatedUnderline from "./ui/AnimatedUnderline";
import MobileHeroResumeCTA from "./ui/MobileHeroResumeCTA";
import PropTypes from "prop-types";


// at top of IntroText.jsx
const HL = {
  emerald: "bg-emerald-500/10 text-emerald-600 px-1 py-1 rounded-md font-medium dark:bg-cyan-500/10 dark:text-cyan-400",
  amber: "bg-amber-500/10 text-amber-700 px-1 py-0.5 rounded-md dark:bg-amber-500/10 dark:text-amber-400",
  rose: "bg-rose-500/10 text-rose-600 px-1 py-0 rounded-md dark:bg-rose-500/10 dark:text-rose-400",
};

// **bold**, *italic*, ==highlight==, ==highlight::amber==, [text](url)

const Inline = ({ text, theme = "emerald" }) => {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|==(.+?)(?:::(\w+))?==|\*\*(.+?)\*\*|\*(.+?)\*/g;
  let i = 0, m;
  const push = (n) => parts.push(<span key={parts.length}>{n}</span>);

  while ((m = re.exec(text)) !== null) {
    if (m.index > i) push(text.slice(i, m.index));
      //Links
    if (m[1] && m[2]) {
      push(<a href={m[2]} className="underline decoration-primary/60 hover:decoration-primary">{m[1]}</a>);
      //Accent Highlight
    } else if (m[3]) {
      const palette = m[4] ?? theme;
      push(<mark className={HL[palette] || HL[theme]}>{m[3]}</mark>);
      //Bold
    } else if (m[5]) {
      push(<strong className="font-semibold">{m[5]}</strong>);
      //Italic
    } else if (m[6]) {
      push(<em className="italic">{m[6]}</em>);
    }
    i = re.lastIndex;
  }
  if (i < text.length) push(text.slice(i));
  return <>{parts}</>;
};

Inline.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string,
};


const IntroText = () => {
  const topMenuItems = ['For anyone', 'Recruiters', 'Product Managers', 'Finance Folks', 'Designers'];

  const content = {
     'For anyone': {
    highlight: 'emerald',
    description:
      "Hello there, I’m a .  ==developer== who's into .  *making* ==cool things== . that ==work== for . ==people=="
  },

  'Recruiters': {
    highlight: 'emerald',
    description:
      "Backend heavy, frontend ready . I design with ==clarity== . Code that **works**, then *scales* . *Principles* over buzzwords . I care how products ==feel== . ==Impact== > features, always."
  },

  'Finance Folks': {
    highlight: 'amber',
    description:
      "Tracking ==stocks==, . Decoding ==trends==,  .  Figuring out if that . ==Dip is worth buying==  . Let’s talk ==equities== & ==MF!=="
  },

  'Product Managers': {
    highlight: 'emerald',
    description:
      "I bring a ==hands-on::rose== approach . that hits **every detail** . I’ll *partner closely* with . you and turn your . vision 👀into ==reality==.."
  },

  'Designers': {
    highlight: 'rose',
    description:
      "I’m =={design-driven}::rose==🖌️ . and while(I’m ≠ **designer**) . I know my way around . design tools & can *speak* . *“creatively”* with you"
  }
  }

  const [activeTopMenu, setActiveTopMenu] = useState('For anyone');

  const current = content[activeTopMenu];

  const splitLines = (s) => s.split(/\s\.\s/g).map(t => t.trim()).filter(Boolean);

  return (
    <section className="mt-32  px-2 sm:-mx-1  md:mt-14 p-2  transition-all duration-300">
      <div className="text-foreground">
        {/* Persona tabs */}
        <div id="intro-text" className=" font-satoshi hidden sm:flex sm:flex-wrap sm:gap-8">
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

        {/* Content area */}
        <div id="content" className="sm:-px-1 font-satoshi flex-grow mt-6 ">
          {/* paragraphs mode */}
          {'paragraphs' in current && (
            <div className="space-y-4 md:text-2xl text-lg leading-relaxed text-foreground">
              {current.paragraphs.map((p, i) => (
                <p key={i}>
                  <Inline text={p} />
                </p>
              ))}
            </div>
          )}

          {/* legacy dot-line mode */}


          {'description' in current && (
            <div className="text-huge">
              {splitLines(current.description).map((line, i) => (
                <h1 key={i} className="leading-[0.975] text-foreground text-start">
                  <Inline text={line} theme={current.highlight || 'emerald'} />
                </h1>
              ))}
            </div>
          )}
        </div>
        {/* Resume CTA in Mobile View*/}
        <div className="p-6 ml-8 mt-16  md:hidden">
        <MobileHeroResumeCTA />
        </div>
      </div>

    </section>
  );
};

export default IntroText;