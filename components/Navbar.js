import React, { useState } from 'react';
import Image from 'next/image';
// import logo from '../public/assets/logo.svg';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Divider } from '@chakra-ui/react';

import { Box, Text, Button } from '@chakra-ui/react';

const Navbar = () => {
	const [navDrop, setNavDrop] = useState(false);

	return (
		<Box
			py="8"
			px={['10%', '10%', '6%', '10%']}
			display="flex"
			flexDirection={['column', 'column', 'row']}
			width="100vw"
		>
			<Box
				display="flex"
				justifyContent="space-between"
				mb={[5, 5, 0]}
				alignItems="center"
			>
				<Image
					src={'/assets/logo.svg'}
					alt="Shortly"
					width={'121px'}
					height={'33px'}
					layout="fixed"
				/>
				<HamburgerIcon
					display={['block', 'block', 'none']}
					h={'30px'}
					w={'34px'}
					cursor="pointer"
					onClick={() => setNavDrop((prev) => !prev)}
				/>
			</Box>

			<Box
				alignItems="center"
				flexDirection={['column', 'column', 'row']}
				fontWeight="700"
				color={['white', 'white', 'secondary']}
				pl={[0, 0, 8]}
				w="100%"
				display="flex"
				visibility={'visible'}
				justifyContent="space-between"
				backgroundColor={['copiedBg', 'copiedBgg', 'white']}
				borderRadius={['10px', '10px', 0]}
				my={[0, 0, '4']}
				overflow="hidden"
				maxHeight={[
					navDrop === true ? '500px' : '0',
					navDrop === true ? '500px' : '0',
					'40px',
				]}
				opacity={[navDrop ? '1' : '0', navDrop ? '1' : '0', '1']}
				transition={
					navDrop
						? ['all 0.4s ease-in', 'all 0.4s ease-in', 'none']
						: [
								'all 0.5s cubic-bezier(0.5,1.5,1,1.5)',
								'all 0.5s cubic-bezier(0.5,1.5,1,1.5)',
								'none',
						  ]
				}
			>
				<Box
					display="flex"
					alignItems="center"
					flexDirection={['column', 'column', 'row']}
					fontSize={['1.5rem', '1.5rem', '1.1em']}
					opacity={[navDrop ? '1' : '0', navDrop ? '1' : '0', '1']}
					transition={
						navDrop
							? ['all 0.4s ease-in', 'all 0.4s ease-in', 'none']
							: [
									'all 0.5s cubic-bezier(0.5,1.5,1,1.5)',
									'all 0.5s cubic-bezier(0.5,1.5,1,1.5)',
									'none',
							  ]
					}
				>
					<Text
						cursor="pointer"
						mx="6"
						py={[15, 15, 0]}
						_hover={{ color: ['primary', 'primary', '#333'] }}
					>
						Features
					</Text>
					<Text
						cursor="pointer"
						mx="6"
						py={[15, 15, 0]}
						_hover={{ color: ['primary', 'primary', '#333'] }}
					>
						Pricing
					</Text>
					<Text
						cursor="pointer"
						mx="6"
						py={[15, 15, 0]}
						_hover={{ color: ['primary', 'primary', '#333'] }}
					>
						Resources
					</Text>
				</Box>

				{/* divider */}
				<Divider w="88%" display={['block', 'block', 'none']} />
				<Box
					display="flex"
					alignItems="center"
					flexDirection={['column', 'column', 'row']}
					opacity={[navDrop ? '1' : '0', navDrop ? '1' : '0', '1']}
					maxHeight={['500px', '500px', 'fit-content']}
					transition={
						navDrop
							? ['all 0.4s ease-in', 'all 0.4s ease-in', 'none']
							: [
									'all 0.5s cubic-bezier(0.5,1.5,1,1.5)',
									'all 0.5s cubic-bezier(0.5,1.5,1,1.5)',
									'none',
							  ]
					}
				>
					<Text
						fontSize={['1.5rem', '1.5rem', '1.1rem']}
						cursor="pointer"
						mx={[0, 0, 6]}
						py={[15, 15, 0]}
						_hover={{ color: ['primary', 'primary', '#333'] }}
					>
						Login
					</Text>
					<Button
						variant="solid"
						bg="primary"
						_hover={{ bg: 'btnHover' }}
						_active={{ bg: 'btnHover' }}
						color="white"
						borderRadius={['20px', '20px', '100vw']}
						w={['220px', '220px', '110px']}
						px={[0, 0, '5']}
						py={['15px', '15px', '2.5']}
						mb={['10%', '10%', '0']}
						fontSize={['24px', '24px', '1.1rem']}
						h={['58px', '58px', '40px']}
					>
						Sign Up
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Navbar;
