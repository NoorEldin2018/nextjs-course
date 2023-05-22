import { Fragment } from "react";
import ProductList from "../components/products/ProductList";
import axios from "axios";
import Head from "next/head";
import { dbConnect } from "../util/mongo";
import Product from "../models/Product";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <meta name="description" content="Browse a list of new products" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <ProductList products={props.products} />
    </Fragment>
  )
}

export default HomePage


// export async function getStaticProps() {
//     // fetch data from an API
//    return {
//     props: {
//         products,
//     },
//     revalidate: 1,
//    }
// }

export async function getServerSideProps() {
    // fetch data from an API
  // const res = await axios.get("http://localhost:3000/api/products")
  // const res = await axios.get(`${process.env.APP_DEV || process.env.APP_PROD}/api/products`)
  dbConnect();
  const productsData = await Product.find();
   return {
    props: {
        products: res.data.data.map((product) => ({
          image: product.image,
          name: product.name, 
          price: product.price,
          id: product._id.toString(),
        })),
    },
    // revalidate: 1,
   }
}


// export async function getServerSideProps() {
//     // fetch data from an API
//     dbConnect();
//     const productsData = await Product.find();
  
//     return {
//       props: {
//         products: productsData.map((product) => ({
//           image: product.image,
//           name: product.name,
//           price: product.price,
//           id: product._id.toString(),
//         })),
//       },
//     };
//   }
  