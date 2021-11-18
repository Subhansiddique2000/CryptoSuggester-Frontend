import Image from "next/image"
function Header() {
    return (
        <header className ='sticky top-0 z-50 grid 
        grid-cols-2 bg-x shadow-md p-5 md:px-10'>
            {/* left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/8/8b/Cryptocurrency_Logo.svg' 
                layout="fill"
                objectFit ="contain" 
                objectPosition="left" 
                />
                <h1 className = "text-2xl text-primary font-bold pl-11">ryptocurrency Suggester</h1>
                
            </div>

        </header>
    )
}

export default Header
