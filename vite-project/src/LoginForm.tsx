import { useState } from "react"
import type { User } from "./App"

type Props = {
  onLogin: (user: User) => void
}

function LoginForm({ onLogin }: Props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === "recepcion@medicare.com" && password === "1234") {
      onLogin({
        name: "Laura Gomez",
        email,
        role: "recepcionista",
        avatar: "/Recepcionista.jpeg"
      })
      setError("")
      return
    }

    if (email === "medico@medicare.com" && password === "1234") {
      onLogin({
        name: "Carlos Perez",
        email,
        role: "medico"
      })
      setError("")
      return
    }

    setError("Usuario o contraseña incorrectos")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>MediCare+ Admin</h1>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      {error && <p>{error}</p>}

      <button type="submit">Ingresar</button>
    </form>
  )
}

export default LoginForm