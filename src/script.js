import Data from './data.js';


// const [{ Diseases , Extinction , InterspecificCompetition }] = Data ;

// console.log(Diseases);




const page = (function() {
     let list ;
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
     list = document.querySelectorAll('.list');
     
     list.addEventListener('click' , cur => {
          console.log(cur.id);
     });


})();
