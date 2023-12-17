import tw, { styled, css, theme } from 'twin.macro'

const NavbarWrapper = styled.nav(() => [
    // The common button styles added with the tw import
    tw` py-48 text-subTitle transform duration-75 rounded-md sticky top-0 left-0 bg-white z-50`,
    css`
        .container{
            ${tw`container mx-auto flex items-center justify-between flex-wrap`}
            .menu{
                ${tw`xl:flex block items-center  relative xl:w-[auto] w-full`}
                &-toggle{
                    ${tw`xl:hidden block z-50 text-black focus:bg-transparent active:bg-transparent`}
                    &.hidden{
                        ${tw`text-white`}
                    }
                }
                &-list{
                    ${tw`xl:static fixed top-0 left-0 xl:w-[auto] xl:h-[auto] h-[100vh] w-full bg-black xl:bg-transparent flex items-center justify-center z-10`}
                    ul{
                        ${tw`xl:flex grid gap-48 items-center`}
                        li a{
                            ${tw`text-linkText text-pastel text-center block`}
                        } 
                    }
                }
                &.hidden{
                    ${tw`xl:block hidden transition-all ease-in-out duration-500`}
                }
            }
        }
    `
])

export { NavbarWrapper }
