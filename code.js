function divideAndConquerSum(a){
    if (a.length == 0){
        return 0;
    }

    if (a.length == 1) {
        return a[0];
    }
    
    var mid1 = Math.floor(a.length/3);
    var mid2 = Math.floor((mid1 + a.length)/2);
    
    return divideAndConquerSum(a.slice(0,mid1))+divideAndConquerSum(a.slice(mid1,mid2))+divideAndConquerSum(a.slice(mid2));
}


