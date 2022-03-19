//fibonacci series

function fibinacci(number)
{
  let n1=0,n2=1,n3,i;
  console.log(n1)
  console.log(n2)
  for( i = 1 ; i < number ; i++)
  {    
      
    n3=n1+n2   
    console.log(n3)  
    n1=n2    
    n2=n3
}
}
fibinacci(10)

