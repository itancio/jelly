import { usePathname } from "next/navigation"
import Link from "next/link"
import Menuitem from "./Menuitem"
import MenuItemFollow from "./MenuItemFollow"
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi";
import ClientOnly from "@/app/components/ClientOnly"


export default function SideNavMain() {
    const pathname = usePathname()

    return (
       <>
            <div id="SideNavMain" 
                className={`fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r-w-[75px] overflow-auto
                    ${pathname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'}'
                `}
            >
                <div className="lg:w-full w-[55px] mx-auto">
                    <Link href="/">
                        <Menuitem 
                            iconString="For You" 
                            colorString={pathname == '/' ? '#F02C56' : ''} 
                            sizeString="25"
                        />
                    </Link>
                    <Menuitem iconString="Following" colorString="#000000" sizeString="25"/>
                    <Menuitem iconString="LIVE" colorString="#000000" sizeString="25"/>

                    <div className="border-b lg:ml-2 mt-2" />

                    <h3 className="lg:block text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                        Suggested accounts
                    </h3>

                    <div className="lg:hidden block pt-3" />
                    <ClientOnly>
                        <div className='cursor-pointer'>
                            <MenuItemFollow user={{ id: "1", name: "Test user", image: "https://placehold.co/50"}} />
                        </div>
                    
                    </ClientOnly>
                </div>
                
            </div>
       </> 
    )
}