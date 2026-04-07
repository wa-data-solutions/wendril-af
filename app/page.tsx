"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";

const clients = [
  "CAU-SP",
  "CDHU-SP",
  "DETRAN-SP",
  "SEFAZ-RS",
  "SESI SENAI-AP",
  "TJ-CE",
];

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const { scrollYProgress: progress1 } = useScroll({
    target: ref1,
    offset: ["start center", "end center"],
  });

  const { scrollYProgress: progress2 } = useScroll({
    target: ref2,
    offset: ["start center", "end center"],
  });

  const x1 = useTransform(progress1, [0, 1], ["0%", "100%"]);
  const x2 = useTransform(progress2, [0, 1], ["0%", "100%"]);

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

  return (
    <main className="bg-black text-white overflow-x-hidden relative">

      {/* GLOW GLOBAL */}
      <motion.div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 bg-white"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* HERO PREMIUM */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 px-4 py-1 border border-gray-700 rounded-full text-xs text-gray-400 tracking-widest"
        >
          DATA ENGINEER • CONSULTANT
        </motion.div>

        {/* NOME PREMIUM */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold tracking-wide mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
        >
          WENDRIL ARAUJO FERREIRA
        </motion.h1>

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight"
        >
          Dados não são custo.{" "}
          <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            São vantagem competitiva.
          </span>
        </motion.h2>

        {/* SUB */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 max-w-xl"
        >
          Estruturo plataformas de dados escaláveis, reduzindo custo e acelerando decisões estratégicas.
        </motion.p>

      </section>

      {/* CLIENTES */}
      <section className="py-20 text-center border-t border-gray-800">
        <h2 className="mb-10 text-xl text-gray-400">
          Organizações que confiaram no meu trabalho
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {clients.map((c, i) => (
            <span key={i} className="text-gray-500 hover:text-white transition">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ================= CASE 1 ================= */}
      <section ref={ref1} className="py-32 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-6">
          Plataforma de Dados Multisource
        </h2>

        <p className="text-gray-400 mb-12 max-w-3xl">
          Integração de múltiplas fontes com Pentaho, consolidação em Data Warehouse
          e disponibilização via Microsoft Fabric para consumo analítico em Power BI.
        </p>

        <div className="relative">

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 text-center">
            {[
              "Fontes",
              "ETL",
              "DW",
              "Data Marts",
              "Fabric",
              "Power BI",
            ].map((step, i) => (
              <div key={i} className="w-40 p-4 bg-white/5 border border-gray-800 rounded-xl">
                {step}
              </div>
            ))}
          </div>

          <div className="hidden md:block absolute top-[80px] left-0 right-0 h-[2px] bg-gray-800"></div>

          <motion.div
            style={{ scaleX: progress1 }}
            className="hidden md:block absolute top-[80px] left-0 h-[2px] bg-white origin-left"
          />

          <motion.div
            style={{ x: x1 }}
            className="hidden md:flex absolute top-[70px]"
          >
            ➜
          </motion.div>

        </div>

      </section>

      {/* ================= CASE 2 ================= */}
      <section ref={ref2} className="py-32 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-6">
          Arquitetura Moderna com Microsoft Fabric
        </h2>

        <p className="text-gray-400 mb-12 max-w-3xl">
          Ingestão via Dataverse, armazenamento em Lakehouse e modelagem analítica
          para consumo direto em Power BI.
        </p>

        <div className="relative">

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 text-center">
            {[
              "Dataverse",
              "Ingestão",
              "Lakehouse",
              "DW",
              "Power BI",
            ].map((step, i) => (
              <div key={i} className="w-40 p-4 bg-white/5 border border-gray-800 rounded-xl">
                {step}
              </div>
            ))}
          </div>

          <div className="hidden md:block absolute top-[80px] left-0 right-0 h-[2px] bg-gray-800"></div>

          <motion.div
            style={{ scaleX: progress2 }}
            className="hidden md:block absolute top-[80px] left-0 h-[2px] bg-white origin-left"
          />

          <motion.div
            style={{ x: x2 }}
            className="hidden md:flex absolute top-[70px]"
          >
            ➜
          </motion.div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Vamos transformar seus dados em resultado
        </h2>

        <a
          href="https://www.linkedin.com/in/wendril-ferreira/"
          target="_blank"
          className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:opacity-80 transition"
        >
          Falar comigo
        </a>
      </section>

      <footer className="text-center py-10 text-gray-600 text-sm">
        © 2026 Wendril Ferreira
      </footer>

    </main>
  );
}