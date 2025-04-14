# Prueba Técnica - CRUD de Clientes en Vue 3
Aplicación web construida con **Vue 3**, **Vuex**, **Vue Router** y **Vuetify 3**, que implementa un CRUD básico para gestionar clientes con los siguientes campos:

- Nombre
- Correo Electrónico
- Teléfono

## Tecnologías utilizadas

- [Vue 3](https://vuejs.org/)
- [Vuex 4](https://vuex.vuejs.org/)
- [Vue Router 4](https://router.vuejs.org/)
- [Vuetify 3](https://next.vuetifyjs.com/)
- [Vite](https://vitejs.dev/) (para desarrollo rápido)

### 1. Clona el repositorio

```bash
git clone https://github.com/a1140252x/caja-morelia-crud.git
cd caja-morelia-api
```

---

## 2. Cómo ejecutar el proyecto
```bash
npm install
npm run dev
```

## 3. Documentación
Caracteristicas 
- CRUD completo de Clientes: Crear, Leer, Editar, Eliminar
- Validaciones en formularios
- UI responsiva con Vuetify
- Diálogo de confirmación para eliminación
- Manejo de estado simulado con Vuex
- Navegación con Vue Router
- Separación de vistas y componentes reutilizables

Estrctura de directorios
```bash
src/
├── assets/                # Recursos (sin uso actual)
├── components/            # Componentes reutilizables
│   ├── ClienteForm.vue
├── views/                 # Vistas del router
│   ├── ClienteList.vue
│   ├── ClienteCreate.vue
│   └── ClienteEdit.vue
├── router/
│   └── index.js           # Configuración de rutas
├── store/
│   └── index.js           # Estado centralizado de Vuex
├── App.vue                # Componente raíz
└── main.js                # Punto de entrada principal
```