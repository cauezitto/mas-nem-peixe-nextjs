import React from 'react';

import { Container } from './styles';

function ProductDescription({description}) {

  return (
      <Container>
        <h3>
            {`Material: ${description.material}`}
        </h3>

        <ul>
        {
            description.features.map(feature =>(
                <li>
                    {feature}
                </li>
            ))
        }
        </ul>

        <span>
        {`Obs: ${description.note}`}
        </span>

        <br/>
        <br/>

        <p>
        {`Àltura: ${description.measures.height.value}${description.measures.height.type}`}
        </p>

        <p>
        {`Largura: ${description.measures.width.value}${description.measures.width.type}`}
        </p>

        <p>
        {`Comprimento: ${description.measures.length.value}${description.measures.length.type}`}
        </p>

        <p>
        {`Peso: ${description.measures.weight.value}${description.measures.weight.type}`}
        </p>
        
      </Container>
  )
}

export default ProductDescription;