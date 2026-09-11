import React from 'react';
import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className="  bg-red-400  fixed  w-full z-50 pt-7 pb-7">
            <div className='container mx-auto bg-blue-600'>
                <div className=' flex justify-between items-center'>
                    <img src={Logo} alt="hello" className='' />
                    <ul className='flex gap-5'>
                        <li className=' text-[#DB2777]'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>

                    </ul>
                    <div className='flex gap-7'>
                        <button>Sign In</button>

                        <button className="btn btn-secondary rounded-4xl">Sign Up</button>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Nav;