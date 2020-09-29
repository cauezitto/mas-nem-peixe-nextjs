import styled from 'styled-components';

export const Container = styled.section`
  margin: auto;
  width: 80%;
  min-height: 100px;

  padding: 0 10%;

  background-color: #E9EAE9;

  display: grid;
  grid-template-columns: 1fr 4fr 1fr;

  grid-template-areas:  '. copywrite .'
                        'logo title .'
                        'p1 p1 p1'
                        'p2 p2 p2'
                        'p3 p3 p3'
                        'p4 p4 p4'
                        'p5 p5 p5'
                        'title2 title2 .'
                        'p6 p6 p6'
                        'title3  title3 .'
                        'p7 p7 p7'
                        ;
  gap: 10px;

  figure{
      grid-area: logo;

      display: flex;

      align-items: center;
      justify-content: center;
    
      height: 100%;

      width: 100%;
      height: 100px;

      img{
        max-height: 50%;
      }
  }

  .br-title{
    clear: none;
  }

  .t1{
      display: flex;
      height: 100px;
      grid-area: title;
      width: 100%;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family: 'Ubuntu', sans-serif;
      font-style: normal;
      font-weight: normal;
      color: #03989E;

      font-size: 2.4rem;
  }

  p{
    font-family: 'Ubuntu', sans-serif;

    font-size: 1.5rem;
    line-height: 30px;

    height: 100%;

    margin: 0;

    font-style: normal;
    font-weight: normal;
  }

  a{
    line-height: 30px;
    text-decoration-line: underline;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    color: #FF5A00;
  }

  h4{
    display: flex;
    align-items: center;

    font-family: 'Ubuntu', sans-serif;

    font-size: 1.5rem;
    line-height: 30px;

    height: 100%;

    margin: 0;

    font-style: normal;
    font-weight: 500;

    color: #FF5A00;
  }

  .copywrite{
    grid-area: copywrite;

    color: #4D4949;
    font-family: 'Ubuntu Condensed', sans-serif;
    font-style: normal;
    font-weight: normal;

    text-align: center;

    padding: 30px 0;

  }

  .t2{
    grid-area: title2;
  }

  .t3{
    grid-area: title3;
  }

  .p1{
    grid-area: p1;
  }

  .p2{
    grid-area: p2;
  }

  .p3{
    grid-area: p3;
  }

  .p4{
    grid-area: p4;
  }

  .p5{
    grid-area: p5;
  }

  .p6{
    grid-area: p6;
  }

  .p7{
    grid-area: p7;
  }

  .expand-button{
    display: none;
    width: 30px;
    margin-right: 10px;

    img{
      width: 100%;
    }
  }

  .mobile{
    display: none;
  }


  @media(max-width: 1024px){
    .t1{
      font-size: 2rem;
    }
  }

  @media(max-width: 1024px){
    grid-template-areas:'copywrite copywrite copywrite'
                        'logo . .'
                        'title title title'
                        'p1 p1 p1'
                        'p2 p2 p2'
                        'p3 p3 p3'
                        'p4 p4 p4'
                        'p5 p5 p5'
                        'title2 title2 .'
                        'p6 p6 p6'
                        'title3  title3 .'
                        'p7 p7 p7'
                        ;
  .t1{
    justify-content: left;
    text-align: left;
    height: 50px;
    font-size: 2.5rem;
    }
  }

  @media (max-width: 425px){
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:'copywrite copywrite copywrite'
                        'logo . .'
                        'title title .'
                        'title title .'
                        'p1 p1 p1'
                        'p2 p2 p2'
                        'p3 p3 p3'
                        'p4 p4 p4'
                        'p5 p5 p5'
                        'title2 title2 .'
                        'p6 p6 p6'
                        'title3  title3 .'
                        'p7 p7 p7'
                        ;
                        .t1{
    text-align: left;
    font-size: 2.7rem;
  }

  p{
    font-size: 1.9rem;
  }

  h4{
    font-size: 2rem;
  }

  .p1, .p2, .p3, .p4, .p5, .p6, .p7{
    display : none;
  }

  .mobile{
    display: block;
  }
  .expand-button{
    display: flex;
  }
  }

  @media (max-width: 375px){
    width: 90%;
    padding: 0 5%;
  }
`;
