import React, {useState,useEffect } from 'react'
import Error from './Error';
 const Formulario=(props)=> {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error,setError] = useState(false);

    useEffect(()=>{
      if(Object.keys(props.paciente).length > 0) {
        setNombre(props.paciente.nombre)
        setPropietario(props.paciente.email)
        setEmail(props.paciente.email)
        setFecha(props.paciente.fecha )
        setSintomas(props.paciente.sintomas)
      }
    },[props.paciente])

    const generarId = () => {
      const random = Math.random().toString(36).substr(2)
      const fecha = Date.now().toString(36)

      return random+fecha
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();

      //validacion del formulario
      if([nombre,propietario,email,fecha,sintomas].includes('')) {
        setError(true);
        return;
      }
      setError(false);


      //Cream paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      }
      
      if(props.paciente.id) {
          //editando el registro
          objetoPaciente.id = props.paciente.id
          
          const pacientesActualizados = props.pacientes.map(p => p.id ===
            props.paciente.id ? objetoPaciente : p)
          props.setPacientes(pacientesActualizados)

      } else{
          //agregando en el registro
          objetoPaciente.id = generarId()
          props.setPacientes([...props.pacientes,objetoPaciente]);
          
      }
      props.setPaciente({})
      
      //Reiniciar formulario
      setNombre('');
      setEmail('')
      setFecha('')
      setPropietario('')
      setSintomas('')
    }

    return (
      <div className='md:w-1/2 lg:w2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Paceintes</h2>
        <p className='text-lg mt-5 text-center'>Añade Pacientes y <span className='text-indigo-600'>Administralos</span></p>
        <form 
          onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5'>
         {error && <Error mensaje='Todos los campos son obligatorios'/>}
          
          <div className='mb-5'>
            <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
              Nombre Mascota
            </label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              id='mascota'
              type="text"
              placeholder='Nombre de la mascota'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>
          <div className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
              Nombre Propietario
            </label>
            <input
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
              id='propietario'
              type="text"
              placeholder='Nombre del propietario'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              type="email"
              placeholder='email'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>
          <div className='mb-5'>
            <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
              Nombre alta
            </label>
            <input
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              id='alta'
              type="date"
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
              Describe los simptomas
            </label>
           <textarea 
           value={sintomas}
           onChange={(e) => setSintomas(e.target.value)}
           placeholder='describe los simptomas'
           className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           id="sintomas"/>
          </div>
          <input
          value={props.paciente.id ? 'Editar paciente' : 'Agregar paciente'}
          className='hover:bg-indigo-700 w-full bg-indigo-600 p-3 uppercase font-bold text-white'
          type="submit"/>
        </form>
      </div>
    )
}

export default Formulario