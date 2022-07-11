$( document ).ready(function() {
    $('input[type="checkbox"]').on('change', function() {
      $('input[name="' + this.name + '"]').not(this).prop('checked', false);
    });{}
  
  //   $("#documentForm").submit( function (event) {   
      
  //     localStorage.pag2 = $(this).serializeArray();
  //     event.preventDefault();
  
  //     // $.post(
  //     //  'https://prod-65.westeurope.logic.azure.com:443/workflows/6e83c973cb134819969db52f1ca25066/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XRoE5nu38l-NnNc1OhD91zJLSaahDKMAMwfxcCyTjEk',
  //     //   $(this).serializeArray(),
  //     //   function(data){
  //     //     $("#results").html(data)
  //     //   }
  //     // );
  //     return false;
  //   });
  });
  
  function storePage(page_number) {
    $(".js--nav_button").click( function (event) {   
      let form_data = JSON.stringify($("#documentForm").serializeArray());
      localStorage[page_number] = form_data;
      //console.log(form_data);
      //event.preventDefault();
    });
  }
  
  function readyPostData() {
    $("#documentForm").submit( function (event) { 
        event.preventDefault();
        var payload = [
          ...JSON.parse(localStorage['pag1']), 
          ...JSON.parse(localStorage['pag2']), 
          ...JSON.parse(localStorage['pag3']), 
          ...JSON.parse(JSON.stringify($("#documentForm").serializeArray()))
        ];
  
        console.log(payload);
  
        $.ajax({
          url:'https://prod-65.westeurope.logic.azure.com:443/workflows/6e83c973cb134819969db52f1ca25066/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XRoE5nu38l-NnNc1OhD91zJLSaahDKMAMwfxcCyTjEk',
          type:"POST",
          data: JSON.stringify(payload),
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success: function(responseData){
          }
        })
  
        return false;
  });
  }
  
  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formular trimis cu succes!");
});

{/* <script type="text/javascript" language="javascript">
function redirect()
{
    window.location.href="login.php";
}
</script> */}