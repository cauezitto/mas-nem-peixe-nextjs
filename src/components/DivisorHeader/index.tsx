import { Wrapper } from 'components/Wrapper/styles'
import * as S from './styles'
export type Props = {
  children: string | React.ReactNode
  size?: 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge' | 'extra'
}
const DivisorHeader = ({ children, size }: Props) => (
  <Wrapper>
    <S.Wrapper size={size}>
      <S.Line />
      <div className="content-wrapper">
        {typeof children === 'string' ? <h2>{children}</h2> : children}
      </div>
      <S.Line />
    </S.Wrapper>
  </Wrapper>
)

export default DivisorHeader
