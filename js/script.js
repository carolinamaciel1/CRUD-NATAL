$(document).ready(function() {
    $('#add_membro').click(function(){
            $('#cad_membro').fadeIn();
            $('#cad_membro').fadeIn("slow");
            $('#cad_membro').fadeIn("1000");
    });
    
    
    $("#botao_sair").click(function(){
        $('#cad_membro').fadeOut();
        $('#cad_membro').fadeOut("slow");
        $('#cad_membro').fadeOut("1000");
    });
});