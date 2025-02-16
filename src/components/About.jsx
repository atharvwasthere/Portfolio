import { AboutMe } from '../data/Data'
import MagnetLines from './blocks/Animations/MagnetLines/MagnetLines';
import { useTheme } from './theme-provider';

const About = () => {

    const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const currentLineColor = currentTheme === "dark" ? "white" : "#000";
    return (
        <>
            <div id="main-outer-border" className="  grid grid-cols-1 row-2 md:grid-cols-2 gap-2">
                <div className="grid  text-primary items-center justify-center ">
                    <div id="pic" className='grid items-center justify-center '>
                        {/* <img src={aboutgif} /> */}
                        <MagnetLines lineColor={currentLineColor}/>
                    </div>
                </div>
                <div className="grid pt-24  justify-between text-start text-primary text-small">
                    <p className='pb-24 '>{AboutMe.content()}</p>

                </div>

            </div>
        </>
    )
}

export default About