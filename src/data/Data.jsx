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
    width: 400,
    caption: "Ramen🍜",
    isFeatured: false,
    orientation: "landscape",
    aspectRatio: "4:3",
    loading: "lazy",
    priority: 1,
  },
  {
    id: 2,
    image: '/pics/asthetic.jpg',
    height: 500,
    loading: "lazy",
    caption: "Classy lights, cozy vibes",
  },
  {
    id: 3,
    image: '/pics/random-sky.jpg',
    height: 240,
    loading: "lazy",
    caption: "Sky before the storm",
  },
  {
    id: 4,
    image: '/pics/traintack.jpg',
    height: 500,
    caption: "Architectural symmetry.",
  },
  {
    id: 5,
    image: '/pics/PPPune.jpg',
    height: 400,
    loading: "lazy",
    caption: "Fueling up at midnight",
  },
  {
    id: 6,
    image: '/pics/me-in-car.jpg',
    height: 330,
    loading: "lazy",
    caption: "Driver's seat, main character mode",
  },
  {
    id: 7,
    image: '/pics/hot-chocolate.jpg',
    height: 400,
    loading: "lazy",
    caption: "Late night grind with hot chocolate",
  },
  {
    id: 8,
    image: '/pics/BikeView.jpg',
    height: 380,
    loading: "lazy",
    caption: "Tunnel vision, literally",
  },
  {
    id: 9,
    image: '/pics/jp.jpg',
    height: 300,
    loading: "lazy",
    caption: "Golden curve, luxury feels",
  },
  {
    id: 10,
    image: '/pics/shed.jpg',
    height: 500,
    loading: "lazy",
    caption: "Monsoon platform aesthetics",
  },
  {
    id: 11,
    image: '/pics/asthetic2.jpg',
    height: 500,
    loading: "lazy",
    caption: "Dipped in warm lights",
  },
  {
    id: 12,
    image: '/pics/asthetic1.jpg',
    height: 490,
    loading: "lazy",
    caption: "Bar that deserves a Pinterest board",
  },
  {
    id: 13,
    image: '/pics/flight.jpg',
    height: 459,
    caption: "Above the clouds, beyond the noise",
  },
  {
    id: 14,
    image: '/pics/skyview+bridge.jpg',
    height: 250,
    loading: "lazy",
    caption: "Above the clouds, beyond the noise",
  },
];


export const AboutMe = {
  content: () => (
    <p>I&apos;m a 21-year-old, <a className="font-vital ">Backend-first React developer</a> (CSE @ VIT, ’26) with a bias for infra, concurrency, and systems that actually scale.Comfortable across programming languages, databases, and cloud platforms — from low-level concurrency in C++ to designing features, streamlining workflows, and scaling products. Built stuff like <a href="https://github.com/atharvwasthere/Fastlane" className="underline text-green-500 dark:text-cyan-400 font-semibold">Fastlane</a> (CLI network benchmarking), <a href="https://github.com/atharvwasthere/Encryptify" className="underline text-orange-500 dark:text-cyan-400 font-semibold">Encryptify</a> (C++ multithreaded encryption), and <a href="https://github.com/atharvwasthere/Signal" className="underline text-blue-600 dark:text-cyan-400 font-semibold">Signal</a> (Distributed real-time chat using Boost.Asio, thread pool & secure messaging using custom protocol).
      <br />
      <br />

      Currently, I&apos;m actively seeking opportunities in full-stack and backend roles to further apply and grow my skills. Beyond coding, I have a keen interest in finance and stock analysis, always looking to learn something new.
      <br />
      <br />
      Presently diving into <a href=""> Go + Rust</a>, exploring how to design infra that feels invisible but reliable. Also writing about AI internals , parallelism & Search Engines so others don’t have to read boring PDFs.
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
