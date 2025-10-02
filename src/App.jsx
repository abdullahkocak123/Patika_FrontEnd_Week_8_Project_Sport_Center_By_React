import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Stats from "./components/Stats";
import Classes from "./components/Classes";
import BMI from "./components/BMI";
import Trainers from "./components/Trainers";
import Purchase from "./components/Purchase";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[url('images/hero-man.jpg')] bg-cover bg-center pb-20">
        <Header />

        <Main />
      </div>
      <Stats />
      <Classes />
      <BMI />

      <Trainers />

      <Purchase />

      <Review />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
