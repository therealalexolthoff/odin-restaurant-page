const RESTAURANTDATA = {
    hours: {
        monday: '9AM - 7PM',
        tuesday: '10AM - 8PM',
        wednesday: '10AM - 8PM',
        thursday: '10AM - 8PM',
        friday: '10AM - 10PM',
        saturday: '10AM - 10PM',
        sunday: '10AM - 6PMPM'
    },
    address: '1111 Home Street, Hometown, America'
}
function renderHomeHeader() {
    return "<div><img> <h1>Mama Ilhama's Cafe</h1><img></div>"
}

function renderTestimonial(testimonialText,customerName){
    return `<div><img><p>${testimonialText}</p><h3>${customerName}</h3></div>`
}

function renderHoursContainer(){
    return `<div><h2>Hours</h2><div><p>Sunday: ${RESTAURANTDATA.hours.sunday}</p><p>Monday: ${RESTAURANTDATA.hours.monday}</p><p>Tuesday: ${RESTAURANTDATA.hours.tuesday}</p><p>Wednesday: ${RESTAURANTDATA.hours.wednesday}</p><p>Thursday: ${RESTAURANTDATA.hours.thursday}</p><p>Friday: ${RESTAURANTDATA.hours.friday}</p><p>Saturday: ${RESTAURANTDATA.hours.saturday}</p></div></div>`
}

function renderLocation() {
    return `<div><h2>Location</h2><p>${RESTAURANTDATA.address} </p></div>`
}

function renderHomePage() {
    return `${renderHomeHeader()} ${renderHoursContainer()} ${renderLocation()}`
}


export {renderHomePage}