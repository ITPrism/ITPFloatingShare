jQuery(document).ready(function() {

    var size = window.getSize();
    var element = jQuery("#itp-fshare");

    if (size.x < itpFloatingShareMinWidth) {
        jQuery(element).attr("class", "itp-fshare-right");
    }

    jQuery(window).on("resize", function(){

        var size = window.getSize();

        if (size.x < itpFloatingShareMinWidth) {
            jQuery(element).attr("class", "itp-fshare-right");
        } else {
            jQuery(element).attr("class", "itp-fshare-floating itp-fshare-fstyle");
        }

    });

});