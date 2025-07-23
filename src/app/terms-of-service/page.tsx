import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | One Bowl Asian Cuisine',
  description: 'Terms of Service for One Bowl Asian Cuisine restaurant in Ann Arbor, Michigan.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the One Bowl Asian Cuisine website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Online Ordering</h2>
              <p className="text-gray-700 mb-4">
                When placing an order through our website or third-party platforms:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>All orders are subject to availability</li>
                <li>Prices are subject to change without notice</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Payment must be completed at the time of ordering</li>
                <li>Delivery times are estimates and may vary</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation and Refund Policy</h2>
              <p className="text-gray-700 mb-4">
                Order cancellations and refunds are handled as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Orders can be cancelled within 5 minutes of placement</li>
                <li>Refunds for cancelled orders will be processed within 3-5 business days</li>
                <li>Food quality issues will be addressed on a case-by-case basis</li>
                <li>No refunds will be given for completed deliveries or pickups</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery and Pickup</h2>
              <p className="text-gray-700 mb-4">
                For delivery and pickup orders:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Delivery is available within our designated service area</li>
                <li>Delivery fees may apply based on distance</li>
                <li>Customer must be available to receive delivery</li>
                <li>Pickup orders must be collected within 30 minutes of notification</li>
                <li>Orders not collected within 2 hours may be discarded without refund</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Food Safety and Allergies</h2>
              <p className="text-gray-700 mb-4">
                Important food safety information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Please inform us of any food allergies or dietary restrictions</li>
                <li>We cannot guarantee complete allergen-free preparation</li>
                <li>Our kitchen processes common allergens including nuts, dairy, and gluten</li>
                <li>Consumption is at your own risk</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of One Bowl Asian Cuisine and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                One Bowl Asian Cuisine shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>One Bowl Asian Cuisine</strong></p>
                <p className="text-gray-700">1220 S University Ave #110</p>
                <p className="text-gray-700">Ann Arbor, MI 48104</p>
                <p className="text-gray-700">Phone: (734) 747-7006</p>
              </div>
            </section>

            <p className="text-gray-600 text-sm mt-8">
              By using our services, you acknowledge that you have read and understood these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
