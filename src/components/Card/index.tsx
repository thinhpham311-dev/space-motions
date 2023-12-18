'use client'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { CardWrapper } from "./styles"
import { ButtonLink } from "@/components"

interface cardProps {
    header?: string,
    footer?: string,
    body?: any,
    title?: string,
    description?: string,
    link?: string,
    children?: ReactNode | undefined,
}

const Card = ({ header, footer, children, ...body }: cardProps) => {

    return (
        <CardWrapper>
            <div className="card-header">
                {header}
            </div>
            <div className="card-body">
                {children}
                {body.title && <h4> {body.title}</h4>}
                {body.description && <p> {body.description}</p>}
                {body.link && <ButtonLink $_href={body.link} >Experienced team</ButtonLink>}
            </div>
            <div className="card-footer">
                {footer}
            </div>
        </CardWrapper>
    )
}

export default Card
