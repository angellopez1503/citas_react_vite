 
import Paciente from './Paciente'
import CabeceraListadoPacientes from './CabeceraListadoPacientes';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente,resetCampos }) => {

  return (
    <div className='md:w-1/2 lg:w-3/5'>
      {
        (pacientes && pacientes.length) ? (
          <>
            <CabeceraListadoPacientes
              font1="ListadoPacientes"
              font2="Administra tus"
              font3="Pacientes y Citas"
            />
            <div className='md:h-screen overflow-y-scroll' >
              {
                pacientes.map(paciente =>
                (
                  <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                    resetCampos={resetCampos}
                  />
                )
                )
              }
            </div>
          </>
        ) : (
          <CabeceraListadoPacientes
            font1="No hay pacientes"
            font2="Comienza agregando pacientes"
            font3="y apareceran en este lugar"
          />

        )
      }

    </div>
  )
}

export default ListadoPacientes