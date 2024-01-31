var sum = null;

function divideAndConquerSum(a) 
{
    var interval = Math.ceil(a.length / 3);
    var start = 0;
    var endFirstThird = interval;
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
        return divideAndConquerSum(a.slice(0, endFirstThird)) + divideAndConquerSum(a.slice(endFirstThird, endSecondThird)) +  divideAndConquerSum(a.slice(endSecondThird, end));
       
    }
        
   // return sum;
}


var array = [0];
console.log(divideAndConquerSum(array));
