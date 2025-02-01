import Header from "@/components/Header"
import Nav from "@/components/Nav"
import IntroText from "@/components/IntroText"
import Projects from "@/components/Projects"
import Value from "@/components/Values"
import Background from "@/components/Background"
import About from "@/components/About"
import Contact from "@/components/Contact"
const Landing = () => {

    return (
        <div className="min-h-screen min-w-full bg-background text-foreground">
            <Header />
            <div className="flex ">
                <Nav />
                <main className=" flex-1 mt-16 md:ml-48">
                    <IntroText />
                    <div className="mt-[400px] md:mt-0" />
                    <Projects />
                    <Value />
                    <Background />
                    <About />
                    <Contact />
                </main>
            </div>
        </div>
    )
}

export default Landing


