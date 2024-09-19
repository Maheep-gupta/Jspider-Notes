function isprime(number) {
    let numberOfFactors = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            numberOfFactors++;
        }
    }
    return numberOfFactors == 2;
}

for (let i = 0; i < 99; i++) {
    if (isprime(i)) {
        console.log(i);
    }

}

let count = 0;
for (let i = 0; i < 99; i++) {
    if (i % 2 == 0) {
        count++
    }

}
console.log("there are " + count + " evens from 0 -99");
let countOdd = 0;
for (let i = -99; i < 50; i++) {
    if (i % 2 != 0) {
        count += i
    }

}
console.log("Sum of Odd is " + count);

let min = 0;
for (let i = -0.48; i < 5; i += 0.01) {
    if (i < min && i > 0) {
        min = i
    }
}
console.log(min);

// Intrest= prt/100

let deposit = 1000000;
let amount = 0
console.log(deposit >= 500000);

switch (deposit >= 500000) {
    case true:
        amount += deposit + (0.10 * deposit)
        console.log("The new Amount is " + amount);
        break;
    case false:
        switch (deposit >= 1000000) {
            case true:
                amount += deposit + (0.15 * deposit)
                console.log("The new Amount is " + amount);
                break;
            case false:
                switch (deposit >= 1500000) {
                    case true:
                        amount += deposit + (0.25 * deposit)
                        console.log("The new Amunt is " + amount);
                        break;

                    default:
                        break;
                }

            default:
                break;
        }

    default:
        console.log("invalid output");
        break;
}