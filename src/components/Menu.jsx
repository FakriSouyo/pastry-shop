import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MenuItem = ({ id, name, image, price, category, addToCart }) => {
  const [quantity, setQuantity] = React.useState(0);

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

export default function Menu({ addToCart }) {
  const navigate = useNavigate();
  const menuItems = [
    { id: 1, name: "Kue Cokelat", image: "/placeholder.svg", price: 50000, category: "Kue" },
    { id: 2, name: "Kue Vanilla", image: "/placeholder.svg", price: 45000, category: "Kue" },
    { id: 3, name: "Kue Red Velvet", image: "/placeholder.svg", price: 55000, category: "Kue" },
    { id: 4, name: "Kue Keju", image: "/placeholder.svg", price: 52000, category: "Kue" },
    { id: 5, name: "Roti Gandum", image: "/placeholder.svg", price: 25000, category: "Roti" },
    { id: 6, name: "Croissant", image: "/placeholder.svg", price: 15000, category: "Pastry" },
  ];

  const handleViewFullMenu = () => {
    navigate('/menu');
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Menu Kami</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Pilih dari berbagai macam kue lezat kami. Setiap kue dibuat dengan bahan-bahan berkualitas tinggi dan cinta.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {menuItems.map((item) => (
            <MenuItem key={item.id} {...item} addToCart={addToCart} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button onClick={handleViewFullMenu} size="lg">
            Lihat Menu Lengkap
          </Button>
        </div>
      </div>
    </section>
  );
}