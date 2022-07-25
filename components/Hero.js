import React from 'react';
import { Box, Text, Button, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import people from '../public/assets/working_people.png';

const Hero = () => {
	return (
		<Box
			display="flex"
			alignItems="center"
			flexDirection={['column-reverse', 'column-reverse-640px', 'row']}
			p={['1rem 2rem', '1rem 10%']}
			w="100vw"
		>
			<Box
				textAlign={['center', 'center', 'left']}
				marginTop={['50px', '50px', '0']}
			>
				<Text
					color="navBg"
					fontSize={['10vw', '10vw', '6vw', '6vw']}
					lineHeight="1.2em"
					fontWeight="700"
				>
					More than just shorter links
				</Text>
				<Text
					fontSize={['4vw', '2.7vw', '2.3vw', '1.5vw']}
					color="#9E9AA7"
					w={['auto', 'auto', '75%']}
				>
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</Text>
				<Button
					color="white"
					bg="primary"
					_hover={{ bg: 'btnHover' }}
					borderRadius="100vw"
					p="15px 40px"
					fontSize="1.6rem"
					h="59.33px"
					mt="2.5rem"
					fontFamily="Arial"
				>
					Get Started
				</Button>
			</Box>
			<Image
				src={people}
				alt="hero_img"
				w="700px"
				h="430px"
				layout="intrinsic"
			/>
		</Box>
	);
};

export default Hero;
