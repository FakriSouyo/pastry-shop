import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MenuItem = ({ id, name, image, price, category, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => Math.max(0, prev - 1));

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ id, name, price, quantity });
      setQuantity(0); // Reset quantity after adding to cart
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
        <p className="text-lg font-semibold">Rp {price.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground mb-4">{category}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={decrement}>-</Button>
            <span className="text-lg font-semibold">{quantity}</span>
            <Button variant="outline" size="icon" onClick={increment}>+</Button>
          </div>
          <Button variant="default" disabled={quantity === 0} onClick={handleAddToCart}>
            Tambah ke Keranjang
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const FullMenu = ({ addToCart }) => {
  const location = useLocation();
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Kue Cokelat", image: "/placeholder.svg", price: 50000, category: "Kue" },
    { id: 2, name: "Kue Vanilla", image: "/placeholder.svg", price: 45000, category: "Kue" },
    { id: 3, name: "Kue Red Velvet", image: "/placeholder.svg", price: 55000, category: "Kue" },
    { id: 4, name: "Kue Keju", image: "/placeholder.svg", price: 52000, category: "Kue" },
    { id: 5, name: "Roti Gandum", image: "/placeholder.svg", price: 25000, category: "Roti" },
    { id: 6, name: "Croissant", image: "/placeholder.svg", price: 15000, category: "Pastry" },
    { id: 7, name: "Donat Gula", image: "/placeholder.svg", price: 8000, category: "Donat" },
    { id: 8, name: "Pie Apel", image: "/placeholder.svg", price: 30000, category: "Pie" },
  ]);

  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', ...new Set(menuItems.map(item => item.category))];

  useEffect(() => {
    if (location.state && location.state.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const filtered = menuItems.filter(item => 
      (selectedCategory === 'Semua' || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory, menuItems]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Menu Lengkap</h2>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <Input
            type="text"
            placeholder="Cari menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} {...item} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullMenu;