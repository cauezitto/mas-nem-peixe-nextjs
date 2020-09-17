import Contact from '../components/Contact'
import Header from '../components/Header'
import SearchHeader from '../components/SearchHeader'
import Banner from '../components/Banner'
import InstalmentsAndPayments from '../components/InstalmentsAndPayments'

import CTAbutton from '../components/CTAbutton'

import Divisor from '../components/DivisorHeader'
import ProductCard from '../components/ProductCard'

import InstagramPosts from '../components/IntagramPosts'
import Footer from '../components/Footer'

import Head from 'next/head'

//Binding events. 

import axios from 'axios'

import {FiInstagram} from 'react-icons/fi'
  
import {
    ProductsCardContainer
} from '../styles/Home'


const Canecas = [
    {
        id: 1,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.webp'
    },
    {
        id: 2,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.webp'
    },
    {
        id: 3,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.webp'
    },
    {
        id: 4,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.webp'
    },
    {
        id: 5,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.webp'
    },
    {
        id: 6,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.webp'
    },
    {
        id: 7,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.webp'
    },
    {
        id: 8,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: '/caneca.webp'
    },
]

const Camisetas = [
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: '/camiseta2.webp'
    },
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: '/camiseta2.webp'
    },
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: '/camiseta2.webp'
    },
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: '/camiseta2.webp'
    },
    
]

export default function Home({postsInfo}) { 
    return (
       <>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          Mas Nem Peixe?
        </title>

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
       </Head>
       <Contact/>
       <Header/>
       <SearchHeader/>
       <Banner height = {300}/>

       <InstalmentsAndPayments/>
      
       <CTAbutton text = 'SOBRE NÓS' />

        <Divisor 
         Component = {()=>(
            <h1>
                CANECAS
            </h1>
         )}
         lineWidth = {75} 
         fontSize = {3}/>
        <ProductsCardContainer>
            {
                Canecas.map(caneca => (
                    <ProductCard key = {caneca.id} product = {caneca}  />
                ))
            }
        </ProductsCardContainer>

        <Divisor Component = {()=>(
            <>
            <FiInstagram/>
            <h1>
                <strong>
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
        <InstagramPosts posts = {postsInfo} />

        <Footer/>
       </>
    )
}

Home.getInitialProps = async (ctx) =>{
    const response = await axios.get(`https://www.instagram.com/masnempeixeoficial/?__a=1`)

    //console.log(response.data.graphql)

    const posts = response.data.graphql.user.edge_owner_to_timeline_media.edges//[0].node.display_url

    let postsInfo = []

    //console.log(posts[0].node)
    for (let index = 0; index < posts.length; index++) {
        if(index < 5){
            postsInfo.push(posts[index].node)
        }
        
    }

    return {postsInfo}
}
