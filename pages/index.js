import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navabar from './../components/Navabar';
import Category from './../components/Category';
import Footer from './../components/Footer';
import Subscription from './../components/Subscription';
import ProductFeed from './../components/ProductFeed'


export default function Home({products}) {
  return (
    <div className={styles.home}>
      <Head>
        <title>vamoo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navabar/>
      <main className={styles.main}>
      <Category/>  
      <ProductFeed products={products}/>
     
      </main>
      <Subscription/>
      <Footer/>
   
    </div>
  )
}

// Server site rendering 

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())



 return{props: {
  products,
 }}
}