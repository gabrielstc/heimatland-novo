'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<typeof fotos[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fotos = [
    {
      id: 1,
      titulo: "Apresentação em Grupo",
      descricao: "Grupo Heimatland em apresentação tradicional",
      imagem: "/fotosvideos/1.png",
      categoria: "Apresentações"
    },
    {
      id: 2,
      titulo: "Dança Tradicional",
      descricao: "Momentos especiais das danças folclóricas",
      imagem: "/fotosvideos/2.png",
      categoria: "Danças"
    },
    {
      id: 3,
      titulo: "Trajes Coloridos",
      descricao: "Beleza dos trajes tradicionais alemães",
      imagem: "/fotosvideos/3.png",
      categoria: "Trajes"
    },
    {
      id: 4,
      titulo: "Festival Cultural",
      descricao: "Participação em festivais culturais",
      imagem: "/fotosvideos/4.png",
      categoria: "Festivais"
    },
    {
      id: 5,
      titulo: "Ensaio do Grupo",
      descricao: "Momentos de preparação e ensaio",
      imagem: "/fotosvideos/5.png",
      categoria: "Ensaios"
    },
    {
      id: 6,
      titulo: "Celebração",
      descricao: "Celebrações e momentos especiais",
      imagem: "/fotosvideos/6.png",
      categoria: "Celebrações"
    },
    {
      id: 7,
      titulo: "Espada Tradicional",
      descricao: "Elementos tradicionais das danças alemãs",
      imagem: "/fotosvideos/fotoespada.gif",
      categoria: "Elementos"
    },
    {
      id: 8,
      titulo: "Sombra Artística",
      descricao: "Arte e beleza em movimento",
      imagem: "/fotosvideos/sombra.jpg",
      categoria: "Arte"
    }
  ]

  const categorias = ["Todas", "Apresentações", "Danças", "Trajes", "Festivais", "Ensaios", "Celebrações", "Elementos", "Arte"]

  const openModal = (foto: typeof fotos[0]) => {
    setSelectedImage(foto)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <section className="relative pt-32 pb-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-gothic">
                Galeria de Fotos
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore momentos especiais, apresentações e a rica tradição cultural do Grupo Heimatland
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categorias.map((categoria) => (
                  <button
                      key={categoria}
                      className="px-6 py-2 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {categoria}
                  </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {fotos.map((foto) => (
                  <div
                      key={foto.id}
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => openModal(foto)}
                  >
                    <div className="relative h-64">
                      <Image
                          src={foto.imagem}
                          alt={foto.titulo}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-lg font-semibold mb-2">{foto.titulo}</h3>
                          <p className="text-sm">{foto.descricao}</p>
                          <span className="inline-block mt-2 px-3 py-1 bg-red-600 rounded-full text-xs">
                        {foto.categoria}
                      </span>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {isModalOpen && selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-7xl max-h-full">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                <div className="relative">
                  <Image
                      src={selectedImage.imagem}
                      alt={selectedImage.titulo}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-[90vh] object-contain rounded-lg"
                      priority
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.titulo}</h3>
                    <p className="text-white text-lg mb-2">{selectedImage.descricao}</p>
                    <span className="inline-block px-4 py-2 bg-red-600 rounded-full text-white text-sm font-medium">
                    {selectedImage.categoria}
                  </span>
                  </div>
                </div>
              </div>
            </div>
        )}

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gothic">
                Vídeos e Apresentações
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Assista às apresentações do Grupo Heimatland e mergulhe na cultura alemã através da dança folclórica
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-lg p-6 text-center max-w-md">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Apresentações Completas</h3>
                <p className="text-gray-600 mb-4">
                  Vídeos das principais apresentações do grupo em festivais e eventos culturais
                </p>
                <a
                    href="https://www.youtube.com/@dillema21/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 inline-block"
                >
                  Ver Vídeos no YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gothic">
                  Nossa Memória Visual
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Nossa galeria de fotos e vídeos documenta mais de três décadas de história,
                    preservando momentos especiais e apresentações memoráveis do Grupo Heimatland.
                  </p>
                  <p>
                    Cada imagem conta uma história, cada vídeo registra uma tradição sendo mantida viva
                    através das gerações, conectando o passado com o presente.
                  </p>
                  <p>
                    Explore nossa coleção e descubra a riqueza cultural alemã através dos olhos
                    e movimentos do Grupo Heimatland.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                    Estatísticas da Galeria
                  </h3>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                      <div className="text-gray-600">Fotos</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-yellow-500 mb-2">50+</div>
                      <div className="text-gray-600">Vídeos</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-red-600 mb-2">37</div>
                      <div className="text-gray-600">Anos</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-yellow-500 mb-2">100+</div>
                      <div className="text-gray-600">Eventos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  )
}
