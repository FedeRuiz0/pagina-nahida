import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Moon, Sun, Volume2, VolumeX, X } from "lucide-react";
import React from "react";

const commands = [
  { name: "!help", description: "Muestra la lista de comandos disponibles.", example: "!help" },
  { name: "!save1b", description: "Guarda la información inicial del personaje con una imagen de sus stats.", example: "!save1b Nahida [imagen]" },
  { name: "!save2b", description: "Guarda información adicional del personaje con una imagen de sus stats.", example: "!save2b Nahida [imagen]" },
  { name: "!talentos", description: "Guarda los talentos del personaje.", example: "!talentos Nahida 10 10 10" },
  { name: "!arma", description: "Guarda el arma del personaje.", example: "!arma Nahida Sueños de los Mil Años" },
  { name: "!elemento", description: "Guarda el bono elemental.", example: "!elemento Nahida 40%" }
];

const userInfo = {
  name: "Federico Ruiz",
  description: "Creador de Nahida Bot. Apasionado por la programación y Genshin Impact.",
  image: "https://cdn.discordapp.com/avatars/USER_ID/AVATAR_HASH.png",
  link: "https://discord.com/users/TU_USER_ID"
};

export default function NahidaCommandsPage() {
  const [activeCommand, setActiveCommand] = useState(null);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  const explanationRef = useRef(null);

  useEffect(() => {
    if (activeCommand && explanationRef.current) {
      explanationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeCommand]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <div className={`snap-y snap-mandatory h-screen w-full overflow-y-scroll transition-colors duration-500 scroll-smooth relative ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
      <audio ref={audioRef} autoPlay loop>
        <source src="https://vgmsite.com/soundtracks/genshin-impact-original-soundtrack-city-of-wisdom/zslgdiay/1-01.%20The%20Forest%20Will%20Remember.mp3" type="audio/mpeg" />
      </audio>

      <section className={`snap-start flex flex-col items-center justify-center h-screen p-10 relative overflow-hidden z-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-green-200 text-green-900'}`}>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Nahida Bot</h1>
          <p className="text-lg max-w-xl mx-auto drop-shadow-sm">Un bot de Discord inspirado en Nahida, diseñado para gestionar builds de personajes en Genshin Impact de manera eficiente.</p>
          <motion.img
            src="https://i.imgur.com/nUxwPuE.png"
            alt="Nahida"
            className="w-[600px] mt-6 mx-auto rounded-lg shadow-xl animate-float object-contain"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      <section className={`snap-start flex items-center justify-center min-h-screen p-10 relative z-10 ${darkMode ? 'bg-gray-700 text-white' : 'bg-green-300 text-green-900'}`}>
        <div className="relative flex w-full max-w-6xl gap-6">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold mb-6 drop-shadow-md">Comandos del Bot Nahida</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,197,94,0.9)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-xl transition-all cursor-pointer flex items-center gap-3 shadow-lg hover:shadow-green-500/40 ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-green-100 hover:bg-green-300'}`}
                  onClick={() => setActiveCommand(cmd)}
                >
                  <Leaf className={darkMode ? "text-white" : "text-green-700"} />
                  <div className="drop-shadow-sm">
                    <h2 className="text-xl font-semibold">{cmd.name}</h2>
                    <p className="text-sm opacity-90">{cmd.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {activeCommand && (
              <motion.div
                ref={explanationRef}
                className="mt-10 p-6 rounded-xl shadow-2xl max-w-xl w-full flex items-center gap-4 relative bg-white/80 backdrop-blur-md border border-green-300 animate-float"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button onClick={() => setActiveCommand(null)} className="absolute top-2 right-2 bg-red-100 hover:bg-red-300 text-red-700 rounded-full p-1">
                  <X size={18} />
                </button>
                <motion.img
                  src="https://i.imgur.com/1kdYKNs.png"
                  alt="Nahida"
                  className="min-w-[96px] w-24 h-24 object-cover rounded-full shadow-md border-2 border-green-400 animate-float"
                />
                <div className="text-gray-800">
                  <h3 className="text-2xl font-bold mb-1">{activeCommand.name}</h3>
                  <p className="mb-1">{activeCommand.description}</p>
                  <p className="text-sm text-gray-600">Ejemplo: <code>{activeCommand.example}</code></p>
                </div>
              </motion.div>
            )}
          </div>
          <motion.img
            src="https://i.imgur.com/pf9MyH0.png"
            alt="Nahida secundario"
            className="w-[300px] h-auto hidden md:block rounded-lg shadow-xl animate-float object-contain"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>
    </div>
  );
}
