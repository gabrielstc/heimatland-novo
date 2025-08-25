import { Facebook, Instagram, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative">
      {/* German Flag Border */}
      <div className="h-2 w-full" style={{ 
        background: 'linear-gradient(90deg, #000000 33.33%, #D41B1B 33.33%, #D41B1B 66.66%, #FFD500 66.66%)' 
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'UnifrakturCook, serif' }}>
              Heimatland
            </h3>
            <p className="text-gray-300 mb-4">
              Desde 1987 preservando a cultura alemã através da dança folclórica em Cerro Largo, RS. 
              Tradição, autenticidade e paixão pela herança cultural alemã.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/grupoheimatland/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</Link></li>
              <li><Link href="/trajes" className="text-gray-300 hover:text-white transition-colors">Trajes</Link></li>
              <li><Link href="/galeria" className="text-gray-300 hover:text-white transition-colors">Galeria</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Avenida Jacob Reinaldo Haupenthal, 1591 - Centro<br />
                  Cerro Largo, RS - CEP 97.900-000
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram size={16} className="text-gray-400" />
                <a href="https://www.instagram.com/grupoheimatland/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  @grupoheimatland
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Grupo Folclórico Alemão Heimatland. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
