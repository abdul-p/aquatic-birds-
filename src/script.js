import Data from './data.js';


// const [{ Diseases , Extinction , InterspecificCompetition }] = Data ;

// function displayTypes (data) {
//     let typ , ul , li  , h2 , p;
//            typ = data.types ;
//            ul = document.createElement('ul');
           
//      typ.forEach(cur => {
//            li = document.createElement('li');
//            ul.appendChild(li);
//            h2 = document.createElement('h2');
//            h2.innerText = cur.name ;
//            p = document.createElement('');
//            p.innerText = cur.text ;
//            li.appendChild(h2);
//            li.appendChild(p);
//            document.querySelector('.data-p').insertAdjacentHTML('afterend', ul);
//            console.warn(ul)
//      })
// }


function displayData (data , dom , head , type) {
     
     data.forEach( cur => {
          if(type === cur.id) {
               dom.innerText = '' ;
               console.log(cur.id);
                    head.innerText = cur.name ;
                    let p = document.createElement('p');
                    p.innerText = cur.def ;
                    p.className = 'data-p'
                    dom.insertAdjacentElement('afterbegin' , p);
                    if (cur.type) {
                         // displayTypes(cur)
                    }
               }
               
          });

}

const page = (function() {
     let list , dom , head ;
          dom = document.getElementById('data-dis');
          head = document.getElementById('data-head');
     // toggle the content element  
     document.getElementById('content').addEventListener('click' , () => {
         let lists = document.getElementById('lists');
         if(lists.style.display === 'none' ){
              lists.style.display = 'block' ;
         } else {
              lists.style.display = 'none' ;
         }
           
     });

     // get and display content element data 
     list = document.getElementById('lists');
     list.addEventListener('click' , (e) => {
               let type = e.target.id ;
               console.log(type);
               displayData(Data,dom,head,type);
     });


})();

