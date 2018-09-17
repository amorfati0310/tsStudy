const winningPrice = {
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
}


const ticketPirce:number = 1000;
const MaxNumber:number = 45;
const lottoNumbers:number = 6;

class LottoMachine {
  private money : number;
  private ticketPirce : number;
  private tickets: [Array<number>];
  private luckyNumbers: Array<number>;
  constructor(){
    this.money = 0;
    this.luckyNumbers = [];
    this.ticketPirce = ticketPirce;
    this.tickets = [[]];
   
    if(this.luckyNumbers.length===0)this.setLuckyNumber();
  }
  setLuckyNumber(){
    this.luckyNumbers = this.getTicket()
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
      const ticket = this.getTicket()
      this.tickets.push(ticket)
    }
  }
  getTicket(): number[] {
    const randomSet = new Set()
    while(randomSet.size !== lottoNumbers){
      randomSet.add(Math.floor(Math.random()*(MaxNumber)+1))
    }
    return [...randomSet]
  }
  checkWinningPrice(winningPrice:object): Array<number>{
    const sameNumberList = this.checkSameNumbers();
    const winningPriceList:Array<number> = [];
    for(const sameNumber of sameNumberList){
      const key = String(sameNumber)
      if(winningPrice[key]===undefined){
        winningPriceList.push(0)
      }
      else winningPriceList.push(winningPrice[key])
    }
    return winningPriceList
  }
  checkSameNumbers(): Array<number>{
    const checkFactor = 12
    const sameNumberList:Array<number> = []
    for(let ticket of this.tickets){
      if(ticket.length===0) continue;
      else {
        const sumNumbers =new Set([...this.luckyNumbers, ...ticket])
        sameNumberList.push(checkFactor-sumNumbers.size)
      }
    }
    return sameNumberList;
  }
}

const lotto = new LottoMachine();
lotto.insetMoney(10000);
lotto.buyLottery();
console.log(lotto.checkWinningPrice(winningPrice))
console.dir(lotto)