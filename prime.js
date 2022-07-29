function primeNumbers(n,isPrime){
        isPrime[0] = isPrime[1] = false;
        for (let i = 2; i <= n; i++)
            isPrime[i] = true;
       
        for (let p = 2; p * p <= n; p++)
        {if (isPrime[p] == true)
            {

                for (let i = p * p; i <= n; i += p)
                    isPrime[i] = false;
            }
        }
        return false;
    }
     
    function findPrimePair(n)
    {
        let isPrime = new Array(n+1);
        for(let i=0;i<n+1;i++)
        {
            isPrime[i]=false;
        }
        primeNumbers(n, isPrime);

        for (let i = 0; i < n; i++)
        {
            if (isPrime[i] && isPrime[n - i])
            {
                console.log(i + " " + (n - i));
                return;
            }
        }
    }
     
    let  n = 15;
    findPrimePair(n);