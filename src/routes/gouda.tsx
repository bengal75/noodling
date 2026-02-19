import { createFileRoute, Link } from '@tanstack/react-router'
import { Wine, ArrowLeft, MapPin, Clock, Thermometer } from 'lucide-react'

export const Route = createFileRoute('/gouda')({ component: GoudaPage })

function GoudaPage() {
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
            <Wine className="w-16 h-16 text-purple-400" />
            <h1 className="text-5xl md:text-6xl font-black text-white">
              Gouda
            </h1>
          </div>

          <div className="prose prose-invert prose-amber max-w-none">
            <p className="text-xl text-yellow-100 mb-6 leading-relaxed">
              Dutch delight with a sweet, slightly nutty flavor. Smooth texture that becomes more complex with age.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">About Gouda</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Gouda is one of the oldest recorded cheeses in the world, dating back to the 12th century. Named after the Dutch city of Gouda, where it was traditionally traded, this cheese is beloved for its mild, sweet flavor and smooth texture. It accounts for over 50% of cheese consumption worldwide, making it one of the most popular cheeses globally.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <MapPin className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Origin</h3>
                <p className="text-yellow-200">Netherlands</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Clock className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Aging Time</h3>
                <p className="text-yellow-200">1 month to 5+ years</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Thermometer className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Milk Type</h3>
                <p className="text-yellow-200">Cow's milk</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Flavor Profile</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Young Gouda (aged 1-6 months) is mild, creamy, and slightly sweet with a smooth, supple texture. As it ages, Gouda develops deeper caramel notes, a firmer texture, and crunchy protein crystals. Aged Gouda (18+ months) becomes hard, crumbly, and intensely flavorful with butterscotch and toffee notes.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Varieties</h2>
            <ul className="text-yellow-200 space-y-3 mb-4">
              <li><strong>Young Gouda:</strong> Mild, creamy, perfect for sandwiches and snacking</li>
              <li><strong>Aged Gouda:</strong> Complex, crystalline texture, rich caramel flavors</li>
              <li><strong>Smoked Gouda:</strong> Distinctive smoky flavor, great for cooking</li>
              <li><strong>Gouda with herbs/spices:</strong> Infused with cumin, nettles, or other flavors</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Perfect Pairings</h2>
            <ul className="text-yellow-200 space-y-2 mb-4">
              <li>🍎 Apples and pears</li>
              <li>🍷 Medium-bodied reds like Merlot or fruity whites</li>
              <li>🍺 Belgian ales or lagers</li>
              <li>🥖 Whole grain crackers</li>
              <li>🥓 Cured meats like salami</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Uses in Cooking</h2>
            <p className="text-yellow-200 leading-relaxed">
              Gouda is incredibly versatile in the kitchen. Young Gouda melts beautifully, making it perfect for grilled cheese, quesadillas, and fondue. Smoked Gouda adds depth to mac and cheese or potato dishes. Aged Gouda is best enjoyed on its own or grated over dishes where you want a complex, nutty flavor to shine through.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
