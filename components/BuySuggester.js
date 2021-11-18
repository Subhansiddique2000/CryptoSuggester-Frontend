import Image from "next/image"
function BuySuggester({name, symbol, image, priceA, priceB,}) {
    if(priceA>priceB){
        return <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-grey-100 hover:scale-105  transition transform duration-200 ease-out bg-y">
        {/* left */}
        <div className ="relative h-16 w-16">
            <Image
                src={image} layout="fill" className="rounded-lg"
            />
         </div>
        {/* Right */}
        <div>
            <h2 className = "text-white">{name}({symbol})</h2>
            < h3 className = "text-white">Buy From Coinpaprika</h3>
        </div>
        </div>
        
        
    } else{
        return <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-grey-100 hover:scale-105  transition transform duration-200 ease-out bg-y">
        {/* left */}
        <div className ="relative h-16 w-16">
            <Image
                src={image} layout="fill" className="rounded-lg"
            />
         </div>
        {/* Right */}
        <div>
            <h2 className = "text-white">{name}({symbol})</h2>
            < h3 className = "text-white">Buy From CoinGecko</h3>
        </div>
        </div>

    }

    
}

export default BuySuggester


