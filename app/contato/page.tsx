import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContatoPage() {
  return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <section className="relative pt-32 pb-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-gothic">
                Entre em Contato
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tem alguma dúvida, sugestão ou gostaria de participar do nosso grupo? Entre em contato conosco!
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-gothic">
                Envie sua Mensagem
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="(55) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                      id="assunto"
                      name="assunto"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="informacoes">Informações sobre o Grupo</option>
                    <option value="participacao">Como Participar</option>
                    <option value="eventos">Eventos e Apresentações</option>
                    <option value="trajes">Trajes Tradicionais</option>
                    <option value="parcerias">Parcerias e Colaborações</option>
                    <option value="outros">Outros Assuntos</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gothic">
                Outras Formas de Contato
              </h2>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Endereço</h3>
                <p className="text-gray-600">
                  Avenida Jacob Reinaldo Haupenthal, 1591<br />
                  Centro - Cerro Largo/RS<br />
                  CEP: 97.900-000
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gothic">
                  Horários e Localização
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Horário de Ensaios</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700"><strong>Sábados:</strong> 14h às 17h</p>
                      <p className="text-gray-700"><strong>Terças:</strong> 19h às 21h (ensaios especiais)</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Horário de Atendimento</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700"><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                      <p className="text-gray-700"><strong>Sábados:</strong> 9h às 12h</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Como Chegar</h3>
                    <p className="text-gray-600">
                      Localizado no centro de Cerro Largo, próximo à Praça Central.
                      Estacionamento disponível na rua lateral.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Redes Sociais
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                    <span className="text-2xl mr-3">📘</span>
                    <span className="text-gray-700">Facebook: @GrupoHeimatland</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                    <span className="text-2xl mr-3">📷</span>
                    <span className="text-gray-700">Instagram: @heimatland_cerro_largo</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                    <span className="text-2xl mr-3">🎬</span>
                    <a
                        href="https://www.youtube.com/@dillema21/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-red-600 transition-colors"
                    >
                      YouTube: @dillema21
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gothic">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Como posso participar do grupo?
                </h3>
                <p className="text-gray-600">
                  Para participar, entre em contato conosco através do formulário acima ou venha nos visitar
                  durante os horários de ensaio. Não é necessário ter experiência prévia em dança.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Qual a idade mínima para participar?
                </h3>
                <p className="text-gray-600">
                  Aceitamos participantes a partir dos 8 anos de idade. Para crianças menores,
                  temos turmas especiais com atividades adaptadas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Preciso comprar trajes para participar?
                </h3>
                <p className="text-gray-600">
                  Não é necessário comprar trajes inicialmente. O grupo possui trajes para ensaios
                  e apresentações. Trajes pessoais podem ser adquiridos posteriormente.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Como agendar uma apresentação?
                </h3>
                <p className="text-gray-600">
                  Para agendar apresentações em eventos, entre em contato conosco com pelo menos
                  30 dias de antecedência, informando data, local e tipo de evento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  )
}
