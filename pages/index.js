import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

import { Box } from '@chakra-ui/react';
import ShortenBox from '../components/ShortenBox';
import Statistic from '../components/Statistic';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';
import { Provider } from 'react-redux';
import store from '../components/redux/store';

export default function Home() {
	return (
		<Box overflowX={'hidden'}>
			<Provider store={store}>
				<Head>
					<title>Shortly</title>
				</Head>
				<Navbar />
				<Box width="100vw">
					<Hero />
					<ShortenBox />
					<Statistic />
					<GetStarted />
				</Box>
				<Footer />
			</Provider>
		</Box>
	);
}
