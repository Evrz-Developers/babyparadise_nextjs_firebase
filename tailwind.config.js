/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/components/(button|dropdown|input|navbar|ripple|spinner|menu|divider|popover).js"
	],
	theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
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
    			},
    			'color-header/input-text': '#1B1B1B',
    			'color-title-text': '#535558',
    			'color-body-text': '#242424',
    			'color-label-text': '#787878',
    			'color-error-text': '#CD241A',
    			'color-success-s50': '#00A15B',
    			'color-button-text': '#ffffff',
    			'color-secondary-s05': '#0C0C0C',
    			'color-secondary-s15': '#242424',
    			'color-secondary-s30': '#484848',
    			'color-secondary-s50': '#787878',
    			'color-secondary-s60': '#939393',
    			'color-secondary-s70': '#AEAEAE',
    			'color-secondary-s80': '#C9C9C9',
    			'color-secondary-s90': '#E4E4E4',
    			'color-secondary-s95': '#F4F4F4',
    			'color-primary-p40': '#2755CE',
    			'color-primary-p50': '#316AFF',
    			'color-primary-p60': '#5A88FF',
    			'color-primary-p70': '#83A6FF',
    			'color-primary-p90': '#EAF0FF',
    			'color-primary-p95': '#F7F9FF',
    			'color-primary-p100': '#F9FBFF',
    			'color-primary-p105': '#FCFDFF',
    			'color-error-e90': '#EFD1CF',
    			'color-light-mint': '#E7FFF4',
    			'color-basement': '#FFF9E5',
    			'color-primary-p85': 'rgba(193, 210, 255, 1)',
    			'color-header/input': '#1B1B1B',
    			'color-card-body': '#ffffff',
    			'color-info': '#AEAEAE',
    			'color-info-1': '#B2B2B2',
    			'color-main': '#1A1A1A',
    			'color-input-border': '#E5E5E5',
    			'color-bg-light': '#FBFBFB'
    		},
    		boxShadow: {
    			'login-card': '4px 8px 24px #F2F2F5',
    			'nav-links': '0px 40px 60px 1px rgba(139, 139, 139, 0.1);',
    			'prop-details-card': '6px 6px 20px rgba(122,122,122,0.25)',
    			'building-controls': '0px 3px 4px rgba(139, 139, 139, 0.1)',
    			'landlords-options': '3px 3px 10px 0px rgba(155, 155, 155, 0.25)'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		animation: {
    			'background-position-spin': 'background-position-spin 3000ms infinite alternate',
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
    		},
    		keyframes: {
    			'background-position-spin': {
    				'0%': {
    					backgroundPosition: 'top center'
    				},
    				'100%': {
    					backgroundPosition: 'bottom center'
    				}
    			},
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate"), nextui()],
};
