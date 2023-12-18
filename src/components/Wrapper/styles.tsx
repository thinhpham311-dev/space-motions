import tw, { styled, css, theme } from 'twin.macro'

const WrapperComponentStyled = styled.div(() => [
    // The common button styles added with the tw import
    tw`xl:py-[100px] py-[50px] text-subTitle transform duration-75 rounded-md sticky top-0 left-0 bg-white z-50`,
    css`.content{
            ${tw`text-center container mx-auto`}
            span{
                ${tw`uppercase text-caption text-bodyTextS xl:mb-[43px] mb-[13px] block`}
            }
            h2{
                ${tw`xl:text-heading2 text-heading3`}
            }
        }
    `
])

export { WrapperComponentStyled }
