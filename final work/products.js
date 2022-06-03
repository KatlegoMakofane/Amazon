let cart = document.querySelectorAll("#urs");
console.log(cart)

const products = [
    {
      id: 0,
      book_title:"22 Seconds",
      author:"James Patterson",
      description:"22 seconds... until Lindsay Boxer loses her badge—or her life.SFPD Sergeant Lindsay Boxer has guns on her mind.There’s buzz of a last-ditch shipment of drugs and weapons crossing the Mexican border ahead of new restrictive gun laws. Before Lindsay can act, her top informant tips her to a case that hits disturbingly close to home.Former cops. Professional hits. All with the same warning scrawled on their bodies:You talk, you die. Now it’s Lindsay’s turn to choose.",
      isbnNumber:0316400374, 
      price: 10.00,
      imgSrc:"./assets/image/book1.jpg",
      
      
     
      
      
    },
    {
      id: 1,
      book_title:"Book Lovers",
      author:"Emily Henry",
      description:"  One summer. Two rivals. A plot twist they didn't see coming...Nora Stephens' life is books—she’s read them all—and she is not that type of heroine. Not the plucky one, not the laidback dream girl, and especially not the sweetheart. In fact, the only people Nora is a heroine for are her clients, for whom she lands enormous deals as a cutthroat literary agent, and her beloved little sister Libby. If Nora knows she’s not an ideal heroine, Charlie knows he’s nobody’s hero, but as they are thrown together again and again                  ",
      isbnNumber:0546400677, 
      price: 15.00,
      imgSrc:"./assets/image/book3.jpg",
    },
    {
      id: 2,
      book_title:"Dream Town",
      author:"David Baldacci",
      description:"  Private investigator and World War II veteran Aloysius Archer heads to Los Angeles, the city where dreams are made and shattered, and is ensnared in a lethal case in this latest thriller in #1 New York Times bestselling author David Baldacci’s Nero Award-winning series.  It’s the eve of 1953, and Aloysius Archer is in Los Angeles to ring in the New Year with an old friend, aspiring actress Liberty Callahan, when their evening is interrupted by an acquaintance of Callahan’s: Eleanor Lamb, a screenwriter in dire straits.Praise for Matthew Richardson  ",
      isbnNumber:1538719770, 
      price: 20.00,
      imgSrc:"./assets/image/book2.jpg",
    },
    {
      id: 3,
      book_title:"The Palace Pappers",
      author:"Tina Brown",
      description:" “Never again” became Queen Elizabeth II’s mantra shortly after Princess Diana’s tragic death. More specif­ically, there could never be “another Diana”—a mem­ber of the family whose global popularity upstaged, outshone, and posed an existential threat to the Brit­ish monarchy.Picking up where Tina Brown’s masterful The Diana Chronicles left off, The Palace Papers reveals how the royal family reinvented itself after the trau­matic years when Diana’s blazing celebrity ripped through the House of Windsor like a comet. ",
      isbnNumber:1646499374, 
      price: 25.00,
      imgSrc: "./assets/image/book4.jpg",
    },
    {
      id: 4,
      book_title:"A Memoirs",
      author:"Just Tyrus",
      description:"  Pro wrestler and political commentator Tyrus goes deep into his wild but triumphant life story, from his painfully dysfunctional upbringing to bodyguarding for Snoop Dogg, to becoming a wrestling icon and one of the most provocative on-air voices today. I read it in one day and cheered for him when I got to the end. Tyrus has written a book that is at once raw, tender, intelligent, candid, and hilarious. Tyrus took a very rough start to his life and used perseverance, confident humility, and accountability to land firmly on his feet. What a triumph!",
      isbnNumber:1786499473, 
      price: 30.00,
      imgSrc: "./assets/image/book5.jpg",
    },
   
  ];
  for(let i = 0; i<cart.length; i++){
    cart[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
        
        
    })
}

function cartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers+1);
      document.querySelector('.cartnumber').textContent=productNumbers+1;    
  }
  else{
    localStorage.setItem('cartNumbers', 1);
  console.log(document.querySelector('.cartnumber'));
  document.querySelector('.cartnumber').textContent=1;
 
  }
}
function totalCost(product){
  if( localStorage.getItem('totalCost') === null){
    localStorage.setItem('totalCost', "0");
  }
  
 let cartCost = localStorage.getItem('totalCost');
  if(cart != null){
      
      
      cartCost = parseInt(cartCost);
      localStorage.setItem('totalCost',cartCost+product.price);
  }
  else{
    localStorage.setItem('totalCost',product.price); 
  }
}