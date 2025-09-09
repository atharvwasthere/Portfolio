import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Footer = () => {
    return (
        <footer className="w-full py-6 border-t border-border/40 bg-background relative">
            <div className="container flex flex-col items-center justify-around md:gap-80 md:flex-row">
                {/* Left side with year */}
                <p className="font-satoshi  text-sm text-muted-foreground">© {new Date().getFullYear()}</p>

                {/* Center credit with hover effect */}
                <div className="relative group">
                    <div className="flex items-center gap-2">
                        <span className="font-satoshi text-lg text-black dark:text-white">Design & code by</span>
                        <a
                            href="https://github.com/atharvwasthere"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[24px] font-extrabold font-header hover:text-primary transition-colors relative"
                        >
                            Atharv Singh
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/60 to-primary group-hover:w-full transition-all duration-300" />
                        </a>

                        <Avatar>
                            <AvatarImage src="https://github.com/atharvwasthere.png" />
                            <AvatarFallback>AS</AvatarFallback>
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

                {/* Right side with All systems normal and breathing green dot  */}
                {/* <button
                    className="hidden font-satoshi md:flex items-center gap-2 md:p-2 md:rounded-full -mr-12  md:transition-colors"
                    aria-label="System Status"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    {/* All systems normal */}
                {/* </button> */}

            </div>

            {/* Background gradient effect */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </footer>
    )
}

export default Footer;