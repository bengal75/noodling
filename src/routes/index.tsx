import { createFileRoute } from '@tanstack/react-router'
import {
  Heart,
  Sparkles,
  Star,
  Wine,
  Pizza,
  Crown,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const cheeses = [
    {
      icon: <Crown className="w-12 h-12 text-amber-400" />,
      title: 'Aged Cheddar',
      description:
        'A classic sharp cheddar aged to perfection. Rich, tangy, and crumbly with a deep golden color. Perfect for any occasion.',
    },
    {
      icon: <Heart className="w-12 h-12 text-red-400" />,
      title: 'Brie',
      description:
        'Soft, creamy, and luxurious French cheese with a bloomy white rind. Mild and buttery with earthy mushroom notes.',
    },
    {
      icon: <Star className="w-12 h-12 text-blue-400" />,
      title: 'Blue Cheese',
      description:
        'Bold and tangy with distinctive blue-green veins. Sharp, salty flavor that pairs wonderfully with sweet accompaniments.',
    },
    {
      icon: <Wine className="w-12 h-12 text-purple-400" />,
      title: 'Gouda',
      description:
        'Dutch delight with a sweet, slightly nutty flavor. Smooth texture that becomes more complex with age.',
    },
    {
      icon: <Pizza className="w-12 h-12 text-yellow-400" />,
      title: 'Mozzarella',
      description:
        'Fresh Italian cheese known for its stretchy, melty properties. Mild and milky - the ultimate pizza topping.',
    },
    {
      icon: <Sparkles className="w-12 h-12 text-orange-400" />,
      title: 'Parmesan',
      description:
        'Hard, granular Italian cheese with a rich, savory umami flavor. Ages for years, intensifying its nutty taste.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-yellow-800 to-amber-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="text-8xl">🧀</div>
            <h1 className="text-6xl md:text-7xl font-black text-white tracking-[-0.08em]">
              <span className="text-yellow-100">THE WONDERFUL</span>{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                WORLD OF CHEESE
              </span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-yellow-100 mb-4 font-light">
            A delicious journey through the art of cheese making
          </p>
          <p className="text-lg text-yellow-200 max-w-3xl mx-auto mb-8">
            From ancient traditions to modern innovations, cheese has delighted taste buds
            for thousands of years. Explore the rich variety of flavors, textures, and cultures
            that make cheese one of humanity's greatest culinary achievements.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://en.wikipedia.org/wiki/Cheese"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-amber-500/50"
            >
              Learn More About Cheese
            </a>
            <p className="text-yellow-200 text-sm mt-2">
              🧀 Did you know? There are over 1,800 varieties of cheese in the world!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-100 mb-12">
          Popular Cheese Varieties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cheeses.map((cheese, index) => (
            <div
              key={index}
              className="bg-amber-800/50 backdrop-blur-sm border border-amber-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="mb-4">{cheese.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {cheese.title}
              </h3>
              <p className="text-yellow-200 leading-relaxed">
                {cheese.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
