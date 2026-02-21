import type { Contact } from './main'

type Props = {
  contact: Contact
  onDelete: (id: number) => void
}

function ContactItem({ contact, onDelete }: Props) {
  const handleDelete = () => {
    console.log(`Se eliminó el contacto: ${contact.name} - ${contact.phone}`)
    onDelete(contact.id)
  }

  return (
    <li>
      <strong>{contact.name}</strong> — {contact.phone}{' '}
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  )
}

export default ContactItem