import { createFileRoute, Link } from '@tanstack/react-router'
import { Sparkles, ArrowLeft, MapPin, Clock, Thermometer } from 'lucide-react'

export const Route = createFileRoute('/parmesan')({ component: ParmesanPage })

function ParmesanPage() {
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
            <Sparkles className="w-16 h-16 text-orange-400" />
            <h1 className="text-5xl md:text-6xl font-black text-white">
              Parmesan
            </h1>
          </div>

          <div className="prose prose-invert prose-amber max-w-none">
            <p className="text-xl text-yellow-100 mb-6 leading-relaxed">
              Hard, granular Italian cheese with a rich, savory umami flavor. Ages for years, intensifying its nutty taste.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">About Parmesan</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Parmigiano-Reggiano, known as the "King of Cheeses," is a hard, granular cheese produced exclusively in specific provinces of northern Italy. This cheese is protected by DOP (Protected Designation of Origin) status, meaning only cheese produced in this region following strict traditional methods can be called Parmigiano-Reggiano. What we commonly call "Parmesan" in the US is often an imitation of this legendary cheese.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <MapPin className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Origin</h3>
                <p className="text-yellow-200">Parma & Reggio Emilia, Italy</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Clock className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Aging Time</h3>
                <p className="text-yellow-200">12-36+ months</p>
              </div>
              <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-600">
                <Thermometer className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Milk Type</h3>
                <p className="text-yellow-200">Cow's milk (unpasteurized)</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Flavor Profile</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Parmigiano-Reggiano has an intensely savory, umami-rich flavor with nutty, fruity notes. The texture is granular and crystalline, creating a satisfying crunch. Young Parmesan (12-18 months) is milder and slightly crumbly, while aged varieties (24-36+ months) develop deeper complexity, more crystals, and an almost caramel-like sweetness balanced with savory depth.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">The Making Process</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Each wheel of Parmigiano-Reggiano weighs about 80 pounds and takes 131 gallons of milk to produce. The cheese-making process follows a recipe that hasn't changed in over 900 years. After forming, the wheels are aged in temperature-controlled rooms, where they're regularly inspected and turned. Only wheels that pass rigorous quality standards receive the official Parmigiano-Reggiano stamp.
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Perfect Pairings</h2>
            <ul className="text-yellow-200 space-y-2 mb-4">
              <li>🍇 Fresh figs and pears</li>
              <li>🍷 Full-bodied reds like Chianti or Barolo</li>
              <li>🍯 Aged balsamic vinegar</li>
              <li>🥜 Marcona almonds and walnuts</li>
              <li>🍝 Fresh pasta dishes</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Uses in Cooking</h2>
            <p className="text-yellow-200 leading-relaxed mb-4">
              Parmesan is incredibly versatile. Grate it over pasta, risotto, and soups for an instant umami boost. Shave it into thin pieces for salads like Caesar or arugula with lemon. The rinds can be added to broths and sauces for deep, savory flavor (remove before serving).
            </p>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Storage Tips</h2>
            <p className="text-yellow-200 leading-relaxed">
              Store Parmesan wrapped in wax or parchment paper (not plastic wrap) in the refrigerator. This allows it to breathe while preventing it from drying out. A properly stored wedge can last several weeks. For best flavor, buy a wedge and grate it fresh rather than buying pre-grated cheese.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
