  alert("innerH : " + window.innerHeight + " availH: " + window.screen.availHeight);

  jQuery(document).ready(() => {
    console.log("document.body.clientWidth"); // 網頁可見區域寬 (body)
    console.log(document.body.clientWidth); // 網頁可見區域寬 (body)
    jQuery(".clientW").text(document.body.clientWidth);

    console.log("document.body.clientHeight"); // 網頁可見區域高 (body)
    console.log(document.body.clientHeight); // 網頁可見區域高 (body)
    jQuery(".clientH").text(document.body.clientHeight);

    console.log("document.body.offsetWidth"); // 網頁可見區域寬 (body)，包括 border、margin 等
    console.log(document.body.offsetWidth); // 網頁可見區域寬 (body)，包括 border、margin 等
    jQuery(".offsetW").text(document.body.offsetWidth);

    console.log("document.body.offsetHeight"); // 網頁可見區域寬 (body)，包括 border、margin 等
    console.log(document.body.offsetHeight); // 網頁可見區域寬 (body)，包括 border、margin 等
    jQuery(".offsetH").text(document.body.offsetHeight);

    console.log("document.body.scrollWidth"); // 網頁正文全文寬，包括有滾動條時的未見區域
    console.log(document.body.scrollWidth); // 網頁正文全文寬，包括有滾動條時的未見區域
    jQuery(".scrollW").text(document.body.scrollWidth);

    console.log("document.body.scrollHeight"); // 網頁正文全文高，包括有滾動條時的未見區域
    console.log(document.body.scrollHeight); // 網頁正文全文高，包括有滾動條時的未見區域
    jQuery(".scrollH").text(document.body.scrollHeight);

    console.log("document.body.scrollTop"); // 網頁被捲去的 Top(滾動條)
    console.log(document.body.scrollTop); // 網頁被捲去的 Top(滾動條)
    jQuery(".scrollTop").text(document.body.scrollTop);

    console.log("document.body.scrollLeft"); // 網頁被捲去的 Left(滾動條)
    console.log(document.body.scrollLeft); // 網頁被捲去的 Left(滾動條)
    jQuery(".scrollLeft").text(document.body.scrollLeft);

    console.log("window.screenTop"); // 瀏覽器距離 Top
    console.log(window.screenTop); // 瀏覽器距離 Top
    jQuery(".screenTop").text(window.screenTop);

    console.log("window.screenLeft"); // 瀏覽器距離 Left
    console.log(window.screenLeft); // 瀏覽器距離 Left
    jQuery(".screenLeft").text(window.screenLeft)

    console.log("window.screen.height"); // 屏幕分辨率的高
    console.log(window.screen.height); // 屏幕分辨率的高
    jQuery(".screenH").text(window.screen.height);

    console.log("window.screen.width"); // 屏幕分辨率的寬
    console.log(window.screen.width); // 屏幕分辨率的寬
    jQuery(".screenW").text(window.screen.width);

    console.log("window.screen.availHeight"); // 屏幕可用工作區的高
    console.log(window.screen.availHeight); // 屏幕可用工作區的高
    jQuery(".availH").text(window.screen.availHeight);

    console.log("window.screen.availWidth"); // 屏幕可用工作區的寬
    console.log(window.screen.availWidth); // 屏幕可用工作區的寬
    jQuery(".availW").text(window.screen.availWidth);


    $(window).resize(function() {
        console.log("document.body.clientWidth"); // 網頁可見區域寬 (body)
        console.log(document.body.clientWidth); // 網頁可見區域寬 (body)
        jQuery(".clientW").text(document.body.clientWidth);

        console.log("document.body.clientHeight"); // 網頁可見區域高 (body)
        console.log(document.body.clientHeight); // 網頁可見區域高 (body)
        jQuery(".clientH").text(document.clientHeight);

        console.log("document.body.offsetWidth"); // 網頁可見區域寬 (body)，包括 border、margin 等
        console.log(document.body.offsetWidth); // 網頁可見區域寬 (body)，包括 border、margin 等
        jQuery(".offsetW").text(document.body.offsetWidth);

        console.log("document.body.offsetHeight"); // 網頁可見區域寬 (body)，包括 border、margin 等
        console.log(document.body.offsetHeight); // 網頁可見區域寬 (body)，包括 border、margin 等
        jQuery(".offsetH").text(document.body.offsetHeight);

        console.log("document.body.scrollWidth"); // 網頁正文全文寬，包括有滾動條時的未見區域
        console.log(document.body.scrollWidth); // 網頁正文全文寬，包括有滾動條時的未見區域
        jQuery(".scrollW").text(document.body.scrollWidth);

        console.log("document.body.scrollHeight"); // 網頁正文全文高，包括有滾動條時的未見區域
        console.log(document.body.scrollHeight); // 網頁正文全文高，包括有滾動條時的未見區域
        jQuery(".scrollH").text(document.body.scrollHeight);

        console.log("document.body.scrollTop"); // 網頁被捲去的 Top(滾動條)
        console.log(document.body.scrollTop); // 網頁被捲去的 Top(滾動條)
        jQuery(".scrollTop").text(document.body.scrollTop);

        console.log("document.body.scrollLeft"); // 網頁被捲去的 Left(滾動條)
        console.log(document.body.scrollLeft); // 網頁被捲去的 Left(滾動條)
        jQuery(".scrollLeft").text(document.body.scrollLeft);

        console.log("window.screenTop"); // 瀏覽器距離 Top
        console.log(window.screenTop); // 瀏覽器距離 Top
        jQuery(".screenTop").text(window.screenTop);

        console.log("window.screenLeft"); // 瀏覽器距離 Left
        console.log(window.screenLeft); // 瀏覽器距離 Left
        jQuery(".screenLeft").text(window.screenLeft)

        console.log("window.screen.height"); // 屏幕分辨率的高
        console.log(window.screen.height); // 屏幕分辨率的高
        jQuery(".screenH").text(window.screen.height);

        console.log("window.screen.width"); // 屏幕分辨率的寬
        console.log(window.screen.width); // 屏幕分辨率的寬
        jQuery(".screenW").text(window.screen.width);

        console.log("window.screen.availHeight"); // 屏幕可用工作區的高
        console.log(window.screen.availHeight); // 屏幕可用工作區的高
        jQuery(".availH").text(window.screen.availHeight);

        console.log("window.screen.availWidth"); // 屏幕可用工作區的寬
        console.log(window.screen.availWidth); // 屏幕可用工作區的寬
        jQuery(".availW").text(window.screen.availWidth);

    });
});
