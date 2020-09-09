import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
        <h2>Not Found</h2>
        <p>Not a Valid URL</p>
        <a href="https://www.ajayjarhad.com/" className="button primary">
          Go Back
        </a>
      </header>
    </article>
  </Layout>
);

export default IndexPage;
