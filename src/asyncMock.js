const products =  [
    { 
        id: '1', 
        name: 'Peluche Kuromi', 
        price: 2000, 
        category: 'peluche', 
        img:'../images/kuromi-plush.jpg', 
        stock: 5, 
        description:'Suave y tierno, este peluche tiene una altura increíble de 17", lo que lo convierte en el regalo perfecto para los súper fanáticos de Hello Kitty y la pieza central de cualquier colección de Hello Kitty. Tiene una textura liviana y peluda y está terminado con detalles de resina para la cara.'
    },
    { 
        id: '2', 
        name: 'Peluche Melody', 
        price: 2000, 
        category: 'peluche', 
        img:'../images/melody-plush.jpg', 
        stock: 5, 
        description:'Suave y tierno, este peluche tiene una altura increíble de 17", lo que lo convierte en el regalo perfecto para los súper fanáticos de Hello Kitty y la pieza central de cualquier colección de Hello Kitty. Tiene una textura liviana y peluda y está terminado con detalles de resina para la cara.'
    },
    { 
        id: '3', 
        name: 'Crop top Kuromi', 
        price: 1500, 
        category: 'ropa', 
        img:'../images/kuromi-crop.jpg', 
        stock: 5, 
        description:'Cómodos y hermosos, disfruta estos crop tops de tus personajes favoritos de Sanrio. Tiene una textura suave hecha con algodón y estampado de primera calidad.'
    },
    { 
        id: '4', 
        name: 'Crop top Pompompurin', 
        price: 1500, 
        category: 'ropa', 
        img:'../images/pompompurin-crop.jpg', 
        stock: 5, 
        description:'Cómodos y hermosos, disfruta estos crop tops de tus personajes favoritos de Sanrio. Tiene una textura suave hecha con algodón y estampado de primera calidad.'
    },
    { 
        id: '5', 
        name: 'Bolsa Kuromi', 
        price: 800, 
        category: 'accesorios', 
        img:'../images/kuromi-bag.jpg', 
        stock: 5, 
        description:'¡Dulce o truco! Esta pequeña bolsa de lona es perfecta para usar como bolsa de regalos y para regalar. Con estrellitas, caramelos que brillan en la oscuridad y el lindo disfraz de diablo de Kuromi, ¡este bolso es definitivamente más un regalo que un truco!'
    },
    { 
        id: '6', 
        name: 'Canasta Kuromi', 
        price: 800, 
        category: 'accesorios', 
        img:'../images/melody-bag.jpg', 
        stock: 5, 
        description:'Ya sea como decoración de Halloween o para llevar sus dulces, ¡estas canastas de calabaza son las más lindas! Inspirada en Jack-o-lanterns, la cara de cada personaje brilla en la oscuridad para una sorpresa espeluznante.'
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
};

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
};