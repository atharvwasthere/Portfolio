import { Menu } from "lucide-react"
import AnimatedName from "./AnimatedName"
import { ModeToggle } from "./mode-toggle"
const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-filter backdrop-blur-sm ">
            <div className="w-full mx-auto px-4  flex justify-between items-center py-4">
                {/* <h1>Atharv Singh</h1> */}
                <div className="mx-3 font-bold text-2xl md:text-4xl">
                <AnimatedName  firstName="Atharv" lastName="Singh"/>
                </div>
                <div className="flex place-items-end "> 
                    <div id="menu" className=" px-4 py-4 md:hidden">
                        <Menu />
                    </div>
                    <div >
                        <ModeToggle className="border-0" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header