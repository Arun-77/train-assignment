import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const GetStarted = () => {
	return (
		<Box
			backgroundColor="copiedBg"
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			color="white"
			backgroundImage="url('/assets/Meteor.svg')"
			fontWeight="700"
			height="18rem"
			width="100vw"
			display="flex"
			flexDirection="column"
			alignItems="center"
			textAlign="center"
			justifyContent="space-evenly"
		>
			<Text
				fontSize={['1.5rem', '2.5rem', '2.8rem']}
				paddingTop="10"
				lineHeight="1.2em"
			>
				Boost your links today
			</Text>
			<Button
				bg="primary"
				borderRadius="100vw"
				fontSize={['1rem', '1.6rem']}
				h={['48.67px', '59.33px']}
				padding="15px 40px"
				fontWeight="700"
				border="none"
				outline="none"
				cursor="pointer"
				_hover={{ bg: 'btnHover' }}
			>
				Get Started
			</Button>
		</Box>
	);
};

export default GetStarted;
