function createnavbar(){

  
     //for mobile views
     const mobiles = document.createElement('div')
     mobiles.classList.add('mobile');

     for (let i=0; i<3; i++){
     const bar = document.createElement('span')
     bar.classList.add('bar')
     mobiles.appendChild(bar);   
     }
     //append child in navbar variable
     
 

     

     //add event listner for the mobile menu

     mobiles.addEventListener('click',()=>{
        navLinks.classList.toggle('active');
     })
     document.querySelector('a[href="#mens-apparel"]').addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'mens-apparel.html'; // Navigate to the new page
  });
  

    };
//call the function
createnavbar();











