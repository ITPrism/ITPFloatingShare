window.addEvent( "domready" ,  function() {

    var size = window.getSize();

    if (size.x < itpFloatingShareMinWidth) {
        document.id("itp-fshare").set("class", "itp-fshare-right");
    }

    window.addEvent("resize", function(){

        var size = window.getSize();

        if (size.x < itpFloatingShareMinWidth) {
            document.id("itp-fshare").set("class", "itp-fshare-right");
        } else {
            document.id("itp-fshare").set("class", "itp-fshare-floating itp-fshare-fstyle");
        }

    });

});