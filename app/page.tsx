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
          Crio plataformas escaláveis que reduzem custos, aumentam performance
          e aceleram decisões estratégicas.
        </p>

        <a
          href="#services"
          className="mt-10 px-8 py-3 bg-white text-black rounded-full font-semibold"
        >
          Ver Serviços
        </a>

      </section>

      {/* CLIENTES */}
      <section className="py-16 text-center border-t border-gray-800">
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm tracking-widest">
          {clients.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
      </section>

      {/* ARQUITETURA ANIMADA */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Como eu estruturo sua plataforma de dados
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-6">

          {["Fontes", "Ingestão", "Lakehouse", "Modelagem", "BI"].map((step, i) => (
            <div key={i} className="p-4 border border-gray-700 rounded-lg text-center w-40">
              {step}
            </div>
          ))}

          {/* LINHA */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-800 hidden md:block"></div>

          {/* BOLINHA ANIMADA */}
          <motion.div
            animate={{ x: [0, 800] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="hidden md:block absolute top-1/2 w-3 h-3 bg-white rounded-full"
          />

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
            <p className="text-gray-400 mt-2">Redução de custo operacional</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">+5x</h3>
            <p className="text-gray-400 mt-2">Velocidade de processamento</p>
          </div>

        </div>

      </section>

      {/* SERVIÇOS */}
      <section id="services" className="py-28 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-16 text-center">
          Serviços de Consultoria
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="font-bold mb-4">Arquitetura de Dados</h3>
            <p className="text-gray-400 text-sm">
              Estruturação completa da sua plataforma de dados com Microsoft Fabric e Cloud.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="font-bold mb-4">Data Warehouse</h3>
            <p className="text-gray-400 text-sm">
              Modelagem dimensional e otimização SQL para analytics.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="font-bold mb-4">Pipelines & Integração</h3>
            <p className="text-gray-400 text-sm">
              Construção de pipelines ETL/ELT escaláveis e confiáveis.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-28 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Vamos construir sua solução de dados
        </h2>

        <p className="text-gray-400 mb-8">
          Entre em contato e leve sua plataforma de dados para o próximo nível
        </p>

        <a
          href="https://www.linkedin.com/in/wendril-ferreira/"
          target="_blank"
          className="px-10 py-4 bg-white text-black rounded-full font-semibold"
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