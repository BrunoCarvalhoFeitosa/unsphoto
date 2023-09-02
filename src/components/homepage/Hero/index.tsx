"use client"

import Image from "next/image"
import HeroImage from "@/assets/images/image-hero.jpg"
import SearchForm from "@/components/common/SearchForm"

const Hero = () => {
    return (
        <div className="w-full">
            <div className="relative">
                <div className="w-full h-[80vh] md:h-full overflow-hidden">
                    <Image
                        src={HeroImage}
                        alt="Imagem de uma mulher indígena"
                        className="w-full h-[90vh] object-cover"
                    />
                </div>
                <div className="w-full h-[80vh] md:h-full absolute top-0 left-0 bg-black/50">
                    <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90%] md:w-[68%] text-white">
                        <h1 className="text-5xl font-bold">
                            Unsphoto
                        </h1>
                        <div className="mt-4 mb-6 font-normal text-[16px]">
                            <p className="text-white">
                                Fonte de recursos visuais da internet.
                            </p>
                            <p className="text-white">
                                Fornecido por criadores de todo o mundo.
                            </p>
                        </div>
                        <SearchForm type="hero" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero