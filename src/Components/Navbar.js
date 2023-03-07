import { useState } from 'react';
import Logo from '../images/logo.jpg';

const NavBar = () => {
    const Links = [
        {name: "Timeline", link:'/'},
        {name: "Map", link:'/'},
        {name: "Gift Registry", link:'/'},
        {name: "Table Seating", link:'/'}
    ]

    const [toggle, setToggle] = useState(false);

    return (
        <div className="w-full fixed top-0 left-0">
            <div className="md:flex bg-white items-center justify-between px-7">
                <div className='flex items-center'>
                    <img src={Logo} className="w-20 h-auto" alt="Wedding Logo"/>
                </div>
                <div onClick={()=> setToggle(!toggle)} className='absolute right-8 top-6 cursor-pointer md:hidden'>
                    {toggle ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> 
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-2 md:static absolute left-0 md:w-auto w-full bg-white md:pl-0 pl-3 md:z-auto z-[-1] transition-all duration-500 ease-in md:opacity-100 opacity-0 ${toggle ? 'top-20 opacity-100' : 'top-[-50px]'}`}>
                {Links.map((link) => {
                    return (
                    <li key={link.name} className='md:ml-5 md:my-0 mb-3'>
                        <a href={link.link}>{link.name}</a>
                    </li>
                    );
                })}
            </ul>
            </div>
        </div>
    );
}

export default NavBar;