import Head from 'next/head';
import Link from 'next/link';


const linkStyle = {
    marginRight: 15
};
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}
  
export default (props) => (
    <div>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="/static/css/index.css"/>
        </Head>
        <div style={layoutStyle}>
            <div>
                <div>
                <Link href="/">
                    <a style={linkStyle}>Home</a>
                </Link>
                <Link href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
                </div>
                <p>Hello Next.js</p>
            </div>
            {props.children}
        </div>
    </div>
)