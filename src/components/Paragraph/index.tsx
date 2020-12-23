import * as S from './styles'

export type Props = {
  children: string | React.ReactNode
  color?: 'black' | 'orange' | 'gray' | 'mediumGray' | 'darkGray' | 'cyan'
  fontSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
  font?: 'manjari' | 'ubuntu' | 'ubuntuCondensed'
  justify?: 'flex-start' | 'center' | 'flex-end'
  textAlign?: 'right' | 'center' | 'right'
}

const Paragraph = (props: Props) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Paragraph
