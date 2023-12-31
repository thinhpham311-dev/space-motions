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
                        spaceBetween: 20
                    },
                    // when window width is <= 999px
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is <= 999px
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
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
                                <Card title="Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
Ac aliquam ac volutpat, viverra magna risus." link=" " />
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
    tw` w-full xl:my-[120px]  my-[50px]`,
    css`
        .slider{
            ${tw`2xl:px-[calc((100%-1300px)/2)] xl:px-[calc((100%-1100px)/2)] lg:px-[50px] md:px-[100px] px-[50px]`}
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
