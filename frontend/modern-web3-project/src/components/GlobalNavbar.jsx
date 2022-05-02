import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';

import logo from "../../images/logo.png"

const NavbarItem = ({title, classProps}) => {
    return(
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const GlobalNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <nav className="w-full flex  md:justify-center justify-between items-center p-4">
            {/* Logo Container Starts - Mobile and Desktop*/}
            <div className="md:flex-[0.5] flex-none justify-center items-center">
                <img src={logo} alt="LOGO" className="w-32 cursor-pointer" />
            </div>
            {/* Logo Container Ends */}

            <ul className='text-white md:flex hidden list-none flex-row justify-end items-center'>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItem title = {item} key={item + index} />
                ))}

                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>Login</li> 
            </ul>

            <div className="flex relative">

                {toggleMenu
                ?<AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
                :<HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>} 

                {toggleMenu && (
                    <ul
                    className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2zl md:hidden list-none
                    flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick = {() => {setToggleMenu(false)}}></AiOutlineClose>
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                            <NavbarItem key={item + index} title = {item} classProps="my-2 text-lg"/>
                        ))}
                    </ul>
                )}

            </div>
        </nav>

    );
}

export default GlobalNavbar;