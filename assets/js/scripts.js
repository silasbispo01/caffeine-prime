window.onload = () => {

    // FUNÇÃO DO ACCORDION 
    
    let acc = document.querySelectorAll('.accordion');

    acc.forEach(button => {
        button.onclick = () => {
            let panel = button.nextElementSibling;
            button.classList.toggle('active');
            panel.classList.toggle('active');
        }

    })

    // FUNÇÃO DO CONTADOR DE CAFÉ ESCOLHIDO

    let incrementButton = document.querySelectorAll('.increment');
    let decrementButton = document.querySelectorAll('.decrement');

    incrementButton.forEach(button => {
        button.onclick = () => increment(button);
    });

    decrementButton.forEach(button => {
        button.onclick = () => decrement(button);
    });

    increment = (el) => {
        let counter = el.previousElementSibling;
        let counterValue = parseInt(counter.innerText);

        counter.innerText = counterValue + 1;
    };

    decrement = (el) => {
        let counter = el.nextElementSibling;
        let counterValue = parseInt(counter.innerText);

        if(counterValue > 0) {
            counter.innerText = counterValue - 1;
        }
    };   
}
