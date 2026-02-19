import { createFileRoute, Link } from '@tanstack/react-router'
import { Heart, ArrowLeft, MapPin, Clock, Thermometer } from 'lucide-react'

export const Route = createFileRoute('/brie')({ component: BriePage })

function BriePage() {
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
            <Heart className="w-16 h-16 text-red-400" />
            <h1 className="text-5xl md:text-6xl font-black text-white">
              Brie
            </h1>
          </div>

          <div className="prose prose-invert prose-amber max-w-none">
            <p className="text-xl text-yellow-100 mb-6 leading-relaxed">
              Soft, creamy, and luxurious French cheese with a bloomy white rind. Mild and buttery with earthy mushroom notes.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">About Brie</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Named after the French region of Brie, this soft-ripened cheese has been called the "Queen of Cheeses" for centuries. Its distinctive white, velvety rind is created by Penicillium candidum mold, which also contributes to its complex flavor. As it ages, the cheese becomes softer and more flavorful, with the interior becoming increasingly creamy.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <MapPin className="w-8 h-8 text-red-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Origin</h3>
                <p className="text-yellow-200">Île-de-France, France</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Clock className="w-8 h-8 text-red-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Aging Time</h3>
                <p className="text-yellow-200">4-6 weeks</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Thermometer className="w-8 h-8 text-red-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Milk Type</h3>
                <p className="text-yellow-200">Cow's milk</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Flavor Profile</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Brie offers a delicate balance of flavors. The interior paste is buttery and mild with subtle mushroom and almond notes. The edible white rind adds an earthy, slightly tangy dimension. When perfectly ripe, the cheese should be soft throughout but not runny, with a rich, creamy texture that melts on the tongue.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Perfect Pairings</h2>
            <ul className="text-yellow-200 space-y-2 mb-4">
              <li>🍇 Fresh grapes and berries</li>
              <li>🍷 Champagne or light-bodied Pinot Noir</li>
              <li>🥖 French baguette</li>
              <li>🌰 Candied pecans or walnuts</li>
              <li>🍯 Honey or fruit preserves</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Serving Tips</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Always serve Brie at room temperature for the best flavor and texture. Remove it from the refrigerator at least 30 minutes before serving. The rind is completely edible and adds character to the flavor profile.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Uses in Cooking</h2>
            <p className="text-yellow-200 leading-relaxed">
              Brie is spectacular baked en croûte (wrapped in pastry) with cranberries or nuts. It melts beautifully into grilled cheese sandwiches, adds elegance to appetizers, and can be used in sauces for pasta or vegetables. However, it's equally perfect enjoyed simply with crackers and fruit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
