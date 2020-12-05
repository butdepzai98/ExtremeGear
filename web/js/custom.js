require([
    'jquery'
],function($) {
    $(function () {
        $(document).ready(function(){
            $("ul.header>li>a>i.fas.fa-search").on("click", function () {
                $(".block.block-search").toggleClass("active");
            });

            // change qty
            $(document).on('click', '.up_count', function () {
                var input = $('#qty');
                var num = input.val();
                if(num === ""){
                    num = 0;
                    input.val(parseInt(num));
                    input.trigger('change');
                }
                input.val(parseInt(num) + 1);
                input.trigger('change');
            });

            $(document).on('click', '.down_count', function () {
                var input = $('#qty');
                var num = input.val();
                if (parseInt(num) <= 1) return;
                input.val(parseInt(num) - 1);
                input.trigger('change');
            });


            // set height product
            function setHeight(item) {
                if (item.length > 0) {
                    var maxHeightElement = 0;
                    item.each(function () {
                        if ($(this).height() > maxHeightElement) {
                            maxHeightElement = $(this).height();
                        }
                    });
                    if (maxHeightElement > 0) {
                        item.height(maxHeightElement);
                    }
                    $(window).resize(function () {
                        item.css('height', '');
                        var maxHeightElement = 0;
                        item.each(function () {
                            if ($(this).height() > maxHeightElement) {
                                maxHeightElement = $(this).height();
                            }
                        });
                        if (maxHeightElement > 0) {
                            item.height(maxHeightElement);
                        }
                    });
                }
            }
            setTimeout(function(){ setHeight($('.products-grid .product-item .product-item-name'));}, 200);
        });
    });
})
