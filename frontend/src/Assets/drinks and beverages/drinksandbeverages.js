// Import images
import water from './water.jpg';
import fanta from './fanta.jpg';
import coke from './coke.jpg';
import sprite from './sprite.jpg';
import sting from './sting.jpg';
import dew from './dew.jpg';
import oreoShake from './oreo_shake.jpg';
import lemonade from './lemonade.jpg';
import lassi from './lassi.jpg';
import lotusShake from './lotus shake.jpg';
import mangoShake from './mango shake.jpg';
import strawberryShake from './strawberry shake.jpg';

// Define the drinks and beverages array
const drinksAndBeverages = [
    {
        id: 1,
        name: "Water",
        category:"drinks",
        picture: water,
        description: "Refreshing and pure bottled water to keep you hydrated.",
        price: 50
    },
    {
        id: 2,
        name: "Fanta",
        picture: fanta,category:"drinks",
        description: "Orange-flavored carbonated drink with a refreshing taste.",
        price: 80
    },
    {
        id: 3,
        name: "Coke",
        picture: coke,category:"drinks",
        description: "Classic cola beverage with a bold and refreshing flavor.",
        price: 80
    },
    {
        id: 4,
        name: "Sprite",
        picture: sprite,category:"drinks",
        description: "Lemon-lime flavored soda, crisp and refreshing.",
        price: 80
    },
    {
        id: 5,
        name: "Sting",
        picture: sting,category:"drinks",
        description: "Energy drink with a unique taste to boost your energy.",
        price: 100
    },
    {
        id: 6,
        name: "Dew",
        picture: dew,category:"drinks",
        description: "Citrus-flavored soda with a refreshing and energizing kick.",
        price: 80
    },
    {
        id: 7,
        name: "Oreo Shake",
        picture: oreoShake,category:"drinks",
        description: "Creamy milkshake blended with Oreo cookies for a delightful treat.",
        price: 250
    },
    {
        id: 8,
        name: "Lemonade",
        picture: lemonade,category:"drinks",
        description: "Chilled lemonade made with fresh lemons for a tangy refreshment.",
        price: 120
    },
    {
        id: 9,
        name: "Lassi",
        picture: lassi,category:"drinks",
        description: "Traditional yogurt-based drink, smooth and refreshing, available in sweet or salted.",
        price: 150
    },
    {
        id: 10,
        name: "Lotus Shake",
        picture: lotusShake,category:"drinks",
        description: "Rich milkshake made with Lotus Biscoff cookies for a unique flavor.",
        price: 300
    },
    {
        id: 11,
        name: "Mango Shake",
        picture: mangoShake,category:"drinks",
        description: "Seasonal mango shake made with fresh mangoes for a tropical taste.",
        price: 200
    },
    {
        id: 12,
        name: "Strawberry Shake",
        picture: strawberryShake,category:"drinks",
        description: "Sweet and creamy shake made with fresh strawberries.",
        price: 220
    }
];

// Export the drinks and beverages array
export default drinksAndBeverages;
