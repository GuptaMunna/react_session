/*
  Follow step by step instructions to complete these
  multiple challenges related to arrays.
*/

/*
  This require statement conveniently brings in the entire set of user profile
  data for you from a neighbouring file.

  You can imagine that this is your network api call delivering you data
*/
const profiles = require("./userData");

/*
  1.1 Check the type of data returned
  Expected output: [object Array] OR true
  hint: google how to find type of data structures in javascript
*/
// profiles.map((p,i)=>( ));

console.log("Obect type is  "+ profiles);

/*
  1.2 Log of the size of the data returned
  Expected output: "We just fetched [x] users" where x represents the actual number
*/

console.log("Object size "+profiles.length);

/*
  1.3 Get the first five items from the data set
  Expected output: an array with the first 5 items
*/

const data=profiles.filter((word,i) =>i < 5)
  console.log(data)

/*
  1.4 Remove the first profile from this data while returning it at the same time
  Expected output: a) user by the name of dânia da mota and b) an array of profiles without dânia da mota
*/
var first=profiles.shift();
console.log(`First element ${first.name.title} ${first.name.first} ${first.name.last}`);
console.log('list array '+profiles);

/*
  1.5 Paginate the api results in sets of variable amounts
  Example: Paginate(profiles, 2, 5)
  Expected output: An array of profiles containing items sliced from page 2 to page 3 containing 5 items
*/
function paginate (array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

var page=1;
while(page*5<profiles.length){
console.log("page "+page+" array "+paginate(profiles, 5,page));
page+=1;
}