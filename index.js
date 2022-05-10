function receivesAFunction(Spy) {
    console.log(Spy())
}

function returnsANamedFunction() {
    return function hi() {
        console.log("to not deeply equal")
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("to not deeply equal")
    }
}