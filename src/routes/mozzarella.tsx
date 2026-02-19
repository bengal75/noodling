import { createFileRoute, Link } from '@tanstack/react-router'
import { Pizza, ArrowLeft, MapPin, Clock, Thermometer } from 'lucide-react'

export const Route = createFileRoute('/mozzarella')({ component: MozzarellaPage })

function MozzarellaPage() {
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
            <Pizza className="w-16 h-16 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl font-black text-white">
              Mozzarella
            </h1>
          </div>

          <div className="prose prose-invert prose-amber max-w-none">
            <p className="text-xl text-yellow-100 mb-6 leading-relaxed">
              Fresh Italian cheese known for its stretchy, melty properties. Mild and milky - the ultimate pizza topping.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">About Mozzarella</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Mozzarella is a fresh cheese that originated in southern Italy, traditionally made from Italian buffalo milk (Mozzarella di Bufala). Today, most mozzarella is made from cow's milk. The cheese is made using a unique pasta filata (stretched curd) method, where the curds are heated and stretched, creating mozzarella's characteristic elastic texture and ability to melt beautifully.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <MapPin className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Origin</h3>
                <p className="text-yellow-200">Southern Italy (Campania)</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Clock className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Aging Time</h3>
                <p className="text-yellow-200">Fresh (no aging)</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Thermometer className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Milk Type</h3>
                <p className="text-yellow-200">Buffalo or cow's milk</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Flavor Profile</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Fresh mozzarella has a delicate, mild, milky flavor with a slight tang. Buffalo mozzarella is richer and more flavorful than cow's milk versions. The texture is soft, moist, and slightly springy when fresh. Low-moisture mozzarella (used for pizza) is firmer and has a more concentrated flavor, perfect for melting.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Varieties</h2>
            <ul className="text-yellow-200 space-y-3 mb-4">
              <li><strong>Fresh Mozzarella:</strong> Soft, packed in brine or whey, best eaten soon after making</li>
              <li><strong>Mozzarella di Bufala:</strong> Premium version made from water buffalo milk</li>
              <li><strong>Low-Moisture Mozzarella:</strong> Firmer, aged slightly, perfect for pizza</li>
              <li><strong>Burrata:</strong> Mozzarella shell filled with cream and soft curds</li>
              <li><strong>Bocconcini:</strong> Small, bite-sized mozzarella balls</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Perfect Pairings</h2>
            <ul className="text-yellow-200 space-y-2 mb-4">
              <li>🍅 Fresh tomatoes and basil (Caprese salad)</li>
              <li>🍷 Light Italian whites like Pinot Grigio</li>
              <li>🥖 Crusty Italian bread</li>
              <li>🫒 Extra virgin olive oil and balsamic</li>
              <li>🌿 Fresh herbs like basil and oregano</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Uses in Cooking</h2>
            <p className="text-yellow-200 leading-relaxed">
              Mozzarella is the undisputed king of pizza cheese, creating that perfect stretchy, melty layer. Fresh mozzarella shines in Caprese salads, antipasti platters, and sandwiches. It's essential for Italian dishes like lasagna, chicken parmesan, and eggplant parmesan. Burrata is divine torn over fresh pasta or used as a luxurious topping for bruschetta.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
