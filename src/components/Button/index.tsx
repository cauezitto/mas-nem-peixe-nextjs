import * as S from './styles'
export type Props = {
  text?: string
  outline?: boolean
  background?: 'orange' | 'gray' | 'darkGray' | 'cyan' | 'mediumGray'
  color?: 'black' | 'white' | 'orange'
  radius?: 'small' | 'medium' | 'rounded'
  size?: 'small' | 'medium' | 'large' | 'block'
  fontSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  textShadow?: boolean
  fontWeight?: 'normal' | 'semiBold' | 'bold'
  fontFamily?: 'ubuntu' | 'ubuntuCondensed' | 'manjari'
  height?: number
}

const Button = ({
  text = 'Texto',
  outline,
  color = 'white',
  radius = 'small',
  size = 'small',
  fontSize = 'small',
  fontWeight = 'normal',
  textShadow = false,
  fontFamily = 'ubuntuCondensed',
  background = 'orange'
}: Props) => (
  <S.Wrapper
    color={color}
    outline={outline}
    radius={radius}
    size={size}
    fontSize={fontSize}
    textShadow={textShadow}
    fontWeight={fontWeight}
    fontFamily={fontFamily}
    background={background}
  >
    {text}
  </S.Wrapper>
)

export default Button
