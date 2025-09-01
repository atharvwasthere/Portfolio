import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import MagnetLines from './blocks/Animations/MagnetLines/MagnetLines';
const Value = () => {
    const Values = {
        description: "Useful. Reliable. Scalable. Well made"
    }
    return (

        <section id="main-outer-border" className="mt-28 grid  grid-col-1 row-auto md:grid-cols-2 grid-rows-2 gap-2 ">
            <div className="md:pb-12 flex-grow items-center justify-center text-start text-values md:text-huge text-primary">
                {Values.description.split('. ').map((text, index) => (
                    <h1 key={index} className='md:font-light text-italic font-display pl-4  text-primary leading-[1.2] md:leading-none '>
                        {text.trim()}
                    </h1>
                ))}

            </div>
            <div className="md:flex md:items-center md:justify-center text-primary">
                <DotLottieReact
                    src="https://lottie.host/6413339e-759b-4fba-90d2-effbab9baf24/TLjKxApvNT.lottie"
                    loop
                    autoplay
                    color='currentColor'
                />

            </div>
            <div className=" hidden md:flex md:items-center md:justify-center  text-primary">
                {/* <DotLottieReact
                    src="\Cube.lottie"
                    loop
                    autoplay
                /> */}

            </div>
            <div className=" flex items-center justify-evenly text-start text-primary px-4 md:pr-4">
                <p className="font-satoshi text-sm text-foreground leading-relaxed">
                    These are my <span className="font-autography text-4xl text-foreground font-semibold">Core development values</span>, and I strive to bring them into every project I work on.
                    I&apos;ve learned a lot from <em>building projects from the ground up</em>, and this hands-on experience has fueled my drive to
                    <em> leave no stone unturned</em>. I&apos;m passionate about crafting
                    <span className="bg-emerald-500/10 text-emerald-600 px-1 py-0.5 rounded-md font-medium dark:bg-cyan-500/10 dark:text-cyan-400"> efficient, reliable, and scalable solutions</span>
                    that meet real needs, blending <em>functionality with thoughtful design</em>.
                    <br /><br />
                    I believe <span className="font-cabinetMedium text-xl text-foreground font-semibold">1 + 1 &gt; 2</span> —
                    <span className="text-emerald-500 dark:text-cyan-400 font-light"> collaboration leads to outcomes far greater than what we can achieve individually</span>.
                    I like to <em>think big</em>, work quickly yet thoughtfully, and always keep an eye on the <em>bigger picture</em>. I&apos;m constantly
                    <em> growing, improving</em>, and pushing myself to
                    <span className="bg-emerald-500/10 text-emerald-600 px-1 py-0.5 rounded-md font-medium dark:bg-cyan-500/10 dark:text-cyan-400"> execute at the highest level</span>.
                </p>



            </div>
        </section>
    )
}


export default Value;