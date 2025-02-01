import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Value = () => {
    const Values = {
        description: "Useful. Reliable. Scalable. Well made"
    }
    return (

        <section id="main-outer-border" className="mt-28 grid  grid-col-1 row-auto md:grid-cols-2 grid-rows-2 gap-2 ">
            <div className=" md:pb-12 flex-grow items-center justify-center text-start text-values md:text-huge text-primary">
                {Values.description.split('. ').map((text, index) => (
                    <h1 key={index} className='font-semibold md:font-normal pl-4  text-primary leading-[1.2] md:leading-none '>
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
            <DotLottieReact
                    src="\Cube.lottie"
                    loop
                    autoplay
                />
            </div>
            <div className=" flex items-center justify-evenly text-start text-primary px-4 md:pr-4">
                <p className="text-small">These are my <strong>core development</strong> values, and I strive to bring them into every project I work on. As a third-year Computer Science student, I&apos;ve learned a lot from building projects from the ground up, and this hands-on experience has ignited a drive in me to leave no stone unturned. I&apos;m passionate about crafting efficient, reliable, and scalable solutions that meet real needs, blending functionality with thoughtful design. Working with a team inspires me—I believe that <strong>collaboration leads to outcomes far greater than what we can achieve individually</strong>. I like to think big, work quickly but thoughtfully, and always keep an eye on the bigger picture. I&apos;m constantly growing, improving, and pushing myself to execute at the highest level.</p>
            </div>
        </section>
    )
}


export default Value;