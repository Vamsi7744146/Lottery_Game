  let PickNumnberBtn = document.getElementById('PickNumberBtn');//id value
        let ResultBtn = document.getElementById('result')
        let LotterySheetContainer = document.getElementById('LotterySheetContainer')
        let tick = new Audio('Tap.wav');
        let completedSound = new Audio('completed.wav')
        let gifts = ['100 Cash', 'Toycar', 'Choclate Box', '500 Cash', 'Smartphone', 'Book', 'Headphones', '50Cash', 'Gift Watcher', 'Watch',
            'Tv', 'Fridge', '1000Cash', 'Perfume', 'Dresss', 'Computer', 'wireless mouse', 'Keypad', 'Pen', 'Pencil'
            , 'pillow', 'Bed', 'Water Bottle', 'Fruits', 'Cooker', '750Cash', 'Carrom Board', 'Chess', 'Bike', 'Car',
            '850 Cash', 'Ink bottle', 'Towel', 'Bucket', 'Soaps', 'Brushes', 'Paste', 'Jug', 'Pant', 'Clothes',
            'Trees', 'Tractor', 'Lorry', 'Auto', 'Cycle', '1500 Cash', '1800 Cash', 'Buscuits', 'Choclates', 'Mixture']
        console.log(gifts);
        PickNumnberBtn.addEventListener('click', function () {
            for (i = 1; i < 50; i++) {
                document.getElementById(i).classList.remove('winningbox')

            };
            ResultBtn.textContent = 'Please wait....'
            /* setTimeout(function () {
                 let randomNumber = Math.random() * 50;
                 let drawnNumber = Math.floor(randomNumber) + 1;
                 let gift = gifts[drawnNumber - 1];
                 ResultBtn.textContent = `you have got ${drawnNumber},and you won ${gift}`;
                 document.getElementById(drawnNumber).classList.add('winningbox');
 
             }, 5000);*/

            let secondCount = 0;
            let intervalId = setInterval(function () {
                tick.pause();
                tick.currentTime = 0;
                tick.play();
                secondCount += 1;
                let borderRandomBox = Math.floor(Math.random() * 50) + 1
                console.log(borderRandomBox);
                for (let i = 1; i <= 50; i++) {
                    if (i == borderRandomBox) {
                        document.getElementById(i).classList.add('highlightedBox')
                    } else {
                        document.getElementById(i).classList.remove('highlightedBox')
                    }
                }



                if (secondCount === 5) {
                    let randomNumber = Math.random() * 50;
                    let drawnNumber = Math.floor(randomNumber) + 1;
                    let gift = gifts[drawnNumber - 1];
                    ResultBtn.textContent = `you have got ${drawnNumber},and you won ${gift}`;
                    document.getElementById(borderRandomBox).classList.remove('highlightedBox')
                    document.getElementById(drawnNumber).classList.add('winningbox');
                    completedSound.pause()
                    completedSound.currentTime = 0;
                    completedSound.play()

                    clearInterval(intervalId)

                }

            }, 1000);
        });

        gifts.forEach(function (value, i) {
            let boxElement = `<div class='box' id=${i + 1}>${i + 1}.${value}</div>`;
            console.log(boxElement);
            //LotterySheetContainer.insertAdjacentHTML('beforebegin',boxElement)
            // LotterySheetContainer.insertAdjacentHTML('afterbegin',boxElement)
            LotterySheetContainer.insertAdjacentHTML('beforeend', boxElement)
        })