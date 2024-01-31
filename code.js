var sum = null;

function divideAndConquerSum(a) 
{
    let interval = Math.ceil(a.length / 3);
    let start = 0;
    let endFirstThird = interval;
    let endSecondThird = interval * 2;
    let end = interval * 3;

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
        divideAndConquerSum(a.slice(0, endFirstThird));
        divideAndConquerSum(a.slice(endFirstThird, endSecondThird));
        divideAndConquerSum(a.slice(endSecondThird, end));
    }
        
    return sum;
}


