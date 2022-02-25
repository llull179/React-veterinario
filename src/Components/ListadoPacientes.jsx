import Paciente from "./Paciente"

const ListadoPacientes = (props) => {


  return (
    <div className=' md:w-1/2 lg:2/5 md:   h-screen overflow-y-scroll'>
    {props.pacientes && props.pacientes.length ? (
      <>
      <h1 className="font-black text-center text-3xl">Listado pacientes</h1>
      <p className="text-xl">
        Administra tus
        <span className="text-indigo-600 font-bold"> pacientes y citas</span>
      </p>
      {props.pacientes.map((paciente)=>
        <Paciente
          key={paciente.id}
          paciente = {paciente} 
          setPaciente = {props.setPaciente}
          eliminarPaciente = {props.eliminarPaciente}
        />
        )}
    </>
    ): (
      <>
      <h1 className="font-black text-center text-3xl">No hay pacientes</h1>
      <p className="text-xl">
        Administra tus
        <span className="text-indigo-600 font-bold"> pacientes y citas</span>
      </p>
      </>
      )
    }
    </div>
    
  )
}

export default ListadoPacientes
