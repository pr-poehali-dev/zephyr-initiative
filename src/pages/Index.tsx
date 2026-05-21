import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { motion } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const products = [
  {
    id: 1,
    name: "Носки с котом",
    price: "399 ₽",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/3bd92123-0c68-4b94-83c6-ff678b7b24d9.jpg",
    value: "Кот",
    emoji: "🐱",
  },
  {
    id: 2,
    name: "Носки с кактусом",
    price: "399 ₽",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/644a5e45-441d-483d-8f12-22df06d599e4.jpg",
    value: "Кактус",
    emoji: "🌵",
  },
  {
    id: 3,
    name: "Носки в горошек",
    price: "299 ₽",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/170c0654-0519-4c3c-9a76-f09cae59b4da.jpg",
    value: "Горошек",
    emoji: "⚫",
  },
]

const missionStatement =
  "В CrazySocks мы верим: маленькие радости делают жизнь ярче. Рождённые из любви к деталям и хорошему настроению, мы создаём носки, которые заставляют улыбнуться — ваших близких, случайных прохожих и вас самих. Надень кота на ноги, позволь кактусу щекотать пятки или сыграй в горошек с миром. Каждая пара — это маленькое высказывание о том, что жизнь должна быть весёлой."

export default function Index() {
  const [orderOpen, setOrderOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("Кот")
  const [formData, setFormData] = useState({ name: "", phone: "", product: "Кот" })
  const [submitted, setSubmitted] = useState(false)

  const openOrder = (productValue?: string) => {
    if (productValue) setSelectedProduct(productValue)
    setFormData((prev) => ({ ...prev, product: productValue || selectedProduct }))
    setOrderOpen(true)
    setSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">НАША ФИЛОСОФИЯ</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-4">КАТАЛОГ</h2>
            <p className="text-xl text-gray-500">Выберите свою пару — или возьмите все три</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{product.emoji}</span>
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  </div>
                  <p className="text-2xl font-black text-blue-600 mb-4">{product.price}</p>
                  <button
                    onClick={() => openOrder(product.value)}
                    className="w-full bg-gray-900 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
                  >
                    Заказать
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute top-10 right-10 text-8xl opacity-10">🧦</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-10">🧦</div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
              ГОТОВ К ЯРКИМ
              <br />
              <span className="text-blue-300">ВПЕЧАТЛЕНИЯМ?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Оставьте заявку — мы свяжемся с вами и оформим заказ в два счёта
            </p>
            <button
              onClick={() => openOrder()}
              className="bg-white text-gray-900 hover:bg-blue-50 font-bold text-lg py-4 px-12 rounded-xl transition-colors duration-300 shadow-lg"
            >
              Оставить заявку
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contacts */}
      <footer id="contacts" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-8">
            <div>
              <span className="text-3xl font-black tracking-wider">
                <span className="text-blue-400">Crazy</span>Socks
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <a
                href="tel:+79991234567"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={18} className="text-white" />
                </div>
                <span className="text-lg font-medium">+7 999 123-45-67</span>
              </a>

              <a
                href="mailto:crazy@socks.ru"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={18} className="text-white" />
                </div>
                <span className="text-lg font-medium">crazy@socks.ru</span>
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={18} className="text-white" />
                </div>
                <span className="text-lg font-medium">Работаем с 10 до 19 по будням</span>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800 w-full text-center">
              <p className="text-gray-500 text-sm">© 2024 CrazySocks. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Order Modal */}
      {orderOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setOrderOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl relative"
          >
            <button
              onClick={() => setOrderOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <Icon name="X" size={24} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Спасибо!</h3>
                <p className="text-gray-600 text-lg">Мы вам перезвоним</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black text-gray-900 mb-6">Оформить заказ</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Иван Иванов"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Номер телефона</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="+7 999 000-00-00"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Выбор товара</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData((prev) => ({ ...prev, product: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="Кот">Носки с котом — 399 ₽</option>
                      <option value="Кактус">Носки с кактусом — 399 ₽</option>
                      <option value="Горошек">Носки в горошек — 299 ₽</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-colors duration-300 mt-2"
                  >
                    Отправить заявку
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  )
}
