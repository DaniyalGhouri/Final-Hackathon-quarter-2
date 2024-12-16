import React from 'react'

const Feature = () => {
  return (
    <div> <section className="bg-gray-100 text-black py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Column */}
        <div>
          <h2 className="text-black font-bold text-3xl text-center">Free Delivery</h2>
          <p className="text-lg text-gray-700 text-center">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>

        {/* Second Column */}
        <div>
          <h2 className="text-black font-bold text-3xl text-center">90 Days Return</h2>
          <p className="text-lg text-gray-700 text-center">
            If the product has an issue, consectetur adipiscing elit.
          </p>
        </div>

        {/* Third Column */}
        <div>
          <h2 className="text-black font-bold text-3xl text-center">Secure Payments</h2>
          <p className="text-lg text-gray-700 text-center">
            100% secure payments, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Feature