import Button from 'components/Button'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

export type Props = {
  imageUrl: string
  title: string
  slug: string
  category: string
  price: number
}

const Product = ({ title, imageUrl, price, slug }: Props) => (
  <S.Wrapper>
    <Link href={`/produto/${slug}`} passHref>
      <a>
        <Image src={`/img/${imageUrl}`} width={250} height={220} alt={title} />

        <S.Title>
          {' '}
          CANECA <br /> {title}
        </S.Title>
        <S.Price>{`R$${price.toFixed(2)}`}</S.Price>
        <S.Installments>{`ou então 6x R$${Number(price / 6).toFixed(
          2
        )}`}</S.Installments>

        <Button
          text="EU QUERO!"
          outline
          color="orange"
          fontWeight="bold"
          fontSize="medium"
          radius="medium"
          size="medium"
        />
      </a>
    </Link>
  </S.Wrapper>
)

export default Product
