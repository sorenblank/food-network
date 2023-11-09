import Image from 'next/image'

function Fruits({ name, image, description,selected=false }) {
    return (
        <div className={`px-2.5 py-2 rounded-[10px] justify-start items-center gap-2.5 border inline-flex ${selected ? 'border-orange-600' : ''}`}>
            <div className="flex items-center gap-[15px]">
                <Image src={image} alt={name} />
                <div className="flex flex-col justify-start items-start gap-2">
                    <div className="btn text-stone-950 text-sm font-bold leading-14px">{name}</div>
                    <div className="btn text-stone-950 text-opacity-70 text-xs font-medium">{description}</div>
                </div>
            </div>
        </div>
    );
}

export default Fruits;