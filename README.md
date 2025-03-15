# Gestión de Amigos y Sorteo

Este proyecto es una aplicación interactiva que permite gestionar una lista de amigos y realizar un sorteo aleatorio para seleccionar al "amigo secreto".

---

## Funcionalidades

- **Agregar amigos a la lista**:
  - Permite a los usuarios ingresar nombres mediante un campo de texto.
  - Los nombres se validan para evitar entradas vacías o duplicadas antes de ser añadidos.
  - Los amigos añadidos se muestran dinámicamente en una lista visible.

- **Actualizar la lista de amigos**:
  - Agrega nuevos nombres a la lista existente sin recargar la página.
  - Valida y muestra los nombres directamente en el DOM.

- **Sorteo de amigos**:
  - Selecciona aleatoriamente un nombre de la lista actual de amigos.
  - Garantiza que no se pueda realizar el sorteo si la lista está vacía, mostrando un mensaje apropiado al usuario.

---

## Tecnologías utilizadas

- **HTML5**: Para estructurar la interfaz del proyecto.
- **JavaScript (ES6+)**: Para la lógica de agregar, listar, validar y sortear los nombres dinámicamente.

---

## Cómo usar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/DanielCarrascoPallaleo/challenge-amigo-secreto-alura.git
