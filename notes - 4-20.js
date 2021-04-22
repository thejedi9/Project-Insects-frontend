// spread Operator


//js objects compare by reference not value
//paas by reference or pass by value -- imp concept in react
//allows you to change the object without mutating it - 
// can overwrite elements with new elements
//APPLICATION --- CHANGE STATE - SPREAD OPERATOR IS AROUND THE CORNER

//changing the object in memory will lead in a change the DOM - 




// ****** DESTRUCTURING 

// assigning variables that match  - too long
// can put it all in one set of {} making specific vars - with matching vlues of POJOs with the same key
//APP - PULL OUT VALUES OF OBJ  - pulling variables from POJOs - can do tit for arrays as well
//makes it shorter - saves time and lines
//if you know the order  --- useState("") - imp for React
//use it in the parameters of a function




//***** props */ property assignment - going form variables  into POJOs
// creating an object - using the variables available - putting them inside POJO
//app - json.stringify({name, age})
// let variable = POJO
// [blanket cases]- allows for porperty assignment
//app - setState([[e.target.name]: e.target.value])
const retailCompanies = companies.filter(company => company.category === 'Retail')
const totalYears = companies.reduce((total, company) => total + (company.end -company.start), 0);