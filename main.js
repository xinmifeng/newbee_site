/*
 * Author  liuzhijun
 *
 */

//public function
function getParam(name, murl) {
    var url = murl || window.location.search;
    var reg = new RegExp('(\\?|&)' + name + '=([^&?]*)', 'i');
    var arr = url.match(reg);
    if (arr) return arr[2];
}

(function () {
    function setCurrent($el) {
        $el.addClass('current').siblings().removeClass('current');
    }

    window.onload = function () {
        /*
         *导航栏
         */
        var $menuUl = $("ul.menuList");
        var leftBase = 200;
        var $menuTarget = $('div.menuTarget');

        init();

        function setMenuTarget(index) {
            var tl = leftBase + index * 60;
            $menuTarget.stop().animate({
                'left':tl
            }, 500);
        }

        function init() {
            $('div.logoWrap').click(function () {
                window.location.href = 'index.html';
            });
            addEvent();
        }

        function addEvent() {
            $('li', $menuUl).mouseenter(function () {
                var $this = $(this);
                setCurrent($this);
                var index = $this.index();
                if (index > 4) index--;
                setMenuTarget(index);
            });
            $menuUl.mouseleave(function () {
                var index = parseInt($(this).attr('currentPage'));
                if (index > 4) index--;
                var $currentLi = $menuUl.find('li:eq(' + index + ')');
                setCurrent($currentLi);
                setMenuTarget(index);
            });
            //张海宾 控制导航点击空白处也可跳转
            $('li', $menuUl).click(function () {
                var $this = $(this);
                setCurrent($this);
                var index = $this.index();
                if (index > 4) index--;
                setMenuTarget(index);
                switch (index) {
                    case 0:
                        window.location.href = "index.html";
                        break;
                    case 1:
                        window.location.href = "case.html";
                        break;
                    case 2:
                        window.location.href = "service.html";
                        break;
                    case 3:
                        window.location.href = "company.html";
                        break;
                    case 4:
                        window.location.href = "contactUs.html";
                        break;
                    default :
                        window.location.href = "index.html";
                        break;
                }
            });

            /*
             *New Bee 能为你做什么
             */
            $('div.flowWrap').mouseenter(function () {
                setCurrent($(this));
            });

            $('.footer.clearfix').hide();
            $('.footerWrapper hr').hide();
        }
    }
})();
