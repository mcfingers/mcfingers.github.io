$(document).ready(function(){
    $('.count').prop('disabled', true);
    $('.minus').hide();

    
    $(document).on('click','.plus',function(){
        $('.count').val(parseInt($('.count').val()) + 1 );
        
        var contador = $('.count').val();

        var convidado = $('<div class="col-lg-6 mt-3 convidado-item" id="convidado-item-'+ contador +'"><div class="card"><div class="card-body"><div class="form-group"><label for="nomeConvidado" class="form-label">Nome completo do convidado</label><input type="text" class="form-control" name="nomeConvidado" id="nomeConvidado"></div><div class="form-group mt-3"><label for="emailConvidado" class="form-label">E-mail do convidado</label><input type="email" class="form-control" name="emailConvidado" id="emailConvidado" aria-describedby="emailHelpId" placeholder=""></div></div></div></div>');

        $('#convidados-container').append(convidado);
        
        if ($('.count').val() == 1) {
            $('.plus').removeClass("cursor-disabled").addClass("cursor-active");
            $('.minus').show();
        }
        
        if ($('.count').val() == 20) {
            $('.plus').hide();
        }
        
    });
    
    $(document).on('click','.minus',function(){
        $('.count').val(parseInt($('.count').val()) - 1 );
        $('.convidado-item').last().remove();
        
            if ($('.count').val() == 0) {
                $('.minus').hide();
            }
            
            if ($('.count').val() < 20) {
                $('.plus').show();
            }
        });
 });