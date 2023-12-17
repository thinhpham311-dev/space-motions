import tw, { styled, css, theme } from 'twin.macro'

const CardWrapper = styled.nav(() => [
    // The common button styles added with the tw import
    tw`shadow-[10px 10px 50px 3px rgba(39, 92, 141, 0.10)] bg-white py-[50px] px-[45px]`,

])

export { CardWrapper }
