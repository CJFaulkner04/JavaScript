
function object(){
    let a = "String";
    let b = {object: "Object"};

    console.log(a, b);

    function inner(a, b){
        a = "Not String";
        b.object = "Not Object";
        console.log(a, b);
    }

    inner(a,b);
    console.log(a,b);

}

object();