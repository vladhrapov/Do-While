window.onload = function(){

    var menu = document.getElementById("main-menu"),
        sidebar = document.getElementById("sidebar"),
        cont = document.getElementById("page-content"),
        i = 0;

    function openSidebar(){
        sidebar.style.opacity = 1;
        sidebar.style.left = 0;
        sidebar.style.width = "250px";

        cont.style.marginLeft = "250px";
        cont.style.marginRight = "-250px";
    }

    function closeSidebar(){
        sidebar.style.opacity = 0;
        sidebar.style.left = "-250px";
        sidebar.style.position = "absolute";

        cont.style.marginLeft = "0px";
        cont.style.marginRight = "0px";
    }

    closeSidebar();

    if(window.addEventListener){
        menu.addEventListener("click", function(){
            i++;
            if(i % 2 == 1)
            {
                openSidebar();
            }
            else{
                closeSidebar();
            }
        }, true);
    }
    else if(window.attachEvent){
        menu.attachEvent("click", function(){
            i++;
            if(i % 2 == 1)
            {
                openSidebar();
            }
            else{
                closeSidebar();
            }
        });
    }


}