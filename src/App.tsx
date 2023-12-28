import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoBar from './components/infobar';
import CalculatorContainer from './components/CalculatorContainer'
import CalculatorProjectContainer from './components/CalculatorProjectContainer';

function App() {

  return (
    <>
      <Header />
      <InfoBar title='Para você que é MEI ou quer se tornar MEI, calcule o valor da sua hora de trabalho:' />
      <CalculatorContainer />
      <InfoBar title='Calcule o valor a ser cobrado para um projeto:' />
      <CalculatorProjectContainer />
      <Footer />
    </>
  );
}

export default App;
