import tw, { styled, css, theme } from 'twin.macro'

const NavbarWrapper = styled.div(() => [
    // The common button styles added with the tw import
    tw` px-[41px] py-[18px] text-subTitle transform duration-75 rounded-md`,
    css`
        .container{
            ${tw`container mx-auto flex items-center justify-between`}
            .menu{
                ${tw`flex items-center`}
                &-toggle{
                    ${tw`xl:hidden lg:hidden block`}
                }
                &-list ul{
                    ${tw`flex gap-48`}
                    li a{
                        ${tw`text-linkText text-pastel`}
                    }
                }
            }
        }
    `
])

export { NavbarWrapper }
