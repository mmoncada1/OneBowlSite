'use client'

import { useState } from 'react'

interface MenuItem {
  name: string
  description: string
  price: string
  popular?: boolean
}

interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    id: 'pho',
    name: 'Pho',
    items: [
      { name: 'Pho Tai', description: 'Traditional beef pho with rare beef slices, served with fresh herbs and lime', price: '$12.95', popular: true },
      { name: 'Pho Ga', description: 'Chicken pho with tender chicken breast in aromatic chicken broth', price: '$11.95' },
      { name: 'Pho Bo Vien', description: 'Beef meatball pho with homemade beef balls in rich beef broth', price: '$12.95' },
      { name: 'Pho Chay', description: 'Vegetarian pho with tofu and vegetables in flavorful vegetable broth', price: '$10.95' },
    ]
  },
  {
    id: 'ramen',
    name: 'Ramen',
    items: [
      { name: 'Tonkotsu Ramen', description: 'Rich pork bone broth with chashu pork, soft-boiled egg, and green onions', price: '$14.95', popular: true },
      { name: 'Shoyu Ramen', description: 'Light soy sauce based broth with chicken, bamboo shoots, and nori', price: '$13.95' },
      { name: 'Miso Ramen', description: 'Fermented soybean paste broth with corn, butter, and ground pork', price: '$14.95' },
      { name: 'Spicy Miso Ramen', description: 'Spicy miso broth with ground pork, corn, and spicy sauce', price: '$15.95' },
    ]
  },
  {
    id: 'korean',
    name: 'Korean Dishes',
    items: [
      { name: 'Bibimbap', description: 'Mixed rice bowl with seasoned vegetables, beef, and fried egg', price: '$13.95', popular: true },
      { name: 'Bulgogi', description: 'Marinated beef with onions served with steamed rice', price: '$16.95' },
      { name: 'Kimchi Fried Rice', description: 'Fried rice with kimchi, vegetables, and choice of protein', price: '$12.95' },
      { name: 'Korean BBQ Short Ribs', description: 'Grilled marinated short ribs with banchan side dishes', price: '$18.95' },
    ]
  },
  {
    id: 'chinese',
    name: 'Chinese Dishes',
    items: [
      { name: 'General Tso\'s Chicken', description: 'Crispy chicken with sweet and tangy sauce', price: '$13.95' },
      { name: 'Kung Pao Chicken', description: 'Diced chicken with peanuts and chili peppers', price: '$13.95', popular: true },
      { name: 'Ma Po Tofu', description: 'Soft tofu in spicy Sichuan sauce with ground pork', price: '$11.95' },
      { name: 'Sweet and Sour Pork', description: 'Battered pork with bell peppers and pineapple', price: '$14.95' },
    ]
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      { name: 'Spring Rolls (2)', description: 'Fresh spring rolls with shrimp, vegetables, and herbs', price: '$6.95' },
      { name: 'Pot Stickers (6)', description: 'Pan-fried pork dumplings with dipping sauce', price: '$8.95', popular: true },
      { name: 'Crab Rangoon (6)', description: 'Crispy wontons filled with cream cheese and crab', price: '$7.95' },
      { name: 'Korean Pancake', description: 'Savory pancake with scallions and seafood', price: '$9.95' },
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    items: [
      { name: 'Vietnamese Iced Coffee', description: 'Strong coffee with condensed milk over ice', price: '$3.95' },
      { name: 'Thai Tea', description: 'Sweet tea with milk and spices', price: '$3.50' },
      { name: 'Hot Tea', description: 'Choice of jasmine, oolong, or green tea', price: '$2.95' },
      { name: 'Fresh Juice', description: 'Orange, apple, or lychee juice', price: '$3.95' },
    ]
  }
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('pho')

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our authentic Asian dishes, crafted with traditional recipes and the finest ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          {menuData
            .filter((category) => category.id === activeCategory)
            .map((category) => (
              <div key={category.id} className="grid gap-6">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 relative"
                  >
                    {item.popular && (
                      <span className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    )}
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-6">
                        <span className="text-2xl font-bold text-primary">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to order? Order online or call us!</p>
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
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (734) 747-7006
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
