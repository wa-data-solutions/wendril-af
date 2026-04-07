"use client";

import { motion } from "framer-motion";

const clients = [
  "CAU-SP",
  "CDHU-SP",
  "DETRAN-SP",
  "SEFAZ-RS",
  "SESI SENAI-AP",
  "TJ-CE",
];

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-sm tracking-widest text-gray-400 mb-4">
          WENDRIL ARAUJO FERREIRA
        </h1>

        <h2 className="text-5xl md:text-7xl font-bold max-w-4xl">
          Transformo dados em vantagem competitiva
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          Consultoria em Engenharia de Dados, Microsoft Fabric e SQL.
        </p>
      </section>

      {/* CLIENTES */}
<section className="py-20 text-center border-t border-gray-800">

  <h3 className="text-sm tracking-widest text-gray-500 mb-4">
    EXPERIÊNCIA PROFISSIONAL
  </h3>

  <h2 className="text-2xl md:text-3xl font-semibold mb-8">
    Empresas por onde atuei
  </h2>

  <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm tracking-widest">
    {clients.map((c, i) => (
      <span
        key={i}
        className="hover:text-white transition"
      >
        {c}
      </span>
    ))}
  </div>

</section>

      {/* ARQUITETURA STRIPE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Como eu estruturo sua plataforma de dados
        </h2>

        <div className="relative">

          {/* BOXES */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
            {["Fontes", "Ingestão", "Lakehouse", "Modelagem", "BI"].map((step, i) => (
              <div
                key={i}
                className="p-4 border border-gray-700 rounded-lg w-40 bg-gray-900/40 backdrop-blur-sm"
              >
                {step}
              </div>
            ))}
          </div>

          {/* LINHA BASE */}
          <div className="hidden md:block absolute left-0 right-0 top-[90px] h-[2px] bg-gray-800"></div>

          {/* LINHA GLOW */}
          <motion.div
            className="hidden md:block absolute left-0 top-[90px] h-[2px] w-[200px]"
            style={{
              background: "linear-gradient(90deg, transparent, white, transparent)",
              filter: "blur(2px)",
            }}
            animate={{ x: [0, 1000] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />

          {/* SETA COM TRAIL */}
          <motion.div
            className="hidden md:flex absolute top-[82px]"
            animate={{ x: [0, 1000] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <div className="flex items-center gap-1">

              {/* TRAIL */}
              <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>

              {/* SETA */}
              <span className="text-white text-lg">➜</span>

            </div>
          </motion.div>

        </div>

      </section>

      {/* VALOR */}
      <section className="py-24 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Quanto valor eu gero
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          <div>
            <h3 className="text-4xl font-bold">+40%</h3>
            <p className="text-gray-400 mt-2">Melhoria de performance</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">-30%</h3>
            <p className="text-gray-400 mt-2">Redução de custo</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">+5x</h3>
            <p className="text-gray-400 mt-2">Velocidade de processamento</p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Serviços de Consultoria
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border border-gray-800 rounded-2xl hover:border-white transition">
            <h3 className="font-bold mb-4">Arquitetura de Dados</h3>
            <p className="text-gray-400 text-sm">
              Estruturação completa com Microsoft Fabric e Cloud.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl hover:border-white transition">
            <h3 className="font-bold mb-4">Data Warehouse</h3>
            <p className="text-gray-400 text-sm">
              Modelagem e otimização SQL.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl hover:border-white transition">
            <h3 className="font-bold mb-4">Pipelines</h3>
            <p className="text-gray-400 text-sm">
              ETL/ELT escalável e confiável.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Vamos construir sua solução de dados
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