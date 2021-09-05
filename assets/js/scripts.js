window.onload = () => {
    // SCROLL RESPONSIVO

    var scrollContainer = document.querySelector(".plans-options");

    document.body.onresize = () => {
        if (document.body.clientWidth < 1200) {
            scrollContainer.addEventListener("wheel", (evt) => {
                evt.preventDefault();
                scrollContainer.scrollLeft += evt.deltaY;
            });
        }
    };
    
    // HEADER STICKY 

    let header = document.querySelector('.header');

    window.onscroll = () => {
        if (window.pageYOffset >= 90) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        
    }

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
    // "selecione a quantia desejada"

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

    // PLANS FUNCTION

    let assignButton = document.querySelectorAll('.assign-button');  
    
    let plansSection = document.querySelectorAll('.plans')

    assignButton.forEach(button => {
        button.onclick = () => {

            switch(button.classList[1]) {
                case 'monthly': 
                    plansSection[1].classList.add('monthly-section');
                    break;
                case 'quarterly':
                    plansSection[1].classList.add('quarterly-section');
                    break;
                case 'semester':
                    plansSection[1].classList.add('semester-section');
                    break;
            }

            plansSection[0].classList.add('closed');
            plansSection[1].classList.remove('closed');
        }
    })


}
