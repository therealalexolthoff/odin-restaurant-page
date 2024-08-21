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
    return `<div><h2>Hours</h2><div><span>Sunday: ${RESTAURANTDATA.hours.sunday}</span><span>Monday: ${RESTAURANTDATA.hours.monday}</span><span>Tuesday: ${RESTAURANTDATA.hours.wednesday}</span><span>Wednesday:</span><span>Thursday:${RESTAURANTDATA.hours.thursday}</span><span>Friday:${RESTAURANTDATA.hours.friday}</span><span>Saturday:${RESTAURANTDATA.hours.saturday}</span></div></div>`
}

function renderLocation() {
    return `<div><h2>Location</h2><p>Address: ${RESTAURANTDATA.address} </p></div>`
}

function renderHomePage() {
    return `${renderHomeHeader()} ${renderHoursContainer()} ${renderLocation()}`
}


export {renderHomePage}