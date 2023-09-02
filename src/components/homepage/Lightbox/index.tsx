"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Moment from "react-moment"
import { saveAs } from "file-saver"
import { useLightbox } from "@/contexts/LightboxContext"
import { GrClose, GrMapLocation } from "react-icons/gr"
import { BiCamera } from "react-icons/bi"
import { MdSecurity } from "react-icons/md"
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineHeart,
    AiOutlineLike,
    AiOutlineShareAlt,
    AiOutlineDownload
} from "react-icons/ai"

const Lightbox = () => {
    const [count, setCount] = useState<number>(0)
    const [openDownloadOptions, setOpenDownloadOptions] = useState<boolean>(false)

    const {
        isLightboxOpen,
        closeLightbox,
        lightBoxUserData,
        lightBoxUrlsData
    } = useLightbox()

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
          e.key === 'Escape' && closeLightbox()
        })

        return () => {
          document.removeEventListener('keydown', (e) => e)
        }
    }, [closeLightbox])

    return (
        <div>
            {isLightboxOpen && (
                <div className="fixed top-0 left-0 w-full h-[100vh] overflow-hidden bg-black/80 z-50">
                    <div className="w-[94%] md:w-[70%] h-[90vh] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] overflow-y-auto bg-white">
                        <div className="sticky -top-[2px] w-full flex justify-end py-3 pr-3 bg-white z-20">
                            <button
                                className="outline-none cursor-pointer"
                                onClick={closeLightbox}
                            >
                                <GrClose className="text-2xl" />
                            </button>
                        </div>
                        <div className="w-full px-16 flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 relative">
                            <div className="flex items-center gap-x-2">
                                <div className="cursor-pointer">
                                    <img
                                        src={lightBoxUserData?.profile_image?.medium ?? lightBoxUserData.profile_image.large ?? lightBoxUserData?.profile_image?.small}
                                        alt={lightBoxUserData?.name}
                                        className="w-[55px] h-[55px] rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="leading-[16px]">
                                        <h3 className="text-md ml-1">
                                            {lightBoxUserData?.name}
                                        </h3>
                                    </div>
                                    <div className="">
                                        {lightBoxUserData?.instagram_username && (
                                            <Link
                                                href={`https://www.instagram.com/${lightBoxUserData?.instagram_username}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="outline-none"
                                            >
                                                <div className="flex items-center gap-x-[2px]">
                                                    <AiOutlineInstagram
                                                        className="text-xl"
                                                    />
                                                    <h4 className="text-sm font-semibold">
                                                        @{lightBoxUserData?.instagram_username}
                                                    </h4>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <button
                                    title="Curtir"
                                    className="py-2 px-3 border border-solid rounded-md cursor-pointer"
                                >
                                    <AiOutlineHeart className="text-lg" />
                                </button>
                                <button
                                    title="Compartilhar"
                                    className="py-2 px-3 border border-gray-300 rounded-md cursor-pointer"
                                >
                                    <AiOutlineShareAlt className="text-lg" />
                                </button>
                                <div className="flex items-center gap-x-1 py-2 px-3 border border-gray-300 rounded-md">
                                    <button title="Curtidas que essa imagem recebeu">
                                        <AiOutlineLike className="text-lg cursor-pointer" />
                                    </button>
                                    <div className="text-sm">
                                        {lightBoxUserData?.likes}
                                    </div>
                                </div>
                                <button
                                    title="Fazer o download da imagem"
                                    className="py-2 px-3 border border-gray-300 rounded-md cursor-pointer"
                                    onClick={() => {setOpenDownloadOptions(!openDownloadOptions)}}
                                >
                                    <AiOutlineDownload className="text-xl" />
                                </button>
                            </div>
                            {openDownloadOptions && (
                                <div className="absolute top-[125px] md:top-[60px] right-16 bg-white border border-gray-300 rounded-md z-10">
                                    <div className="py-4">
                                        <ul className="flex flex-col gap-y-1 list-none">
                                            <li className="px-6 py-2 text-sm hover:bg-gray-200">
                                                <button
                                                    onClick={() => {
                                                        setCount(count + 1)
                                                        saveAs(
                                                            lightBoxUrlsData?.small,
                                                            `download-${count}`
                                                        )
                                                    }}
                                                >
                                                    <div className="flex items-center gap-x-2">
                                                        <AiOutlineDownload className="text-lg text-gray-400" />
                                                        <div>Baixar Imagem Pequena</div>
                                                    </div>
                                                </button>
                                            </li>
                                            <li className="px-6 py-2 text-sm hover:bg-gray-200">
                                                <button
                                                    onClick={() => {
                                                        setCount(count + 1)
                                                        saveAs(
                                                            lightBoxUrlsData?.regular,
                                                            `download-${count}`
                                                        )
                                                    }}
                                                >
                                                    <div className="flex items-center gap-x-2">
                                                        <AiOutlineDownload className="text-lg text-gray-400" />
                                                        <div>Baixar Imagem Média</div>
                                                    </div>
                                                </button>
                                            </li>
                                            <li className="px-6 py-2 text-sm hover:bg-gray-200">
                                                <button
                                                    onClick={() => {
                                                        setCount(count + 1)
                                                        saveAs(
                                                            lightBoxUrlsData?.full,
                                                            `download-${count}`
                                                        )
                                                    }}
                                                >
                                                    <div className="flex items-center gap-x-2">
                                                        <AiOutlineDownload className="text-lg text-gray-400" />
                                                        <div>Baixar Imagem Grande</div>
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="w-full md:w-[80%] mx-auto my-6 overflow-hidden">
                            <img
                                src={lightBoxUrlsData?.full}
                                alt={lightBoxUserData.alt}
                                className="hover:scale-150 transition-transform cursor-zoom-in"
                            />
                        </div>
                        <div className="px-4 md:px-16">
                            <div className="flex flex-col md:flex-row items-center gap-x-16 text-center md:text-start">
                                <div>
                                    <h4 className="text-gray-500">
                                        Visualizações
                                    </h4>
                                    <p>
                                        {lightBoxUserData?.views ?? "0"}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-gray-500">
                                        Downloads
                                    </h4>
                                    <p>
                                        {lightBoxUserData?.downloads ?? "0"}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-gray-500">
                                        Data de publicação
                                    </h4>
                                    <Moment format="DD/MM/YYYY">
                                        {lightBoxUserData.created_at ?? lightBoxUserData.update_at}
                                    </Moment>
                                </div>
                            </div>
                            <div className="py-6">
                                <div className="flex items-center gap-x-2 mb-1">
                                    <GrMapLocation className="text-lg" />
                                    {lightBoxUserData?.location ? (
                                        <Link
                                            href={`https://www.google.com/maps/place/${lightBoxUserData?.location}`}
                                            target="_blank"
                                            className="text-sm capitalize outline-none"
                                        >
                                            {lightBoxUserData?.location}
                                        </Link>
                                    ): (
                                        <p className="text-sm">
                                            Não informado pelo fotógrafo
                                        </p>
                                    )}
                                </div>
                                {lightBoxUserData?.instagram_username && (
                                    <div className="flex items-center gap-x-2 mb-1">
                                        <AiOutlineInstagram className="text-xl" />
                                        <Link
                                            href={`https://www.instagram.com/${lightBoxUserData.instagram_username}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm outline-none"
                                        >
                                            @{lightBoxUserData?.instagram_username}
                                        </Link>
                                    </div>
                                )}
                                {lightBoxUserData?.twitter_username && (
                                    <div className="flex items-center gap-x-2 mb-1">
                                        <AiOutlineTwitter className="text-xl" />
                                        <Link
                                            href={`https://www.twitter.com/${lightBoxUserData?.twitter_username}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm outline-none"
                                        >
                                            @{lightBoxUserData?.twitter_username}
                                        </Link>
                                    </div>
                                )}
                                <div className="flex items-center gap-x-2 mb-1">
                                    <BiCamera className="text-xl" />
                                    {lightBoxUserData?.exif?.name ? (
                                        <p className="text-sm">
                                            {lightBoxUserData?.exif?.name}
                                        </p>
                                    ) : (
                                        <p className="text-sm">
                                            Não informado pelo fotógráfo
                                        </p>
                                    )}
                                </div>
                                <div className="flex items-center gap-x-2 mb-1">
                                    <MdSecurity className="text-md" />
                                    <p className="text-sm">
                                        Uso gratuito sob nossa licença
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Lightbox