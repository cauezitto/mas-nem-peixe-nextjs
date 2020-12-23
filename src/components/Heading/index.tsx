import * as S from './styles'

export type Props = {
  color?: 'orange' | 'cyan'
  children: React.ReactNode | string
  font?: 'manjari' | 'ubuntu' | 'ubuntuCondensed'
  justify?: 'flex-start' | 'center' | 'flex-end'
  fontSize?: 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge' | 'extra'
  fontWeight?: 'semiBold' | 'bold'
  margin?: string
}

const Heading = (props: Props) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Heading
