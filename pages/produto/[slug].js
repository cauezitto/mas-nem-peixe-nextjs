import {useState, useEffect} from 'react'
import {string_to_slug} from '../../utils/str2slug'

import {FiInstagram} from 'react-icons/fi'

import Head from 'next/head'

import Header from '../../components/Header'
import Contact from '../../components/Contact'
import SearchHeader from '../../components/SearchHeader'
import ProductSection from '../../components/ProductSection'
import Divisor from '../../components/DivisorHeader'
import ProductDescription from '../../components/ProductDescription'
import AddTitle from '../../components/AddTitle'
import InstalmentsAndPayments from '../../components/InstalmentsAndPayments'
import InstagramPosts from '../../components/InstagramPosts'
import EmailRegister from '../../components/emailRegister'
import Footer from '../../components/Footer'

import {ProductsCardContainer} from '../../styles/Home'
import ProductCard from '../../components/ProductCard'

const sugestions = [
    {
        id: 2,
        title: 'Preta',
        price: '34.00',
        category: 'Caneca',
        image: '/canecaPreta.png',
        slug: 'caneca-preta',
        reference: 'CANBLACK',
        description: {
            note: 'As cores podem sofrer variações de acordo com o tipo, configuração e resolução do seu monitor.',
            material: 'Cerâmica',
            features: [
                'impresão em alta definição',
                'Não sai ao lavar',
                'Pode ser levado ao micro-ondas e lava-louças',
                'Capacidade: 325ml'
            ],
            measures: {
                height: {
                    value: 9.50,
                    type: 'cm'
                },
                width: {
                    value: 8.00,
                    type: 'cm'
                },
                length: {
                    value: 8.00,
                    type: 'cm'
                },
                weight:{
                    value: 330,
                    type: 'g'
                }
            },
        }
    },

    {
        id: 3,
        title: 'Preta',
        price: '34.00',
        category: 'Caneca',
        image: '/canecaPreta.png',
        slug: 'caneca-preta',
        reference: 'CANBLACK',
        description: {
            note: 'As cores podem sofrer variações de acordo com o tipo, configuração e resolução do seu monitor.',
            material: 'Cerâmica',
            features: [
                'impresão em alta definição',
                'Não sai ao lavar',
                'Pode ser levado ao micro-ondas e lava-louças',
                'Capacidade: 325ml'
            ],
            measures: {
                height: {
                    value: 9.50,
                    type: 'cm'
                },
                width: {
                    value: 8.00,
                    type: 'cm'
                },
                length: {
                    value: 8.00,
                    type: 'cm'
                },
                weight:{
                    value: 330,
                    type: 'g'
                }
            },
        }
    },

    {
        id: 4,
        title: 'Preta',
        price: '34.00',
        category: 'Caneca',
        image: '/canecaPreta.png',
        slug: 'caneca-preta',
        reference: 'CANBLACK',
        description: {
            note: 'As cores podem sofrer variações de acordo com o tipo, configuração e resolução do seu monitor.',
            material: 'Cerâmica',
            features: [
                'impresão em alta definição',
                'Não sai ao lavar',
                'Pode ser levado ao micro-ondas e lava-louças',
                'Capacidade: 325ml'
            ],
            measures: {
                height: {
                    value: 9.50,
                    type: 'cm'
                },
                width: {
                    value: 8.00,
                    type: 'cm'
                },
                length: {
                    value: 8.00,
                    type: 'cm'
                },
                weight:{
                    value: 330,
                    type: 'g'
                }
            },
        }
    },

    {
        id: 5,
        title: 'Preta',
        price: '34.00',
        category: 'Caneca',
        image: '/canecaPreta.png',
        slug: 'caneca-preta',
        reference: 'CANBLACK',
        description: {
            note: 'As cores podem sofrer variações de acordo com o tipo, configuração e resolução do seu monitor.',
            material: 'Cerâmica',
            features: [
                'impresão em alta definição',
                'Não sai ao lavar',
                'Pode ser levado ao micro-ondas e lava-louças',
                'Capacidade: 325ml'
            ],
            measures: {
                height: {
                    value: 9.50,
                    type: 'cm'
                },
                width: {
                    value: 8.00,
                    type: 'cm'
                },
                length: {
                    value: 8.00,
                    type: 'cm'
                },
                weight:{
                    value: 330,
                    type: 'g'
                }
            },
        }
    }
]


export default function Product({product}) {

    return (
        <>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Manjari&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
        <title>
          {product.category + ' ' + product.title + 'R$' + product.price}
        </title>

        <meta 
            name="description" 
            content = 
            "Mega Oferta!!!Com ótimo acabamento e durabilidade, Pode ser levada ao microondas e lava-louças. CANECA DE PORCELANA!!! Peça já a sua e colecione!!! Capacidade: 350 ml"/>

        </Head>
        <Contact/>
        <Header/>
        <SearchHeader />
        <br/>
        <InstalmentsAndPayments />
        <ProductSection product = {product} />

        <Divisor Component = {()=>(
            <>
            <h1 className = "h1" style = {{fontSize: '2.6rem'}} >
                DESCRIÇÃO
            </h1>
           
            </>
         )}
         lineWidth = {60} fontSize = {2}
         />

 
        <ProductDescription description = {product.description} />

        <AddTitle title = 'Aproveite e compre junto' />
       <ProductsCardContainer>
            {
                sugestions.map(sugestion =>(
                    <ProductCard 
                        key = {sugestion.id} 
                        product = {sugestion}
                    />
                ))
            }
       </ProductsCardContainer>
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
         lineWidth = {24} fontSize = {2}
         />
        <InstagramPosts/>
        <EmailRegister/>
        <Footer />
        </>
    )
}

export async function getStaticProps({params}) {

    console.log(string_to_slug('Caneca "Mas nem peixe?"'))

    console.log(params.slug)

    

    let product

    if(params.slug === 'caneca-mas-nem-peixe'){
        product = {
            id: 1,
            title: 'Mas Nem Peixe?',
            price: '33.99',
            category: 'Caneca',
            image: '/caneca.webp',
            slug: 'caneca-mas-nem-peixe',
            reference: 'CANEMNP',
            description: {
                note: 'As cores podem sofrer variações de acordo com o tipo, configuração e resolução do seu monitor.',
                material: 'Cerâmica',
                features: [
                    'impresão em alta definição',
                    'Não sai ao lavar',
                    'Pode ser levado ao micro-ondas e lava-louças',
                    'Capacidade: 325ml'
                ],
                measures: {
                    height: {
                        value: 9.50,
                        type: 'cm'
                    },
                    width: {
                        value: 8.00,
                        type: 'cm'
                    },
                    length: {
                        value: 8.00,
                        type: 'cm'
                    },
                    weight:{
                        value: 330,
                        type: 'g'
                    }
                },
            }
        }
    }

    else{
        product = {
            id: 2,
            title: 'Preta',
            price: '34.00',
            category: 'Caneca',
            image: '/canecaPreta.png',
            slug: 'caneca-preta',
            reference: 'CANBLACK',
            description: {
                note: 'As cores podem sofrer variações de acordo com o tipo, configuração e resolução do seu monitor.',
                material: 'Cerâmica',
                features: [
                    'impresão em alta definição',
                    'Não sai ao lavar',
                    'Pode ser levado ao micro-ondas e lava-louças',
                    'Capacidade: 325ml'
                ],
                measures: {
                    height: {
                        value: 9.50,
                        type: 'cm'
                    },
                    width: {
                        value: 8.00,
                        type: 'cm'
                    },
                    length: {
                        value: 8.00,
                        type: 'cm'
                    },
                    weight:{
                        value: 330,
                        type: 'g'
                    }
                },
            }
        }
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
            },
            {
                params: {
                slug: 'caneca-preta'
                }
            }
        ]
    ,
    fallback: false,
    };
}
