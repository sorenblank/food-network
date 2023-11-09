import search from "../../public/search.png"
import apple from "../../public/searchbaricons/appleicon.png"
import avocado from "../../public/searchbaricons/avocadoicon.png"
import oranges from "../../public/searchbaricons/orangesicon.png"

import Fruits from "../components/Fruits"

import Image from 'next/image'

function MainBar(){
    return (
        <>
        <div className="w-full p-[15px] bg-white rounded-[15px] flex-col justify-start gap-[15px] inline-flex">
            <div className="w-full p-1 bg-white rounded-[10px] border-2 border-orange-600 border-opacity-20 justify-evenly items-start gap-2.5 inline-flex">
                <button className="w-full px-1 py-2.5 bg-orange-600 bg-opacity-10 rounded-[7px] justify-center items-center gap-2.5 flex">
                    <div className="btn text-orange-600 text-sm font-semibold">Fruits</div>
                </button>
                <button className="w-full px-1 py-2.5 bg-white rounded-[7px] justify-center items-center gap-2.5 inline-flex">
                <div className="btn text-stone-950 text-sm font-normal">Vegetables</div>
                </button>
            </div>

            <form>
                <div className="flex justify-between w-full rounded-[9px] border-2 border-gray-100 border-solid pr-1 py-1 pl-[15px]">
                    <input className="w-64 text-black focus:outline-none"type="search" placeholder="Search Best Food"/>
                    <button type="button">
                        <Image src={search} alt="search" />
                    </button>
                </div>
            </form>

            <p className="btn text-stone-950 text-s font-semibold px-2 pt-1">
                Fruits List
            </p>

            {/* <div className="px-2.5 py-2 rounded-[10px] border border-orange-600 justify-start items-center gap-2.5 inline-flex">
                <div className="justify-start items-center gap-[15px] flex">
                    <Image src={oranges} alt="apple" />
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="btn self-stretch text-stone-950 text-sm font-bold leading-[14px]">Oranges</div>
                    <div className="btn self-stretch text-stone-950 text-opacity-70 text-xs font-medium">Vitamin C</div>
                </div>
            </div> */}


            <Fruits name="Oranges" image={oranges} description={"Vitamin C"} selected={true} />
            <Fruits name="Apple" image={apple} description={"Vitamin C"}/>
            <Fruits name="Avocado" image={avocado} description={"Vitamin C"}/>
            

        </div>
        </>
    )
}

export default MainBar