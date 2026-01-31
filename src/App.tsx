import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
// import { Portfolio } from './components/Portfolio';
import { Portfolio1 } from './components/Portfolio1';
export function App() {
  return (
    <div className="min-h-screen bg-matco-bg text-matco-text font-sans selection:bg-matco-cream selection:text-matco-bg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        {/* <Portfolio /> */}
        <Portfolio1 />
        <Contact />
      </main>
      <Footer />
    </div>);

}