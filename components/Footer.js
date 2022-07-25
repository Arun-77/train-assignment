import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { Facebook } from '../public/assets/icon-facebook.svg';
import { Twitter } from '../public/assets/icon-twitter.svg';
import { Pinterest } from '../public/assets/icon-pinterest.svg';
import { Instagram } from '../public/assets/icon-instagram.svg';

const Footer = () => {
	return (
		<Box
			display="flex"
			w="100vw"
			flexDirection={['column', 'column', 'row']}
			justifyContent="space-around"
			alignContent="flex-start"
			alignItems={['center', 'center', 'unset']}
			padding={['50px 2vw 5px 2vw', '50px 2vw 5px 2vw', '4vw 2vw 0']}
			bg="navBg"
			color="white"
			h={['auto', 'auto', '20rem']}
			textAlign={['center', 'center', 'left']}
		>
			{/* Footer logo */}
			<Box marginBottom={['3rem', '3rem', '0']}>
				<Image
					src={'/assets/logo_white.svg'}
					alt="Shortly"
					w={'121px'}
					h={'33px'}
					layout="fixed"
				/>
			</Box>
			{/* Footer links */}
			<Box display="flex" flexDirection={['column', 'column', 'row']}>
				<Box
					padding={['0 1.8rem', '0 1.8rem', '0 2rem', '0 2.9rem']}
					marginBottom={['2.3rem', '2.3rem', '0']}
				>
					<Text
						fontSize="1.25rem"
						fontWeight="700"
						padding="0.5rem 0"
						marginBottom={['0.6rem', '0.6rem', '0']}
					>
						Features
					</Text>
					<Text
						padding="0.5rem 0"
						cursor="pointer"
						_hover={{ color: 'primary' }}
					>
						Link Shortening
					</Text>
					<Text
						padding="0.5rem 0"
						cursor="pointer"
						_hover={{ color: 'primary' }}
					>
						Branded Links
					</Text>
					<Text
						padding="0.5rem 0"
						cursor="pointer"
						_hover={{ color: 'primary' }}
					>
						Analytics
					</Text>
				</Box>
				<Box
					padding={['0 1.8rem', '0 1.8rem', '0 2rem', '0 2.9rem']}
					marginBottom={['2.3rem', '2.3rem', '0']}
				>
					<Text
						fontSize="1.25rem"
						fontWeight="700"
						padding="0.5rem 0"
						marginBottom={['0.6rem', '0.6rem', '0']}
					>
						Resources
					</Text>
					<Text
						padding="0.5rem 0"
						cursor="pointer"
						_hover={{ color: 'primary' }}
					>
						Blog
					</Text>
					<Text
						padding="0.5rem 0"
						cursor="pointer"
						_hover={{ color: 'primary' }}
					>
						Developers
					</Text>
					<Text
						padding="0.5rem 0"
						cursor="pointer"
						_hover={{ color: 'primary' }}
					>
						Support
					</Text>
				</Box>
				<Box
					padding={['0 1.8rem', '0 1.8rem', '0 2rem', '0 2.9rem']}
					marginBottom={['2.3rem', '2.3rem', '0']}
				>
					<Text
						fontSize="1.25rem"
						fontWeight="700"
						padding="0.5rem 0"
						marginBottom={['0.6rem', '0.6rem', '0']}
					>
						Company
					</Text>
					<Text
						padding="0.5rem 0"
						cursor="pointer"
						_hover={{ color: 'primary' }}
					>
						About
					</Text>
					<Text
						padding="0.5rem 0"
						cursor="pointer"
						_hover={{ color: 'primary' }}
					>
						Our Team
					</Text>
					<Text
						padding="0.5rem 0"
						cursor="pointer"
						_hover={{ color: 'primary' }}
					>
						Careers
					</Text>
					<Text
						padding="0.5rem 0"
						cursor="pointer"
						_hover={{ color: 'primary' }}
					>
						Contact
					</Text>
				</Box>
			</Box>
			{/* Footer Social */}
			<Box display="flex">
				<Image
					src={'/assets/icon-facebook.svg'}
					alt="facebook"
					w={'24px'}
					h={'24px'}
					margin="0.9rem"
					cursor="pointer"
					_hover={{
						filter: 'auto',
						brightness: '100%',
						contrast: '83%',
						saturate: '7001%',
						sepia: '82%',
						invert: '50%',
					}}
				/>

				<Image
					src={'/assets/icon-twitter.svg'}
					alt="twitter"
					w={'24px'}
					h={'24px'}
					margin="0.9rem"
					cursor="pointer"
					filter="auto"
					_hover={{
						filter: 'auto',
						brightness: '87%',
						contrast: '85%',
						saturate: '602%',
						sepia: '60%',
						invert: '20%',
					}}
				/>
				<Image
					src={'/assets/icon-pinterest.svg'}
					alt="pinterest"
					w={'24px'}
					h={'24px'}
					margin="0.9rem"
					cursor="pointer"
					filter="auto"
					_hover={{
						filter: 'auto',
						brightness: '87%',
						contrast: '85%',
						saturate: '602%',
						sepia: '60%',
						invert: '20%',
					}}
				/>
				<Image
					src={'/assets/icon-instagram.svg'}
					alt="instagram"
					w={'24px'}
					h={'24px'}
					margin="0.9rem"
					cursor="pointer"
					_hover={{
						filter: 'auto',
						brightness: '87%',
						contrast: '85%',
						saturate: '602%',
						sepia: '60%',
						invert: '20%',
					}}
				/>
			</Box>
		</Box>
	);
};

export default Footer;
