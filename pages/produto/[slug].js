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
