import { type } from 'os'
import * as S from './styles'

export type Props = {
  children: React.ReactNode
}

const Wrapper = ({ children }: Props) => <S.Wrapper>{children}</S.Wrapper>

export default Wrapper
