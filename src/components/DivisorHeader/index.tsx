import { Wrapper } from 'components/Wrapper/styles'
import * as S from './styles'
export type Props = {
  children: string | React.ReactNode
}
const DivisorHeader = ({ children }: Props) => (
  <Wrapper>
    <S.Wrapper>
      <S.Line />
      <div className="content-wrapper">
        {typeof children === 'string' ? <h2>{children}</h2> : children}
      </div>
      <S.Line />
    </S.Wrapper>
  </Wrapper>
)

export default DivisorHeader
