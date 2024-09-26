
function operations(a,b,c){
    let d = a + b;
    d = d + c;
    d = d / (d + a);
    let result = d+a-b/c;
    return result;
}
console.log(operations(1,2,3))