import {useEffect, useState} from 'react'
import Contact from '../components/Contact'
import Header from '../components/Header'
import SearchHeader from '../components/SearchHeader'
import Banner from '../components/Banner'
import InstalmentsAndPayments from '../components/InstalmentsAndPayments'

import CTAbutton from '../components/CTAbutton'

import Divisor from '../components/DivisorHeader'
import ProductCard from '../components/ProductCard'

import InstagramPosts from '../components/InstagramPosts'
import EmailRegister from '../components/emailRegister'
import Footer from '../components/Footer'

import Head from 'next/head'

//Binding events. 

import loadPosts from '../utils/loadPosts'

import {FiInstagram} from 'react-icons/fi'
  
import {
    Container,
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

export default function Home() { 

    const [postsData, setPostsData] = useState(loadPosts())

    async function loadData (){
        const posts = await loadPosts()

        console.log(posts)
        setPostsData(posts)
    }

   
    useEffect(()=>{
        loadData()
    },[])
    

    return (
       <>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Manjari&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
        <title>
          Mas Nem Peixe?
        </title>

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
       </Head>
       <Container>
       <Contact className = 'contact' />
       <Header className = 'header' />
       <SearchHeader/>
       <main>
       <Banner height = {300}/>

       <InstalmentsAndPayments/>
      
       <CTAbutton text = 'SOBRE NÓS' />

        <Divisor 
         Component = {()=>(
            <h1 className = "h1" >
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
           <InstagramPosts posts = {postsData} />

            <EmailRegister />
        </main>
        <Footer/>
        
        </Container>
       </>
    )
}

Home.getInitialProps = async (ctx) =>{
   
   return {data: 'data'}
}
