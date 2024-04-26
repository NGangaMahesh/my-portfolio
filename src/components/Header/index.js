import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";


const Header = () => {

    const [mobileHam, setMobileHam] = useState(false)

    const toggleeHam = () => {
        setMobileHam(prevState => !prevState);
    }

    return (
        <nav className="bg-stone-900 sticky top-0 w-full h-16 flex items-center justify-between px-5">
            <div>
                <h1 className="font-bold text-white text-2xl">Ganga Mahesh</h1>
            </div>
    
            <ul className="hidden md:flex w-72 justify-between text-white text-md">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button onClick={toggleeHam} className="bg-none outline-none md:hidden">
                {mobileHam ? <MdOutlineClose className="text-white text-xl"/> : <GiHamburgerMenu className="text-white text-xl"/>}
            </button>

            {
                mobileHam ? <div className="absolute right-0 left-auto backdrop-blur-md bg-stone-900 top-16 w-1/4 h-36 md:hidden">
                    <ul className="w-full px-4 py-4 text-white text-md">
                        <li className="py-2">Home</li>
                        <li className="py-2">About</li>
                        <li className="py-2">Contact</li>
                    </ul>

                </div> : null
            }
        </nav>
    )
}

export default Header