import * as S from './styles'

export type Props = {
  fontWeight?: 'normal' | 'semiBold' | 'bold'
  font?: 'ubuntu' | 'ubuntuCondensed' | 'manjari'
  color?: 'black' | 'cyan' | 'white' | 'mediumGray' | 'gray'
  fontSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
  children: string | React.ReactNode[]
}

const Label = (props: Props) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Label
