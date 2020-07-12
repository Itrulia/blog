import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../src/components/footer/footer';
import { Navigation } from '../src/components/navigation/navigation';
import { wrapper } from '../src/store/store';
import { theme } from '../src/theme/theme';
import { Styles } from '../src/styles/styles';
import { ConnectedRouter } from 'connected-next-router';

export function App({ Component, pageProps }: AppProps) {
	return (
		<ConnectedRouter>
			<ThemeProvider theme={theme}>
				<>
					<Styles />
					<Navigation />
					<Component {...pageProps} />
					<Footer />
				</>
			</ThemeProvider>
		</ConnectedRouter>
	);
}

export const reportWebVitals = metric => {
	console.log(metric);
};

export default wrapper.withRedux(App);
