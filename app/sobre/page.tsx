import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SobrePage() {
  return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <section className="relative pt-32 pb-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-gothic">
                Sobre o Heimatland
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça a história e tradição do Grupo Folclórico Alemão Heimatland
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gothic">
                  Nossa História
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Fundado em 1987 na cidade de Cerro Largo, Rio Grande do Sul, o Grupo Folclórico Alemão Heimatland nasceu do desejo de preservar e divulgar as tradições culturais alemãs através da dança folclórica.
                  </p>
                  <p>
                    Ao longo de mais de 37 anos, o grupo tem se dedicado à manutenção das tradições alemãs, realizando apresentações em festivais, eventos culturais e celebrações, sempre com o compromisso de manter viva a cultura de nossos antepassados.
                  </p>
                  <p>
                    O nome "Heimatland" significa "Terra Natal" em alemão, representando nossa conexão com as raízes alemãs e o orgulho de preservar essa herança cultural.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                    src="/about/img.png"
                    alt="Grupo Heimatland histórico"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gothic">
                Missão e Valores
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🎭</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Preservação Cultural</h3>
                <p className="text-gray-600">
                  Manter vivas as tradições alemãs através da dança folclórica e costumes tradicionais.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comunidade</h3>
                <p className="text-gray-600">
                  Fortalecer os laços comunitários e promover a integração cultural.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excelência</h3>
                <p className="text-gray-600">
                  Buscar a excelência em todas as apresentações e atividades culturais.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">37+</div>
                <div className="text-lg text-gray-600">Anos de História</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">50+</div>
                <div className="text-lg text-gray-600">Integrantes</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">200+</div>
                <div className="text-lg text-gray-600">Apresentações</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">15+</div>
                <div className="text-lg text-gray-600">Trajes Tradicionais</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gothic">
                Nossa Localização
              </h2>
              <p className="text-xl text-gray-600">
                Cerro Largo, Rio Grande do Sul - Brasil
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Centro Cultural Heimatland
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Avenida Jacob Reinaldo Haupenthal, 1591<br />
                Centro - Cerro Largo/RS<br />
                CEP: 97.900-000
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  )
}
