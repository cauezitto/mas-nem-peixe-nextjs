import * as S from './styles'

export type Props = {
  children: React.ReactNode | string
  font?: 'manjari' | 'ubuntu' | 'ubuntuCondensed'
}

const Heading = (props: Props) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Heading
