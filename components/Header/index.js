/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import MainSearchBar from "../MainSearchBar";
import { useEffect, useState } from "react";

/**
 *
 * @returns The header component for all pages
 *
 */

const Header = () => {
    const [acc, setAcc] = useState(
        <div>
            <Link href="/profile">My Profile</Link>
        </div>
    );
    useEffect(() => {
        if (sessionStorage.getItem("tok") === null)
            setAcc(
                <ul className="flex items-center">
                    <Link href="/login">
                        <button className="h-12 w-32 text-white rounded-lg bg-button-blue">
                            Login
                        </button>
                    </Link>
                    |
                    <Link href="/register">
                        <button className="h-12 w-32 text-white rounded-lg bg-button-blue">
                            Create Account
                        </button>
                    </Link>
                </ul>
            );
    }, []);
    return (
        <div className="flex-1 flex flex-col">
            <nav className="px-4 flex justify-between bg-flan-purple h-20">
                <ul className="flex items-center">
                    <li className="h-auto w-auto">
                        <Link href="/">
                            <a>
                                <div className="bg-whiteLogo h-20 w-60"></div>
                            </a>
                        </Link>
                    </li>
                </ul>

                <div>
                    <MainSearchBar placeholder="Search for a freelancer" />
                </div>

                {acc}
            </nav>
        </div>
    );
};

export default Header;
