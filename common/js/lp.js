// ハンバーガーメニュー開閉処理
$(function() {
  $("#js-hamburger-menu, .arrow").on("click", function() {
    var target = document.querySelector(".side-menu");
    target.classList.toggle("open-menu");
    $(".hamburger-menu").toggleClass("hamburger-menu--open");
  });
});
// スライドメニュー開閉処理
$(function() {
  // 変数に要素を入れる
  var open = $(".card-user"),
    close = $(".modal-close"),
    container = $(".modal-container");

  //開くボタンをクリックしたらモーダルを表示する
  open.on("click", function() {
    container.addClass("active");
    return false;
  });

  //閉じるボタンをクリックしたらモーダルを閉じる
  close.on("click", function() {
    container.removeClass("active");
  });

  //モーダルの外側をクリックしたらモーダルを閉じる
  $(document).on("click", function(e) {
    if (!$(e.target).closest(".modal-body").length) {
      container.removeClass("active");
    }
  });
});

// レスポンシブ対応に伴い、HTMLダグ削除対応（非表示ではなく削除）
let detail_tl_element = document.querySelector(".detail-tl");

if (window.outerWidth < 768) {
  detail_tl_element.remove();
}

let page_v_element = document.querySelector("page-v");
if (window.outerWidth > 768) {
  page_btn_v_element.remove();
}
