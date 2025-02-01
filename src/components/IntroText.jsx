import { useState } from "react";

const IntroText = () => {

  const topMenuItems = ['For anyone', 'Recruiters', 'Product Managers', 'Monkey Typers', 'Designers']

  const content = {
    'For anyone': {
      description: "Hello there, I’m a .  developer who's into .  making cool things . that work for . people"
    },
    'Recruiters': {
      /* Whether it’s backend logic or frontend flair, I’ve got the skills to ship solid products. Let’s skip the buzzwords—if you need someone who gets stuff done, I’m ready. */
      description: "Whether it’s backend logic . or frontend flair,. I’ve got the skills to .   ship solid products. Let’s skip the buzzwords;). if you need someone who. gets stuff done,I’m ready."
    },
    'Monkey Typers': {
      description: "Atharv_types here. 296 tests, 3+ hours. well spent (maybe),. and still coming back. for more..Race you?"
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
    <section className=" mt-64 md:mt-14 p-2 ">
      <div className=" text-foreground"> {/* Add padding to account for fixed header and nav */}
        <div id="intro-text" className='flex flex-wrap '>
          {topMenuItems.map((item) => (
            <div
              key={item}
              className={`font-medium cursor-pointer mr-8 mb-2 font-16px ${activeTopMenu === item ? 'font-bold' : 'opacity-50'} hover:opacity-100`}
              onClick={() => setActiveTopMenu(item)}
            >
              {item}
            </div>
          ))}
        </div>
        {/* INTRO TEXT DIV  */}
        <div id="content" className='flex-grow text-large md:text-huge '>
          {content[activeTopMenu].description.split('. ').map((text, index) => (
            <h1 key={index} className=' leading-[0.975] text-foreground text-start'>
              {text.trim()}
              {activeTopMenu === 'Product Managers' && text.includes('vision')}
            </h1>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntroText