import { Fragment } from "react"
import Hero from "@/components/homepage/Hero"
import Gallery from "@/components/homepage/Gallery"
import Lightbox from "@/components/homepage/Lightbox"

const Home = () => (
  <Fragment>
    <Hero />
    <Gallery />
    <Lightbox />
  </Fragment>
)

export default Home
