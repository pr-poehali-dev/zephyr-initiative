import HeroSection from "@/components/HeroSection"
import { motion } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"

type Category = "all" | "boys" | "girls" | "short" | "long" | "funny"

interface Product {
  id: number
  name: string
  price: string
  sizes: string
  ageGroup: string
  image: string
  value: string
  emoji: string
  categories: Category[]
  badge?: string
  badgeColor?: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Носки с котом",
    price: "399 ₽",
    sizes: "36–45",
    ageGroup: "Взрослые",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/3bd92123-0c68-4b94-83c6-ff678b7b24d9.jpg",
    value: "Носки с котом",
    emoji: "🐱",
    categories: ["all", "funny", "short"],
    badge: "Хит",
    badgeColor: "bg-orange-500",
  },
  {
    id: 2,
    name: "Носки с кактусом",
    price: "399 ₽",
    sizes: "36–45",
    ageGroup: "Взрослые",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/644a5e45-441d-483d-8f12-22df06d599e4.jpg",
    value: "Носки с кактусом",
    emoji: "🌵",
    categories: ["all", "funny", "short"],
  },
  {
    id: 3,
    name: "Носки в горошек",
    price: "299 ₽",
    sizes: "36–45",
    ageGroup: "Взрослые",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/170c0654-0519-4c3c-9a76-f09cae59b4da.jpg",
    value: "Носки в горошек",
    emoji: "⚫",
    categories: ["all", "short"],
  },
  {
    id: 4,
    name: "Носки с динозаврами",
    price: "349 ₽",
    sizes: "20–35 (детские)",
    ageGroup: "Дети 4–12 лет",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/71d5ca4d-93c5-4d0e-b57b-258de811de53.jpg",
    value: "Носки с динозаврами",
    emoji: "🦕",
    categories: ["all", "boys", "funny", "short"],
    badge: "Детские",
    badgeColor: "bg-green-500",
  },
  {
    id: 5,
    name: "Носки с единорогом",
    price: "349 ₽",
    sizes: "20–35 (детские)",
    ageGroup: "Дети 4–12 лет",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/a338a41c-9aa9-4df8-a528-703bae19e892.jpg",
    value: "Носки с единорогом",
    emoji: "🦄",
    categories: ["all", "girls", "funny", "short"],
    badge: "Девочки",
    badgeColor: "bg-pink-500",
  },
  {
    id: 6,
    name: "Носки с ракетами",
    price: "349 ₽",
    sizes: "20–35 (детские)",
    ageGroup: "Дети 4–12 лет",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/11abf2c6-0cf8-46e0-bd68-6b1164543a32.jpg",
    value: "Носки с ракетами",
    emoji: "🚀",
    categories: ["all", "boys", "short"],
    badge: "Мальчики",
    badgeColor: "bg-blue-500",
  },
  {
    id: 7,
    name: "Гольфы радужные",
    price: "549 ₽",
    sizes: "36–45",
    ageGroup: "Взрослые",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/82b91228-35f6-4ae3-8e58-9b6e808e89d1.jpg",
    value: "Гольфы радужные",
    emoji: "🌈",
    categories: ["all", "long", "funny"],
    badge: "Длинные",
    badgeColor: "bg-purple-500",
  },
  {
    id: 8,
    name: "Носки с авокадо",
    price: "379 ₽",
    sizes: "36–45",
    ageGroup: "Взрослые",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/9434d8de-f153-4654-b12d-0a59bd572448.jpg",
    value: "Носки с авокадо",
    emoji: "🥑",
    categories: ["all", "funny", "short"],
    badge: "Новинка",
    badgeColor: "bg-emerald-500",
  },
  {
    id: 9,
    name: "Носки с пиццей",
    price: "379 ₽",
    sizes: "36–45",
    ageGroup: "Взрослые",
    image: "https://cdn.poehali.dev/projects/ecd69a8f-1bc5-4cd9-adf9-35fc33ab4c1d/files/2e2ca1ac-f0cd-474a-a704-3b415839b5ec.jpg",
    value: "Носки с пиццей",
    emoji: "🍕",
    categories: ["all", "funny", "short"],
  },
]

const filters: { id: Category; label: string; emoji: string }[] = [
  { id: "all", label: "Все", emoji: "🧦" },
  { id: "boys", label: "Для мальчиков", emoji: "🚀" },
  { id: "girls", label: "Для девочек", emoji: "🦄" },
  { id: "short", label: "Короткие", emoji: "✂️" },
  { id: "long", label: "Длинные / Гольфы", emoji: "📏" },
  { id: "funny", label: "Смешные", emoji: "😂" },
]

const sectionAnchors: { id: string; label: string }[] = [
  { id: "boys", label: "Для мальчиков" },
  { id: "girls", label: "Для девочек" },
  { id: "short", label: "Короткие" },
  { id: "long", label: "Длинные" },
  { id: "funny", label: "Смешные" },
]

export default function Index() {
  const [activeFilter, setActiveFilter] = useState<Category>("all")
  const [orderOpen, setOrderOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", product: "" })
  const [submitted, setSubmitted] = useState(false)

  const filteredProducts = products.filter((p) => p.categories.includes(activeFilter))

  const openOrder = (productValue?: string) => {
    setFormData({ name: "", phone: "", product: productValue || "" })
    setOrderOpen(true)
    setSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Quick category nav strip */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setActiveFilter(f.id)
                  document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" })
                }}
                className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex-shrink-0 ${
                  activeFilter === f.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{f.emoji}</span>
                <span>{f.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Anchor sections for nav */}
      {sectionAnchors.map((s) => <div key={s.id} id={s.id} />)}

      {/* Catalog */}
      <section id="catalog" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-wider text-gray-900 mb-3">КАТАЛОГ НОСКОВ</h2>
            <p className="text-lg text-gray-500">
              {activeFilter === "all"
                ? `Все ${products.length} моделей`
                : `${filteredProducts.length} моделей в категории «${filters.find((f) => f.id === activeFilter)?.label}»`}
            </p>
          </motion.div>

          {/* Filter chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeFilter === f.id
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                <span>{f.emoji}</span>
                <span>{f.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start gap-2 mb-1">
                    <span className="text-xl mt-0.5">{product.emoji}</span>
                    <h3 className="text-base font-bold text-gray-900 leading-tight">{product.name}</h3>
                  </div>

                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-full">
                      {product.ageGroup}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-600 font-semibold px-2.5 py-1 rounded-full">
                      р. {product.sizes}
                    </span>
                  </div>

                  <p className="text-2xl font-black text-blue-600 mb-4 mt-auto">{product.price}</p>

                  <button
                    onClick={() => openOrder(product.value)}
                    className="w-full bg-gray-900 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-300 text-sm"
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
        <div className="absolute top-10 right-10 text-8xl opacity-10 select-none">🧦</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-10 select-none">🧦</div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
              НЕ НАШЛИ
              <br />
              <span className="text-blue-300">НУЖНУЮ ПАРУ?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Оставьте заявку — мы подберём под ваш запрос и размер
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

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-8">
            <span className="text-3xl font-black tracking-wider">
              <span className="text-blue-400">Crazy</span>Socks
            </span>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <a href="tel:+79991234567" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={18} className="text-white" />
                </div>
                <span className="text-lg font-medium">+7 999 123-45-67</span>
              </a>
              <a href="mailto:crazy@socks.ru" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
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
                <p className="text-gray-600 text-lg">Мы вам перезвоним в рабочие часы</p>
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
                      required
                      value={formData.product}
                      onChange={(e) => setFormData((prev) => ({ ...prev, product: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="" disabled>Выберите модель...</option>
                      <optgroup label="Взрослые (р. 36–45)">
                        <option value="Носки с котом">🐱 Носки с котом — 399 ₽</option>
                        <option value="Носки с кактусом">🌵 Носки с кактусом — 399 ₽</option>
                        <option value="Носки в горошек">⚫ Носки в горошек — 299 ₽</option>
                        <option value="Гольфы радужные">🌈 Гольфы радужные — 549 ₽</option>
                        <option value="Носки с авокадо">🥑 Носки с авокадо — 379 ₽</option>
                        <option value="Носки с пиццей">🍕 Носки с пиццей — 379 ₽</option>
                      </optgroup>
                      <optgroup label="Детские (р. 20–35)">
                        <option value="Носки с динозаврами">🦕 Носки с динозаврами — 349 ₽</option>
                        <option value="Носки с единорогом">🦄 Носки с единорогом — 349 ₽</option>
                        <option value="Носки с ракетами">🚀 Носки с ракетами — 349 ₽</option>
                      </optgroup>
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
