import home from "../../public/sidebaricons/home.png"
import dashboard from "../../public/sidebaricons/dashboard.png"
import more from "../../public/sidebaricons/more.png"
import send from "../../public/sidebaricons/send.png"
import video from "../../public/sidebaricons/video.png"

import Image from 'next/image'

function ActionBar(){
    return (
        <>
        <div className="sm:hidden fixed bottom-0 left-0 z-10 inline-flex items-end justify-evenly gap-6 w-full py-2.5 bgwhite rounded-tl-[10px] rounded-tr-[10px] bg-white">
            <button type="button" className="p-[6px] bg-orange-600 bg-opacity-10 border-opacity-10 rounded-md border-2 border-orange-600">
                <Image src={home} alt="home" />
            </button>
            <button className="p-[6px] bg-stone-950 bg-opacity-5 rounded-md border">
            <Image src={dashboard} alt="home" />
            </button>
            <button className="p-[6px] bg-stone-950 bg-opacity-5 rounded-md border">
                <Image src={more} alt="home" />
            </button>
            <button className="p-[6px] bg-stone-950 bg-opacity-5 rounded-md border">
                <Image src={send} alt="home" />
            </button>
            <button className="p-[6px] bg-stone-950 bg-opacity-5 rounded-md border">
                <Image src={video} alt="home" />
            </button>
        </div>
        </>
    )
}

export default ActionBar