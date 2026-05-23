import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Involvements from '@/components/Involvements'
import About from '@/components/About'
import Graveyard from '@/components/Graveyard'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
export default function Home() {
  return (
    <div id="page-shell">
      <Nav />
      <main id="top">
        <Hero />
        <Experience />
        <Involvements />
        <About />
        <Graveyard />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </div>
  )
}
