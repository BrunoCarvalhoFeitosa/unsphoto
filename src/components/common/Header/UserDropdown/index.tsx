import React from "react"
import { menuDropdownUser } from "@/data/MenuDropdown"

interface Props {
    openUserDropdown: boolean;
}

const UserDropdown: React.FC<Props> = ({ openUserDropdown }) => {
    return (
        <div>
            {openUserDropdown && (
                <div className="fixed right-0 md:right-8 w-[96%] md:w-auto bg-white border border-gray-300 rounded-md z-10">
                    <div className="py-6 md:py-4 px-4">
                        <ul className="flex flex-col gap-y-2 list-none">
                            {menuDropdownUser.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-sm text-gray-500 hover:text-black cursor-pointer"
                                >
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserDropdown