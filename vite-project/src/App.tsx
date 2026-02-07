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
    <>
      <h1>Contactos</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          <AddContactForm onAdd={addContact} />
          <ContactList contacts={contacts} onDelete={deleteContact} />
        </>
      )}
    </>
  )
}

export default App
