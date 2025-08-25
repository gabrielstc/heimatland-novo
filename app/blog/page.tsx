import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-gothic">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Em breve teremos novidades e histórias incríveis para compartilhar sobre nossa cultura e tradições
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-lg p-12">
            <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-4xl"></span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Blog em Construção
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            </p>
            <Link 
              href="/"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
            >
              Voltar ao Início
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
