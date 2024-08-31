import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Link } from 'react-scroll';
import Flavors from './Flavors';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';

const Home = ({ addToCart }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, [location]);

  return (
    <>
      <section id="home" className="w-full py-12 md:py-24 lg:py-32 pt-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              src="/placeholder.svg"
              alt="Hero Cake"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              width="550"
              height="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Delicious Cakes for Every Occasion
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Indulge in our exquisite selection of handcrafted cakes and pastries, made with the finest
                  ingredients and baked with love.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="menu"
                  smooth={true}
                  duration={500}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                >
                  Explore Menu
                </Link>
                <Link
                  to="flavors"
                  smooth={true}
                  duration={500}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                >
                  Explore Flavors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="flavors">
        <Flavors />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="menu">
        <Menu addToCart={addToCart} />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;