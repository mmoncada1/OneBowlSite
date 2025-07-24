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
                  <div className="flex justify-center mb-2">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">Pickup</h4>
                  <p className="text-sm text-gray-400">Available</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">Delivery</h4>
                  <p className="text-sm text-gray-400">Via DoorDash</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">Dine In</h4>
                  <p className="text-sm text-gray-400">Available</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold">Payment</h4>
                  <p className="text-sm text-gray-400">Card & Cash</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.8567891234567!2d-83.7354827!3d42.2747318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae445423f8ab%3A0x132cd532d6a42b9!2sOne%20Bowl%20Asian%20Cuisine!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="One Bowl Asian Cuisine Location"
              />
            </div>
            <div className="p-6">
              <a 
                href="https://www.google.com/maps/place/One+Bowl+Asian+Cuisine/@42.2744913,-83.7339935,18.75z/data=!3m1!5s0x883cae4456997e21:0x7898e1b0bc1edd4d!4m14!1m7!3m6!1s0x883cae44569de0bd:0x94a619a2857c6693!2sAnn+Arbor+Plaza,+1220+S+University+Ave+%23110,+Ann+Arbor,+MI+48104!3b1!8m2!3d42.2747702!4d-83.7334237!3m5!1s0x883cae445423f8ab:0x132cd532d6a42b9!8m2!3d42.2747318!4d-83.7332667!16s%2Fg%2F11c1tt44qc?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
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
              href="https://www.google.com/maps/place/One+Bowl+Asian+Cuisine/@42.2744913,-83.7339935,18.75z/data=!3m1!5s0x883cae4456997e21:0x7898e1b0bc1edd4d!4m14!1m7!3m6!1s0x883cae44569de0bd:0x94a619a2857c6693!2sAnn+Arbor+Plaza,+1220+S+University+Ave+%23110,+Ann+Arbor,+MI+48104!3b1!8m2!3d42.2747702!4d-83.7334237!3m5!1s0x883cae445423f8ab:0x132cd532d6a42b9!8m2!3d42.2747318!4d-83.7332667!16s%2Fg%2F11c1tt44qc?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
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
