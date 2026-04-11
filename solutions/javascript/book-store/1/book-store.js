//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const BOOK_PRICE = 800
const DISCOUNT = {1:1, 2 : 0.95 , 3 : 0.90 , 4 : 0.80 , 5 : 0.75}
export const cost = (books) => {
  if (!books.length) return 0
  let booksCount = books.length;

  // Sort by books count
  const counts = books.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  books.sort((a, b) => counts[b] - counts[a] || a - b);
  // Sort end
  
  let option1 = calculatePrice(groupBooks(books,5))
  let option2 = calculatePrice(groupBooks(books,4))


  return Math.min(option1, option2)
};

function groupBooks(books, maximum){
    let booksGroups = [[]]
    books.forEach( (book,index) => {
      for (let i = 0; i < booksGroups.length ; i++) {
       let group = booksGroups[i]
       if( !group.includes(book) && group.length < maximum ){
         group.push(book)
         break
       }
       else if ( i === booksGroups.length - 1) {
         booksGroups.push([book])
         break
       }
      }
    })

if( booksGroups.at(-1).length === 1)
  {
    booksGroups.forEach( group => {
      if( group.length < 5 && !group.includes(booksGroups.at(-1)[0])){
         group.push(booksGroups.at(-1)[0])
         booksGroups.pop()
      }
        
    })
  }
  
  return booksGroups
}

function calculatePrice(booksGroups){
    let price = 0
    booksGroups.forEach( group => {
    price += group.length*800*DISCOUNT[group.length]
  })
  return price
}
