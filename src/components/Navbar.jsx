import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFullMenuClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault();
      navigate('/menu', { state: { scrollToTop: true } });
    }
  };

  const NavLink = ({ to, children }) => {
    const isHomePage = location.pathname === '/';
    const handleClick = (event) => {
      if (!isHomePage) {
        event.preventDefault();
        navigate('/', { state: { scrollTo: to } });
      }
    };

    if (isHomePage) {
      return (
        <ScrollLink 
          to={to} 
          smooth={true} 
          duration={500} 
          offset={-64}
          className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
        >
          {children}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink 
          to={`/#${to}`} 
          onClick={handleClick}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          {children}
        </RouterLink>
      );
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={handleLogoClick} className="flex items-center justify-center cursor-pointer">
            <span className="sr-only">Delicious Cakes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-primary"
            >
              <path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.699-2.476-2.916A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z" />
            </svg>
          </button>
          <nav className="flex items-center space-x-4">
            <NavLink to="home">Home</NavLink>
            <NavLink to="flavors">Flavors</NavLink>
            <NavLink to="about">About</NavLink>
            <RouterLink 
              to="/menu" 
              onClick={handleFullMenuClick}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Full Menu
            </RouterLink>
            <NavLink to="contact">Contact</NavLink>
            <Button onClick={openLoginModal} variant="outline" size="sm">
              Login
            </Button>
          </nav>
        </div>
      </header>
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={closeLoginModal} 
        onSignupClick={() => {
          closeLoginModal();
          openSignupModal();
        }} 
      />
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={closeSignupModal} 
        onLoginClick={() => {
          closeSignupModal();
          openLoginModal();
        }} 
      />
    </>
  );
};

export default Navbar;