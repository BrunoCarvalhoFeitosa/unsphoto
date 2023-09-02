import { Fragment } from "react"
import Hero from "@/components/homepage/Hero"
import Gallery from "@/components/homepage/Gallery"
import Lightbox from "@/components/homepage/Lightbox"

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Gallery />
      <Lightbox />
    </Fragment>
  );
}
