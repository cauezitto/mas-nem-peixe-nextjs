import * as S from './styles'
export type Props = {
  href: string
  target?: '_blank' | '_self'
  color?: 'cyan' | 'black' | 'gray' | 'orange' | 'white'
  children: string
  font?: 'ubuntu' | 'manjari' | 'ubuntuCondensed'
  underline?: boolean
  fontWeight?: 'light' | 'normal' | 'semiBold' | 'bold'
  fontSize?:
    | 'small'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'max'
    | 'xmax'
    | 'xxmax'
    | 'xxxmax'
}

const Link = ({
  href,
  target = '_self',
  color = 'cyan',
  children = 'acesse aqui',
  font = 'ubuntu',
  underline = false,
  fontSize = 'large',
  fontWeight = 'normal'
}: Props) => (
  <S.Wrapper
    href={href}
    target={target}
    color={color}
    font={font}
    underline={underline}
    fontSize={fontSize}
    fontWeight={fontWeight}
  >
    {children}
  </S.Wrapper>
)

export default Link
