import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';

const fonts = {
	...chakraTheme.fonts,
	body: 'Poppins, sans-serif',
	Heading: 'Poppins, sans-serif',
};

const colors = {
	primary: '#2acfcf',
	secondary: '#BFBFBF',
	btnHover: '#aff1f1',
	copiedBg: '#3b3054',
	danger: '#f46262',
	navBg: '#232127',
};

const resetting = {
	body: {
		overflowX: 'hidden',
		margin: 0,
		padding: 0,
		'box-sizing': 'border-box',
	},
};

const breakpoints = {
	md: '52em',
};

const overrides = {
	...chakraTheme,
	breakpoints,
	fonts,
	fontWeights: {
		normal: 500,
		bold: 700,
	},
	fontSizes: {
		sm: '18px',
		md: '18px',
		lg: '18px',
		xl: '18px',
		'2xl': '18px',
	},
	colors,
	resetting,
};

const customTheme = extendTheme(overrides);

export default customTheme;

// breakpoint 860px,
