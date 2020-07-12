import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

interface DocumentProps {
	styleTags: any;
}

export default class extends Document<DocumentProps> {
	public static async getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();

		const page = renderPage(App => props =>
			sheet.collectStyles(
				<StyleSheetManager stylisPlugins={[]}>
					<App {...props} />
				</StyleSheetManager>,
			),
		);

		const styleTags = sheet.getStyleElement();

		return { ...page, styleTags };
	}

	public render() {
		return (
			<html>
				<Head>{this.props.styleTags}</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
