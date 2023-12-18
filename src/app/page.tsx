'use client'
import LocomotiveProvider from "@/providers/LocomotiveScrollProvider"
import { Carousel, Sliders } from '@/components'
import { carouselSlider } from '@/data'

const Home = () => (
  <>
    <Carousel dataCarousel={carouselSlider} title={<>The best design for your <br /> studio website</>} subTitle="Design concept" />
  </>
)

export default Home
