import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import DocsCard from "../../components/cards/docs"
import SEO from "../../components/seo"

const links = [
    {
        "url": "https://mustardchef.github.io/csdocs/",
        "name": "Docs",
        "desc": "You will find all the help and information here."
    },
    {
        "url": "https://recloudstream.github.io/dokka/",
        "name": "Dokka",
        "desc": "Basically javadoc"
    }
]

const DocsPage = () => {
    return <Layout>
        <div className="flex items-center w-full flex-col">
            {links.map(it => (
                <article className="card bg-base-200 shadow-xl mx-10 mb-5 w-full md:w-2/3" key={it.url}>
                    <div className="card-body">
                        <h2 className="card-title">{it.name}</h2>
                        <p>{it.desc}</p>
                        <div className="card-actions justify-end">
                            <a href={it.url} className="btn btn-primary">View</a>
                        </div>
                    </div>
                </article>
            ))}
            <StaticQuery
                query={graphql`
                query {
                    allMarkdownRemark(
                        sort: {fields: frontmatter___order}
                        filter: {frontmatter: {parent: {eq: null}}}
                    ) {
                            nodes {
                                id
                                frontmatter {
                                    title
                                }
                                excerpt
                                fileAbsolutePath
                            }
                        }
                    }
            `}
                render={data => (
                    <>{data.allMarkdownRemark.nodes.map(it => {
                        return <DocsCard md={it} key={it} />
                    })}</>
                )}
            />
        </div>
    </Layout>

}

export default DocsPage


export function Head() {
    return <SEO title="Cloudstream Docs" />
}
