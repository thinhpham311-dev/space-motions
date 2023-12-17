'use client'
import Link from 'next/link'
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons"
import { Button, Card } from "@/components"
import tw, { styled, css, theme } from 'twin.macro'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

interface ObjSlider {
    title: string,
    description: string
}

interface sliderProps {
    data: ObjSlider[]
}

const sliders = ({ data }: sliderProps) => {

    return (
        <SlidersWrapper>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                breakpoints={{
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    // when window width is <= 499px
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    // when window width is <= 999px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    // when window width is <= 999px
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 40
                    }
                }}
                grabCursor={true}
                navigation={{
                    prevEl: ".btn-prev",
                    nextEl: ".btn-next",
                }}
                modules={[Navigation]}
                className="slider"
            >
                {
                    data.map((item: any) => {
                        return (
                            <SwiperSlide className="slider-item">
                                <Card>
                                    <h4 tw="text-heading4 mb-[45px]">{item.title}</h4>
                                    <p tw="text-bodyTextM mb-[32px]">{item.description}</p>
                                    <Link tw="text-linkText text-pastel hover:text-primary hover:underline underline-offset-4 transition-all duration-500 ease-in-out" href="">Experienced team</Link>
                                </Card>
                            </SwiperSlide>
                        )
                    })
                }
                <div className="navigation">
                    <Button type="button" className="btn-prev"><ArrowLeftIcon /></Button>
                    <Button type="button" className="btn-next"><ArrowRightIcon /></Button>
                </div>
            </Swiper>
        </SlidersWrapper>
    )
}

export default sliders

const SlidersWrapper = styled.div(() => [
    tw` w-full my-[120px]`,
    css`
        .slider{
            ${tw`px-[calc((100%-1280px)/2)]`}
            .navigation{
                ${tw`my-[40px]`}
                button.swiper-button-disabled{
                    svg{
                        path{
                            ${tw`fill-pastel`}
                        }
                    }
                }
            }
        }
    `
])
