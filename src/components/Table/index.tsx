import * as S from './styles'

export type Props = {
  children: React.ReactNode
  size?: 'block'
  align?: 'right' | 'center' | 'left' | 'justify' | 'char'
}

export interface TrProps extends Props {
  weight?: 'normal' | 'semiBold' | 'bold'
  spaced?: boolean
}

export interface ThProps extends Props {
  weight?: 'normal' | 'semiBold' | 'bold'
}

export interface TableProps extends Props {
  weight?: 'normal' | 'semiBold' | 'bold'
  top?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
}

export const Table = (props: TableProps) => (
  <S.TableWrapper {...props}>{props.children}</S.TableWrapper>
)

export const Th = (props: ThProps) => (
  <S.ThWrapper {...props}>{props.children}</S.ThWrapper>
)

export const Td = (props: Props) => (
  <S.TdWrapper {...props}>{props.children}</S.TdWrapper>
)

export const Tr = (props: TrProps) => (
  <S.TrWrapper {...props}>{props.children}</S.TrWrapper>
)
