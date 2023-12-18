'use client'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { WrapperComponentStyled } from "./styles"
import { Sliders } from "@/components"

interface WrapperComponentProps {
    title?: string | ReactNode,
    subTitle?: string | ReactNode
    children?: ReactNode
}

const WrapperComponent = ({ title, subTitle, children }: WrapperComponentProps) => {

    return (
        <WrapperComponentStyled>
            <div className="container">
                <div className="content">
                    <span>{subTitle}</span>
                    <h2>{title}</h2>
                </div>
            </div>
            {children}
        </WrapperComponentStyled>
    )
}

export default WrapperComponent
