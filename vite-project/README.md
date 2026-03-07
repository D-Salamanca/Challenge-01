```markdown
# MediCare+ Admin PWA

Aplicación web desarrollada en **React** como **Progressive Web App (PWA)** para la gestión administrativa de pacientes en la clínica **MediCare+**.

La aplicación permite registrar pacientes, editarlos, eliminarlos y consultarlos según el rol del usuario.

---

# Funcionalidades

## Autenticación simulada

La aplicación cuenta con un **LoginForm** que utiliza estado local para manejar email y contraseña.

Si las credenciales no coinciden se muestra el mensaje:

```

Usuario o contraseña incorrectos

```

Los usuarios disponibles son:

Recepcionista

```

[recepcion@medicare.com](mailto:recepcion@medicare.com)
1234

```

Médico

```

[medico@medicare.com](mailto:medico@medicare.com)
1234

```

---

# Sesión persistente

El usuario autenticado se guarda en **localStorage**.

Al recargar la aplicación:

- Si existe un usuario guardado se restaura la sesión automáticamente.
- El botón **Cerrar sesión** elimina la información almacenada.

---

# Gestión de pacientes

Los pacientes se almacenan en:

```

localStorage → medicare_pacientes

````

La aplicación permite:

- Registrar pacientes
- Editar pacientes
- Eliminar pacientes
- Buscar pacientes por nombre, apellido o documento

---

# FormularioPaciente

El componente funciona en dos modos:

**Alta**  
Campos vacíos para registrar un nuevo paciente.

**Edición**  
Si se selecciona editar, el formulario se completa automáticamente con los datos del paciente.

Validaciones:

- Nombre obligatorio
- Apellido obligatorio
- Documento obligatorio
- Documento entre **7 y 8 números**

---

# TablaPacientes

La tabla muestra:

- Nombre completo
- Documento
- Teléfono

Acciones disponibles para **recepcionista**:

- Editar
- Eliminar (con confirmación mediante modal)

---

# Buscador de pacientes

El buscador permite filtrar por:

- nombre
- apellido
- documento

La búsqueda es **case-insensitive**.

```javascript
//El estado de búsqueda vive en Dashboard porque es el componente que contiene la lista de pacientes.
//Así puede filtrar los datos y pasar a TablaPacientes solo los resultados que deben mostrarse.
````

---

# Control de acceso por rol

El control se realiza mediante **renderizado condicional**.

**Recepcionista**

* Puede crear pacientes
* Puede editar pacientes
* Puede eliminar pacientes
* No puede ver estadísticas

**Médico**

* Puede ver la lista de pacientes
* Puede ver estadísticas
* No puede registrar pacientes

---

# Estadísticas

El médico puede visualizar una estadística simple:

```
Total de pacientes registrados en el día
```

---

# Configuración PWA

La aplicación fue configurada como **Progressive Web App**.

### manifest.json

```
name: MediCare+ Admin
short_name: MediCare
display: standalone
start_url: /
theme_color: #0C2340
background_color: #FFFFFF
```

Incluye iconos:

* 192x192
* 512x512

---

# Service Worker

El service worker implementa la estrategia **cache first**.

Esto significa que la aplicación intenta cargar primero los recursos desde el **cache**, y si no existen los obtiene desde la red.

Esta estrategia es útil en aplicaciones médicas porque permite que la interfaz básica funcione incluso sin conexión.

---

# Instalación en celular

1. Abrir la aplicación en **Chrome**.
2. Presionar el menú del navegador.
3. Seleccionar **Instalar aplicación**.
4. La aplicación se instalará como una app independiente.

---

# Evidencia de funcionamiento

Video de demostración:

```
[Ver evidencia](https://drive.google.com/file/d/1wmYve22v74LruPCph-egBeNP9lQrWBuR/view?usp=sharing)
```

---

# Tecnologías utilizadas

* React
* TypeScript
* Vite
* PWA (Service Worker + Manifest)
* LocalStorage

```
```

