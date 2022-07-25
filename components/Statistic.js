import React, { useEffect, useState } from 'react';
import { Box, Text, Divider, Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { copyLink } from './redux/linkSlice';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Statistic = () => {
	const { lists, isCopied } = useSelector((state) => state.link);
	const dispatch = useDispatch();

	return (
		<Box
			backgroundColor="#f0f0f6"
			padding={['4rem 0 1rem', '4rem 0 1rem', '4rem 4rem 1rem']}
			textAlign="center"
			width="100vw"
		>
			{/* result */}

			<Box
				marginTop="30px"
				w="100%"
				display="flex"
				flexDirection="column"
				alignItems="center"
			>
				{lists &&
					lists?.map((item) => (
						<Box
							key={item.id}
							display="flex"
							flexDirection={['column', 'column', 'row']}
							justifyContent={['space-evenly', 'space-evenly', 'space-between']}
							minH={['150px', '150px', 'auto']}
							bg="#fff"
							padding={['0 4% 0 5%', '0 4% 0 5%', '1%']}
							borderRadius="10px"
							fontSize="1rem"
							alignItems="center"
							textAlign="left"
							margin={['0  5% 5% 5%', '0 5% 5% 5%', '0 0 20px 0']}
							w={['90%', '90%', '95%']}
						>
							<Text
								width="100%"
								alignSelf={['flex-start', 'flex-start', 'center']}
								whiteSpace="nowrap"
								overflowX={['scroll', 'hidden']}
							>
								{item.payload.result.original_link}
							</Text>
							<Divider
								alignSelf="flex-start"
								width="95%"
								display={['block', 'block', 'none']}
								opacity="0.4"
								borderColor="secondary"
								borderWidth="2px"
								outline="none"
							/>
							<Box
								display="flex"
								flexDirection={['column', 'column', 'row']}
								justifyContent={['flex-end']}
								alignItems="center"
								width="100%"
							>
								<Text
									alignSelf={['flex-start', 'flex-start', 'center']}
									color="primary"
								>
									{item.payload.result.short_link}
								</Text>
								<CopyToClipboard text={item.payload.result.short_link}>
									<Button
										bg={item.isCopied ? 'copiedBg' : 'primary'}
										width={['98%', '75%', 'auto']}
										alignSelf={['flex-start', 'center', 'center']}
										_hover={
											item.isCopied ? { bg: 'navbg' } : { bg: 'btnHover' }
										}
										padding="10px 30px"
										margin={['5px 0', '5px 10px']}
										color="white"
										fontWeight="700"
										borderRadius="10px"
										border="none"
										fontSize="1rem"
										cursor="pointer"
										outline="none"
										onClick={() => {
											dispatch(copyLink(item.id));
										}}
									>
										{item.isCopied ? 'Copied!' : 'Copy'}
									</Button>
								</CopyToClipboard>
							</Box>
						</Box>
					))}
			</Box>
			<Text
				lineHeight="1.2em"
				fontWeight="700"
				fontSize={['6vw', '5vw', '5vw', '3vw']}
				color="navBg"
				paddingTop="100px"
				textAlign="center"
			>
				Advanced Statistics
			</Text>
			<Text
				color="#9e9aa7"
				display="inline-block"
				w={['80%', '80%', '55%']}
				textAlign="center"
				fontSize={['4vw', '2.7vw', '2vw']}
				margin="1em auto"
			>
				Track how your links are performing across the web with our advanced
				statistics dashboard.
			</Text>
			{/* cards */}
			<Box
				position="relative"
				margin="100px 0"
				display="flex"
				flexDirection={['column', 'column', 'row']}
				alignItems="center"
				justifyContent="space-between"
			>
				<Divider
					position="absolute"
					width={['10px', '10px', '80%']}
					h={['80%', '80%', '10px']}
					top="150px"
					right={['50%', '50%', '0']}
					transform={['translateX(50%)', 'translateX(50%)', 'none']}
					zIndex="1"
					backgroundColor="primary"
				/>
				<Box
					width={['70%', '70%', '30%']}
					height="0%"
					zIndex="2"
					padding="25px"
					borderRadius="10px"
					boxSizing="border-box"
					backgroundColor="#fff"
					position="relative"
					textAlign={['center', 'center', 'left']}
				>
					<Box
						position="absolute"
						top="0"
						left={['50%', '50%', '30px']}
						marginTop="-52px"
						backgroundColor="#3b3054"
						borderRadius="100%"
						width="100px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						height="100px"
						transform={['translateX(-50%)', 'translateX(-50%)', 'none']}
					>
						<Image
							src={'/assets/cardIcon.svg'}
							objectFit="cover"
							alt="card1Icon"
							position="absolute"
							width="50px"
						/>
					</Box>

					<Text
						lineHeight="2rem"
						paddingTop="3.8rem"
						color="navBg"
						fontSize={['1.4rem', '1.4rem', '2vw']}
						fontWeight="700"
						margin="0"
					>
						Brand Recognition
					</Text>
					<Text margin="16px 0" color="#9e9aa7">
						Boost your brand recognition with each click. Generic links don’t
						mean a thing. Branded links help instil confidence in your content.
					</Text>
				</Box>
				{/* Box 2 */}
				<Box
					width={['70%', '70%', '30%']}
					height="0%"
					zIndex="2"
					padding="25px"
					borderRadius="10px"
					boxSizing="border-box"
					backgroundColor="#fff"
					position="relative"
					marginTop={['100px', '100px', '50px']}
					textAlign={['center', 'center', 'left']}
				>
					<Box
						position="absolute"
						top="0"
						left={['50%', '50%', '30px']}
						marginTop="-52px"
						backgroundColor="#3b3054"
						borderRadius="100%"
						width="100px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						height="100px"
						transform={['translateX(-50%)', 'translateX(-50%)', 'none']}
					>
						<Image
							src={'/assets/cardIcon.svg'}
							objectFit="cover"
							alt="card1Icon"
							position="absolute"
							width="50px"
						/>
					</Box>

					<Text
						lineHeight="2rem"
						paddingTop="3.8rem"
						color="navBg"
						fontSize={['1.4rem', '1.4rem', '2vw']}
						fontWeight="700"
						margin="0"
					>
						Detailed Records
					</Text>
					<Text margin="16px 0" color="#9e9aa7">
						Boost your brand recognition with each click. Generic links don’t
						mean a thing. Branded links help instil confidence in your content.
					</Text>
				</Box>
				{/* Box 3 */}
				<Box
					width={['70%', '70%', '30%']}
					height="0%"
					zIndex="2"
					padding="25px"
					borderRadius="10px"
					boxSizing="border-box"
					backgroundColor="#fff"
					position="relative"
					marginTop="100px"
					textAlign={['center', 'center', 'left']}
				>
					<Box
						position="absolute"
						top="0"
						left={['50%', '50%', '30px']}
						marginTop="-52px"
						backgroundColor="#3b3054"
						borderRadius="100%"
						width="100px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						height="100px"
						transform={['translateX(-50%)', 'translateX(-50%)', 'none']}
					>
						<Image
							src={'/assets/cardIcon.svg'}
							objectFit="cover"
							alt="card1Icon"
							position="absolute"
							width="50px"
						/>
					</Box>

					<Text
						lineHeight="2rem"
						paddingTop="3.8rem"
						color="navBg"
						fontSize={['1.4rem', '1.4rem', '2vw']}
						fontWeight="700"
						margin="0"
					>
						Fully Customizable
					</Text>
					<Text margin="16px 0" color="#9e9aa7">
						Boost your brand recognition with each click. Generic links don’t
						mean a thing. Branded links help instil confidence in your content.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default Statistic;
