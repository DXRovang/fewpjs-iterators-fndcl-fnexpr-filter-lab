// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(arr, string){
  let value = arr.filter(function(str) {
    return (str.toLowerCase() === string.toLowerCase())
  })
  if (value){
    return value
  }
}

function fuzzyMatch(arr, string){
  let value = arr.filter(function(str){
    return str.slice(0,2).toLowerCase() === string.slice(0,2).toLowerCase()
  })
  if (value){
    return value
  }

}

function matchName(arr, string){
  let value = arr.filter(function(obj){
    return obj.name.toLowerCase() === string.toLowerCase()
  })
  if (value)
  return value
}


