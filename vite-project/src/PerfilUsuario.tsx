import type { User } from "./App"

type Props = {
  user: User
}

function PerfilUsuario({ user }: Props) {
  const initials = user.name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {user.avatar ? (
        <img
          src={user.avatar}
          alt={user.name}
          width={40}
          height={40}
          style={{
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />
      ) : (
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#0C2340",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold"
          }}
        >
          {initials}
        </div>
      )}

      <span>{user.name}</span>
    </div>
  )
}

export default PerfilUsuario