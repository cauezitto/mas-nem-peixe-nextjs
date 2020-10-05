import React from 'react';

import { Container } from './styles';

function AddTitle({title}) {
  return (
      <Container>
          <img src = '/expandIcon.png'/>
          {title}
      </Container>
  )
}

export default AddTitle;