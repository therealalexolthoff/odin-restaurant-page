import mainCourse from './mainCourse.png';
import chai from './chai.png';
import baklava from './baklava.png';
import salad from './salad.png';

const BEVERAGES = [{name:'Chai',description:'Tasty Azerbaijani Tea', price:'1',image:''},{name:'Ovshala',description:'A lightly sweetened rose drink. Good at the end of a long day of work', price:'3', image:''}, {name:'Iskanjabi',description:'A honey-vinegar drink that goes well with meat.', price:'4',image:''}]
const APPETIZERS = [{name:'Lobya Chigirtmasi',description:'String beans and eggs, fried and tasty. Great for the summer.',price:'8',image:''}, {name:'Khazar Salad',description:'Potato andcucumber salad topped with sturgeon and meayonaise. Decadent and delicious.', price:'15',image:''},{name:'Kyu-Kyu',description:'Eggs Cooked In Freshly-Chopped Herbs With Yogurt And Garlic',price:'$10',image:''}]
const MAINCOURSES = [{name:'Khashlama',description:'Lamb Chops Cooked With Tomatoes, Bell Peppers, Potatoes, Onions, and Stock.',price:'28',image:''},{name:'SURFULLU',description:'Handmade Noodles With Jerky and Sausage',price:'32',image:''},{name:'Turkey With Cranberry Pilaf',description:'A Turkey Baked With Cranberries, Rice, and Lavash Cooked Inside',price:'$42',image:''}]
const DESSERTS = [{name:'Baklava',description:'Layers of Phyllo Dough, Honey, and Walnuts', price:'6',image:''},{name:'Shekarbura',description:'Half Moon Pastry Filled With Walnuts and Sugar',price:'5',image:''},{name:'Mutaki',description:'Soft Cookie Stuffed With Apricot Jam', price:'7',image:''}]


const menuHeader = `<div class="menu-header"><img src="${chai}"><h1>Menu</h1><img></div>`

function createMenuItemsUI (menuItems){
    const itemsContainer = document.createElement('div');
    menuItems.forEach(item => {
        const itemContainer = `<div class="beverage-menu-item"><h2>${item.name}</h2><h3>$${item.price}</h3><p>${item.description}</p><img src="${item.image}"></div>`
        itemsContainer.innerHTML += itemContainer;
    }
    )
    return itemsContainer.innerHTML;
}
function createMenuSubHeader (category,image){
    return `<div class="beverages-subheader"><h2>${category}</h2><img src="${image}"></div>`
}

function renderMenuPage() {
    return `${menuHeader} ${createMenuSubHeader('Beverages',chai)}
    ${createMenuItemsUI(BEVERAGES)}
    ${createMenuSubHeader('Appertizers',salad)}
    ${createMenuItemsUI(APPETIZERS)}
    ${createMenuSubHeader('Main Courses',mainCourse)}
    ${createMenuItemsUI(MAINCOURSES)}
    ${createMenuSubHeader('Desserts',baklava)}
    ${createMenuItemsUI(DESSERTS)}`
}

export {renderMenuPage}