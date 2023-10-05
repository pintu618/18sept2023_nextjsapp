
//import area.......
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aside from '../components/Aside';
import Section from '../components/Section';
// import somthing from 'some library/location

//'page/_app.js'
//import 'import some location;
//function defination area

 function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to my Next Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <main >
        <Aside/>
        <Section/>
         </main>

      <Footer/>
    </div>
  )
}
   //export area
  export default Home;