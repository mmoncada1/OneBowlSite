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
                <div className="flex justify-center mb-3">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Fresh Daily</h4>
                <p className="text-sm text-gray-600">Made fresh every day</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Authentic</h4>
                <p className="text-sm text-gray-600">Traditional recipes</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Quality</h4>
                <p className="text-sm text-gray-600">Premium ingredients</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
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
