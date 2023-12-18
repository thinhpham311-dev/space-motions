'use client'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { WrapperComponentStyled } from "./styles"

interface WrapperComponentProps {
    title?: string | ReactNode,
    subTitle?: string | ReactNode
    link?: string
    children?: ReactNode,
    cutomStyles?: object | string
    txtAlign: string,
}

const WrapperComponent = ({ title, subTitle, children, link, ...cutomStyles }: WrapperComponentProps) => {

    return (
        <WrapperComponentStyled {...cutomStyles}>
            <div className="container">
                <div className="content">
                    {subTitle && <span>{subTitle}</span>}
                    {title && <h2>{title}</h2>}
                </div>
                {link && <div className="connect">
                    <Link href={link}>Experienced team</Link>
                </div>
                }
            </div>
            {children}
        </WrapperComponentStyled>
    )
}

export default WrapperComponent
