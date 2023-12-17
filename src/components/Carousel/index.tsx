'use client'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { CarouselWrapper } from "./styles"
import { Sliders } from "@/components"

interface carouselProps {
    title?: string,
    subTitle?: string
    dataCarousel?: any
}

const Carousel = ({ title, subTitle, dataCarousel }: carouselProps) => {

    return (
        <CarouselWrapper>
            <div className="content">
                <span>{subTitle}</span>
                <h2>{title}</h2>
            </div>
            <Sliders data={dataCarousel} />
        </CarouselWrapper>
    )
}

export default Carousel
