function miAdmob() { 
      var admob_ios_key = 'ID DEL ANUNCIO DE IOS'; //Si tienes tu id para ios ponlo aqu� 
      var admob_android_key = 'ID DEL ANUNCIO DE ANDROID'; //Si tienes tu id para android ponlo aqu� 
      var adId = (navigator.userAgent.indexOf('Android') >=0) ? admob_android_key : admob_ios_key; //Detecta si el m�vil es ios o android y pone el id que necesites 
       
      if ( window.plugins && window.plugins.AdMob ) { 
           
          var am = window.plugins.AdMob; 
          am.createBannerView( 
              { 
                    'publisherId': adId, //A�ade tu clave de anunciante 
                    'adSize': am.AD_SIZE.BANNER, //Indicas que el anuncio es tipo banner 
                    'bannerAtTop': false //Indica si quieres el banner arriba del todo (true) o abajo del todo (false) 
                  }, function() { 
                    am.requestAd( { 'isTesting':true }, function() { 
                      am.showAd( true ); 
                    }, function() { 
                      alert('fallo al cargar el anuncio');   
                    }) 
                  }, function(){ 
                    alert( "fallo al crear la vista del anuncio" ); 
                  }); 
      } else { 
        alert('El plugin AdMob no esta listo/disponible.'); 
      } 
    } 
    function showAd( bshow ) { 
      if ( window.plugins && window.plugins.AdMob ) { 
          var am = window.plugins.AdMob; 
          am.showAd( bshow ); 
      } else { 
        alert('El plugin AdMob no esta listo/disponible.'); 
      } 
    } 
 
<!-- Fin del c�digo -->