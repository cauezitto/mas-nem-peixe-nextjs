import * as S from './styles'
export type Props = {
  href: string
  target?: '_blank' | '_self'
  color?: 'cyan' | 'black' | 'gray' | 'orange'
  children: string
  font?: 'ubuntu' | 'manjari' | 'ubuntuCondensed'
  underline?: boolean
  fontSize?: 'small' | 'large' | 'xlarge' | 'xxlarge'
}

const Link = ({
  href,
  target = '_self',
  color = 'cyan',
  children = 'acesse aqui',
  font = 'ubuntu',
  underline = false,
  fontSize = 'large'
}: Props) => (
  <S.Wrapper
    href={href}
    target={target}
    color={color}
    font={font}
    underline={underline}
    fontSize={fontSize}
  >
    {children}
  </S.Wrapper>
)

export default Link
