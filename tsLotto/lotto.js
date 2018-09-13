var ticketPirce = 1000;
var MaxNumber = 45;
var lottoNumbers = 6;
var LottoMachine = /** @class */ (function () {
    function LottoMachine() {
        this.money = 0;
        this.ticketPirce = ticketPirce;
        this.tickets = [];
    }
    LottoMachine.prototype.insetMoney = function (money) {
        this.money = money;
    };
    LottoMachine.prototype.buyLottery = function () {
        var ticketCounts = Math.floor(this.money / this.ticketPirce);
        this.money -= ticketCounts * this.ticketPirce;
        this.publishTicket(ticketCounts);
    };
    LottoMachine.prototype.publishTicket = function (ticketCounts) {
        for (var i = 0; i < ticketCounts; i++) {
            var ticket = this.getRandomIdxSet();
            this.tickets.push(ticket);
        }
    };
    LottoMachine.prototype.getRandomIdxSet = function () {
        var randomSet = new Set();
        while (randomSet.size !== lottoNumbers) {
            randomSet.add(Math.random() * (MaxNumber) + 1);
        }
        return randomSet.slice();
    };
    return LottoMachine;
}());
var lotto = new LottoMachine();
lotto.insetMoney(1000);
lotto.buyLottery();
console.dir(lotto);
