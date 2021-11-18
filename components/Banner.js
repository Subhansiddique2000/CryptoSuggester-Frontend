import Image from "next/image"
function Banner() {
    return (
        <div className = "relative h-[300px] sm:h-{400px} lg:h-{500px} xl:h-{600px} 2xl:h-{700px}">
            <Image src="https://images2.markets.businessinsider.com/609434a6f22c6b00185dcb5d?format=jpeg"
            layout = "fill"
            objectFit="cover"
            />
        </div>
    )
}

export default Banner
