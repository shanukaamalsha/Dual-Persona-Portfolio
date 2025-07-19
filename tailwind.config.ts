import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				dev: {
					primary: 'hsl(var(--dev-primary))',
					secondary: 'hsl(var(--dev-secondary))',
					accent: 'hsl(var(--dev-accent))',
					terminal: 'hsl(var(--dev-terminal))',
					glow: 'hsl(var(--dev-glow))'
				},
				designer: {
					primary: 'hsl(var(--designer-primary))',
					secondary: 'hsl(var(--designer-secondary))',
					accent: 'hsl(var(--designer-accent))',
					creative: 'hsl(var(--designer-creative))',
					warm: 'hsl(var(--designer-warm))'
				}
			},
			backgroundImage: {
				'gradient-dev': 'var(--gradient-dev)',
				'gradient-designer': 'var(--gradient-designer)',
				'gradient-creative': 'var(--gradient-creative)'
			},
			boxShadow: {
				'dev': 'var(--shadow-dev)',
				'designer': 'var(--shadow-designer)'
			},
			fontFamily: {
				'mono': ['Fira Code', 'Monaco', 'Consolas', 'monospace'],
				'display': ['Poppins', 'system-ui', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--dev-glow) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--dev-glow) / 0.7)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'bounce-creative': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'typewriter': {
					'to': { width: '100%' }
				},
				'slide-up': {
					'from': { opacity: '0', transform: 'translateY(30px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'from': { opacity: '0', transform: 'translateX(-30px)' },
					'to': { opacity: '1', transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'bounce-creative': 'bounce-creative 2s ease-in-out infinite',
				'typewriter': 'typewriter 3s steps(40) 1s forwards',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-in': 'slide-in 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
