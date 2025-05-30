/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

  	extend: {
		fontFamily : {
			header : ["Babylonica", "WaterBrush"],
			vital : ["Zilla Slab Highlight"],
			header2 :["Rock Salt"],
			nav: ["Vast Shadow"],
		},
		fontSize : {
			huge:'clamp(36px, 6.00vw, 7.00vw)',
			large:'clamp(30px, 3.81vw, 3.81vw)', 
			small:'clamp(18px, 1vw, 1vw)', 
			values:'clamp(36px, 4.20vw, 4.90vw)',
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			spotifyblack: '#191414',
        	spotifygreen: '#1DB954',
        	spotifygray: '#B3B3B3',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			tech: 'hsl(var(--tech))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		  animation: {
			'album-spin': 'spin 20s linear infinite',
		  }

  	}
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
}

