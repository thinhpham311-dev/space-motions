import React from 'react'
import Link from 'next/link'
import { IoIosMenu } from "react-icons/io";
import { NavbarWrapper } from "./styles"

import { Logo, Button } from "@/components"

const Navbar = () => (
    <NavbarWrapper>
        <div className="container">
            <div className="logo">
                <Logo isdark />
            </div>
            <div className="menu">
                <Button type="button" className="menu-toggle">
                    <IoIosMenu />
                </Button>
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

export default Navbar
