import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import TestimonialSection from './sections/TestimonialSection'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <TestimonialSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
