RESTAURANTCONTACTS = [
    {name: 'Ilhama', role: 'Lead Chef',number: '123-456-7891',email: 'ilhama@mamailhama.com'},
    {name: 'Subhan', role: 'CTI',number: '1112223333',email: 'subbie@mamailhama.com'},
    {name: 'Kamala', role: 'CMO',number: '1245311452',email: 'kamala@mamailhama.com'},
    {name: 'Alex', role: 'COO',number: '1709324544',email: 'alex@mamailhama.com'},
]
function renderContactHeader(){
    return "<div><img ><h1>Contact Us</h1><img></div>"
}

function renderContactPerson(person){
    return `<div><h3>${person.name}</h3><div><span>${person.role}</span><span>${person.number}</span><span>${person.email}</span></div></div>`
}
