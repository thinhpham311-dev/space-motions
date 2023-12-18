import Link from "next/link"
import { ReactNode } from "react"
import tw, { styled, css, theme } from 'twin.macro'

interface ButtonProps {
  $variant?: 'primary' | 'danger'
  $isSmall?: boolean,
  $_href?: any,
  children: ReactNode
}

const ButtonLink = ({ $_href, children }: ButtonProps) => (
  <ButtonLinkStyled>
    <Link href={$_href}>{children}</Link>
  </ButtonLinkStyled>
)

const ButtonLinkStyled = styled.div(() => [
  tw`xl:text-linkText text-bodyTextS text-pastel hover:text-primary hover:underline underline-offset-4 transition-all duration-500 ease-in-out`
])


const Button = styled.button<ButtonProps>(({ $variant, $isSmall }) => [
  // The common button styles added with the tw import
  tw`  text-subTitle transform duration-75 rounded-md`,

  // Use props to conditionally style your components
  $variant === 'primary' && tw`bg-primary text-white px-[41px] py-[18px]`,

  // Combine regular css with tailwind classes within backticks
  $variant === 'danger' && tw`bg-danger text-white px-[41px] py-[18px]`,


  $isSmall && tw`text-bodyTextS text-primary  px-[18px] py-[8px] border-2 border-primary`

])


export { Button, ButtonLink }
