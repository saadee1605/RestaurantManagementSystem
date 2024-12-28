import starter from '../starters/tacos.jpg'
import chinese from '../chinese/kung pao chicken.jpg'
import desserts from '../desserts/lava_cake.jpg'
import drinks from '../drinks and beverages/coke.jpg'
import pakistani from '../pakistani cuisine/biryani.jpg'
const categories = [
    {
        id: 1,
        category: "starters",
        image:starter,
        description: "Starters are small dishes served before the main course to stimulate your appetite. They often include appetizers like soups, salads, or finger foods."
    },
    {
        id: 2,
        category: "chinese",
        image:chinese,
        description: "Chinese cuisine offers a variety of dishes featuring rice, noodles, vegetables, meats, and seafood, all balanced with distinct flavors such as sweet, salty, sour, and spicy."
    },
    {
        id: 3,
        category: "pakistani",
        image:pakistani,
        description: "Pakistani cuisine is known for its rich, flavorful dishes, often featuring spices, meats, lentils, and rice. It's influenced by both Central Asian and South Asian culinary traditions."
   
         },
    {
        id: 4,
        category: "drinks",
        image:drinks,
        description: "Drinks include both non-alcoholic and alcoholic beverages, such as juices, sodas, cocktails, coffee, and mocktails, often enjoyed alongside meals or as refreshments."
    },
    {
        id: 5,
        category: "desserts",
        image:desserts,
        description: "Desserts are sweet dishes served at the end of a meal. They can range from cakes, pies, and ice cream to fresh fruits and pastries."
  
        }
];
export default categories