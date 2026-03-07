type Props = {
  busqueda: string
  onChange: (valor: string) => void
}

function BuscadorPacientes({ busqueda, onChange }: Props) {
  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Buscar por nombre, apellido o documento"
        value={busqueda}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default BuscadorPacientes