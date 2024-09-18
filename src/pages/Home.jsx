import '../assets/scss/home.scss'
import Header from './Header'
import Main from './Main'
import SwiperBanner from './SwiperShow'
import Cards from './Cards'
import Products from './Products'
import Footer from './Footer'



function App() {
    return(
        <>
        <Header />
        <SwiperBanner />
        <Cards />
        <Products />
        <Footer />
        </>
    )
}

export default App;