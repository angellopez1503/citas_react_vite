import { useState, useEffect } from 'react'
import Error from './Error'
import Success from './Success'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [id, setId] = useState('')

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [mensaje,setMensaje] = useState('')

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
    console.log("object2");
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
    setId(paciente.id)
  }

  }, [paciente])


  const handleSubmit = (e) => {
    e.preventDefault()

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log("Hay al menos uno con campo vacio");
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
      return
    }
    setError(false)

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {

      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(item => item.id === paciente.id ? objetoPaciente : item)
      setPacientes(pacientesActualizados)
      setPaciente({})
      setMensaje('Los datos se actualizaron correctamente')


    } else {
      objetoPaciente.id = generateId()
      setPacientes([...pacientes, objetoPaciente])
      setMensaje('Los datos se agregaron correctamente')
    }

    resetCampos()
    setSuccess(true)
    setTimeout(()=>{
      setSuccess(false)
    },2000)

  }

  const resetCampos = () => {
    
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
    setId('')
  }

  const generateId = () => {

    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha

  }

  const cancelar = () => {
    resetCampos()
    setPaciente({})
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold text-lg'>Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg py-10 px-5">
        {error && (<Error mensaje='Todos los campos son obligatorios' />)}
        {success && (<Success mensaje={mensaje} />)}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor='mascota'
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            placeholder="Nombre de la mascota"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            id='mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor='propietario'
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            placeholder="Nombre del Propietario"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            id='propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor='email'
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor='alta'
          >
            Alta
          </label>
          <input
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            id='alta'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor='sintomas'
          >
            Sintomas
          </label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            placeholder='Describe los sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md'
          value={id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
        {
          id && (
            <input
              type="button"
              className='bg-red-600 hover:bg-red-700 p-3 w-full uppercase font-bold rounded-md text-white transition-all cursor-pointer mt-2'
              value="Cancelar"
              onClick={()=>cancelar()}
            />
          )
        }
      </form>
    </div>
  )
}

export default Formulario