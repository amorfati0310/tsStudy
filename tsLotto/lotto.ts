

const ticketPirce:number = 1000;
const MaxNumber:number = 45;
const lottoNumbers:number = 6;

class LottoMachine {
  private money : number;
  private ticketPirce : number;
  private tickets: Array<number>
  constructor(){
    this.money = 0;
    this.ticketPirce = ticketPirce;
    this.tickets = [];
  }
  insetMoney(money: number): void{
    this.money = money;
  }
  buyLottery(){
    const ticketCounts =  Math.floor(this.money / this.ticketPirce)
    this.money -= ticketCounts*this.ticketPirce;
    this.publishTicket(ticketCounts)
  }
  publishTicket(ticketCounts:number): void{
    for(let i = 0; i< ticketCounts; i++){
      const ticket = this.getRandomIdxSet()
      this.tickets.push(ticket)
    }
  }
  getRandomIdxSet(): Array<number> {
    const randomSet = new Set()
    while(randomSet.size !== lottoNumbers){
      randomSet.add(Math.random()*(MaxNumber)+1)
    }
    return [...randomSet]
  }
}

const lotto = new LottoMachine();
lotto.insetMoney(1000);
lotto.buyLottery();
console.dir(lotto)