import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TrajesPage() {
  const trajes = [
    {
      id: 1,
      nome: "Traje Waidhofen",
      descricao: "Traje tradicional da região de Waidhofen, caracterizado por suas cores vibrantes e bordados elaborados.",
      imagem: "/trajes/WAIDHOFEN.gif",
      regiao: "Waidhofen, Alemanha"
    },
    {
      id: 2,
      nome: "Traje WDL Viertel",
      descricao: "Traje elegante da região de Waldviertel, conhecido por sua sofisticação e detalhes refinados.",
      imagem: "/trajes/WDLVIERTEL..gif",
      regiao: "Waldviertel, Alemanha"
    },
    {
      id: 3,
      nome: "Traje Betzingen",
      descricao: "Traje tradicional da região de Betzingen, com padrões únicos e cores características.",
      imagem: "/trajes/betzingen.gif",
      regiao: "Betzingen, Alemanha"
    },
    {
      id: 4,
      nome: "Traje Cinza",
      descricao: "Traje elegante em tons de cinza, perfeito para ocasiões formais e apresentações especiais.",
      imagem: "/trajes/cinza.gif",
      regiao: "Tradicional Alemão"
    },
    {
      id: 5,
      nome: "Traje Marrom",
      descricao: "Traje tradicional em tons marrons, representando a conexão com a terra e as raízes alemãs.",
      imagem: "/trajes/marrom.gif",
      regiao: "Tradicional Alemão"
    },
    {
      id: 6,
      nome: "Casaco Tradicional",
      descricao: "Casaco tradicional alemão, confeccionado com tecidos de qualidade e acabamento artesanal.",
      imagem: "/trajes/fotocasaco.jpg",
      regiao: "Tradicional Alemão"
    }
  ]

  return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <section className="relative pt-32 pb-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-gothic">
                Trajes Tradicionais
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubra a beleza e tradição dos trajes folclóricos alemães do Grupo Heimatland
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gothic">
                Nossa Coleção de Trajes
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                O Grupo Heimatland possui uma rica coleção de trajes tradicionais alemães, cada um representando
                diferentes regiões e tradições da Alemanha. Nossos trajes são confeccionados com materiais
                autênticos e seguem fielmente os padrões históricos, preservando a autenticidade cultural.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trajes.map((traje) => (
                  <div key={traje.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-80">
                      <Image
                          src={traje.imagem}
                          alt={traje.nome}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-gothic">
                        {traje.nome}
                      </h3>
                      <p className="text-sm text-red-600 font-medium mb-3">
                        {traje.regiao}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {traje.descricao}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gothic">
                  A Importância dos Trajes
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Os trajes tradicionais alemães são muito mais que simples vestimentas. Eles representam a identidade
                    cultural, a história e as tradições de cada região da Alemanha.
                  </p>
                  <p>
                    Cada traje possui características únicas que refletem o estilo de vida, as crenças e os costumes
                    das comunidades locais, sendo uma forma de preservar e transmitir a cultura para as futuras gerações.
                  </p>
                  <p>
                    No Grupo Heimatland, cuidamos com carinho de cada traje, garantindo que sejam preservados
                    e utilizados com o respeito que merecem.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                    src="/trajes/fotocasaco.jpg"
                    alt="Casaco tradicional alemão"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  )
}
