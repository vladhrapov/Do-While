var main_hover = $(".block-wrapper__hover"),
    main_menu = $(".menu"),
    main_content = $(".main"),
    checkbox = $(".tasks-item__checkbox");
$(".header__button_menu").click(function(){

  if (main_hover.hasClass("block-wrapper__hover_active")) {
    main_hover.removeClass("block-wrapper__hover_active");
    main_menu.css("display", "none");
    main_content.css("margin-left", "0");
  }
  else {
    main_hover.addClass("block-wrapper__hover_active");
    main_menu.css("display", "block");
    main_content.css("margin-left", "272px");
  }
});

$(".tasks-item__checkbox").click(function(e){
  var $this = $(this);
  if ($this.hasClass("tasks-item__checkbox_active")) {
    $this.removeClass("tasks-item__checkbox_active");
  }
  else {
    $this.addClass("tasks-item__checkbox_active");
  }
});

$(".tasks-item-content, .tasks-item-time").click(function(){
  var $this = $(this),
      hover_item = $this.nextAll(".tasks-item__hover"),
      all_hovered_active_items = $(".tasks-item__hover_active");

      all_hovered_active_items.removeClass("tasks-item__hover_active");
      hover_item.addClass("tasks-item__hover_active");
});

$(".tasks-item__hover").click(function(){
  $(this).removeClass("tasks-item__hover_active");
})