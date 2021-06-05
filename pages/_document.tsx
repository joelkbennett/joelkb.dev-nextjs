import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    console.log('what is happening??');
    return (
      <Html lang="en">
        <Head />
        <body className="ohoho">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
