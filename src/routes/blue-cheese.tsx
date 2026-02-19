import { createFileRoute, Link } from '@tanstack/react-router'
import { Star, ArrowLeft, MapPin, Clock, Thermometer } from 'lucide-react'

export const Route = createFileRoute('/blue-cheese')({ component: BluecheesePage })

function BluecheesePage() {
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
            <Star className="w-16 h-16 text-blue-400" />
            <h1 className="text-5xl md:text-6xl font-black text-white">
              Blue Cheese
            </h1>
          </div>

          <div className="prose prose-invert prose-amber max-w-none">
            <p className="text-xl text-yellow-100 mb-6 leading-relaxed">
              Bold and tangy with distinctive blue-green veins. Sharp, salty flavor that pairs wonderfully with sweet accompaniments.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">About Blue Cheese</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Blue cheese is a general classification of cheese that has had cultures of the mold Penicillium added, creating distinctive blue or blue-green veins throughout the cheese. This family includes famous varieties like Roquefort, Gorgonzola, and Stilton. The mold creates a sharp, salty flavor and a pungent aroma that cheese lovers adore.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <MapPin className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Origin</h3>
                <p className="text-yellow-200">Various (France, Italy, UK)</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Clock className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Aging Time</h3>
                <p className="text-yellow-200">2-6 months</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Thermometer className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Milk Type</h3>
                <p className="text-yellow-200">Cow, sheep, or goat's milk</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Flavor Profile</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Blue cheese delivers an intense, sharp, and salty flavor with a creamy, sometimes crumbly texture. The blue veins provide a tangy, slightly metallic taste that intensifies with age. The flavor can range from mild and creamy (Danish Blue) to intensely pungent and sharp (Roquefort). Many describe the taste as "funky" in the best possible way.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Popular Varieties</h2>
            <ul className="text-yellow-200 space-y-3 mb-4">
              <li><strong>Roquefort:</strong> French sheep's milk blue, aged in caves, intensely flavorful</li>
              <li><strong>Gorgonzola:</strong> Italian cow's milk blue, ranges from sweet to sharp</li>
              <li><strong>Stilton:</strong> English cow's milk blue, rich and creamy with a strong bite</li>
              <li><strong>Danish Blue:</strong> Milder and creamier, great for beginners</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Perfect Pairings</h2>
            <ul className="text-yellow-200 space-y-2 mb-4">
              <li>🍐 Fresh pears and figs</li>
              <li>🍷 Sweet dessert wines like Port or Sauternes</li>
              <li>🍯 Honey drizzle</li>
              <li>🥜 Toasted walnuts</li>
              <li>🍖 Grilled steak</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Uses in Cooking</h2>
            <p className="text-yellow-200 leading-relaxed">
              Blue cheese is perfect crumbled over salads (especially wedge salads), melted into creamy sauces for pasta or steak, stuffed into burgers, or mixed into dips and dressings. Its bold flavor means a little goes a long way. It's also a show-stopper on cheese boards, especially paired with sweet elements to balance its intensity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
