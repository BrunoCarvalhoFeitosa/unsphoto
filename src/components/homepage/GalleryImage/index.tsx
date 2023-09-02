import type { UnsphotoApiCompleteType } from "@/@types/typings"
import React, { useState } from "react"
import Link from "next/link"
import { saveAs } from "file-saver"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { AiOutlineDownload, AiOutlineInstagram, AiOutlineTwitter, AiOutlinePicture } from "react-icons/ai"
import { useLightbox } from "@/contexts/LightboxContext"

const GalleryImage: React.FC<UnsphotoApiCompleteType> = ({
    user,
    links,
    urls,
    created_at,
    updated_at,
    likes,
    downloads,
    views,
    exif,
    alt
}) => {
    const [showImageCredits, setShowImageCredits] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)
    const {
        openLightbox,
        setLightBoxUserData,
        setLightBoxLinksData,
        setLightBoxUrlsData
    } = useLightbox()

    const handleShowCredits = () => {
        setShowImageCredits(!showImageCredits)
    }

    return (
        <div className="w-full flex relative bg-gray-300">
            <div className="flex" onMouseOver={handleShowCredits}>
                <LazyLoadImage
                    src={urls.full}
                    alt={alt}
                    className="w-full h-full object-cover"
                    effect="blur"
                />
            </div>
            {showImageCredits && (
                <div
                    className="absolute top-0 left-0 w-full h-full py-5 px-2 md:px-4 bg-black/60 cursor-pointer"
                    onMouseLeave={handleShowCredits}
                    onClick={() => {
                        openLightbox()
                        setLightBoxUserData({
                            ...user,
                            created_at,
                            updated_at,
                            likes,
                            downloads,
                            views,
                            exif,
                            alt
                        })
                        setLightBoxLinksData(links)
                        setLightBoxUrlsData(urls)
                    }}
                >
                    <div className="flex items-end space-between h-full">
                        <div className="flex flex-col md:flex-row flex-1 md:items-center gap-x-3">
                            <div className="relative">
                                <img
                                    src={user.profile_image.medium}
                                    alt={`${user.first_name} ${user.last_name}`}
                                    className="rounded-full w-12 h-12"
                                />
                            </div>
                            <div className="text-sm text-white">
                                <p className="leading-none w-[100px] md:w-[130px] truncate ...">
                                    {user.name}
                                </p>
                                {user.instagram_username ? (
                                    <Link
                                        href={`https://www.instagram.com/${user.instagram_username}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-x-1 outline-none"
                                    >
                                        <div>
                                            <AiOutlineInstagram
                                                className="text-white w-[20px] h-[20px]"
                                            />
                                        </div>
                                        <div className="w-[100px] md:w-[130px] truncate ...">
                                            @{user.instagram_username}
                                        </div>
                                    </Link>
                                ) : (
                                    <div>
                                        {user.twitter_username ? (
                                            <Link
                                                href={user.twitter_username}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-x-1 outline-none"
                                            >
                                                <div>
                                                    <AiOutlineTwitter
                                                        className="text-white w-[20px] h-[20px]"
                                                    />
                                                </div>
                                                <div className="md:w-[130px] truncate ...">
                                                    @{user.twitter_username}
                                                </div>
                                            </Link>
                                        ) : (
                                            <Link
                                                href={user.portfolio_url ?? "/"}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-x-1 outline-none"
                                            >
                                                <div>
                                                    <AiOutlinePicture
                                                        className="text-white w-[20px] h-[20px]"
                                                    />
                                                </div>
                                                <div>
                                                    Portfólio
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <button
                                className="py-1 px-2 rounded-md bg-white"
                                onClick={() => {
                                    setCount(count + 1)
                                    saveAs(
                                        urls.full,
                                        `download-${count}`
                                    )
                                }}
                            >
                                <AiOutlineDownload className="text-black text-[24px]" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GalleryImage