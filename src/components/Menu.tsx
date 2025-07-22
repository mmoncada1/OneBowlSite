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
    id: 'popular',
    name: 'Most Popular',
    items: [
      { name: 'House Pho', description: 'Beef and meatballs. Rice noodle with choice of meat in aromatic beef bone soup. Served with bean sprouts and limes on the side.', price: '$12.95', popular: true },
      { name: 'Tonkotsu Ramen', description: 'Pork bone based broth with beef, egg & veggie.', price: '$12.95', popular: true },
      { name: 'Bibimbap Korean', description: 'Mixed rice bowl with beef, chicken, spicy pork or crispy tofu', price: '$13.95', popular: true },
      { name: 'General Tso\'s Chicken', description: 'Crispy chicken in sweet and tangy sauce', price: '$15.95', popular: true },
      { name: 'Seafood Pancake', description: 'Korean style pancake with seafood and vegetables', price: '$12.95', popular: true },
    ]
  },
  {
    id: 'pho',
    name: 'Pho',
    items: [
      { name: 'Basic Pho', description: 'Beef. Rice noodle with choice of meat in aromatic beef bone soup. Served with bean sprouts and limes on the side.', price: '$11.95' },
      { name: 'House Pho', description: 'Beef and meatballs. Rice noodle with choice of meat in aromatic beef bone soup. Served with bean sprouts and limes on the side.', price: '$12.95', popular: true },
      { name: 'Deluxe Pho', description: 'Beef, meatballs and tripe. Rice noodle with choice of meat in aromatic beef bone soup. Served with bean sprouts and limes on the side.', price: '$13.95' },
      { name: 'Chicken Pho', description: 'Rice noodle with chicken in aromatic beef bone soup. Served with bean sprouts and limes on the side.', price: '$12.95' },
      { name: 'Seafood Pho', description: 'Shrimp, scallops & crabmeat. Rice noodle with seafood in aromatic beef bone soup. Served with bean sprouts and limes on the side.', price: '$14.95' },
      { name: 'Bun Bo Hue', description: 'Spicy beef pho. Rice noodle with choice of meat in aromatic beef bone soup. Served with bean sprouts and limes on the side.', price: '$14.95' },
      { name: 'Kimchi Pho', description: 'Beef with kimchi. Rice noodle with choice of meat in aromatic beef bone soup. Served with bean sprouts and limes on the side.', price: '$13.95' },
    ]
  },
  {
    id: 'ramen',
    name: 'Ramen',
    items: [
      { name: 'Shoyu Ramen', description: 'Soy based broth with beef, egg, & veggie.', price: '$12.95' },
      { name: 'Tonkotsu Ramen', description: 'Pork bone based broth with beef, egg & veggie.', price: '$12.95', popular: true },
      { name: 'Miso Ramen', description: 'Vegetarian ramen with seaweed, corns & veggie.', price: '$12.95' },
      { name: 'Military Ramen', description: 'Beef based broth with kimchi, pork, ham & veggie.', price: '$14.95' },
      { name: 'Tonkatsu Ramen', description: 'Pork. Soy based broth with breaded fried pork, egg & veggie.', price: '$14.95' },
      { name: 'Chicken-Katsu Ramen', description: 'Soy based broth with breaded fried chicken, egg & veggie.', price: '$14.95' },
      { name: 'Spicy Beef Ramen', description: 'Beef broth with egg & veggie.', price: '$14.95' },
      { name: 'Spicy Seafood Ramen', description: 'Chicken broth with shrimp, crabmeat, scallop, & veggie.', price: '$14.95' },
    ]
  },
  {
    id: 'korean',
    name: 'Korean Dishes',
    items: [
      { name: 'Bulgogi Korean BBQ', description: 'Marinated beef BBQ served with steamed rice', price: '$19.95' },
      { name: 'Chicken Korean BBQ', description: 'Marinated chicken BBQ served with steamed rice', price: '$19.95' },
      { name: 'Spicy Pork Korean BBQ', description: 'Marinated spicy pork BBQ served with steamed rice', price: '$19.95' },
      { name: 'Spicy Chicken Korean BBQ', description: 'Marinated spicy chicken BBQ served with steamed rice', price: '$19.95' },
      { name: 'Bibimbap Korean', description: 'Mixed rice bowl with beef, chicken, spicy pork or crispy tofu', price: '$13.95', popular: true },
      { name: 'Stone Bowl Bibimbap', description: 'Bibimbap served in hot stone bowl for crispy rice', price: '$16.95' },
      { name: 'Kimchi Fried Rice', description: 'Korean style fried rice with fermented kimchi', price: '$12.95' },
      { name: 'Seafood Pancake', description: 'Korean style pancake with seafood and vegetables', price: '$12.95' },
    ]
  },
  {
    id: 'chinese',
    name: 'Chinese Dishes',
    items: [
      { name: 'General Tso\'s Chicken', description: 'Crispy chicken in sweet and tangy sauce', price: '$15.95', popular: true },
      { name: 'General Tso\'s Shrimp', description: 'Crispy shrimp in sweet and tangy sauce', price: '$18.95' },
      { name: 'Sesame Crispy Chicken', description: 'Crispy chicken with sesame sauce', price: '$15.95' },
      { name: 'Sweet and Sour Chicken', description: 'Battered chicken with sweet and sour sauce', price: '$15.95' },
      { name: 'Orange Chicken', description: 'Crispy chicken with orange flavored sauce', price: '$15.95' },
      { name: 'Kung Pao Chicken', description: 'Diced chicken with peanuts and chili peppers', price: '$15.95' },
      { name: 'Mongolian Beef', description: 'Tender beef with onions and scallions', price: '$17.95' },
      { name: 'String Bean with Basil', description: 'Fresh string beans with Thai basil', price: '$17.95' },
    ]
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      { name: 'Edamame', description: 'Steamed and salted young soybeans', price: '$3.95' },
      { name: 'Pan-fried Dumplings (6)', description: 'Crispy pan-fried pork dumplings', price: '$7.95', popular: true },
      { name: 'Steam Dumplings (6)', description: 'Steamed pork dumplings', price: '$7.95' },
      { name: '2 Shrimp Summer Rolls', description: 'Fresh spring rolls with shrimp and vegetables', price: '$7.95' },
      { name: 'Crab Cheese Rangoons (8)', description: 'Crispy wontons filled with cream cheese and crab', price: '$8.95' },
      { name: 'Shrimp and Veggie Tempura', description: 'Lightly battered and fried shrimp and vegetables', price: '$9.95' },
      { name: 'Takoyaki (6)', description: 'Japanese octopus balls with takoyaki sauce', price: '$7.95' },
      { name: 'Agedashi Tofu', description: 'Lightly fried tofu in savory dashi broth', price: '$6.95' },
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
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          {item.popular && (
                            <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-medium">
                              Popular
                            </span>
                          )}
                        </div>
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
