"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // mouse glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // magnet button
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    btnX.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    btnY.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const handleLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <main className="bg-black text-white overflow-x-hidden relative">

      {/* GLOW GLOBAL */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 bg-white z-0"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-xs tracking-[0.3em] text-gray-500 mb-4">
          WENDRIL ARAUJO FERREIRA
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight"
        >
          Transformo dados em{" "}
          <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            vantagem competitiva
          </span>
        </motion.h2>

        <p className="mt-6 text-gray-400 max-w-xl">
          Engenharia de Dados • Microsoft Fabric • SQL
        </p>

        {/* CTA MAGNÉTICO */}
        <motion.a
          href="https://www.linkedin.com/in/wendril-ferreira/"
          target="_blank"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ x: btnX, y: btnY }}
          className="mt-10 px-10 py-4 bg-white text-black rounded-full font-semibold"
        >
          Falar comigo
        </motion.a>

      </section>

      {/* PIPELINE SIMULATION */}
      <section className="py-32 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-16">
          Pipeline de Dados em Ação
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {["API", "ETL", "Lakehouse", "BI"].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-gray-800"
            >
              <p className="text-sm text-gray-400 mb-2">Stage</p>
              <h3 className="text-lg font-semibold">{step}</h3>

              <motion.div
                className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-white"
                  animate={{ width: ["0%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}

        </div>

      </section>

      {/* DASHBOARD FAKE */}
      <section className="py-32 bg-gray-900 px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          Impacto em Tempo Real
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {[
            { title: "Performance", value: "+42%" },
            { title: "Custo", value: "-31%" },
            { title: "Velocidade", value: "5.3x" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-gray-800 text-center"
            >
              <p className="text-gray-400 mb-2">{item.title}</p>
              <h3 className="text-4xl font-bold">{item.value}</h3>
            </motion.div>
          ))}

        </div>

      </section>

      {/* STACK APPLE */}
      <section className="h-[250vh] relative">

        {["Dados", "Processamento", "Insights"].map((text, i) => (
          <div
            key={i}
            className="sticky top-0 h-screen flex items-center justify-center"
          >
            <motion.div
              className="w-[300px] h-[200px] bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-xl"
              initial={{ scale: 1 }}
              whileInView={{ scale: 0.9 }}
            >
              {text}
            </motion.div>
          </div>
        ))}

      </section>

      {/* CTA FINAL */}
      <section className="py-32 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Pronto para escalar seus dados?
        </h2>

        <motion.a
          href="https://www.linkedin.com/in/wendril-ferreira/"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="px-10 py-4 bg-white text-black rounded-full font-semibold"
        >
          Vamos conversar
        </motion.a>

      </section>

      <footer className="text-center py-10 text-gray-600 text-sm">
        © 2026 Wendril Ferreira
      </footer>

    </main>
  );
}