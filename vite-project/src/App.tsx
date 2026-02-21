// src/App.tsx
import { useEffect, useState } from 'react'
import Loader from './Loader'
import ContactList from './ContactList'
import AddContactForm from './AddContactForm'

export type Contact = {
  id: number
  name: string
  phone: string
}

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [contacts, setContacts] = useState<Contact[]>([])

  // Simula carga inicial (como API)
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setContacts([
        { id: 1, name: 'Ana', phone: '3001234567' },
        { id: 2, name: 'Luis', phone: '3119876543' },
        { id: 3, name: 'Sofía', phone: '3205554444' },
      ])
      setLoading(false)
    }, 1200)

    return () => window.clearTimeout(timer)
  }, [])

  const addContact = (name: string, phone: string) => {
    const newContact: Contact = {
      id: Date.now(),
      name,
      phone,
    }

    console.log(
      `Se agregó el contacto: ${newContact.name} - ${newContact.phone}`
    )

    setContacts(prev => [newContact, ...prev])
  }

  const deleteContact = (id: number) => {
    setContacts(prev => prev.filter(c => c.id !== id))
  }

  return (
    <div
      style={{
        maxWidth: 600,
        margin: '0 auto',
        padding: 20,
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {/* 🔹 HEADER (Parent component image) */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 24,
        }}
      >
        <img
          src="/Logo.png"
          alt="App Logo"
          width={48}
          height={48}
          style={{ borderRadius: 8 }}
        />

        <h1 style={{ margin: 0 }}>Contactos</h1>
      </header>

      {/* 🔹 CONTENT */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <AddContactForm onAdd={addContact} />
          <ContactList contacts={contacts} onDelete={deleteContact} />
        </>
      )}
    </div>
  )
}

export default App