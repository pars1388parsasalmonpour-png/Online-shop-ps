"use strict";

window.STORE_PRODUCTS = [
  {
    id: 1,
    name: "گوشی موبایل سامسونگ Galaxy A55",
    nameEn: "Samsung Galaxy A55 Smartphone",
    category: "electronics",
    price: 18500000,
    oldPrice: 22000000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85",
    description: "گوشی هوشمند با طراحی مدرن، نمایشگر باکیفیت و امکانات مناسب استفاده روزمره.",
    descriptionEn: "A modern smartphone with a high-quality display and features for everyday use.",
    rating: 4.7,
    featured: true
  },
  {
    id: 2,
    name: "هدفون بی‌سیم مدل Premium",
    nameEn: "Premium Wireless Headphones",
    category: "electronics",
    price: 2450000,
    oldPrice: 3200000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
    description: "هدفون بی‌سیم با طراحی راحت، ظاهر مدرن و مناسب موسیقی و استفاده روزانه.",
    descriptionEn: "Comfortable wireless headphones with a modern design for music and daily use.",
    rating: 4.8,
    featured: true
  },
  {
    id: 3,
    name: "ساعت مچی کلاسیک",
    nameEn: "Classic Wristwatch",
    category: "fashion",
    price: 1890000,
    oldPrice: 2500000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
    description: "ساعت مچی با طراحی کلاسیک و مناسب استفاده روزمره و استایل رسمی.",
    descriptionEn: "A classic wristwatch suitable for everyday wear and formal outfits.",
    rating: 4.5,
    featured: true
  },
  {
    id: 4,
    name: "کفش ورزشی روزمره",
    nameEn: "Everyday Sports Sneakers",
    category: "fashion",
    price: 2150000,
    oldPrice: 2750000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    description: "کفش ورزشی با ظاهر امروزی، مناسب پیاده‌روی و فعالیت‌های روزمره.",
    descriptionEn: "Modern sports sneakers suitable for walking and everyday activities.",
    rating: 4.6,
    featured: true
  },
  {
    id: 5,
    name: "دوربین عکاسی دیجیتال",
    nameEn: "Digital Photography Camera",
    category: "electronics",
    price: 12900000,
    oldPrice: 14900000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85",
    description: "دوربین دیجیتال برای ثبت تصاویر باکیفیت و ثبت لحظات روزمره.",
    descriptionEn: "A digital camera for capturing quality photos and everyday moments.",
    rating: 4.7,
    featured: true
  },
  {
    id: 6,
    name: "عینک آفتابی مدرن",
    nameEn: "Modern Sunglasses",
    category: "fashion",
    price: 790000,
    oldPrice: 1100000,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85",
    description: "عینک آفتابی با طراحی مدرن و مناسب استایل روزانه.",
    descriptionEn: "Modern sunglasses designed to complement everyday outfits.",
    rating: 4.3,
    featured: false
  },
  {
    id: 7,
    name: "کیف دستی روزمره",
    nameEn: "Everyday Handbag",
    category: "fashion",
    price: 1350000,
    oldPrice: 1750000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85",
    description: "کیف با طراحی ساده و کاربردی برای استفاده روزمره.",
    descriptionEn: "A practical, minimalist handbag for everyday use.",
    rating: 4.4,
    featured: false
  },
  {
    id: 8,
    name: "اسپیکر قابل حمل",
    nameEn: "Portable Bluetooth Speaker",
    category: "electronics",
    price: 980000,
    oldPrice: 1250000,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85",
    description: "اسپیکر قابل حمل با طراحی جمع‌وجور برای پخش موسیقی.",
    descriptionEn: "A compact portable speaker for listening to music on the go.",
    rating: 4.2,
    featured: false
  },
  {
    id: 9,
    name: "چراغ رومیزی دکوراتیو",
    nameEn: "Decorative Table Lamp",
    category: "home",
    price: 1250000,
    oldPrice: 1650000,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85",
    description: "چراغ رومیزی مناسب اتاق کار، مطالعه و دکوراسیون منزل.",
    descriptionEn: "A decorative table lamp for workspaces, reading and home interiors.",
    rating: 4.5,
    featured: true
  },
  {
    id: 10,
    name: "کوله‌پشتی چندمنظوره",
    nameEn: "Multipurpose Backpack",
    category: "fashion",
    price: 1150000,
    oldPrice: 1450000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85",
    description: "کوله‌پشتی مناسب مدرسه، دانشگاه، سفر و استفاده روزانه.",
    descriptionEn: "A multipurpose backpack for school, university, travel and everyday use.",
    rating: 4.4,
    featured: true
  },
  {
    id: 11,
    name: "ماوس بی‌سیم کامپیوتر",
    nameEn: "Wireless Computer Mouse",
    category: "electronics",
    price: 490000,
    oldPrice: 650000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=700&q=85",
    description: "ماوس بی‌سیم برای کارهای روزمره و استفاده در محیط کار.",
    descriptionEn: "A wireless mouse for daily computing and office work.",
    rating: 4.3,
    featured: false
  },
  {
    id: 12,
    name: "لیوان سرامیکی مینیمال",
    nameEn: "Minimal Ceramic Mug",
    category: "home",
    price: 290000,
    oldPrice: 390000,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=85",
    description: "لیوان سرامیکی با طراحی ساده برای نوشیدنی‌های گرم و سرد.",
    descriptionEn: "A minimalist ceramic mug for hot and cold drinks.",
    rating: 4.2,
    featured: false
  }
];

window.STORE_CATEGORIES = [
  {
    id: "electronics",
    name: "کالای دیجیتال",
    nameEn: "Electronics",
    icon: "📱",
    description: "گوشی، هدفون و لوازم دیجیتال"
  },
  {
    id: "fashion",
    name: "مد و پوشاک",
    nameEn: "Fashion",
    icon: "👟",
    description: "پوشاک، ساعت و اکسسوری"
  },
  {
    id: "home",
    name: "خانه و آشپزخانه",
    nameEn: "Home & Kitchen",
    icon: "🏠",
    description: "لوازم خانه و دکوراسیون"
  },
  {
    id: "beauty",
    name: "زیبایی و سلامت",
    nameEn: "Beauty & Health",
    icon: "✨",
    description: "محصولات مراقبتی و زیبایی"
  }
];
