$('input').keyup(function(e){
    if(e.keyCode == 13){
        $('#vacio').hide();
        $('div#recordatorios').append('<div class="tareas"><i class="fa fa-camera-retro fa-lg aprobar pendiente"></i><s>'+$(this).val()+'</s><i class="fa fa-camera-retro fa-lg borrar"></i></div>');
    }
});
$('body').on('click','s',function(){
    if($(this).hasClass('tachado')){
        $(this).removeClass('tachado');
    }else{
        $(this).addClass('tachado');
    }
})
$('body').on('click','.aprobar',function(){
    if($(this).hasClass('pendiente')){
        $(this).removeClass('pendiente');
        $(this).addClass('completado');
    }else{
        $(this).addClass('pendiente');
        $(this).removeClass('completado');
    }
})
$('body').on('click','#aprobar',function(){
    $('.aprobar').addClass('completado');
});
$('body').on('click','#alternar',function(){
    $('.aprobar').each(function(){
        if($(this).hasClass('completado')){
            $(this).removeClass('completado').addClass('pendiente');
        }else{
            $(this).removeClass('pendiente').addClass('completado');
        }
    })
});
$('body').on('click','#borrar',function(){
        $('.tareas').remove();
        $('#vacio').show();
});
$('body').on('click','.borrar',function(){
    $(this).parent().remove();
    if($('.tareas').length < 1){
        $('#vacio').show();
    }
});
$('body').on('click','#minimizar',function(){
    if($('#recordatorios').css('height') === '0px'){
        $('#recordatorios').css('height','350px');
    }else{
        $('#recordatorios').css('height','0');
    }  
});
$('body').on('click','#todo',function(){
    $('.tareas').show();
    if($('.tareas').length > 0){
        $('#vacio').hide();
    }
});
$('body').on('click','#aprobado',function(){
    $('.tareas').each(function(){
        if($(this).find('.completado').length > 0){
            $(this).show();
        }else{
            $(this).hide();
        }
        if($('.completado').length > 0){
            $('#vacio').hide();
        }else{
            $('#vacio').show();
        }
    })
});
$('body').on('click','#tachado',function(){
    $('.tareas').each(function(){
        if($(this).find('.tachado').length > 0){
            $(this).show();
        }else{
            $(this).hide();
        }
        if($('.tachado').length === 0){
            $('#vacio').show();
        }
    })
});
