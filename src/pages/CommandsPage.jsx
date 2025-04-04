import { useState } from "react";
import Button from "../components/ui/button"; 
import { motion } from "framer-motion";
import { Leaf, Moon, Sun } from "lucide-react";
import React from "react";

const commands = [
  { name: "!help", description: "Muestra la lista de comandos disponibles.", example: "!help" },
  { name: "!save1b", description: "Guarda la información inicial del personaje con una imagen de sus stats.", example: "!save1b Nahida [imagen]" },
  { name: "!save2b", description: "Guarda información adicional del personaje con una imagen de sus stats.", example: "!save2b Nahida [imagen]" },
  { name: "!talentos", description: "Guarda los talentos del personaje.", example: "!talentos Nahida 10 10 10" },
  { name: "!arma", description: "Guarda el arma del personaje.", example: "!arma Nahida Sueños de los Mil Años" },
  { name: "!elemento", description: "Guarda el bono elemental.", example: "!elemento Nahida 40%" }
];

export default function CommandsPage() {
  const [activeCommand, setActiveCommand] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`snap-y snap-mandatory h-screen w-full overflow-y-scroll ${darkMode ? 'bg-gray-900 text-white' : 'bg-green-100 text-green-900'}`}>
      <button onClick={() => setDarkMode(!darkMode)} className="absolute top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700">
        {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-900" />}
      </button>

      <section className={`snap-start flex flex-col items-center justify-center h-screen px-10 text-center relative overflow-hidden ${darkMode ? 'bg-gray-800 text-white' : 'bg-green-200 text-green-900'}`}>
        <motion.img 
          src="https://imgur.com/nUxwPuE.png" 
          alt="Nahida" 
          className="w-64 mt-6 rounded-lg shadow-lg object-cover"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <h1 className="text-4xl font-bold mt-4 mb-4">Nahida Bot</h1>
        <p className="text-lg max-w-xl">Un bot de Discord inspirado en Nahida, diseñado para gestionar builds de personajes en Genshin Impact de manera eficiente.</p>
      </section>

      <section className={`snap-start flex items-center justify-center h-screen p-10 relative ${darkMode ? 'bg-gray-700 text-white' : 'bg-green-300 text-green-900'}`}>
        <div className="relative flex flex-row w-full max-w-6xl gap-6 items-start">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6">Comandos del Bot Nahida</h2>
            <div className="grid grid-cols-2 gap-4">
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(144, 238, 144, 0.8)" }}
                  className={`p-4 shadow-lg rounded-lg transition-all cursor-pointer flex items-start gap-3 ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-green-100 hover:bg-green-400'}`}
                  onClick={() => setActiveCommand(cmd)}
                >
                  <Leaf className={darkMode ? "text-white" : "text-green-700"} />
                  <div>
                    <h3 className="text-lg font-semibold">{cmd.name}</h3>
                    <p className="text-sm">{cmd.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.img 
            src="https://imgur.com/pf9MyH0.png" 
            alt="Imagen adicional" 
            className="w-1/3 rounded-lg shadow-lg object-cover contrast-100 opacity-90"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </section>

      {activeCommand && (
        <section className={`snap-start flex flex-col items-center justify-center h-screen px-10 ${darkMode ? 'bg-gray-600 text-white' : 'bg-green-400 text-green-900'}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`p-6 rounded-lg shadow-lg w-full max-w-2xl text-center ${darkMode ? 'bg-gray-500' : 'bg-green-100'}`}
          >
            <h2 className="text-xl font-bold flex items-center justify-center gap-2">
              <Leaf className={darkMode ? "text-white" : "text-green-700"} /> {activeCommand.name}
            </h2>
            <p className="mt-2">{activeCommand.description}</p>
            <p className="italic mt-2">Ejemplo: <code className={`p-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-green-400'}`}>{activeCommand.example}</code></p>
            <Button className={`mt-4 px-4 py-2 rounded flex items-center gap-2 transition-all ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-green-500 text-white hover:bg-green-600'}`} onClick={() => setActiveCommand(null)}>
              <Leaf className="text-white" /> Cerrar
            </Button>
          </motion.div>
        </section>
      )}
    </div>
  );
}