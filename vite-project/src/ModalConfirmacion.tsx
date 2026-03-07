type Props = {
  mensaje: string
  onConfirmar: () => void
  onCancelar: () => void
}

function ModalConfirmacion({ mensaje, onConfirmar, onCancelar }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ background: "white", padding: "20px" }}>
        <p>{mensaje}</p>
        <button onClick={onConfirmar}>Confirmar</button>
        <button onClick={onCancelar}>Cancelar</button>
      </div>
    </div>
  )
}

export default ModalConfirmacion