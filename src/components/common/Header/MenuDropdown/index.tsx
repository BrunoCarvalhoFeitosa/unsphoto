import React from "react"
import { MdOutlineHomeWork } from "react-icons/md"
import { VscMegaphone } from "react-icons/vsc"
import { GoPeople } from "react-icons/go"
import { RiArrowDropDownFill } from "react-icons/ri"
import {
    menuDropdownCompany,
    menuDropdownProduct,
    menuDropdownCommunity,
    menuDropdownFooter
} from "@/data/MenuDropdown"

interface Props {
    openMenuDropdown: boolean;
}

const MenuDropdown: React.FC<Props> = ({ openMenuDropdown }) => {
    return (
        <div>
            {openMenuDropdown && (
                <div className="fixed right-0 md:right-2 w-[96%] md:w-auto bg-white border border-gray-300 rounded-md z-10">
                    <div className="flex flex-col md:flex-row justify-between gap-y-7 md:gap-y-0 gap-x-16 pt-8 px-8 h-[48vh] md:h-auto overflow-y-auto">
                        <div>
                            <div className="flex items-center gap-x-2">
                                <div>
                                    <MdOutlineHomeWork
                                        className="text-2xl"
                                    />
                                </div>
                                <div className="text-sm font-semibold">
                                    Empresa
                                </div>
                            </div>
                            <div>
                                <ul className="pt-3 pl-7">
                                    {menuDropdownCompany.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-sm text-[#999] hover:text-black mb-2 cursor-pointer"
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-x-2">
                                <div className="">
                                    <VscMegaphone
                                        className="text-2xl"
                                    />
                                </div>
                                <div className="text-sm font-semibold">
                                    Produto
                                </div>
                            </div>
                            <div>
                                <ul className="pt-3 pl-7">
                                    {menuDropdownProduct.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-sm text-[#999] hover:text-black mb-2 cursor-pointer"
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-x-2">
                                <div>
                                    <GoPeople
                                        className="text-2xl"
                                    />
                                </div>
                                <div className="text-sm font-semibold">
                                    Comunidade
                                </div>
                            </div>
                            <div>
                                <ul className="pt-3 pl-7">
                                    {menuDropdownCommunity.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-sm text-[#999] hover:text-black mb-2"
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-4 px-4 md:px-8 mt-7 border-t border-gray-300">
                        <ul className="flex items gap-x-3">
                            {menuDropdownFooter.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-sm text-[#999] hover:text-black cursor-pointer"
                                >
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-x-1">
                            <div className="text-sm text-[#999] hover:text-black cursor-pointer">
                                Português (Brasil)
                            </div>
                            <div className="cursor-pointer">
                                <RiArrowDropDownFill
                                    className="text-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MenuDropdown