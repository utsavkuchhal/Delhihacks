$(document).ready(() => {
      $("#header-section").load("partial_views/headerPartial.html");
      $("#app-section").load("partial_views/appPartial.html");
      $("#product-preview-section").load("partial_views/selectinformationPartial.html");
      $("#review-section").load("partial_views/reviewPartial.html");
      $("#pre-order-section").load("partial_views/preorderPartial.html");
      $("#mailchimp-section").load("partial_views/mailchimpPartial.html");
      $("#footer-section").load("partial_views/footerPartial.html");

      let scroll_pos = 0;
      $(document).scroll(() => {
            scroll_pos = $(this).scrollTop();
            if (scroll_pos > 600) {
                  $(".navbar-transparent").css('background-color', 'black');
            } else {
                  $(".navbar-transparent").css('background-color', 'transparent');
            }
      });
});

function goBack(){
      $("#product-preview-section").load("partial_views/selectinformationPartial.html");
}

function loadInfo(info){
      let Path = "partial_views/" + info + "Partial.html";
      $("#product-preview-section").load(Path);
}
