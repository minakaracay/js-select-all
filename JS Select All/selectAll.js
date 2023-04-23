function selectAll(table){
    var all = document.table.all;

    var select = document.table.select;
    var selectLength = select.length;
    if(all.checked==true){
        for(var i = 0 ; i < selectLength; i++){
            select[i].checked = true;
        }
    }else{
        for(var i = 0 ; i < selectLength; i++){
            select[i].checked = false;
        }
    }
    
}