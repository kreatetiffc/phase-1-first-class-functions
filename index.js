

function returnsAnAnonymousFunction(){
    return function (){}
}

function receivesAFunction(returnsAnAnonymousFunction){
    return returnsAnAnonymousFunction()
}

function returnsANamedFunction(){
    return receivesAFunction
}