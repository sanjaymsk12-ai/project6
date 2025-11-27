let arr = [{
    image:'./sanjay.jpg',
    name : 'Sanjay',
    age: '27',
    maried : 'False',},

{   image:'./Rinku.jpg',
    name : 'Rinku',
    age: '22',
    maried : 'False',},

{   image:'./arshil.jpg',
    name : 'Arshil',
    age: '26',
    maried : 'False',},

{   image:'./ramji.jpg',
    name : 'Ram ji',
    age: '28',
    maried : 'False',}]

sum = ''

arr.forEach(function(elem,idx){
    sum = sum + `<div class="card">
        <img src="${elem.image}" alt="image not found">
        <h1>${elem.name}</h1>
        <h4>${elem.age}</h4>
        <h5>${elem.maried}</h5>
    </div>`
})

let body = document.querySelector('body')

body.innerHTML = sum
