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
}

const Button = ({
  text = 'Texto',
  outline,
  color = 'white',
  radius = 'small',
  size = 'small',
  fontSize = 'small',
  fontWeight = 'normal',
  textShadow = false
}: Props) => (
  <S.Wrapper
    color={color}
    outline={outline}
    radius={radius}
    size={size}
    fontSize={fontSize}
    textShadow={textShadow}
    fontWeight={fontWeight}
  >
    {text}
  </S.Wrapper>
)

export default Button
