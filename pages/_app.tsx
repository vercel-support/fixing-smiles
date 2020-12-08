import Head from 'next/head';
import StructuredData from 'components/StructuredData';

import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" type="image/png" href="/favicon.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap"
					rel="stylesheet"
				/>
				<StructuredData />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
