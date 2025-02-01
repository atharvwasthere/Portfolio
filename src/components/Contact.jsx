// import { SocialHandles } from "../data/data"
// import { AnimatedTooltip } from "./AnimatedTooltip"
// import DigitalCircuitContact from "./DigitalCircuitContact"
// import CodeEditorContact from "./CodeEditorContact"
// import SmoothCodeEditorContact from "./SmoothCodeEditorContact"
import ContactCards from "./ContactCards"
import mypic from '../data/mee.jpg'

const Contact = () => { 
    return(
        <>
        <div id=" main-outer-border" className="mt-32  grid grid-cols-1 md:grid-cols-2 gap-2">
            <div id="Social-handles" className=" border-2 border-red-500 flex flex-row w-full items-center justify-center text-primary" >
                <div >
                    {/* <DigitalCircuitContact/>    */}
                    {/* <CodeEditorContact/> */}
                    {/* <SmoothCodeEditorContact/> */}
                    <ContactCards/>
                </div>    
            </div>
            {/* signing off */}
            <div id="pic" className=" border-2 border-red-500 items-center justify-center text-primary">
                <div className="flex items-between justify-center p-8 text-primary">
                    <img src={mypic} />
                </div>
                <span id="Colophon" className=" border-2 border-red-500 mx-8  flex items-between justify-center  text-primary">
                    Design & code by &nbsp;<a href="http://localhost:5173/"> <u>Atharv Singh</u></a>
                    {/* <span id="copyright" className=" border-2 border-red-500 m-8 flex items-between justify-center  text-primary">
                        &copy; 2024
                    </span> */}
                </span>
                <span id="copyright" className=" border-2 border-red-500 mx-8 flex justify-end text-primary">
                        &copy; 2025
                    </span>
            </div>
        </div>
        </>
    )
}

export default Contact

/* 
-gmail:
-github:
-linkedin:
-leetcode:
-codeforces:
-X(twitter) : catch me ranting here
-Spotify: 

*/