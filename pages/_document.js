import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
    }

    render() {
        return (
            <html>
                <Head>
                    <title>Ted</title>
                    <link rel='stylesheet' type='text/css' href='/static/css/bulma.css' ></link>
                    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                    { this.props.styleTags }
                </Head>
                <body className="abc">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}