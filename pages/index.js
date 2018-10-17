import Layout from '../components/Layout.js'
import Link from 'next/link'
import MetaTags from 'react-meta-tags'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <MetaTags>
      <link rel='stylesheet' type='text/css' href='/static/css/bulma.css' ></link>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </MetaTags>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
    <section className="section">
    <div className="container">
      <h1 className="title">
        Hello World
      </h1>
      <p className="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  </Layout>
)