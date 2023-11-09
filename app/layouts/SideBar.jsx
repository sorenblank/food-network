import home from "../../public/sidebaricons/home.png"
import dashboard from "../../public/sidebaricons/dashboard.png"
import more from "../../public/sidebaricons/more.png"
import send from "../../public/sidebaricons/send.png"
import video from "../../public/sidebaricons/video.png"

import Image from 'next/image'

function SideBar(){
    return (
        <>
        <aside className="max-sm:hidden sticky flex flex-col items-center justify-center gap-6 mx-5 ">
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
        </aside>
        </>
    )
}

export default SideBar;