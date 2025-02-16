import ContactCards from "./ContactCards"
import mypic from '../data/mee.jpg'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router"

const Contact = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <ContactCards />
          {/* Right Column */}
          <div className="space-y-8">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <img src={mypic} alt="Profile" className="object-cover rounded-lg" />
            </div>

            <blockquote className="border-l-4 border-primary pl-4 italic">
              &quot;To be insanely hopeful even after all that, you call it madness, I call it strength.&quot;
            </blockquote>

            <p className="text-sm text-muted-foreground text-center">
              Design & code by
              {" "}
              <Link to="/" className="underline underline-offset-4">
                Atharv Singh
              </Link>

            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

