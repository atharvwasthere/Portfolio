
import { useState } from "react"
import PropTypes from 'prop-types';



const AnimatedName = ({ firstName, lastName }) => {

    const [isHovered, setIsHovered] = useState(false);
    const Name = `${firstName} ${lastName}`
    return (
        <div className="inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 className="font-semibold">
                {Name.split('').map((letter, index) => (
                    <span
                        key={index}
                        className={`inline-block text-primary transition-all duration-200 ease-in-out
                                ${index === 0 ? '' : (isHovered ? 'opacity-100' : 'opacity-0')}`}
                        style={{
                            transitionDelay: isHovered
                                ? `${index * 0.02}s`
                                : `${(Name.length - index - 1) * 0.02}s`,
                        }}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </span>
                    ))}
            </h2>

        </div>

    )
}

AnimatedName.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  };


export default AnimatedName