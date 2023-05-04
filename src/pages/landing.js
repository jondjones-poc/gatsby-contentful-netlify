import * as React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {

  const siteTitle = data?.site?.siteMetadata?.title || `Title`
  const contentfulHomepage = data.contentfulHomepage

  const title = contentfulHomepage?.title;
  const content = JSON.parse(contentfulHomepage?.content?.raw, null, 2);

  console.log(content)

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
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                    itemProp="description"
                  /> */}


{documentToReactComponents(content)}

                </section>
              </article>
            </li>

      </ol>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
{
  contentfulHomepage(id: {eq: "443cd2c7-41c5-55b3-9dfe-e6a8500d23d2"}) {
    id,
    title,
    content{
      raw
    }
  }
}
`
