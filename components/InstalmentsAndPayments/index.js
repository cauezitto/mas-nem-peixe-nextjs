import {Container} from './styles'

import {FiPackage, FiCreditCard} from 'react-icons/fi'

import {BiShoppingBag} from 'react-icons/bi'

export default function InstalmentsAndPayments() {
    return (
        <Container>
            <div className = 'column'>
            <FiPackage/>
                <text>
                    <strong>
                        FRETE GRÁTIS
                    </strong>
                    {' '}
                    A PARTIR DE R$200,00
                </text>
            </div>

            <div className = 'column'>
                <FiCreditCard/>

                <text>
                    <strong>
                        PARCELE
                    </strong>
                    {' '}
                    EM ATÉ 3X SEM JUROS
                </text>
            </div>

            <div className = 'column'>
                <BiShoppingBag/>
                <text>
                    <strong>
                        COMPRE
                    </strong>
                    {' '}
                    COM SEGURANÇA
                </text>
            </div>
        </Container>
    )
}
