import { createFileRoute, Link } from '@tanstack/react-router'
import { Crown, ArrowLeft, MapPin, Clock, Thermometer } from 'lucide-react'

export const Route = createFileRoute('/cheddar')({ component: CheddarPage })

function CheddarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-yellow-800 to-amber-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-yellow-200 hover:text-yellow-100 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="bg-amber-800/50 backdrop-blur-sm border border-amber-700 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <Crown className="w-16 h-16 text-amber-400" />
            <h1 className="text-5xl md:text-6xl font-black text-white">
              Aged Cheddar
            </h1>
          </div>

          <div className="prose prose-invert prose-amber max-w-none">
            <p className="text-xl text-yellow-100 mb-6 leading-relaxed">
              A classic sharp cheddar aged to perfection. Rich, tangy, and crumbly with a deep golden color. Perfect for any occasion.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">About Cheddar</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Cheddar cheese is one of the most popular and widely produced cheeses in the world. Originating from the English village of Cheddar in Somerset, this cheese has become a staple in kitchens across the globe. The aging process is what gives cheddar its distinctive sharp flavor and crumbly texture.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <MapPin className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Origin</h3>
                <p className="text-yellow-200">Cheddar, Somerset, England</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Clock className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Aging Time</h3>
                <p className="text-yellow-200">2-24+ months</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Thermometer className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Milk Type</h3>
                <p className="text-yellow-200">Cow's milk</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Flavor Profile</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Aged cheddar develops a complex flavor profile that intensifies with time. Young cheddars (aged 2-3 months) are mild and creamy, while mature cheddars (aged 12-18 months) become sharp and tangy. Extra-aged varieties (24+ months) develop calcium lactate crystals that give a pleasant crunch and an intensely savory, almost nutty flavor.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Perfect Pairings</h2>
            <ul className="text-yellow-200 space-y-2 mb-4">
              <li>🍎 Crisp apples and pears</li>
              <li>🍷 Full-bodied red wines like Cabernet Sauvignon</li>
              <li>🍺 Hoppy IPAs or rich stouts</li>
              <li>🥖 Crusty bread and artisan crackers</li>
              <li>🍯 Fig jam or honey</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Uses in Cooking</h2>
            <p className="text-yellow-200 leading-relaxed">
              Aged cheddar's bold flavor makes it perfect for mac and cheese, grilled cheese sandwiches, cheese boards, and topping burgers. Its lower moisture content compared to young cheddar means it melts beautifully without becoming greasy. It's also excellent grated over soups, salads, or baked potatoes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
