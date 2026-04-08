import { motion } from 'motion/react';

export function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <header className="mb-16">
          <p className="quote-label uppercase tracking-widest mb-4">About</p>
          <div className="h-[1px] w-full bg-black mb-12" />
        </header>

        <section className="space-y-12">
          {/* English Version */}
          <div className="space-y-6">
            <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">
              Leví Coto
            </h1>
            <p className="text-xl font-mono text-gray-500 italic">Cloud Engineer & AI Enthusiast.</p>
            
            <div className="prose prose-xl prose-neutral max-w-none space-y-6 text-gray-800 leading-relaxed">
              <p>
                This blog is a collection of personal thoughts—informed, deliberate, and inspired by the leading minds in AI and software.
              </p>
              <p className="font-bold italic">
                I sit down to think. Then, I build.
              </p>
              <p>
                See what I am building at <a href="https://orienta.lat" target="_blank" rel="noopener noreferrer" className="underline hover:bg-black hover:text-white transition-all">orienta.lat</a>: Orienta Medic, AI for critical decision-making in healthcare.
              </p>
              <p>
                Understanding technology is not the end goal; it is the means to construct a future worth living.
              </p>
            </div>
          </div>

          <div className="h-[1px] w-12 bg-black opacity-20 my-16" />

          {/* Spanish Version */}
          <div className="space-y-6">
            <p className="quote-label uppercase tracking-widest text-gray-400">Versión en Español</p>
            <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">
              Leví Coto
            </h2>
            <p className="text-xl font-mono text-gray-500 italic">Ingeniero Cloud y entusiasta de la IA.</p>
            
            <div className="prose prose-xl prose-neutral max-w-none space-y-6 text-gray-800 leading-relaxed">
              <p>
                Este espacio reúne reflexiones y opiniones personales—informadas, meditadas e inspiradas por los grandes referentes del software y la inteligencia artificial.
              </p>
              <p className="font-bold italic">
                Me siento a pensar. Luego, construyo.
              </p>
              <p>
                Mira lo que estoy creando en <a href="https://orienta.lat" target="_blank" rel="noopener noreferrer" className="underline hover:bg-black hover:text-white transition-all">orienta.lat</a>: Orienta Medic, IA para la toma de decisiones críticas en el sector salud.
              </p>
              <p>
                Entender la tecnología no es el fin; es el medio para construir un futuro que valga la pena.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
