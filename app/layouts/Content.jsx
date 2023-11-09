import fb from "../../public/social/facebook.png"
import ld from "../../public/social/linkedin.png"
import tw from "../../public/social/twitter.png"
import others from "../../public/social/link.png"

import avocado from "../../public/images/avocados.png"
import apple from "../../public/images/apples.png"

import star from "../../public/star.png"
import notstar from "../../public/notstar.png"

import Image from 'next/image'


function Content(){
    return (
        <>
            <div className="p-11 bg-white rounded-[10px] justify-start items-start gap-[30px] inline-flex w-full max-md:p-4">
                <div className="py-[60px] flex-col justify-start items-start gap-[22px] inline-flex shrink-0 max-md:hidden max-xl:hidden">
                    <Image src={fb} alt="facebook" />
                    <Image src={tw} alt="twitter" />
                    <Image src={ld} alt="linkedin" />
                    <Image src={others} alt="others" />
                </div>
                <div className="justify-start items-start gap-[20px] flex-row ">
                    <div className="justify-start items-start gap-[20px] inline-flex max-md:flex-col max-xl:flex-col">
                        <article className="flex-1 flex flex-col items-start gap-[20px]">
                            <h1 className="text-3xl font-bold">Health benefits of an avocado</h1>
                            <h2 className="text-xl font-medium mt-5">Supports eye health: </h2>
                            <p className="text-l ">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy 
                                vision and protect against age-related macular degeneration.</p>
                        </article>

                        <Image src={avocado} alt="avocados" className="flex-shrink-0 max-w-[50%] max-md:max-w-full max-xl:max-w-full"/>
                    </div>

                    
                    <article className="flex-1 flex flex-col items-start gap-[20px] my-6">

                    <h2 className="text-xl font-medium mt-5">Supports eye health: </h2>
                    <p className="text-l ">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy 
                                        vision and protect against age-related macular degeneration. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy 
                                        vision and protect against age-related macular degeneration.Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy 
                                        vision and protect against age-related macular degeneration.Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy 
                                        vision and protect against age-related macular degeneration.Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy 
                                        vision and protect against age-related macular degeneration.Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy 
                                        vision and protect against age-related macular degeneration.</p>

                    </article>

                    <div className="justify-start items-start gap-[20px] inline-flex max-md:flex-col max-xl:flex-col">

                        <Image src={apple} alt="avocados" className="flex-shrink-0 max-w-[50%] max-md:max-w-full max-xl:max-w-full"/>
                        <article className="flex-1 flex flex-col items-start gap-[20px]">
                            <h1 className="text-3xl font-bold">Health benefits of an avocado</h1>
                            <h2 className="text-xl font-medium mt-5">Supports eye health: </h2>
                            <p className="text-l ">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy 
                                vision and protect against age-related macular degeneration. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy 
                                vision and protect against age-related macular degeneration.Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy 
                                vision and protect against age-related macular degeneration. </p>
                        </article>

                    </div>

                    <div>
                        <h2 className="text-xl font-medium mt-9">Was this helpful?</h2>
                        <div className="flex mt-2 gap-1 mb-4">
                            <Image src={star} alt="star" />
                            <Image src={star} alt="star" />
                            <Image src={star} alt="star" />
                            <Image src={star} alt="star" />
                            <Image src={notstar} alt="notstar" />
                        </div>

                        <div className="flex-row justify-start items-start gap-[16px] inline-flex shrink-0 md:hidden">
                            <Image src={fb} alt="facebook" />
                            <Image src={tw} alt="twitter" />
                            <Image src={ld} alt="linkedin" />
                            <Image src={others} alt="others" />
                        </div>
                    </div>

                </div>

            </div>
            <div className="max-md:mb-14">

            </div>
        </>
    )
}



export default Content