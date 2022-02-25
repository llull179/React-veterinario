import Formulario from './Components/Formulario';
import Header from'./Components/Header'
import ListadoPacientes from './Components/ListadoPacientes';
import {useState,useEffect} from 'react'

function App() {

  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});

  useEffect(()=> {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }

    obtenerLS();
  },[])

  useEffect(() => {
     localStorage.setItem('paccientes',JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(p => p.id !==id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className='container mx-auto'>
      <Header numeros = {1} />
      <div className='md:flex mt-10'>
        <Formulario
        pacientes = {pacientes} 
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
      
    </div>
  );
}

export default App;
