// src/ContactList.tsx
import ContactItem from './ContactItem'
import type { Contact } from './App'

type Props = {
    contacts: Contact[]
    onDelete: (id: number) => void
}

function ContactList({ contacts, onDelete }: Props) {
    if (contacts.length === 0) return <p>No hay contactos.</p>

    return (
    <>
        <h2>Lista</h2>
        <ul>
        {contacts.map(contact => (
            <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            />
        ))}
        </ul>
    </>
    )
}

export default ContactList
