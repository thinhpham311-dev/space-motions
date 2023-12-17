'use client'
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'
import { CardWrapper } from "./styles"
import { Logo, Button } from "@/components"

interface cardProps {
    header?: string,
    footer?: string,
    children?: ReactNode | undefined
}

const Card = ({ header, footer, children }: cardProps) => {

    return (
        <CardWrapper>
            <div className="card-header">
                {header}
            </div>
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer">
                {footer}
            </div>
        </CardWrapper>
    )
}

export default Card
