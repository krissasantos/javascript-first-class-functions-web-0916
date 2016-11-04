function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction() {
  function f(){
    console.log("Hello!")
  }
  return f
}

function returnsAnAnonymousFunction() {
  return function (){ console.log("Hello!")}

}
