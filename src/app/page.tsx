'use client'
import LocomotiveProvider from "@/providers/LocomotiveScrollProvider"
import { Sliders, WrapperComponent } from '@/components'
import { carouselSlider } from '@/data'

const Home = () => (
  <>
    <WrapperComponent title={<>The best design for your <br /> studio website</>} subTitle="Design concept" >
      <Sliders data={carouselSlider} />
    </WrapperComponent>
  </>
)

export default Home
