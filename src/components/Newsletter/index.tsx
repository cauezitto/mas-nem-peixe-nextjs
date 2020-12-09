import { Wrapper } from 'components/Wrapper/styles'
import * as S from './styles'
import { FiMail } from 'react-icons/fi'
import Button from 'components/Button'
const Newsletter = () => (
  <Wrapper>
    <S.Wrapper>
      <h3>
        {' '}
        <p>
          <FiMail size={30} />
        </p>{' '}
        &nbsp; Receba todas as nossas melhores ofertas!
      </h3>

      <input type="text" placeholder="DIGITE SEU EMAIL" name="email" />

      <Button
        text="CADASTRAR"
        radius="medium"
        fontWeight="semiBold"
        size="medium"
        fontSize="medium"
      />
    </S.Wrapper>
  </Wrapper>
)

export default Newsletter
