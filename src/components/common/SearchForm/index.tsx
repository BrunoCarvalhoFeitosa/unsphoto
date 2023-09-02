"use client"

import React from "react"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { searchService } from "@/services/search"
import { useSearch } from "@/contexts/SearchContext"
import { CiSearch } from "react-icons/ci"

type DataType = {
    term: string;
}

interface Props {
    type: "header" | "hero";
}

const schema = yup.object({
    term: yup
        .string()
        .min(3, "Preencha corretamente o campo.")
        .required("O campo e-mail é obrigatório."),
}).required()

const SearchForm: React.FC<Props> = ({ type }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const { setIsSearched, setSearchedResults } = useSearch()

    const scrollToGallery = () => {
        const gallerySection = document.getElementById('gallerySection')?.offsetTop

        gallerySection && (
            window.scrollTo({
                top: gallerySection - 175,
                behavior: "smooth"
            })
        )
    }

    const onSubmit = async (data: DataType, event: any) => {
        event.preventDefault()
        
        try {
            const search = await searchService(data.term)
            setIsSearched(true)
            setSearchedResults(search.data.results)
            scrollToGallery()
        } catch (error) {
            console.error("Error while get images", error)
        }
    }

    return (
        <div className="w-full">
            <form
                className="m-0 p-0"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="relative">
                    <div>
                        <input
                            type="text"
                            {...register("term")}
                            placeholder={errors.term ? "Insira um termo válido" : type === "hero" ? "Buscar imagens em alta resolução" : ""}
                            className={`w-full outline-none pl-[50px] text-black rounded-md placeholder:text-sm md:placeholder:text-[16px] ${type === "hero" ? "bg-white h-[50px] md:h-[65px] md:pl-[80px]" : "bg-gray-200 h-[40px] md:pl-[65px]"}`}
                        />
                    </div>
                    <div className="absolute top-[50%] translate-y-[-50%] -left-1">
                        <button
                            type="submit"
                            className={`flex justify-center items-center text-gray-500 rounded-md ${type === "hero" ? "w-[65px] md:w-[75px] h-[50px] md:h-[65px]" : "w-[60px] md:w-[60px] h-[40px]"}`}
                        >
                            <CiSearch className="text-3xl text-gray-500" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm