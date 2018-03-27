function change_panel(id, id_hide) {
    $('#panel' + id).show();
    $('#panel' + id_hide).hide();
    $('#nav' + id).toggleClass("active");
    $('#nav' + id_hide).toggleClass("active");
}

Array.prototype.contains = function (needle) {
    for (i in this) {
        if (this[i] == needle) return true;
    }
    return false;
}
var names = new Array();

function toggle_expert(name) {
    var idx = $.inArray(name, names);
    console.log(name + idx);
    if (idx != -1) {
        console.log(name + 'in array');
        names.pop(name);
    } else {
        names.push(name);
    }
    var content = "";
    $.each(names, function (index, value) {
        content += "<li>" + names[index] + "</li>";
    });
    $("#total").empty();
    $("#total").append(names.length);

    $("#expert_list").empty();
    $("#expert_list").append(content);
}

function doPrint() {
    $('#print_id').print({
        globalStyles: true,
        mediaPrint: false,
        stylesheet:'./css/print.css',
        title:'',
    });
}