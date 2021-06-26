import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Surya Karmakar',
      email: 'suryakarmakar@admin.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Nishan',
      email: 'nishan@user.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Product 1",
      image: "/images/product1.jpg",
      category: "Shirts",
      description: "High quality product for men",
      price: 489,
      stock: 15,
      rating: 4.5,
      numRev: 15,
    },
    {
      name: "Product 2",
      image: "/images/product2.jpg",
      category: "Shirts",
      description: "High quality product for men",
      price: 489,
      stock: 15,
      rating: 4.5,
      numRev: 15,
    },
    {
      name: "Product 3",
      image: "/images/product3.jpg",
      category: "Shirts",
      description: "High quality product for men",
      price: 489,
      stock: 15,
      rating: 4.5,
      numRev: 15,
    },
    {
      name: "Product 4",
      image: "/images/product4.jpg",
      category: "Shirts",
      description: "High quality product for men",
      price: 489,
      stock: 15,
      rating: 4.5,
      numRev: 15,
    },
  ],
};

export default data;
