"use client"

import React, { useEffect, useState } from "react"
import { UnsphotoApiCompleteType } from "@/@types/typings"
import axios from "axios"
import { useSearch } from "@/contexts/SearchContext"
import useVerifyScrollBottom from "@/hooks/useVerifyScrollBottom"
import GalleryImage from "@/components/homepage/GalleryImage"
import Loading from "@/components/common/Loading"

const Gallery = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [images, setImages] = useState<any>([])
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { isSearched, searchedResults } = useSearch()
  const reachedBottom = useVerifyScrollBottom()

  const loadMoreImages = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/photos/random?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&count=50&page=${currentPage}`
      )

      if (response.data.length > 0) {
        setImages((prevImages: any) => [...prevImages, ...response.data])
        setCurrentPage((prevPage) => prevPage + 1)
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Error while fetch images", error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadMoreImages()
  }, [])

  useEffect(() => {
    if (reachedBottom) {
      loadMoreImages()
    }
  }, [reachedBottom])

  return (
    <div className="w-full bg-white" id="gallerySection">
      <div className={`${searchedResults ?? images ? "pt-6" : "pt-0" }`}>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {isSearched && searchedResults ? (
              <div className="columns-2 md:columns-3 lg:columns-3 gap-1">
                {searchedResults.map((image: UnsphotoApiCompleteType, index: number) => (
                  <div key={index}>
                    <GalleryImage data={image} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="columns-2 md:columns-3 lg:columns-3 gap-1">
                {images.map((image: UnsphotoApiCompleteType, index: number) => (
                  <div key={index}>
                    <GalleryImage data={image} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery