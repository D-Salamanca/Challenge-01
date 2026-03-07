import type { Paciente } from "./FormularioPaciente"

type Props = {
  pacientes: Paciente[]
  onEditar: (paciente: Paciente) => void
  onEliminar: (id: number) => void
  role: string
}

function TablaPacientes({ pacientes, onEditar, onEliminar, role }: Props) {
  return (
    <table border={1} cellPadding={8} style={{ marginTop: "20px", width: "100%" }}>
      <thead>
        <tr>
          <th>Nombre completo</th>
          <th>Documento</th>
          <th>Teléfono</th>
          {role === "recepcionista" && <th>Acciones</th>}
        </tr>
      </thead>

      <tbody>
        {pacientes.map(paciente => (
          <tr key={paciente.id}>
            <td>{paciente.nombre} {paciente.apellido}</td>
            <td>{paciente.documento}</td>
            <td>{paciente.telefono}</td>

            {role === "recepcionista" && (
              <td>
                <button onClick={() => onEditar(paciente)}>Editar</button>
                <button onClick={() => onEliminar(paciente.id)}>Eliminar</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaPacientes