import Data from './data.js';


// const [{ Diseases , Extinction , InterspecificCompetition }] = Data ;

// console.log(Diseases);

let list = document.getElementById('list');
let listItem = document.querySelectorAll('.listItem');

list.addEventListener('click' , () => {
       console.log('hey')
});

  
listItem.forEach( cur => {
       cur.addEventListener('click' , () => {
        console.log('how are you doing');
});

})



// const page = (function() {
//         document.getElementById('ex').addEventListener('click' , () => {

//                 //display data from data.js to the window

//                 // recieve data from data.js 
//                 const [{ diseaseP  , Extinction , InText }] = Data ;
//                 //create new dom element
//                 let p = document.createElement('p');
//                 p.innerText = Extinction.Text ;
//                 console.log(Extinction.Text);
//                 //display the element
//                 document.getElementById('text-space').insertAdjacentElement('beforeend' , p)
//         })
// })();

// page();