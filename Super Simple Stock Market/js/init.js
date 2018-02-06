
$(document).ready(function () {
  $("ul[id*=list] li").click(function () {
    id=this.id;
    showMenu(id);
    $("ul[id*=list] li").removeClass('active');
    $(this).addClass('active');
  });

});
