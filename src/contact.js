RESTAURANTCONTACTS = [
    {name: '', role: '',number: '',email: ''},
    {name: '', role: '',number: '',email: ''},
    {name: '', role: '',number: '',email: ''},
    {name: '', role: '',number: '',email: ''},
]
function renderContactHeader(){
    return "<div><img> <h1>Contact Us</h1><img></div>"
}

function renderContactPerson(person){
    return `<div><h3>${person.name}</h3><div><span>${person.role}</span><span>${person.number}</span><span>${person.email}</span></div></div>`
}