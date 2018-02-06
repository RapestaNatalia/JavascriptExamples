dividedYieldController= function(){
  var price=parseFloat(document.getElementById("price").value);
  var result=dividedYield(price);
  if(result.type=="correct"){
    $("#resultDY").text("Result Divided Yield: "+result.result.r.toFixed(2));
  }else if(result.type=="error"){
    $("#resultDY").text("");
    showModal(result.result.title,result.result.message);

  }
}

pERatioController= function(){
  var price=parseFloat(document.getElementById("price").value);
  var result=pERatio(price);
  if(result.type=="correct"){
    $("#resultPE").text("Result P/E Ratio: "+result.result.r.toFixed(2));
  }else if(result.type=="error"){
    $("#resultPE").text("");
    showModal(result.result.title,result.result.message);

  }
}
addTradeController=function(){
  var imputPrice=parseFloat(document.getElementById("priceToRecord").value);
  var imputQuantity=parseFloat(document.getElementById("quantity").value);
  var date=new Date();
  var selectedType="";
  if (document.getElementById("buying").checked){
    selectedType="buying";
  }else if (document.getElementById("selling").checked){
    selectedType="selling";
  }
  var result=addTrade(imputPrice,imputQuantity,date,selectedType);
  if(result && result.type=="error"){
    showModal(result.result.title,result.result.message);
  }else{
    //Clean after save
    $("#priceToRecord").val("");
    $("#quantity").val("");
    $('#' + selectedType).prop("checked", false);
    showModal("Saved correctly","Your trade was saved correctly");
  }
}
VWSP_last5MinutesController=function(){

  var result=  VWSP_last5Minutes();
  if(result.type=="correct"){
    $("#result_VWSP_last5Minutes").text("Result: "+result.result.r.toFixed(2));
  }else if(result.type=="error"){
    $("#result_VWSP_last5Minutes").text("");
    showModal(result.result.title,result.result.message);

  }

}
GeometricMeansForAllIndexController=function(){

  var result=  GeometricMeansForAllIndex();
  if(result.type=="correct"){
    $("#GeneralCalculus").text("Result: "+result.result.r.toFixed(2));
  }else if(result.type=="error"){
    $("#GeneralCalculus").text("");
    showModal(result.result.title,result.result.message);

  }


}
