// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Busca clases en todos los archivos JS/JSX/TS/TSX
      "./public/index.html" // Si usas clases en HTML
    ],
    darkMode: 'class', // Habilita el modo oscuro manual (con clases)
    theme: {
      extend: {}, // Aquí puedes agregar colores/fuentes personalizados
    },
    plugins: [], // Plugins adicionales (como forms, typography, etc.)
    corePlugins: {
      scrollSnapType: true, // Necesario para snap-y, snap-mandatory
    }
  }