import Layout from '../components/Layout';
import { withRouter } from 'next/router';

class PostPage extends React.Component {
  render() {
    const {router} = this.props
    console.log(router)
    return (
      <Layout>
        <h1>{router.query.id}</h1>
      </Layout>
    )
  }
}

export default withRouter(PostPage);