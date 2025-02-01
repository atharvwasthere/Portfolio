import { AboutMe } from '../data/Data'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AnimatedTerminal from './terminal-animation';
import aboutgif from '../data/video (1).gif';
const About = () => {

    return (
        <>
            <div id="main-outer-border" className="  grid grid-cols-1 row-2 md:grid-cols-2 gap-2 border-2 border-red-500">
                <div className="grid  text-primary items-center justify-center  border-2 border-red-500">
                    <div id="pic" className='grid items-center justify-center '>
                        {/* <DotLottieReact src="src/data/About.lottie" loop autoplay className='-pt-8'></DotLottieReact> */}
                        {/* <AnimatedTerminal /> */}
                        <img src={aboutgif} />
                    </div>
                </div>
                <div className="grid pt-24 justify-center text-start text-primary text-small">
                    <p className='pb-24 '>{AboutMe.content()}</p>

                </div>

            </div>
        </>
    )
}

export default About