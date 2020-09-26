import {useState} from 'react'
import {Container} from './styles'

import ItemsCarousel from 'react-items-carousel';

import {FiPackage, FiCreditCard} from 'react-icons/fi'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import {BiShoppingBag} from 'react-icons/bi'

export default function InstalmentsAndPayments() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

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

            <div className = 'mobile' style={{ padding: `0 ${chevronWidth}px`}}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={1}
                    gutter={10}
                    leftChevron={<IoIosArrowBack  size = {25} />}
                    rightChevron={<IoIosArrowForward  size = {25} />}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                <div style = {{}} >
                    <FiPackage/>
                        <text>
                            <strong>
                                FRETE GRÁTIS
                            </strong>
                            {' '}
                            A PARTIR DE R$200,00
                        </text>
                    </div>

                    <div style = {{}} >
                        <FiCreditCard/>

                        <text>
                            <strong>
                                PARCELE
                            </strong>
                            {' '}
                            EM ATÉ 3X SEM JUROS
                        </text>
                    </div>

                    <div style = {{}} >
                        <BiShoppingBag/>
                        <text>
                            <strong>
                                COMPRE
                            </strong>
                            {' '}
                            COM SEGURANÇA
                        </text>
                    </div>
                </ItemsCarousel>
                </div>
        </Container>
    )
}
