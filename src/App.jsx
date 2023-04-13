import './App.css'
import CadastroFarmacia from './Pages/Cadastro_Farmacias/CadastroFarmacias';
import CadastroMediacamentos from './Pages/Cadastro_Medicamentos/CadastroMedicamentos';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {

  return (
    <div className="App">
        <LoginPage />
        <CadastroFarmacia />
        <CadastroMediacamentos />
    </div>
  )
}

export default App;
