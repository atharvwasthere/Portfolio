export const Experience = [
  {
    time: <p>Nov 2025 - Present</p>,
    location: "Bangalore, IN",
  },
];

export const Education = [
  {
    institution_name: <h4>Vellore Institute of Technology</h4>,
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
    image: '/pics/skyview-bridge.jpg',
    height: 250,
    loading: "lazy",
    caption: "Above the clouds, beyond the noise",
  },
];


export const AboutMe = {
  content: () => (

    <p className="text-lg leading-relaxed text-foreground">
      I&apos;m a 21-year-old <span className="font-autography font-bold text-3xl text-foreground">Backend Engineer</span> with a taste for design and a bias toward systems that scale. I think in tradeoffs—concurrency, failure modes, infra cost—but I also care about what the thing looks like on screen.
      <br /><br />
      Built projects like
      <a href="https://github.com/atharvwasthere/Fastlane" className="font-semibold underline underline-offset-4 decoration-emerald-500/40 hover:decoration-emerald-500 text-emerald-500 dark:text-cyan-400 dark:decoration-cyan-400/40 dark:hover:decoration-cyan-400"> Fastlane </a>
      (<span className="italic text-gray-500">CLI network benchmarking</span>),
      <a href="https://github.com/atharvwasthere/Encryptify" className="font-semibold underline underline-offset-4 decoration-emerald-500/40 hover:decoration-emerald-500 text-emerald-500 dark:text-cyan-400 dark:decoration-cyan-400/40 dark:hover:decoration-cyan-400"> Encryptify </a>
      (<span className="italic text-gray-500">C++ multithreaded encryption</span>), &
      <a href="https://github.com/atharvwasthere/Signal" className="font-semibold underline underline-offset-4 decoration-emerald-500/40 hover:decoration-emerald-500 text-emerald-500 dark:text-cyan-400 dark:decoration-cyan-400/40 dark:hover:decoration-cyan-400"> Signal </a>
      (<span className="italic text-gray-500">distributed real-time chat via Boost.Asio</span>).
      <br /><br />
      Currently at{" "}
      <a
        href="https://www.surgegrowth.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline underline-offset-2 hover:opacity-80"
      >
        <em>SurgeGrowth</em>
      </a>
      —a Bangalore-based AI workflow platform—where I design and ship backend systems across infra, data pipelines, and product features. Things like a Vertex AI batch pipeline for 50K+ video jobs, a Facebook Ad Library caching layer, credit ledger architecture, and soft delete systems with cascading job cancellation. I care about systems that are boring in the right ways.
      <br /><br />
      Outside work: finance, stock analysis, and a blog called{" "}
      <a
        href="https://blogs.atharvsingh.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline underline-offset-4 decoration-emerald-500/40 hover:decoration-emerald-500 text-emerald-500 dark:text-cyan-400 dark:decoration-cyan-400/40 dark:hover:decoration-cyan-400"
      >
        Not a Blogger
      </a>{" "}
      where I write about the backend tradeoffs nobody documents.
    </p>

  ),

}


