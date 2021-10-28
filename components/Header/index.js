import Link from 'next/link';
import Image from 'next/image';
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
                        <a>Login</a> 
                    </Link>
                        | 
                    <Link href="/signup">
                        <a>Sign Up</a>
                    </Link>
                </div>
            );
    }, []);
    return(
       <div>
        <Link href="/">
            <a><Image id="logo" alt="Flan logo" src="/favicon.ico" width="50" height="50"></Image></a>
        </Link>
        <form>
            <input type="text" id="main-searchbar"></input>
        </form>
        
        {acc} 
       </div>
    );

};

export default Header;