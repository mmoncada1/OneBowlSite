export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Come experience authentic Asian cuisine in the heart of Ann Arbor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:734-747-7006" className="text-gray-300 hover:text-white transition-colors">
                      (734) 747-7006
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-300">
                      Ann Arbor Plaza<br />
                      1220 S University Ave #110<br />
                      Ann Arbor, MI 48104
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <div className="text-gray-300">
                      <p>Monday - Sunday</p>
                      <p>11:00 AM - 8:40 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Services</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🥡</div>
                  <h4 className="font-semibold">Pickup</h4>
                  <p className="text-sm text-gray-400">Available</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🚗</div>
                  <h4 className="font-semibold">Delivery</h4>
                  <p className="text-sm text-gray-400">Via DoorDash</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🍽️</div>
                  <h4 className="font-semibold">Dine In</h4>
                  <p className="text-sm text-gray-400">Available</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💳</div>
                  <h4 className="font-semibold">Payment</h4>
                  <p className="text-sm text-gray-400">Card & Cash</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400">Interactive Map</p>
                <p className="text-sm text-gray-500">Click to view in Google Maps</p>
              </div>
            </div>
            <div className="p-6">
              <a 
                href="https://maps.google.com/?q=1220+S+University+Ave+%23110,+Ann+Arbor,+MI+48104"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary hover:bg-red-600 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gray-800 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Ready to Order?</h3>
          <p className="text-gray-300 mb-6">
            Order online through DoorDash or call us for pickup and dine-in
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://order.online/en/store/-24055085?hideModal=true&pickup=true&rwg_token=ACgRB3d1AypXdJirRuMbTj6yx97QBQzK8nsTUF0TqsBqlCWnqLEyH4UNA3Z331buqWzR34b6c7NgHt0c8GWvAtDKjoN8vmPJFQ%3D%3D&utm_source=gfo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Order Online
            </a>
            <a
              href="tel:734-747-7006"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: (734) 747-7006
            </a>
            <a
              href="https://maps.google.com/?q=1220+S+University+Ave+%23110,+Ann+Arbor,+MI+48104"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
