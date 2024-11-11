import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Accordion from './components/Accordion';
import Stats from './components/Stats';
import ContactForm from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="my-2">
          <Carousel />
        </div>
        
        <section className="py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Indianapolis
            </h1>
            <p className="text-lg text-gray-600">
              Indianapolis, affectionately known as Indy, is a vibrant city rich in culture, 
              sports, and history. From the iconic Indianapolis Motor Speedway to the 
              bustling downtown area, there's something for everyone in this dynamic city.
            </p>
          </div>
        </section>

        <div className="my-2">
          <Accordion />
        </div>

        <div className="my-2">
          <Stats />
        </div>

        <div className="my-2">
          <ContactForm />
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;