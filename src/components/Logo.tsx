import Image from "next/image"
import tw from "twin.macro"

interface logoProps {
  isdark?: boolean
}

const Logo = ({ isdark }: logoProps) => (
  <a
    // Use the tw prop to add tailwind styles directly on jsx elements
    tw="w-[110.365px] h-[auto] block"
    href="https://github.com/ben-rogerson/twin.macro"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src={`./Base${isdark ? "-dark" : ""}.svg`} width={500} height={500} alt="" />
  </a>
)


export default Logo
