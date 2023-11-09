import logo from "../../public/logo.png"
import search from "../../public/search.png"

import sun from "../../public/navbaricons/sun.png"
import menu from "../../public/navbaricons/menu.png"
import options from "../../public/navbaricons/options.png"

import Image from 'next/image'


function PageHeader(){
    return (
        <>
        <div className="flex gap-10 lg:gap-20 justify-between pt-3 mb-4 mx-4">
            <div className="flex gap-4 items-center flex-shrink-0">
                <a href="/">
                    {/* <Image src={logo} alt="logo" /> */}
                    <Image src={logo} alt="logo"/>
                </a>
            </div>
            <form className="flex gap-4 flex-grow justify-center">
                <div className="max-sm:hidden flex justify-between w-full max-w-[400px] rounded-[9px] border-2 border-gray-100 border-solid pr-1 py-1 pl-[15px]">
                    <input className="w-full text-black focus:outline-none"type="search" placeholder="Search Best Food"/>
                    <button type="button">
                        <Image src={search} alt="search" />
                    </button>
                </div>
            </form>
            <div className="flex flex-shrink-0 gap-2">
                <button type="button" className="sm:hidden">
                        <Image src={search} alt="search" />
                </button>
                <button className="max-md:hidden" type="button">
                    <Image src={sun} alt="sundial" />
                </button>

                <button className="max-md:hidden" type="button">
                    <Image src={options} alt="options" />
                </button>

                <button>
                    <Image src={menu} alt="menu" />
                </button>
            </div>
        </div>
        </>
    )
}

export default PageHeader;