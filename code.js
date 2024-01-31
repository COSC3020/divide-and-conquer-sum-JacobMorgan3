var sum = null;

function divideAndConquerSum(a) 
{
    var interval = Math.floor(a.length / 3);
    var start = 0;
    var mid2 = Math.floor((interval + a.length)/2)
    var endSecondThird = interval * 2;
    var end = interval * 3;

    if(a.length == 0)
        return 0;
    if(a.length < 2) 
    {
        if(a.length == 1)
        {
            sum = sum + a[0];
            return sum;
        }   
    }

    else 
    {
        return divideAndConquerSum(a.slice(0, interval)) + divideAndConquerSum(a.slice(interval, mid2)) +  divideAndConquerSum(a.slice(mid2));
       
    }
        
   // return sum;
}


var array = [0];
console.log(divideAndConquerSum(array));
