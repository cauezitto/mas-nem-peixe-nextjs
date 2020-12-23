import { Wrapper } from 'components/Wrapper/styles'
import * as S from './styles'
export type Props = {
  children: string | React.ReactNode
  size?: 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge' | 'extra'
  font?: 'ubuntu' | 'ubuntuCondensed' | 'manjari'
  margin?: string
}
const DivisorHeader = ({ children, size, font = 'manjari', margin }: Props) => (
  <Wrapper>
    <S.Wrapper size={size} font={font} margin={margin}>
      <S.Line />
      <div className="content-wrapper">
        {typeof children === 'string' ? <h2>{children}</h2> : children}
      </div>
      <S.Line />
    </S.Wrapper>
  </Wrapper>
)

export default DivisorHeader
