import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bringing authentic Asian flavors to the heart of Ann Arbor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
              alt="Traditional Asian restaurant interior with warm lighting"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-gray-900">
              Authentic Asian Cuisine
            </h3>
            <p className="text-gray-700 leading-relaxed">
              One Bowl has been serving the Ann Arbor community with authentic Asian cuisine for years. 
              Our passion lies in bringing you the most traditional and flavorful dishes from across Asia, 
              prepared with the freshest ingredients and time-honored cooking techniques.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From our signature pho bowls with rich, aromatic broths to our handcrafted ramen and 
              authentic Korean dishes, every meal is prepared with care and attention to detail. 
              We take pride in offering a diverse menu that celebrates the culinary traditions of 
              Vietnam, China, Korea, and beyond.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🍜</div>
                <h4 className="font-semibold text-gray-900">Fresh Daily</h4>
                <p className="text-sm text-gray-600">Made fresh every day</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🌟</div>
                <h4 className="font-semibold text-gray-900">Authentic</h4>
                <p className="text-sm text-gray-600">Traditional recipes</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🥢</div>
                <h4 className="font-semibold text-gray-900">Quality</h4>
                <p className="text-sm text-gray-600">Premium ingredients</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">❤️</div>
                <h4 className="font-semibold text-gray-900">Family</h4>
                <p className="text-sm text-gray-600">Family owned & operated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
