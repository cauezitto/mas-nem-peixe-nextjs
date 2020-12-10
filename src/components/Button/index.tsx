import * as S from './styles'
export type Props = {
  text?: string
  outline?: boolean
  color?: 'black' | 'white' | 'orange'
  radius?: 'small' | 'medium' | 'rounded'
  size?: 'small' | 'medium' | 'large' | 'block'
  fontSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  textShadow?: boolean
  fontWeight?: 'normal' | 'semiBold' | 'bold'
  fontFamily?: 'ubuntu' | 'ubuntuCondensed' | 'manjari'
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
  fontFamily = 'ubuntuCondensed'
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
  >
    {text}
  </S.Wrapper>
)

export default Button
