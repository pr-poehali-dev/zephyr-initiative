import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Главная", href: "#hero" },
    { name: "Для мальчиков", href: "#boys" },
    { name: "Для девочек", href: "#girls" },
    { name: "Короткие", href: "#short" },
    { name: "Длинные", href: "#long" },
    { name: "Смешные", href: "#funny" },
    { name: "Контакты", href: "#contacts" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-indigo-950">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-32 left-16 text-6xl opacity-10 rotate-12">🧦</span>
        <span className="absolute top-48 right-32 text-4xl opacity-10 -rotate-12">🧦</span>
        <span className="absolute bottom-48 left-32 text-5xl opacity-10 rotate-6">🧦</span>
        <span className="absolute bottom-32 right-16 text-7xl opacity-10 -rotate-6">🧦</span>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4 md:px-8">
        <div className="text-white font-bold text-xl tracking-wider flex-shrink-0">
          <span className="text-blue-300">Crazy</span>Socks
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white hover:text-blue-300 transition-colors duration-300 text-sm font-medium tracking-wide pb-1 group whitespace-nowrap"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-blue-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Меню</span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-950/97 z-30 lg:hidden overflow-y-auto">
          <div className="flex flex-col items-center justify-center min-h-full py-16 space-y-6">
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={28} />
            </button>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-xl font-bold tracking-wider hover:text-blue-300 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">
          <div className="text-6xl mb-6">🧦</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-6 leading-tight">
            Носки, которые
            <br />
            <span className="text-blue-300">заставят улыбнуться</span>
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-10 text-blue-100">
            Магазин CrazySocks — необычные носки для всей семьи
          </p>
          <LiquidButton
            size="xxl"
            className="font-semibold text-lg tracking-wide"
            onClick={() => scrollToSection("#catalog")}
          >
            Смотреть весь каталог
          </LiquidButton>
        </div>
      </div>
    </div>
  )
}
