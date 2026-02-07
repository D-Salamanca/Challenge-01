// src/AddContactForm.tsx
import { useState } from 'react'

type Props = {
    onAdd: (name: string, phone: string) => void
}

function AddContactForm({ onAdd }: Props) {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const cleanName = name.trim()
    const cleanPhone = phone.trim()

    if (cleanName === '' || cleanPhone === '') return

    onAdd(cleanName, cleanPhone)
    setName('')
    setPhone('')
    }

    return (
    <>
        <h2>Agregar contacto</h2>

        <form onSubmit={handleSubmit}>
        <input
            placeholder="Nombre"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
            }
        />

        <input
            placeholder="Teléfono"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
            }
        />

        <button type="submit">Agregar</button>
        </form>
    </>
    )
}

export default AddContactForm
