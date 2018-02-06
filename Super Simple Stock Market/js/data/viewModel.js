
var ViewModel= {
  StockModel:{
    selectedOption:ko.observable(''),
    stocks :ko.observableArray([
      TEA={stockSymbol:"TEA",type:"Common",lastDividend:0,FixedDividend:0,ParValue:100},
      POP={stockSymbol:"POP",type:"Common",lastDividend:8,FixedDividend:0,ParValue:100},
      ALE={stockSymbol:"ALE",type:"Common",lastDividend:23,FixedDividend:0,ParValue:60},
      GIN={stockSymbol:"GIN",type:"Preferred",lastDividend:8,FixedDividend:2,ParValue:100},
      JOE={stockSymbol:"JOE",type:"Common",lastDividend:13,FixedDividend:0,ParValue:250}
    ]
  ),
  setOption: function (selectedStock) {
    this.selectedOption=selectedStock;
  }

},
TradeModel:{
  trades :ko.observableArray([]),
  addTrade :function (imputPrice,imputQuantity,date,selectedType,stockSelected) {
    this.trades.push({quantity:imputQuantity,price:imputPrice,timeStamp:date,indicator:selectedType,stock:stockSelected});
    console.log(this.trades);
  }
},
byStockVisibility:ko.observable(true),
generalCalculusVisibility:ko.observable(false)
};

ko.applyBindings(ViewModel);
