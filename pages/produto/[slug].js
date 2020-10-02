import {useState, useEffect} from 'react'
import {string_to_slug} from '../../utils/str2slug'

import {FiInstagram} from 'react-icons/fi'

import Head from 'next/head'

import Header from '../../components/Header'
import Contact from '../../components/Contact'
import SearchHeader from '../../components/SearchHeader'
import ProductSection from '../../components/ProductSection'
import Divisor from '../../components/DivisorHeader'
import InstalmentsAndPayments from '../../components/InstalmentsAndPayments'
import InstagramPosts from '../../components/InstagramPosts'
import EmailRegister from '../../components/emailRegister'
import Footer from '../../components/Footer'


export default function Product({product}) {

    return (
        <>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Manjari&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
        <title>
          {product.slug}
        </title>

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name="twitter:card" content="product" data-head-react="true"/>
        <meta name="twitter:site" content="Mercado Livre" data-head-react="true"/>
        <meta name="twitter:title" content="Furadeira Parafusadeira Impacto 650w Bfu01m Britânia Maleta" data-head-react="true"/>
        <meta name="twitter:description" content="Seja bem vindo a DD Máquinas !DescriçãoA Furadeira de Impacto 2 em 1 BFU01M possui qualidade e for&amp;ccedila para você executar os mais diversos trabalhos com apenas um equipamento. Cord&amp;atildeo el&amp;eacutetrico dá autonomia durante o uso e para as perfuraç&amp;otildees mais dif&amp;iacuteceis ela tem a funç&amp;atildeo Martelete.- Especificaç&amp;otildees T&amp;eacutecnicas:- Voltagem 110v- 650 W de pot&amp;ecircncia- Funç&amp;atildeo Impacto 48000 IPM- Cord&amp;atildeo el&amp;eacutetrico com 1m- Mandril 3/8”- Acompanha chave para mandril- Possui funç&amp;atildeo martelete- Possui seletor de martelete/perfuraç&amp;atildeo- Trava de gatilho- Revers&amp;atildeo de rotaç&amp;atildeo- Di&amp;acircmetro de perfuraç&amp;atildeo em a&amp;ccedilo: 10mm- Di&amp;acircmetro de perfuraç&amp;atildeo em madeira: 20mm- Di&amp;acircmetro de perfuraç&amp;atildeo em concreto: 10mm- Acompanha maleta pl&amp;aacutestica- Altura: 24,7cm- Largura: 24,5cm- Profundidade: 7cm- Peso: 1,26KgImagens meramente ilustrativas **" data-head-react="true"/>
        <meta name="twitter:image" content="https://http2.mlstatic.com/D_NQ_NP_651102-MLB43652136622_102020-O.webp" data-head-react="true"/>
        </Head>
        <Contact/>
        <Header/>
        <SearchHeader />
        <br/>
        <InstalmentsAndPayments />
        <ProductSection product = {product} />
       
        <Divisor Component = {()=>(
            <>

            <FiInstagram className = 'svg'  />
            <h1 className = "h1" >
                <strong className = "strong" >
                {' '}
                    SIGA NOSSO INSTAGRAM
                </strong>
                {' '}
                @MASNEMPEIXEOFICIAL
            </h1>
           
            </>
         )}
         lineWidth = {15} fontSize = {2}
         />
        <InstagramPosts/>
        <EmailRegister/>
        <Footer />
        </>
    )
}

export async function getStaticProps({params}) {

    console.log(string_to_slug('Caneca "Mas nem peixe?"'))

    const product = {
        id: 1,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.webp',
        slug: 'caneca-mas-nem-peixe',
        reference: 'CANEMNP'
    }



    return {
        props: {
            product
        }
    }
  }

export async function getStaticPaths() {

  /*  [
        { 
            params: 
            {
                id:'1'
            } 
        }
        ],
*/
    return {
    paths:[
            {
                params: {
                slug: 'caneca-mas-nem-peixe'
            }
        }
        ]
    ,
    fallback: false,
    };
}
