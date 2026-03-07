import { useEffect, useState } from "react"
import LoginForm from "./LoginForm"
import Dashboard from "./Dashboard"

export type User = {
  name: string
  email: string
  role: "recepcionista" | "medico"
  avatar?: string
}

function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const savedUser = localStorage.getItem("medicare_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleLogin = (loggedUser: User) => {
    setUser(loggedUser)
    localStorage.setItem("medicare_user", JSON.stringify(loggedUser))
  }

  const handleLogout = () => {
    localStorage.removeItem("medicare_user")
    setUser(null)
  }

  return (
    <div style={{ padding: "20px" }}>
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App