// This is a JavaScript file

$(document).on("click","#camera",function(){

navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI ,
    correctOrientation: true,
    saveToPhotoAlbum: true
    });

    function onSuccess(imageURI) {
        var image = document.getElementById('imagem');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

});
$(document).on("click", "#codigo", function(){

   cordova.plugins.barcodeScanner.scan(
      function (result) {

        document.write("<h1 style='font-family: arial;font-size: large; text-align: center; justify-content: center; margin-top: 5vh;'>Temos um Código de Barras!\n\n <br>" + 
        "Resultado: " + result.text + "\n\n <br>" + 
        "Formato: " + result.format + "\n\n<br>" + 
        "Cancelado: " + result.cancelled + "</h1>");
          
          // alert("We got a barcode\n" +
          //       "Resultado: " + result.text + "\n" +
          //       "Formato: " + result.format + "\n" +
          //       "Cancelado: " + result.cancelled);
                
      },

      function (error) {
          alert("Scanning failed: " + error);
          document.write("<h1 style='font-family: arial;font-size: large; text-align: center; justify-content: center; margin-top: 5vh;'>Operação Cancelada!\n\n <br>" + error + "</h1>");
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );

});
  function testarConexao() {
      var networkState = navigator.connection.type;

      var states = {};
      states[Connection.UNKNOWN]  = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI]     = 'WiFi connection';
      states[Connection.CELL_2G]  = 'Cell 2G connection';
      states[Connection.CELL_3G]  = 'Cell 3G connection';
      states[Connection.CELL_4G]  = 'Cell 4G connection';
      states[Connection.CELL]     = 'Cell generic connection';
      states[Connection.NONE]     = 'No network connection';

      document.write("<h1 style='font-family: arial; text-align: center; justify-content: space-around; margin-top: 5vh;'>Tipo de conexão: </h1>" + states[networkState]);
      // alert('Connection type: ' + states[networkState]);
  }
$(document).on("click", "#conexao", function(){
  testarConexao();
});