import Layout from '../components/Layout';
import Router from 'next/router';
import Link from 'next/link';



const PostLink = (props) => {
  Router.onRouteChangeStart = url => {
    console.log('App is changing to: ', url)
  }
  return (
  
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default () => (
  <Layout>
    <h1>关于我们</h1>
  </Layout>
)