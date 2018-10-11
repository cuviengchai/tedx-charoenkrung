import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <html>
                <Head>
                   {/* <link rel="stylesheet" href="../statics/css/bulma.min.css"></link> */}
                   <link rel='stylesheet' type='text/css' href='../statics/css/bulma.min.css' ></link>
                   {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"></link> */}
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