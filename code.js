function divideAndConquerSum(a) 
{
    if (a.length < 2)
    {
        if (a.length < 1)
            return 0;
        else
            return a[0];
    }

    else
    {
        let interval = Math.ceil(a.length / 3);
        let start = 0;
        let endFirstThird = interval;
        let endSecondThird = interval * 2;
        let end = a.length;

        return divideAndConquerSum(a.slice(0, endFirstThird)) + divideAndConquerSum(a.slice(endFirstThird, endSecondThird)) + divideAndConquerSum(a.slice(endSecondThird, end));
    }

}
