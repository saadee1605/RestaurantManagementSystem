// Import images
import chickenSoup from './chicken soup.jpg';
import garlicBread from './garlic bread.jpg';
import golGappay from './gol gappay.jpg';
import springRolls from './spring rolls.jpg';
import onionRings from './onion rings.jpg';
import plainFries from './plain fries.jpg';
import loadedFries from './loaded fries.jpg';
import tacos from './tacos.jpg';
import sandwiches from './sandwiches.jpg';

// Define the dishes array
const dishes = [
    {
        id: 1,
        name: "Chicken Soup",
        picture: chickenSoup,category:"starters",
        description: "Warm and comforting chicken soup, made with tender chicken pieces, vegetables, and aromatic spices. Perfect for cold days.",
        price: 200
    },
    {
        id: 2,
        name: "Garlic Bread",
        picture: garlicBread,category:"starters",
        description: "Crunchy and flavorful bread slices infused with garlic butter and herbs. A great side or appetizer.",
        price: 150
    },
    {
        id: 3,
        name: "Gol Gappay",
        picture: golGappay,category:"starters",
        description: "Crispy puffed balls filled with tangy tamarind water, chickpeas, and potatoes. A popular and refreshing street snack.",
        price: 100
    },
    {
        id: 4,
        name: "Spring Rolls",
        picture: springRolls,category:"starters",
        description: "Crispy rolls filled with fresh vegetables and meat, served with a tangy dipping sauce. Ideal for light snacking.",
        price: 180
    },
    {
        id: 5,
        name: "Onion Rings",
        picture: onionRings,category:"starters",
        description: "Golden-brown onion rings coated in a crispy batter. A perfect side dish with a delightful crunch.",
        price: 120
    },
    {
        id: 6,
        name: "Plain Fries",
        picture: plainFries,category:"starters",
        description: "Classic fries with a crispy outside and fluffy inside, lightly salted. Great for a quick snack.",
        price: 100
    },
    {
        id: 7,
        name: "Loaded Fries",
        picture: loadedFries,category:"starters",
        description: "Fries topped with melted cheese, sour cream, and jalapenos for an extra kick. A filling treat.",
        price: 250
    },
    {
        id: 8,
        name: "Tacos",
        picture: tacos,category:"starters",
        description: "Soft or crispy tacos filled with seasoned meat, fresh veggies, and topped with cheese and sauce. A Mexican delight.",
        price: 300
    },
    {
        id: 9,
        name: "Sandwiches",
        picture: sandwiches,category:"starters",
        description: "Classic sandwiches with a variety of fillings, from chicken to vegetables, served on fresh bread.",
        price: 200
    }
];

// Export the dishes array
export default dishes;
