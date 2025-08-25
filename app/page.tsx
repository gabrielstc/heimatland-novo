import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomePage() {
    // Dados da estrutura fornecida
    const data = {
        navigation: {
            home: "Home",
            about: "Sobre",
            costumes: "Trajes",
            gallery: "Fotos & Vídeos",
            blog: "Blog",
            contact: "Contato"
        },
        home: {
            hero: {
                welcome: "Willkommen",
                title: "Grupo Folclórico Alemão Heimatland",
                description: "Preservando e divulgando a cultura alemã através da dança folclórica desde 1987 em Cerro Largo, Rio Grande do Sul.",
                aboutButton: "Conheça Nossa História",
                galleryButton: "Ver Galeria"
            },
            history: {
                title: "Nossa História",
                founded: "Fundado em 1987 na cidade de Cerro Largo, Rio Grande do Sul, o Grupo Folclórico Alemão Heimatland nasceu do desejo de preservar e divulgar as tradições culturais alemãs através da dança folclórica.",
                experience: "Ao longo de mais de 37 anos, o grupo tem se dedicado à manutenção das tradições alemãs, realizando apresentações em festivais, eventos culturais e celebrações, sempre com o compromisso de manter viva a cultura de nossos antepassados.",
                stats: {
                    years: "Anos de História",
                    members: "Integrantes",
                    performances: "Apresentações"
                },
                learnMore: "Conheça Mais"
            },
            events: {
                title: "Próximos Eventos",
                description: "Acompanhe nossas próximas apresentações e eventos culturais",
                viewAll: "Ver Todos os Eventos"
            }
        },
        events: {
            oktoberfest: "Oktoberfest de Cerro Largo",
            winterFestival: "Festival de Inverno",
            culturalPresentation: "Apresentação Cultural",
            eventCenter: "Centro de Eventos",
            centralSquare: "Praça Central",
            municipalTheater: "Teatro Municipal"
        }
    }

    const upcomingEvents = [
        {
            id: 1,
            title: data.events.oktoberfest,
            date: "15 de Outubro, 2024",
            time: "19:00",
            location: data.events.eventCenter
        },
        {
            id: 2,
            title: data.events.winterFestival,
            date: "20 de Julho, 2024",
            time: "18:30",
            location: data.events.centralSquare
        },
        {
            id: 3,
            title: data.events.culturalPresentation,
            date: "05 de Setembro, 2024",
            time: "20:00",
            location: data.events.municipalTheater
        }
    ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/grupo-apresentacao.JPG"
            alt="Grupo Heimatland em apresentação"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          {/* Logo with Animation */}
          <div className="mb-8 animate-fade-in">
            <Image
              src="/logo/heimatland-escudo.jpg"
              alt="Escudo do Grupo Heimatland"
              width={120}
              height={120}
              className="mx-auto mb-6 drop-shadow-2xl"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in delay-300 font-gothic" 
              style={{ color: '#FFD500', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {data.home.hero.welcome}
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl mb-8 animate-fade-in delay-500" 
              style={{ color: '#FFD500', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            {data.home.hero.title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-700 leading-relaxed">
            {data.home.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-1000">
            <Link href="/sobre" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              {data.home.hero.aboutButton}
            </Link>
            <Link href="/galeria" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              {data.home.hero.galleryButton}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="py-20 bg-gray-50 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-gothic" 
                style={{ color: '#D41B1B' }}>
              {data.home.history.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black via-red-600 to-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {data.home.history.founded}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {data.home.history.experience}
              </p>
              
              <Link href="/sobre" 
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                {data.home.history.learnMore}
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">37+</div>
                <div className="text-gray-600">{data.home.history.stats.years}</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
                <div className="text-gray-600">{data.home.history.stats.members}</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">200+</div>
                <div className="text-gray-600">{data.home.history.stats.performances}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Eventos Section */}
      <section className="py-20 bg-white section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-gothic" 
                style={{ color: '#D41B1B' }}>
              {data.home.events.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black via-red-600 to-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {data.home.events.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/eventos" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              {data.home.events.viewAll}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
