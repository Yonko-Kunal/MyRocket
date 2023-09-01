// console.log('hello my friend');
var timer = null;
var countDownNumber = 10;

var changeState = function (state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    countDownNumber = 10;
    document.getElementById('countDown').innerHTML = countDownNumber;

    if (state == 2) {
        timer = setInterval(function () {
            countDownNumber = countDownNumber - 1;
            document.getElementById('countDown').innerHTML = countDownNumber;

            if (countDownNumber > 4 && countDownNumber <= 7) {
                document.getElementById('nerviousId').className = 'nervious show'
            } else {
                document.getElementById('nerviousId').className = 'nervious'
            }
            if (countDownNumber > 1 && countDownNumber <= 4) {
                document.getElementById('cant-waitId').className = 'cant-wait show'
            } else {
                document.getElementById('cant-waitId').className = 'cant-wait'
            }

            if (countDownNumber <= -1) {
                changeState(3);
            }
        }, 1000);
    } else if (state == 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.round(Math.random() * 10);
            console.log('randomNumber : ', randomNumber);
            //succes condition
            if (randomNumber >= 5) {
                changeState(4); // success
            } else {
                changeState(5); // faliure
            };
        }, 2000)
    };
}