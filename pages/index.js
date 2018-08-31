import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import getData from '../services/index';

Router.onRouteChangeStart = url => {
  console.log('App is changing to: ', url)
}

const Index = (props) => {

  let toAbout = () => {
    Router.push({
      pathname: '/about',
      query: { name: 'Zeit' }
    })
  }

  return (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/g/${show.id}`} 
            href={`/get?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <button onClick={() => toAbout()}>toAbout</button>
    {/* <style jsx>{`
      h1, a {
        font-family: "Arial";
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        margin: 5px 0;
      }
      a {
        text-decoration: none;
        color: blue;
      }
      a:hover {
        opacity: 0.6;
      }
    `}</style> */}
  </Layout>
)
}

Index.getInitialProps = getData;

export default Index