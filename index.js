let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filterPrice(list, range = [null, null]) {
  try {
    if(!Array.isArray(list) || !Array.isArray(range))
      throw new Error("List or range is not array")
    const minRange = range[0],
          maxRange = range[1];
    if(minRange === null && maxRange === null)
      return list
    return list.filter(el => {
      if('prices' in el) {
        const minPrice = el.prices[0],
              maxPrice = el.prices[1];
        if(minPrice === null && maxPrice === null)
          return true
        
        if(minRange === null) {
          if(minPrice === null && maxPrice <= maxRange)
            return true
          if(maxPrice === null && minPrice <= maxRange)
            return true
          if(maxPrice !== null && minPrice !== null && minPrice <= maxRange)
            return true
          return false
        }
        
        if(maxRange === null) {
          if(minPrice === null && maxPrice >= minRange)
            return true
          if(maxPrice === null && minPrice >= minRange)
            return true
          if(maxPrice !== null && minPrice !== null && maxPrice >= minRange)
            return true
          return false
        }
        
        if(minPrice === null && maxPrice >= minRange && maxPrice <= maxRange)
          return true
        if(maxPrice === null && minPrice >= minRange && minPrice <= maxRange)
          return true
        if(maxPrice !== null && minPrice !== null && ((minPrice >= minRange && minPrice <= maxRange) || (maxPrice <= maxRange && maxPrice >= minRange)))
          return true
        
        return false
      }
      return false
    })
  } catch(e) {
    console.error(e.message)
  }
}

console.log(filterPrice(courses, requiredRange2))   