// Ciclo
for (let i = 1; i <= 100; i++) {     // Contatore da 1 a 100

    if (i % 3 == 0 && i % 5 == 0){   // Condizione per i multiplo SIA di 3 SIA di 5 
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0){            // Condizione per i multiplo SOLO di 3 
        console.log("Fizz");
    }
    else if (i % 5 == 0){            // Condizione per i multiplo SOLO di 5
        console.log("Buzz");
    }
    else{                            // Qualsiasi altro numero che non sia multiplo di 3 e 5 
        console.log(i);
    }
    
}