import * as S from './styles'
export type Props = {
  value?: string
  onChange?: (value: any) => void
  radius?: number
  height?: number
  width?: number
  fontSize?: 'small' | 'large' | 'xlarge' | 'xxlarge'
  font?: 'ubuntu' | 'ubuntuCondensed' | 'manjari'
  outline?: boolean
  block?: boolean
  margin?: string
  textArea?: boolean
}

const Input = (props: Props) => {
  if (props.textArea) {
    return (
      <S.TextArea onChange={props.onChange} value={props.value} {...props} />
    )
  }
  return <S.Wrapper onChange={props.onChange} value={props.value} {...props} />
}

export default Input
