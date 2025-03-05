import React from 'react';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';


const integrantes = [
  {
    nome: "Beatriz Santina",
    funcao: "Full Stack Developer",
    imagem: "https://avatars.githubusercontent.com/u/84404256?v=4",
    github: "https://github.com/krocodaimon",
    linkedin: "https://www.linkedin.com/in/beatriz-santina-a6972b1a0/"
  },
  {
    nome: "Caroline Ribeiro",
    funcao: "Full Stack Developer",
    imagem: "https://avatars.githubusercontent.com/u/168473336?v=4",
    github: "https://github.com/RibeiroCaroline",
    linkedin: "https://www.linkedin.com/in/caroline-ribeiro-aa14442b0/"
  },
  {
    nome: "Izabelly Gutierres",
    funcao: "Full Stack Developer",
    imagem: "https://avatars.githubusercontent.com/u/167813509?v=4",
    github: "https://github.com/izabellygutierres",
    linkedin: "https://www.linkedin.com/in/izabelly-gutierressilva/"
  },
  {
    nome: "Luan Oliveira",
    funcao: "Full Stack Developer",
    imagem: "https://avatars.githubusercontent.com/u/188473592?v=4",
    github: "https://github.com/luan-tcpn",
    linkedin: "https://www.linkedin.com/in/luan-oliveira-8106a3230/"
  },
  {
    nome: "Lucas Manhães",
    funcao: "Full Stack Developer",
    imagem: "https://avatars.githubusercontent.com/u/181386628?v=4",
    github: "https://github.com/lucasmanhaesr",
    linkedin: "https://www.linkedin.com/in/lucasrmanhaes/"
  }
];

const Sobre: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-[#cfecea] py-8 min-h-screen pt-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Seção de Introdução (Sobre o Projeto) */}
        <div className="text-center mb-12 w-full ml-28">
          <h1 className="text-3xl font-bold text-center mb-4" style={{ color: '#023d37' }}>Sobre o Projeto</h1>
          <p className="text-center max-w-2xl mx-auto text-lg p-4 bg-[#ffffff] shadow-md rounded-lg">
            Nosso projeto tem como objetivo desenvolver uma plataforma inovadora para gestão eficiente
            de tarefas e otimização de processos organizacionais.
          </p>
        </div>

        {/* Seção da Equipe */}
        <div className="text-center mb-12 ml-28">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: '#023d37' }}>Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrantes.map((integrante, index) => (
              <div key={index} className="bg-[#006056] rounded-2xl shadow-lg p-6 flex flex-col items-center w-80">
                <img
                  src={integrante.imagem}
                  alt={integrante.nome}
                  className="w-32 h-32 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold" style={{ color: '#fef9e1' }}>{integrante.nome}</h3>
                <p className="text-sm text-center mb-2" style={{ color: '#fef9e1' }}>{integrante.funcao}</p>
                <div className='flex space-x-4'>
                  <a href={integrante.github} target="_blank" rel="noopener noreferrer">
                    <GithubLogo size={32} weight='bold' color="#fef9e1" />
                  </a>
                  <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedinLogo size={32} weight='bold' color="#fef9e1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Destaques*/}
        <div className="text-center mb-6 w-full ml-28">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: '#023d37' }}>Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#ffffff] ml-auto rounded-2xl shadow-lg p-8 flex flex-col items-center w-60">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#023d37' }}>Inovação</h3>
              <p className="text-lg" style={{ color: '#023d37' }}>Desenvolvemos soluções inovadoras para otimizar processos e melhorar a eficiência.</p>
            </div>
            <div className="bg-[#ffffff] ml-20 rounded-2xl shadow-lg p-8 flex flex-col items-center w-60">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#023d37' }}>Colaboração</h3>
              <p className="text-lg " style={{ color: '#023d37' }}>Trabalhamos em equipe para alcançar os melhores resultados.</p>
            </div>
            <div className="bg-[#ffffff]  rounded-2xl shadow-lg p-8 flex flex-col items-center w-60">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#023d37' }}>Impacto</h3>
              <p className="text-lg" style={{ color: '#023d37' }}>Nossas soluções têm um impacto positivo na gestão de tarefas e processos.</p>
            </div>
          </div>
        </div>

        {/* Seção de Contato */}
        <div className="text-center ml-24">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#023d37' }}>Entre em Contato</h2>
          <p className="text-xl mb-4" style={{ color: '#023d37' }}>Quer saber mais sobre nosso projeto? Entre em contato conosco!</p>
          <button className="bg-[#023d37] text-white px-8 py-3 rounded-full text-lg font-semibold">
            CONECTAR-SE
          </button>
        </div>
      </div>

    
    </div>
  );
};

export default Sobre;
