import './styles/global.scss';
import Header from './component/Header'
import Footer from './component/Footer'
import Professionaly from './component/Professionaly'
import Transport from './component/Transport'
import Professionalride from './component/Professionalride'
import Bookexclusive from './component/Bookexclusive'
import Happytohear from './component/Happytohear'
import Bigevent from './component/Bigevent'
import Atlimox from './component/Atlimox'
import Our from './component/Our'

function App() {
  return (
    <div className="App">
      <Header />
      <Professionaly />
      <Transport />
      <Professionalride />
      <Bookexclusive />
      <Our />
      <Bigevent />
      <Atlimox />
      <Happytohear />
      <Footer />
    </div>
  );
}

export default App;
