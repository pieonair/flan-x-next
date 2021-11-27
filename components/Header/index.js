import Link from 'next/link';
import Image from 'next/image';
import MainSearchBar from '../MainSearchBar';
import { useEffect, useState} from 'react';

/**
 * 
 * @returns The header component for all pages
 * 
 */

const Header = () => {
    const [acc, setAcc] = useState(
            <div>
                <Link href="/profile">
                    My Profile
                </Link>
            </div>
    )
    useEffect(()=>{
        if (sessionStorage.getItem('tok') === null)
            setAcc ( 
                <div>
                    <Link href="/login">
                        <a className="font-VisbyCFMedium">Login</a> 
                    </Link>
                        | 
                    <Link href="/signup">
                        <a>Sign Up</a>
                    </Link>
                </div>
            );
    }, []);
    return(
    <div className="flex-1 flex flex-col">
        <nav className="px-4 flex justify-between bg-white h-20">
            <ul className="flex items-center">
                <li className="h-auto w-auto">
                    <Link href="/">
                    <a><div className="bg-logo h-11 w-12"></div></a>
                    </Link>
                </li>
            </ul>
 
            <form>
                <MainSearchBar/>
            </form>
            
            {acc} 

        </nav>
    </div>
    );

};

export default Header;