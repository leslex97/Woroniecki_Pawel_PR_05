var ajaxService = null;

function init() {
    ajaxService = new AjaxService();
};



$(document).ready(function () {
    $("#alerta, #alertb").hide();
    var last_clicked="none";
//działa od serwera
    document.getElementById("add").onclick = function(){buttonMech('add')};
    document.getElementById("sub").onclick = function(){buttonMech('sub')};
    document.getElementById("mul").onclick = function(){buttonMech('mul')};
    document.getElementById("div").onclick = function(){buttonMech('div')};
    document.getElementById("pow").onclick =function() {buttonMech('pow')};

    function buttonMech(operation){
        $(last_clicked).button('toggle');
        $(`#${operation}`).button('toggle');
        last_clicked =`#${operation}`;
        postOperation(operation);
    }
    
});


function postOperation(operation){
        
    document.getElementById("click").onclick = function(){
        var a = parseFloat(document.getElementById("a").value);
        var b = parseFloat(document.getElementById("b").value);
        ajaxService.post({
            url: "http://127.0.0.1:8085/calc/"+operation,
            data: {
                a: a,
                b: b
            },
        success: function (response) {
            document.getElementById('c').value = (response.result);
            }
        });   
    };
};
 
function validation() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;

    if(isNaN(a)===true){ 
        $("#alerta").show(); 
    }
    else if(isNaN(a)!==true) {
        $("#alerta").hide(); 
    }

    if(isNaN(b)===true) {
        $("#alertb").show(); 
    }
    else if(isNaN(b)!==true) {
        $("#alertb").hide(); 
    }
}

document.addEventListener("DOMContentLoaded", init);


