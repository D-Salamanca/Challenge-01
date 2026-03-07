import { useEffect, useState } from "react"

export type Paciente = {
  id: number
  nombre: string
  apellido: string
  documento: string
  telefono: string
}

type Props = {
  pacienteAEditar: Paciente | null
  onGuardar: (paciente: Paciente) => void
}

function FormularioPaciente({ pacienteAEditar, onGuardar }: Props) {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [documento, setDocumento] = useState("")
  const [telefono, setTelefono] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (pacienteAEditar) {
      setNombre(pacienteAEditar.nombre)
      setApellido(pacienteAEditar.apellido)
      setDocumento(pacienteAEditar.documento)
      setTelefono(pacienteAEditar.telefono)
    } else {
      setNombre("")
      setApellido("")
      setDocumento("")
      setTelefono("")
    }
  }, [pacienteAEditar])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nombre || !apellido || !documento) {
      setError("Nombre, apellido y documento son obligatorios")
      return
    }

    const documentoValido = /^\d{7,8}$/.test(documento)

    if (!documentoValido) {
      setError("El documento debe tener entre 7 y 8 números")
      return
    }

    const paciente: Paciente = {
      id: pacienteAEditar ? pacienteAEditar.id : Date.now(),
      nombre,
      apellido,
      documento,
      telefono
    }

    onGuardar(paciente)
    setError("")

    if (!pacienteAEditar) {
      setNombre("")
      setApellido("")
      setDocumento("")
      setTelefono("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>{pacienteAEditar ? "Editar paciente" : "Alta de paciente"}</h3>

      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={e => setApellido(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Documento"
          value={documento}
          onChange={e => setDocumento(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
        />
      </div>

      {error && <p>{error}</p>}

      <button type="submit">Guardar</button>
    </form>
  )
}

export default FormularioPaciente
