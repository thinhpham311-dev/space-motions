import tw, { styled, css, theme } from 'twin.macro'

const CarouselWrapper = styled.nav(() => [
    // The common button styles added with the tw import
    tw` text-subTitle transform duration-75 rounded-md sticky top-0 left-0 bg-white z-50`,
    css`.content{
            ${tw`text-center container mx-auto`}
            span{
                ${tw`uppercase text-caption mb-[43px] block`}
            }
            h2{
                ${tw`text-heading2`}
            }
        }
     
    `
])

export { CarouselWrapper }
