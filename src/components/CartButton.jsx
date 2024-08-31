import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';

const CartButton = ({ itemCount, onClick }) => {
  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg"
      onClick={onClick}
    >
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Button>
  );
};

export default CartButton;