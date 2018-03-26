function navigation(to_show, to_hide) {
    $('#' + to_show + '_nav').toggleClass('active');
    $('#' + to_hide + '_nav').toggleClass('active');
    $('#' + to_show + '_content').show();
    $('#' + to_hide + '_content').hide();

}