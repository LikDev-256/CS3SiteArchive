import React, {useEffect, useState} from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import CompatBtn from "../components/compatbtn"
import SEO from "../components/seo"

import bgImage from "../media/phones.webp"

/*
 For some inexplicable reason on first load React decides to make this div class into "divider".
 I have no idea why that happens this is why I implemented this weird hack that forces React to reload classes.
 If you have any idea how to fix this properly, you're more than welcome to open a PR.
*/
const BuggyDiv = () => {
    const [clName, setClName] = useState("flex justify-center w-full mb-5");

    useEffect(() => {
        setTimeout(() => {
            setClName("flex justify-center w-full mb-5 div-loaded");
        }, 100)
    }, [])

    return (
        <div className={clName}>
            <CompatBtn autoFocus={true} className="btn-primary" href="/install/">Install</CompatBtn>
            <div className="divider divider-horizontal" />
            <CompatBtn className="btn-primary" href="/repos/">Repositories</CompatBtn>
        </div>
    )
}

const IndexPage = () => {
    return <Layout>
        <Hero bg={bgImage}>
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-lg">
                Cloudstream is an Android app for streaming and downloading Movies, TV-Series and Anime.
                <div className="divider" />
                On this official cloudstream/recloudstream site you can find downloads links and a list of repositories of extensions.
            </p>
            <BuggyDiv />
            <CompatBtn className="btn-secondary" href="/docs/">Guides, FAQ & Docs</CompatBtn>
        </Hero>
    </Layout>

}

export default IndexPage


export function Head() {
    return <SEO />
}