"use client"

import React, { Fragment, useState, useEffect } from "react"
import Link from "next/link"
import { useKeenSlider } from "keen-slider/react"
import { useSearch } from "@/contexts/SearchContext"
import { FaUserCircle } from "react-icons/fa"
import { CgMenuRight } from "react-icons/cg"
import { searchService } from "@/services/search"
import { LogoSvg } from "@/assets/svg/logo"
import SearchForm from "@/components/common/SearchForm"
import MenuDropdown from "./MenuDropdown"
import UserDropdown from "./UserDropdown"
import "keen-slider/keen-slider.min.css"

const Header = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [isHideCarousel, setIsHideCarousel] = useState<boolean>(false)
    const [openMenuDropdown, setOpenMenuDropdown] = useState<boolean>(false)
    const [openUserDropdown, setOpenUserDropdown] = useState<boolean>(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        breakpoints: {
            "(min-width: 320px)": {
                slides: {
                    perView: 3,
                },
            },
            "(min-width: 768px)": {
                slides: {
                    perView: 5,
                },
            },
            "(min-width: 1024px)": {
                slides: {
                    perView: 7,
                },
            },
            "(min-width: 1240px)": {
                slides: {
                    perView: 10,
                },
            },
        },
        slides: { perView: 1 },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },

    })

    const { setIsSearched, setSearchedResults } = useSearch()

    const highlightPictures = [
        { name: "No Lago" },
        { name: "Wallpapers" },
        { name: "Natureza" },
        { name: "Texturas" },
        { name: "Arquitetura" },
        { name: "Filme" },
        { name: "Urbanismo" },
        { name: "Experimental" },
        { name: "Animais" },
        { name: "Moda" },
        { name: "Negócios" },
        { name: "Comida" },
        { name: "Viajar" },
        { name: "Povo" },
        { name: "Espiritualidade" },
        { name: "Atletismo" },
        { name: "Bem Estar" },
        { name: "Cultura" },
    ]

    const Arrow = (props: any) => {
        const disabeld = props.disabled ? " arrow--disabled" : ""

        return (
          <svg
            onClick={props.onClick}
            className={`arrow w-3 h-3 fill-gray-500 cursor-pointer ${
              props.left ? "arrow--left absolute top-[50%] translate-y-[-50%] -left-3" : "arrow--right absolute top-[50%] translate-y-[-50%] -right-3"
            } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {props.left && (
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
          </svg>
        )
    }

    const scrollToGallery = () => {
        const gallerySection = document.getElementById('gallerySection')?.offsetTop

        gallerySection && (
            window.scrollTo({
                top: gallerySection - 175,
                behavior: "smooth"
            })
        )
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 2000 ? setIsHideCarousel(true) : setIsHideCarousel(false)
        })
    }, [])

    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-10">
            <div className="w-full px-3 py-3 bg-black">
                <p className="w-[70%] mx-auto text-sm md:text-lg text-center text-white">
                    Compre sua licença agora e tenha acesso a imagens exclusivas.
                </p>
            </div>
            <div className="relative flex items-center justify-around gap-x-4 md:gap-x-12 py-3 w-[96%] mx-auto">
                <div className="flex flex-1 items-center gap-x-4">
                    <div>
                        <Link
                            href="/"
                            className="outline-none"
                        >
                            <LogoSvg />
                        </Link>
                    </div>
                    <SearchForm type="header" />
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex items-center gap-x-4">
                        <li className="text-[13px] md:text-[16px] text-gray-500 hover:text-black cursor-pointer">
                            Anunciar
                        </li>
                        <li className="text-[13px] md:text-[16px] text-gray-500 hover:text-black cursor-pointer">
                            Blog
                        </li>
                        <li className="text-[13px] md:text-[16px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-900 cursor-pointer">
                            Unsphoto+
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex items-center gap-x-4">
                        <li className="hidden lg:flex">
                            <button className="rounded-md bg-gray-200 py-2 px-4 text-gray-500 cursor-not-allowed">
                                Enviar uma foto
                            </button>
                        </li>
                        <li onClick={() => setOpenUserDropdown(!openUserDropdown)}>
                            <FaUserCircle
                                className="text-2xl text-black cursor-pointer"
                            />
                        </li>
                        <li onClick={() => setOpenMenuDropdown(!openMenuDropdown)}>
                            <CgMenuRight
                                className="text-2xl text-black cursor-pointer"
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <UserDropdown openUserDropdown={openUserDropdown} />
            <MenuDropdown openMenuDropdown={openMenuDropdown} />
            <div className={`flex items-center gap-x-5 md:gap-x-12 w-[96%] pt-3 pb-4 mx-auto transition-opacity duration-700 ${isHideCarousel ? "opacity-0 hidden" : "opacity-100 visible"}`}>
                <div className="w-[90%] mx-auto">
                    {loaded && instanceRef.current && (
                        <p className="text-[9px] md:text[11px] text-gray-500 leading-[9px] md:leading-none lg:ml-[30px] mb-1">
                            Em destaque
                        </p>
                    )}
                    <div className="navigation-wrapper relative">
                        <ul ref={sliderRef} className="keen-slider list-none">
                            {highlightPictures.map((item, index) => (
                                <li
                                    key={index}
                                    className="keen-slider__slide text-[13px] md:text-[15px] text-center text-gray-500 hover:text-black cursor-pointer"    
                                    onClick={async () => {
                                        try {
                                            const search = await searchService(item.name)
                                            setIsSearched(true)
                                            setSearchedResults(search.data.results)
                                            scrollToGallery()
                                        } catch (error) {
                                            console.error("Error while get images", error)
                                        }
                                    }}
                                >
                                    {loaded && instanceRef.current && (
                                        <div>{item.name}</div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        {loaded && instanceRef.current && (
                            <Fragment>
                                <Arrow
                                    left
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                />
                                <Arrow
                                    className="w-4 h-4"
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides.length - 1
                                    }
                                />
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header