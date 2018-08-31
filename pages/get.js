import Layout from '../components/Layout'

export default (props) => {
  return (
    <Layout>
      <h1>{props.url.query.id}</h1>
    </Layout>
  )
}