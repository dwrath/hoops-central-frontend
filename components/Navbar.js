"use client";

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import {useState, useEffect} from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";

import '@styles/Navbar.css';

const Navbar = () => {

    const isLoggedIn = false;

    return(
        <>
        {isLoggedIn ? (
            <div className="container justify-center nav-bg">
                <div className="row justify-space-between align-center">
                    <div className="column shrink">
                        <div className="row">
                            <div className="column shrink justify-center">
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
                            <div className="column"><Link className="nav-link underline" href="/">About</Link></div>
                            <div className="column"><Link className="nav-link underline" href="/">Contact</Link></div>
                        </nav>
                    </div>
                    <div className="column shrink">
                        <div className="row">
                            <button type="button" className="logout-button">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="container justify-center nav-bg">
                <div className="row justify-space-between align-center">
                    <div className="column shrink">
                        <div className="row">
                            <div className="column shrink justify-center">
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
                            <div className="column"><Link className="nav-link underline" href="/">About</Link></div>
                            <div className="column"><Link className="nav-link underline" href="/">Contact</Link></div>
                        </nav>
                    </div>
                    <div className="column shrink">
                        <div className="row">
                            <button className="signin-button">Sign In</button>
                            <button className="signup-button">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Navbar;