function timeDifference(date1,date2) {
  var difference = date1.getTime() - date2.getTime();

  var _daysDifference = Math.floor(difference/1000/60/60/24);
  difference -= _daysDifference*1000*60*60*24

  var _hoursDifference = Math.floor(difference/1000/60/60);
  difference -= _hoursDifference*1000*60*60

  var _minutesDifference = Math.floor(difference/1000/60);
  difference -= _minutesDifference*1000*60

  var _secondsDifference = Math.floor(difference/1000);
  return [{daysDifference:_daysDifference,hoursDifference:_hoursDifference,minutesDifference:_minutesDifference,secondsDifference:_secondsDifference}];
}
function raizN(number, n) {
  return Math.exp(Math.log(number) / n);
}

function showModal(headingText,bodyText){
  $('#headingModal').text(headingText);
  $('#bodyModal').text(bodyText);
  $('#myModal').modal('show');
}
function showMenu(id){
  if(id.indexOf("2")!=-1){
    ViewModel.byStockVisibility(false);
    ViewModel.generalCalculusVisibility(true);
  }else if (id.indexOf("1")!=-1){
    ViewModel.byStockVisibility(true);
    ViewModel.generalCalculusVisibility(false);
  }
}
