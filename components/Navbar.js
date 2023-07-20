"use client";

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import {useState, useEffect} from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";

const Navbar = () => {
    const isLoggedIn = false;
    return(
        <>
        {!isLoggedIn ? (
        <div className="container justify-center">
            <div className="row justify-space-between align-center">
                <div className="column shrink">
                    <div className="row">
                        <div className="column shrink">
                            <Image src="/assets/images/basketball-logo.svg"
                                   alt="basketball"
                                    width={30}
                                    height={30}
                                   className="object-contain"
                            />
                        </div>
                        <div className="column">
                            <h1>Hoops Central</h1>
                        </div>
                    </div>
                </div>
                <div className="column shrink">
                    <nav className="row">
                        <div className="column"><Link href="/">About</Link></div>
                        <div className="column"><Link href="/">Contact</Link></div>
                    </nav>
                </div>
                <div className="column shrink">
                    <div className="row">
                        <button className="button">Sign In</button>
                        <button className="button">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        ) : (
                <div className="container justify-center">
                    <div className="row justify-space-between align-center">
                        <div className="column shrink">
                            <div className="row">
                                <div className="column shrink">
                                    <Image src="/assets/images/basketball-logo.svg"
                                           alt="basketball"
                                           width={30}
                                           height={30}
                                           className="object-contain"
                                    />
                                </div>
                                <div className="column">
                                    <h1>Hoops Central</h1>
                                </div>
                            </div>
                        </div>
                        <div className="column shrink">
                            <nav className="row">
                                <div className="column"><Link href="/">About</Link></div>
                                <div className="column"><Link href="/">Contact</Link></div>
                            </nav>
                        </div>
                        <div className="column shrink">
                            <div className="row">
                                <button type="button" className="button">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
        )}
        </>
    )
}

export default Navbar;