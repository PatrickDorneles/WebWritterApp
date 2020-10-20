import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document<DocumentProps> {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Alata&family=Fira+Code&family=Roboto&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}