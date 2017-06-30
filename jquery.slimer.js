(function( $ ) {

    $.fn.slimer = function(options) {

        //Settings por defecto.
        var settings = $.extend({
            time: 10000,
            classBar: '.js-progress-bar',
            classWrapper: '.js-slider-wrap',
            classHidden: 'hidden',
            classLeft: '.js-slider-left',
            classRight: '.js-slider-right'
        }, options );


        //Delcaracion de variables;
        var currentIndex = 0;
        var ePanes = this;
        var time   = settings.time;
        var bar = $(settings.classBar);
        var firstTime = true;
        var play = true;

        var  showPane = function(index){
            //Guardamos el index en el wrapper.
            $(settings.classWrapper).attr('data-index',index);
            if(firstTime){
                firstTime = false;
            } else {
                //ocultamos el slide actual.
                ePanes.eq(currentIndex).stop(true, true).fadeOut(1000,function(){
                    //ocultamos por css.
                    ePanes.eq(currentIndex).addClass(settings.classHidden);
                    //guardamos el nuevo index.
                    currentIndex = index;

                    //verificamos que estamos en los limites.
                    if(currentIndex < 0) currentIndex = ePanes.length-1;
                    else if(currentIndex >= ePanes.length) currentIndex = 0;

                    // mostramos el siguente
                    ePanes.eq(currentIndex).removeClass(settings.classHidden);
                    ePanes.eq(currentIndex).stop(true, true).fadeIn(1000,function(){


                    });

                });

            }



            //paramos la animacion.
            bar.stop(true);
            //reseteamos la barra.
            bar.width(0);
            //volvemos a arrancar.
            bar.animate({'width': "+=100%"}, time, run);
        }
        var run = function(){
            if(play){
                //Separamos la primera carga del resto.
                if(firstTime){
                    showPane(parseInt(currentIndex));
                } else {
                    showPane(parseInt(currentIndex)+1);
                }

                bar.width(0);
            }
        }

        //Solo arrancamos si hay mas de un slide.
        if(ePanes.length > 1){
            run();
        }


        $(settings.classRight).click(function(e){
            var currentIndex = parseInt($(settings.classWrapper).attr('data-index'));
            //Sumamos 1.
            currentIndex++;
            //En caso de ser ultimo pasamos al primero.
            if(currentIndex >= ePanes.length){
                currentIndex = 0;
            }
            //mostramos el panel
            showPane(currentIndex);

        });

        $(settings.classLeft).click(function(e){
            //Cogemos el current, importante parsearlo int.
            var currentIndex = parseInt($(settings.classWrapper).attr('data-index'));
            //Restamos 1.
            currentIndex--;
            //En caso de ser el ultimo pasamos al ultimo.
            if(currentIndex <= -1){
                currentIndex = ePanes.length -1;
            }
            //mostramos el panel.
            showPane(currentIndex);

        });
        //devolvemos el objeto actual.
        return this;
    };

}( jQuery ));
