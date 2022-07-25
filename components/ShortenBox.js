import React, { useState } from 'react';
import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import { fetchData } from './redux/linkSlice';
import { useDispatch, useSelector } from 'react-redux';

const ShortenBox = () => {
	const [inputValue, setInputValue] = useState('');
	const { loading, error } = useSelector((state) => state.link);
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(fetchData(inputValue.trim()));

		setInputValue('');
	};

	return (
		<Box marginTop="3rem" h="86px" position="relative" width="100vw">
			<Box
				display="flex"
				justifyContent="center"
				position="absolute"
				right="0"
				left="0"
				width="100%"
			>
				<form onSubmit={submitHandler}>
					<FormControl
						position="absolute"
						left="50%"
						transform="translateX(-50%)"
						display="flex"
						flexDirection={['column', 'column', 'row']}
						justifyContent="center"
						alignItems="center"
						w={['83.5%', '82%', '81.6670%']}
						p={['0 1rem', '0 1rem', '3rem']}
						h={['40', '40', '10rem']}
						borderRadius="10px"
						backgroundSize="cover"
						backgroundRepeat="no-repeat"
						backgroundImage="url('/assets/Meteor.svg')"
						backgroundColor="#3b3054"
					>
						<Input
							border="3px solid #fff"
							_focus={{
								border: '3px solid #f46262',
							}}
							type="text"
							placeholder="Shorten a link here..."
							fontSize="1rem"
							borderRadius="5px"
							w={['89%', '85%', '80%']}
							h={['44.25px', '44.25', '62.4px']}
							p={['0.8rem', '0.8rem', '1.2rem']}
							marginBottom={error ? '0' : ['15px', '15px', '0']}
							bg="white"
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
						/>
						{error && (
							<Box
								color="danger"
								position={['static', 'static', 'absolute']}
								left="50px"
								fontSize={['0.85rem', '0.85rem', '1.05rem']}
								bottom="15px"
								alignSelf="start"
								marginTop="1.5"
								marginLeft={['8%', '8%', '0']}
								marginBottom={['9px', '9px', '0']}
							>
								{error.error.split('.')[0]}
							</Box>
						)}
						<Button
							type="submit"
							variant="solid"
							isLoading={loading}
							loadingText="Shortening"
							spinnerPlacement="start"
							width={['89%', '85%', '20%']}
							p={['0.8rem', '0.8rem', '1px 6px']}
							marginLeft={['0', '0', '20px']}
							fontSize={['1rem', '1rem', '1rem', '1.3rem', '1.6rem']}
							color="white"
							bg="primary"
							_hover={{ bg: 'btnHover' }}
							h={['44.25px', '50.67px', '57.06px', '62.4px']}
						>
							Shorten It!
						</Button>
					</FormControl>
				</form>
			</Box>
		</Box>
	);
};

export default ShortenBox;
