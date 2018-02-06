/*
Given any price as input, calculate the dividend yield
*/
dividedYield= function(price){
  var stockSelected= ViewModel.StockModel.selectedOption();
  if(stockSelected){
    if((price && price>0)){

      if(stockSelected.type=="Common"){
        if( stockSelected.lastDividend>=0){
          var r=stockSelected.lastDividend/price;
          return {type:"correct",result:{r}}
        }else{
          return{type:"error",result:{title:"Dividid Yield Error",message:"Some of the store values for the stock "+stockSelected.stockSymbol+" are incorrect"}}
        }

      }else if(stockSelected.type=="Preferred"){
        if(stockSelected.FixedDividend>=0 && stockSelected.ParValue>=0){
          var r=(((price*(stockSelected.FixedDividend/100))*stockSelected.ParValue)/price);
          return {type:"correct",result:{r}}
        }else{
          return{type:"error",result:{title:"Dividid Yield Error",message:"Some of the store values for the stock "+stockSelected.stockSymbol+" are incorrect"}}
        }
      }
    }else{
      return{type:"error",result:{title:"Price Error",message:"The price value must be up to 0"}}
    }
  }
  else{
    return{type:"error",result:{title:"Choose...",message:"Select one stock"}}
  }
}
/*
Given any price as input,  calculate the P/E Ratio
*/
pERatio= function(price){
  var stockSelected= ViewModel.StockModel.selectedOption();
  if(stockSelected){
    if(price && price>0){
      if( stockSelected.lastDividend>=0 && stockSelected.FixedDividend>=0 ){
        //NR-Dividens are both lastDividend and Fixed Dividend
        var r=price/(stockSelected.lastDividend+(price*(stockSelected.FixedDividend/100)));
        return {type:"correct",result:{r}}
      }else{
        return{type:"error",result:{title:"P/E Ratio Error",message:"Some of the store values for the stock "+stockSelected.stockSymbol+" are incorrect"}}
      }
    }else{
      return{type:"error",result:{title:"Price Error",message:"The price value must be up to 0"}}
    }
  }  else{
    return{type:"error",result:{title:"Choose...",message:"Select one stock"}}
  }
}
/*
Record a trade, with timestamp, quantity, buy or sell indicator and price
*/
addTrade=function(imputPrice,imputQuantity,date,selectedType){
  var stockSelected= ViewModel.StockModel.selectedOption();
  if(stockSelected){
    if(imputQuantity>0&&imputPrice>0&&(selectedType!="")&&stockSelected.stockSymbol!=undefined){
      ViewModel.TradeModel.addTrade(imputPrice,imputQuantity,date,selectedType,stockSelected.stockSymbol);
    }  else{
      return{type:"error",result:{title:"Error Saving",message:"Some of the obligatory fields are incorrect"}}
    }
  }  else{
    return{type:"error",result:{title:"Choose...",message:"Select one stock"}}
  }
}
/*
Volume Weighted Stock Price based on trades in past  5 minutes
*/
VWSP_last5Minutes=function(){
  var stockSelected= ViewModel.StockModel.selectedOption();
  if(stockSelected){
    var trades=ViewModel.TradeModel.trades();
    var tradesForActualStock=[];
    var last5MinutesTrades=[];
    if(trades.length>0){
      for(k=0;k<trades.length;k++){
        if(trades[k].stock==stockSelected.stockSymbol){
          tradesForActualStock.push(trades[k]);
        }
      }
      for(i=0;i<tradesForActualStock.length;i++){
        var tradeTime=tradesForActualStock[i].timeStamp;
        var actualTime=new Date();
        //TODO CHEQUEAR
        var minutesDifference=timeDifference(actualTime,tradeTime)[0].minutesDifference;
        if (minutesDifference<=5){
          last5MinutesTrades.push(tradesForActualStock[i]);
        }

      }
      if(last5MinutesTrades.length>0){
        var result=0;
        var sumTradeXQuantity=0;
        var sumQuantity=0;
        for(j=0;j<last5MinutesTrades.length;j++){
          sumTradeXQuantity=last5MinutesTrades[j].price*last5MinutesTrades[j].quantity+ sumTradeXQuantity;
          sumQuantity=last5MinutesTrades[j].quantity+sumQuantity;
        }
        var r=(sumTradeXQuantity/sumQuantity);
        return {type:"correct",result:{r}};
      }else{
        return{type:"error",result:{title:"Trade Operations",message:"There are not trade operations in past 5 minutes"}}
      }
    }else{
      return{type:"error",result:{title:"Volume Weighted Stock Price Error",message:"there are not trades saving"}}
    }
  }  else{
    return{type:"error",result:{title:"Choose...",message:"Select one stock"}}
  }

}
/*
Calculate the GBCE All Share Index using the geometric mean of the Volume Weighted Stock Price for all stocks (no matter if one VWSP is 0?)
*/
GeometricMeansForAllIndex=function(){
  //TODO CONTINUAR
  var product=1;
  var stocks=ViewModel.StockModel.stocks();
  var trades=ViewModel.TradeModel.trades();
  var index=0;
  //For each Stock calculate Pn and concatenate it with product
  if(stocks.length>0 && trades.length>0){
    for(n=0;n<stocks.length;n++){
      var pn=0;
      var sumTradeXQuantity=0;
      var sumQuantity=0;
      for(j=0;j<trades.length;j++){
        if(trades[j].stock==stocks[n].stockSymbol){
          sumTradeXQuantity=trades[j].price*trades[j].quantity+ sumTradeXQuantity;
          sumQuantity=trades[j].quantity+sumQuantity;
        }

      }
      //I did it for all stocks, but only consider the stocks with sumTradeXQuantity>0&&sumQuantity>0, because if sumQuantity>0 it is a Math ERROR
      if(sumTradeXQuantity>0&&sumQuantity>0){
        pn=sumTradeXQuantity/sumQuantity;
        product=product*pn;
        index++;
      }


    }
    var r=raizN(product,index);
    return {type:"correct",result:{r}}
  }else{
    return{type:"error",result:{title:"Geometric Means For All Index Error",message:"there are not trades or stocks saving"}}
  }
}
