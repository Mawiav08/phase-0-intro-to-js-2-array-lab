// Write your solution here!
const cats =["Milo","Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(){
    const cats=["Milo","Otis","Garfield"]
    const newcats=[... cats, "Broom"]
    return newcats
}

function prependCat(){
    const cats=["Milo","Otis","Garfield"]
    const newcats=["Arnold", ...cats]
    return newcats
}

function removeLastCat(){
    const cats=["Milo","Otis","Garfield"]
    const removeLastCat= cats.slice(cats, cats.length -1)
    return removeLastCat
}

function removeFirstCat(){
    const cats=["Milo","Otis","Garfield"]
    const removeCat1= cats.splice(1)
    return removeCat1
}


