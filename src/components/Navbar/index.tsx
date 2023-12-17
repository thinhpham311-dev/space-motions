'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { NavbarWrapper } from "./styles"
import { Logo, Button } from "@/components"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <NavbarWrapper>
            <div className="container">
                <div className="logo">
                    <Logo isdark />
                </div>
                <Button type="button" onClick={() => setOpen(!open)} className={`menu-toggle ${open && "hidden"}`}>
                    <IoIosMenu />
                </Button>
                <div className={`menu ${!open && "hidden"}`}>
                    <div className="menu-list">
                        <ul>
                            <li>
                                <Link href="">Home</Link>
                            </li>
                            <li>
                                <Link href="">Templates</Link>
                            </li>
                            <li>
                                <Link href="">Price</Link>
                            </li>
                            <li>
                                <Link href="">Help</Link>
                            </li>
                            <li>
                                <Button type="button" $isSmall>Get In Touch</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar
