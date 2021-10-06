import Link from 'next/link';
import Image from 'next/image';

/**
 * 
 * @returns The header component for most if not all pages
 * 
 */

const Header = () => {
    return(
       <div>
        <Link href="/">
            <a><Image id="logo" alt="Flan logo"></Image></a>
        </Link>
        <form>
            <input type="text" id="main-searchbar"></input>
        </form>
        <div>
            <Link href="/login">
                <a>Login</a> 
            </Link>
                | 
            <Link href="/signup">
                <a>Sign Up</a>
            </Link>
        </div>
       </div>
    );
};

export default Header;