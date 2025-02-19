export const cards = [
  {
    description: "Researching & Coding",
    title: "ParaLang",
    tech: " React, Node.js, Express, MongoDB, TailwindCSS, Websockets, WebRTC, Web Audio API",
    src: "https://static.vecteezy.com/system/resources/previews/013/709/851/original/outline-brain-design-silhouette-logo-design-hand-drawn-minimalist-brain-vector.jpg",
    ctaText_before: "Website",
    ctaText_after: "Github",
    ctaLink_before: "https://ui.aceternity.com/templates",
    ctaLink_after: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        A paralinguistic prompting system that detects human emotions through <b>vocal cues like pitch and tone.</b>
        It processes audio, extracts key features, and applies machine learning for <b>real-time emotion classification</b>,
        ideal for enhancing virtual assistants and customer support. <br /> <br />

      </p>
    ),
  },
  {
    description: "Completed (2024)",
    title: "EveSpark",
    tech: " React, Node.js, Express, MySQL, Flask ",
    src: "https://static.vecteezy.com/system/resources/previews/015/150/683/original/head-with-brain-icon-design-for-artificial-intelligence-technology-theme-png.png",
    ctaText_before: "Github",

    ctaText_after: "Github",
    ctaLink_before: "https://ui.aceternity.com/templates",
    ctaLink_after: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        EveSpark is a comprehensive <b>event management platform</b> that simplifies planning, organization, and execution of events. Designed for efficiency, it features secure <b>authentication</b>, <b>responsive profiles</b>, and robust <b>backend services</b>, ensuring a seamless user experience and reducing registration times significantly.<br /> <br />
      </p>
    ),
  },
  {
    description: "Completed (2025)",
    title: "Portfolio",
    tech: " React, Node.js, Express, TailwindCSS",
    src: '/portfolio.png',
    ctaText_before: "Website",

    ctaText_after: "Github",
    ctaLink_before: "https://ui.aceternity.com/templates",
    ctaLink_after: "https://ui.aceternity.com/templates",

    content: () => (
      <p>
        Since this also a took a bit of my time
        <br /> <br />
      </p>
    ),
  },
  {
    description: "Ongoing",
    title: "Course Generator",
    tech: " React, Node.js, Express, MongoDB, TailwindCSS",
    src: '/coursify.png',
    ctaText_before: "Website",
    ctaText_after: "Github",
    ctaLink_before: "https://ui.aceternity.com/templates",
    ctaLink_after: "https://ui.aceternity.com/templates",

    content: () => (
      <p>
        Generate <b>personalized courses</b> in seconds with Coursify
        <br /> <br />
      </p>
    ),
  },
  {
    description: "Ongoing",
    title: "AirWise",
    tech: " React, TailwindCSS, WAQI API",
    src: '/AirWise.png',
    ctaText_before: "Website",
    ctaText_after: "Github",
    ctaLink_before: "https://ui.aceternity.com/templates",
    ctaLink_after: "https://ui.aceternity.com/templates",

    content: () => (
      <p>
        Generate <b>personalized courses</b> in seconds with Coursify
        <br /> <br />
      </p>
    ),
  },
];

export const Education = [
  {
    // logo_link:"https://college4u.in/wp-content/uploads/2019/07/1200px-Vellore_Institute_of_Technology_seal_2017.svg_-830x876.png",
    logo_link: "https://images.shiksha.com/mediadata/images/1631881854phpmNdZnG.jpeg",
    institution_name: <h4>VIT</h4>,
    degree: <h1>BTech in <u>Computer Science</u> and Engineering </h1>,
    time: <p><u>Pursuing</u></p>,
    location: "India",
  },
];

export const Pics = [
  {
    id: 1,
    image: '/pics/ramen.jpg',
    height: 300,
    // Additional properties you could add:
    width: 400,                          // Image width in pixels
    caption: "Homemade tonkotsu ramen",  // Optional caption text
    isFeatured: false,                   // Boolean for featured images
    orientation: "landscape",            // landscape/portrait
    aspectRatio: "4:3",                 // Image aspect ratio
    loading: "lazy",                     // Loading strategy
    priority: 1                          // Display priority
  },
  { id: 2, image: '/pics/asthetic.jpg', height: 500,  },
  { id: 3, image: '/pics/random-sky.jpg', height: 240 },
  { id: 4, image: '/pics/traintack.jpg', height: 500 ,caption: "Architectural symmetry got me feeling like an NPC in a well-designed game." },
  { id: 5, image: '/pics/coffee.jpg', height: 400 },
  { id: 6, image: '/pics/art.jpg', height: 570 },
  { id: 7, image: '/pics/me-in-car.jpg', height: 330},
  { id: 8, image:'/pics/hot-chocolate.jpg', height: 400 },
  { id: 9, image: '/pics/crazzzy.jpg', height: 400 },
  { id: 10, image: '/pics/sky.jpg', height: 400,  },
  { id: 11, image: '/pics/match.jpg', height: 400,  },
  { id: 12, image: '/pics/shed.jpg', height: 500  },
  { id: 13, image: '/pics/midsem.jpg', height: 500  },
];

export const AboutMe = {
  content: () => (
    <p>I&apos;m a 20-year-old pre-final year Computer Science student at VIT, focused on backend development with a strong foundation in C++ and web technologies. With experience across front-end essentials and backend frameworks like Node.js and Express, I&apos;ve built practical applications, including an event management system called EveSpark for my college.
      <br />
      <br />
      <br />

      Currently, I&apos;m actively seeking opportunities in full-stack and backend roles to further apply and grow my skills. Beyond coding, I have a keen interest in finance and stock analysis, always looking to learn something new. Up next on my learning path is Go, as I continue expanding my backend expertise
    </p>
  ),

}


/*
<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
 <path fill="#00599c" d="M118.766 95.82c.89-1.543 1.441-3.28 1.441-4.843V36.78c0-1.558-.55-3.297-1.441-4.84l-55.32 31.94Zm0 0"/>
 <path fill="#004482" d="m68.36 126.586 46.933-27.094c1.352-.781 2.582-2.129 3.473-3.672l-55.32-31.94L8.12 95.82c.89 1.543 2.121 2.89 3.473 3.672l46.933 27.094c2.703 1.562 7.13 1.562 9.832 0Zm0 0"/>
 <path fill="#659ad2" d="M118.766 31.941c-.891-1.546-2.121-2.894-3.473-3.671L68.359 1.172c-2.703-1.563-7.129-1.563-9.832 0L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.196c0 1.562.55 3.3 1.441 4.843L63.445 63.88Zm0 0"/>
 <path fill="#fff" d="M63.445 26.035c-20.867 0-37.843 16.977-37.843 37.844s16.976 37.844 37.843 37.844c13.465 0 26.024-7.247 32.77-18.91L79.84 73.335c-3.38 5.84-9.66 9.465-16.395 9.465-10.433 0-18.922-8.488-18.922-18.922 0-10.434 8.49-18.922 18.922-18.922 6.73 0 13.017 3.629 16.39 9.465l16.38-9.477c-6.75-11.664-19.305-18.91-32.77-18.91zM92.88 57.57v4.207h-4.207v4.203h4.207v4.207h4.203V65.98h4.203v-4.203h-4.203V57.57H92.88zm15.766 0v4.207h-4.204v4.203h4.204v4.207h4.207V65.98h4.203v-4.203h-4.203V57.57h-4.207z"/>
</svg>

*/
