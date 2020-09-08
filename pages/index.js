import React from 'react'
import Header from '../components/Header'
import SearchHeader from '../components/SearchHeader'
import Banner from '../components/Banner'
import CTA1 from '../components/CTAhome'
import CTAbutton from '../components/CTAbutton'

import Divisor from '../components/DivisorHeader'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
 
 
import {
    ProductsCardContainer
} from '../styles/Home'


const Canecas = [
    {
        id: 1,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.png'
    },
    {
        id: 2,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.png'
    },
    {
        id: 3,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.png'
    },
    {
        id: 4,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.png'
    },
]

const Camisetas = [
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: '/camiseta2.png'
    },
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: '/camiseta2.png'
    },
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: '/camiseta2.png'
    },
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: '/camiseta2.png'
    },
    
]

export default function Home() { 
    return (
       <>
       <Header/>
       <SearchHeader/>
       <Banner height = {300}/>
       <CTA1 items = {['camisetasCTA.png', 'almofadasCTA.png', 'canecasCTA.png']} />
       <CTAbutton text = 'SOBRE NÓS' />
       
       <Divisor title = 'CAMISETAS' />
        <ProductsCardContainer>
            {
                Camisetas.map(camiseta => (
                    <ProductCard key ={camiseta.id} product = {camiseta}  />
                ))
            }
        </ProductsCardContainer>

        <CTAbutton text = 'VEJA MAIS' />

        <Divisor title = 'CANECAS' />
        <ProductsCardContainer>
            {
                Canecas.map(caneca => (
                    <ProductCard key = {caneca.id} product = {caneca}  />
                ))
            }
        </ProductsCardContainer>

        <CTAbutton text = 'VEJA MAIS' />

        <Footer/>
       </>
    )
}