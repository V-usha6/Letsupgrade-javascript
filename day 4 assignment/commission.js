const amount=prompt("enter amount:");
//const commissionpercentage = prompt("enter the commissionpercentage");
switch (true)
{
    case(amount>20000) :
        const com = (0.01)*amount;
        console.log(`Your 10% reward is -" ${com}`);
        alert(`Your 10% reward is -" ${com}`);
        break;

        case(amount >= 10001 && amount <= 20000) :
        const com1 = (0.07)*amount;
        console.log(`Your 7% reward is -" ${com1}`);
        alert(`Your 7% reward is -" ${com}`);  
        break;

        case(amount>=5001 && amount<=10000) :
        const com11= (0.05)*amount;
        console.log(`Your 5% reward is -" ${com11}`);
        alert(`Your 5% reward is -" ${com}`);
        break;
       
        case(amount>=0 && amount<=5000) :
        const com111 = (0.02)*amount;
        console.log(`Your 2% reward is -" ${com111}`);
        alert(`Your 2% reward is -" ${com}`);
        break;
        
        default : alert("you entered wrong value!!!1");
        break;
}


