import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureRow from './components/FeatureRow'
import SignUpAd from './components/SignUpAd'
import CommonQuestions from './components/CommonQuestions'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { features } from './data/content'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="features">
          {features.map((feature) => (
            <FeatureRow key={feature.title} feature={feature} />
          ))}
        </section>
        <SignUpAd />
        <CommonQuestions />
        <Pricing />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
