import * as React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
const ContentfulPost = ({ data}) => {

  const contentfulHomepage = data.contentfulHomepage

  const title = contentfulHomepage?.title;
  const content = JSON.parse(contentfulHomepage?.content?.raw, null, 2);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />;
      }
    }
  };

  return (
    <Layout >
    <ol style={{ listStyle: `none` }}>

          <li key={contentfulHomepage.id}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                    <span itemProp="headline">{title}</span>
                </h2>
              </header>
              <section>

                {documentToReactComponents(content, options)}

              </section>
            </article>
          </li>

    </ol>
  </Layout>
  )
}

export default ContentfulPost;

export const query = graphql`
  query ($slug: String!) {
    contentfulHomepage(slug: { eq: $slug }) {
      id,
      title,
      content {
        raw
      }
    }
  }
`;

