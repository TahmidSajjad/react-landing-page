import React,{useEffect} from "react";
import "./App.css";
import CardSection from "./Sections/CardSection";
import ChartSection from "./Sections/ChartSection";
import Footer from "./components/Footer";
import Header from "./Sections/Header";
import MessagingSection from "./Sections/MessagingSection";
import FAQSection from "./Sections/FAQSection";
import PaymentSection from "./Sections/PaymentSection";
import { OuterLayout } from "./styles/Layout";
import aos from 'aos'
import 'aos/dist/aos.css'

function App() {


  useEffect(()=>{
    aos.init({duration: 2000})
  },[])

  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <main>
          <CardSection />
          <ChartSection />
          <MessagingSection />
          <PaymentSection />
          <FAQSection />
        </main>
      </OuterLayout>
      <Footer />
    </div>
  );
}

export default App;
