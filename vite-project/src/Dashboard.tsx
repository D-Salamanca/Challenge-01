import { useEffect, useState } from "react"
import type { User } from "./App"
import PerfilUsuario from "./PerfilUsuario"
import FormularioPaciente from "./FormularioPaciente"
import TablaPacientes from "./TablaPacientes"
import BuscadorPacientes from "./BuscadorPacientes"
import ModalConfirmacion from "./ModalConfirmacion"
import type { Paciente } from "./FormularioPaciente"

type Props = {
  user: User
  onLogout: () => void
}

function Dashboard({ user, onLogout }: Props) {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [pacienteAEditar, setPacienteAEditar] = useState<Paciente | null>(null)
  const [busqueda, setBusqueda] = useState("")
  const [mostrarModal, setMostrarModal] = useState(false)
  const [pacienteAEliminar, setPacienteAEliminar] = useState<number | null>(null)

  useEffect(() => {
    const savedPacientes = localStorage.getItem("medicare_pacientes")

    const iniciales: Paciente[] = [
      {
        id: 1,
        nombre: "Jonathan",
        apellido: "Lopez Londoño",
        documento: "12345678",
        telefono: "3000000001"
      },
      {
        id: 2,
        nombre: "Diego",
        apellido: "Ortiz Hurtado",
        documento: "87654321",
        telefono: "3000000002"
      }
    ]

    if (savedPacientes) {
      const pacientesGuardados = JSON.parse(savedPacientes)

      if (pacientesGuardados.length > 0) {
        setPacientes(pacientesGuardados)
      } else {
        setPacientes(iniciales)
        localStorage.setItem("medicare_pacientes", JSON.stringify(iniciales))
      }
    } else {
      setPacientes(iniciales)
      localStorage.setItem("medicare_pacientes", JSON.stringify(iniciales))
    }
  }, [])

  const guardarPacientes = (nuevosPacientes: Paciente[]) => {
    setPacientes(nuevosPacientes)
    localStorage.setItem("medicare_pacientes", JSON.stringify(nuevosPacientes))
  }

  const handleGuardar = (paciente: Paciente) => {
    if (pacienteAEditar) {
      const actualizados = pacientes.map(p =>
        p.id === paciente.id ? paciente : p
      )
      guardarPacientes(actualizados)
      setPacienteAEditar(null)
    } else {
      const nuevos = [...pacientes, paciente]
      guardarPacientes(nuevos)
    }
  }

  const handleEditar = (paciente: Paciente) => {
    setPacienteAEditar(paciente)
  }

  const handleEliminar = (id: number) => {
    setPacienteAEliminar(id)
    setMostrarModal(true)
  }

  const confirmarEliminar = () => {
    if (pacienteAEliminar === null) return

    const filtrados = pacientes.filter(p => p.id !== pacienteAEliminar)
    guardarPacientes(filtrados)

    setMostrarModal(false)
    setPacienteAEliminar(null)
  }

  const cancelarEliminar = () => {
    setMostrarModal(false)
    setPacienteAEliminar(null)
  }

  //El estado de búsqueda vive en Dashboard porque es el componente que contiene la lista de pacientes.
  //Así puede filtrar los datos y pasar a TablaPacientes solo los resultados que deben mostrarse.
  const pacientesFiltrados = pacientes.filter(paciente => {
    const texto = busqueda.toLowerCase()

    return (
      paciente.nombre.toLowerCase().includes(texto) ||
      paciente.apellido.toLowerCase().includes(texto) ||
      paciente.documento.toLowerCase().includes(texto)
    )
  })

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <h2>MediCare+ Admin</h2>
        <PerfilUsuario user={user} />
      </header>

      <button onClick={onLogout}>Cerrar sesión</button>

      <section style={{ marginTop: "20px" }}>
        <h3>Resumen general</h3>
        <p>Bienvenido, {user.name}</p>
      </section>

      {user.role !== "medico" && (
        <section>
          <FormularioPaciente
            pacienteAEditar={pacienteAEditar}
            onGuardar={handleGuardar}
          />
        </section>
      )}

      <BuscadorPacientes
        busqueda={busqueda}
        onChange={setBusqueda}
      />

      <section>
        <TablaPacientes
          pacientes={pacientesFiltrados}
          onEditar={handleEditar}
          onEliminar={handleEliminar}
          role={user.role}
        />
      </section>

      {user.role === "medico" && (
        <section style={{ marginTop: "20px" }}>
          <h3>Estadísticas del día</h3>
          <p>Total de pacientes del día: {pacientes.length}</p>
        </section>
      )}

      {mostrarModal && (
        <ModalConfirmacion
          mensaje="¿Desea eliminar este paciente?"
          onConfirmar={confirmarEliminar}
          onCancelar={cancelarEliminar}
        />
      )}
    </div>
  )
}

export default Dashboard