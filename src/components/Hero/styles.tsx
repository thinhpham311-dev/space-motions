import tw, { styled, css, theme } from 'twin.macro'

const HeroWrapper = styled.nav(() => [
    // The common button styles added with the tw import
    tw` px-[41px] py-[18px] text-subTitle transform duration-75 rounded-md sticky top-0 left-0 bg-white z-50`,

])

export { HeroWrapper }
