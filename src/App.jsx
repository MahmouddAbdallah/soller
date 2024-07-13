import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from './components/Header/Header'
import PickSun from './components/PickSun/PickSun'
import Services from './components/Services/Services'
import PowerfulFeature from './components/PowerfulFeature/PowerfulFeature'
import Join from './components/Join/Join'
import CaseStudies from './components/CaseStudies/CaseStudies'
import GetSeller from './components/GetSeller/GetSeller'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Header />
      <PickSun />
      <Services />
      <PowerfulFeature />
      <Join />
      <CaseStudies />
      <GetSeller />
      <Footer />
    </div>
  )
}

export default App
