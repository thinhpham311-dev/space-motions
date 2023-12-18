import tw, { styled, css, theme } from 'twin.macro'

const CardWrapper = styled.nav(() => [
    // The common button styles added with the tw import
    tw`shadow-[10px 10px 50px 3px rgba(39, 92, 141, 0.10)] bg-white`,
    css`
        .card-body{
            ${tw` py-[50px] px-[45px]`}
            h4{
                ${tw`xl:text-heading4 text-subTitle xl:mb-[45px] mb-[20px]`}
            }
            p{
                ${tw`xl:text-bodyTextM text-bodyTextS font-thin xl:mb-[32px] mb-[20px]`}
            }
        }
    `
])

export { CardWrapper }
