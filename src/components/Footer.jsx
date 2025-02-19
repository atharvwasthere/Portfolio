import { Link } from "react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Footer = () => {
    // const scrollToTop = () => {
    //     window.scrollToTOP({ top: 0, behavior: "smooth" })
    // }
    return (
        <footer className="w-full py-6 border-t border-border/40 bg-background relative">
            <div className="container flex flex-col items-center justify-around gap-4 md:flex-row">
                {/* Left side with year */}
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()}</p>

                {/* Center credit with hover effect */}
                <div className="relative group">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Design & code by</span>
                        <Link
                            to="https://github.com/atharvwasthere"
                            className="text-[24px] font-extrabold font-header hover:text-primary transition-colors relative"
                        >
                            Atharv Singh
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/60 to-primary group-hover:w-full transition-all duration-300" />
                        </Link>
                        <Avatar>
                            <AvatarImage src="https://github.com/atharvwasthere.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                    </div>
                    {/* Decorative dots */}
                    <div className="absolute -top-1 -right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="w-1 h-1 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1 h-1 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1 h-1 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    {/* <span className="text-sm text-muted-foreground items-end">Made with Pain &lt;3</span> */}

                </div>

                {/* Right side with back to top button */}
                {/* <button
                    onClick={scrollToTop}
                    className="group p-2 rounded-full hover:bg-muted transition-colors"
                    aria-label="Back to top"
                >
                    <ArrowUpWideNarrowIcon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </button> */}
            </div>

            {/* Background gradient effect */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </footer>
    )
}

export default Footer;