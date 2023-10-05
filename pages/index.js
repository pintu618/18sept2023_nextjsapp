
//import area.......
import Head from 'next/head'
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
      <header>Header component </header>

      <main >
        <aside> Aside component   </aside>
        <section> Section component </section>
         </main>

      <footer >Footer component </footer>
    </div>
  )
}
   //export area
  export default Home;