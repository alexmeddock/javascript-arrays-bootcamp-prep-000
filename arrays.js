var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function destructivelyChocolateBars(name){
    return chocolateBars.push(name)
}

function destructivelyPrependKitten(name){
    return chocolateBars.unshift(name)
}

function destructivelyRemoveLastChocolateBars(){
    return chocolateBars.pop()
}

function destructivelyRemoveFirstChocolateBars(){
    return chocolateBars.shift()
}

function appendChocolateBars(name){
    return [...chocolateBars, name]
}

function prependChocolateBars(name){
    return [name, ...chocolateBars]
}

function removeLastChocolateBars(){
    return chocolateBars.slice(0,ChocolateBars.length-1)
}

function removeFirstChocolateBars(){
    return chocolateBars.slice(1)
}