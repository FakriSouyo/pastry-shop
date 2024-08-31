import React from 'react';

export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Crafting Delicious Cakes Since 1985
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Delicious Cakes, we take pride in our rich history and expertise in the art of baking. For over 35
              years, we've been creating mouthwatering cakes and pastries that bring joy to our customers. Our team
              of skilled bakers and decorators use only the finest ingredients to craft delectable treats that are
              as beautiful as they are delicious.
            </p>
          </div>
          <img
            src="/placeholder.svg"
            alt="About Us"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            width="550"
            height="310"
          />
        </div>
      </div>
    </section>
  );
}