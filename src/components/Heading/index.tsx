import * as S from './styles'

export type Props = {
  color?: 'orange' | 'cyan' | 'white' | 'black'
  children: React.ReactNode | string
  font?: 'manjari' | 'ubuntu' | 'ubuntuCondensed'
  justify?: 'flex-start' | 'center' | 'flex-end'
  fontSize?:
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
    | 'extra'
    | 'max'
    | 'xmax'
    | 'xxmax'
    | 'xxxmax'
  fontWeight?: 'light' | 'normal' | 'semiBold' | 'bold'
  margin?: string
}

const Heading = (props: Props) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Heading
