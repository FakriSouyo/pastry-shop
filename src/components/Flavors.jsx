import React from 'react';

const Flavors = () => {
  return (
    <section id="flavors" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Cake Flavors</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Indulge in Our Delectable Creations</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From classic vanilla to decadent chocolate, our cakes are made with the finest ingredients and baked
              to perfection. Explore our wide range of flavors and designs to find the perfect cake for any
              occasion.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src="/placeholder.svg"
            alt="Cake Flavors"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            width="550"
            height="310"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Classic Vanilla</h3>
                  <p className="text-muted-foreground">
                    Our signature vanilla cake, light and fluffy with a delicate flavor.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Decadent Chocolate</h3>
                  <p className="text-muted-foreground">
                    Rich and indulgent chocolate cake, perfect for chocolate lovers.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Lemon Delight</h3>
                  <p className="text-muted-foreground">
                    Bright and tangy lemon cake, a refreshing treat.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Red Velvet Dream</h3>
                  <p className="text-muted-foreground">
                    Smooth and velvety with a hint of cocoa, topped with cream cheese frosting.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flavors;