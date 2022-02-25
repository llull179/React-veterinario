import React from 'react'

const Paciente = (props) => {

  const{nombre,propietario,email,fecha,sintomas,id} = props.paciente
  /*const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?');
    if(respuesta) {
      props.eliminarPaciente(id)
    }
  }*/
  return (
    <div className="m-3 px-5 py-10 rounded-xl shadow-md bg-white">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
        <span className='font-normal normal-case'> {nombre}</span></p>

        <p className="font-bold mb-3 uppercase text-gray-700">Propietario:
        <span className='font-normal normal-case'> {propietario}</span></p>

        <p className="font-bold mb-3 uppercase text-gray-700">Email:
        <span className='font-normal normal-case'> {email}</span></p>

        <p className="font-bold mb-3 uppercase text-gray-700">Email:
        <span className='font-normal normal-case'> {fecha}</span></p> 

        <p className="font-bold mb-3 uppercase text-gray-700">Nombre:
        <span className='font-normal normal-case'> {sintomas}</span></p>


        <div className='flex justify-between'>
          <button 
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase text-bold rounded-lg'
          type='button'
          onClick={() => props.setPaciente(props.paciente)}
          > Editar</button>
          <button 
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase text-bold rounded-lg'
          type='button'
          onClick={() => props.eliminarPaciente(id)}> Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente
