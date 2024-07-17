import React from 'react'

function WhatOurClientsSay() {
  return (
    <div>
      <section className="bg-muted py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Lo que nuestros clientes dicen</h2>
              <a className="text-primary hover:underline" href="#">
                Leer mas
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'John Doe', feedback: 'I had an amazing experience with my stylist. They listened to my needs and gave me a fantastic haircut. Highly recommended!' },
                { name: 'Sarah Adams', feedback: "I've been using this app to book my appointments for years. The stylists are always professional and the service is top-notch." },
                { name: 'Michael Ramirez', feedback: 'I was hesitant to try a new stylist, but the app made it easy to find someone with great reviews. I am so glad I did!' },
              ].map((client, index) => (
                <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12 border-2 border-primary">
                        <img className="aspect-square h-full w-full" src="/placeholder-user.jpg" alt={client.name} />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold">{client.name}</h3>
                        <p className="text-muted-foreground">Satisfied Customer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">"{client.feedback}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default WhatOurClientsSay