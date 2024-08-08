BEVERAGES = [{name:'',description:'',price:'',image:''},{name:'',description:'',price:'',image:''},{name:'',description:'',price:'',image:''}]
APPETIZERS = [{name:'',description:'',price:'',image:''},{name:'',description:'',price:'',image:''},{name:'',description:'',price:'',image:''}]
MAINCOURSES = [{name:'',description:'',price:'',image:''},{name:'',description:'',price:'',image:''},{name:'',description:'',price:'',image:''}]
DESSERTS = [{name:'',description:'',price:'',image:''},{name:'',description:'',price:'',image:''},{name:'',description:'',price:'',image:''}]


const menuHeader = '<div class="menu-header"><img><h1>Menu</h1><img></div>'

function createMenuItemUI (menuItem){
    return `<div class="beverage-menu-item"><h2>${menuItem.name}</h2><p>${menuItem.description}</p><h3>$${menuItem.price}</h3><img src="${menuItem.image}"></div>`
}
function createMenuSubHeader (category,image){
    return `<div class="beverages-subheader"><h2>${category}</h2><img src="${image}"></div>`
}

