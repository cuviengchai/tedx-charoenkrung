import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                   <link rel='stylesheet' type='text/css' href='/static/css/bulma.css' ></link>
                   <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                </Head>
                <body className="abc">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}