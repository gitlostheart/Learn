/**
 * Created by Administrator on 2016/4/25.
 */
$(function () {
    function main() {
    }

    main.prototype.init = function () {

        /*fullpage 全屏滚动*/
        $('#fullpage').fullpage({
            afterLoad: function (anchorLink, index) {
                if (index == 2) {
                    $("#video_center")[0].play();
                }
            },
            onLeave: function (index, direction) {
                if (index == 2) {
                    $("#video_center")[0].pause();
                }
            }

        });
        /*wrap居中*/
        var _width=$(window).width();
        var _height=$(window).height();
        $(".wrap").css({
            'left':0.5*_width+"px",
            'top':0.5*_height+"px"
        });
        this.addHerf();

    };
    main.prototype.addHerf = function () {

        sethref(".wrap3", 926, 493, 68, 23, "http://www.piaget.cn/珠宝/玫瑰金钻石指环-g34p8a00");
        sethref(".wrap3", 888, 627, 68, 23, "http://www.piaget.cn/珠宝/玫瑰金钻石吊坠-g33p0097");
        sethref(".wrap3", 826, 802, 68, 23, "http://www.piaget.cn/珠宝/玫瑰金钻石开放式手镯-g36pq100");

        sethref(".wrap4", 849, 518, 68, 23, "http://www.piaget.cn/腕表/玫瑰金钻石腕表-g0a41188");
        sethref(".wrap4", 919, 695, 68, 23, "http://www.piaget.cn/珠宝/白金钻石垂饰-g33p0092");
        sethref(".wrap4", 1199, 775, 68, 23, "http://www.piaget.cn/珠宝/玫瑰金钻石指环-g34p6a00");

        sethref(".wrap5", 1018, 617, 68, 23, "http://www.piaget.cn/珠宝/白金钻石开放式手镯-g36pv500");
        sethref(".wrap5", 847, 734, 68, 23, "http://www.piaget.cn/珠宝/玫瑰金钻石吊坠-g33p0095");
        sethref(".wrap5", 991, 804, 68, 23, "http://www.piaget.cn/珠宝/白金钻石戒指-g34p2b00");

        sethref(".wrap6", 884, 591, 68, 23, "http://www.piaget.cn/珠宝/玫瑰金钻石开放式手镯-g36pv400");
        sethref(".wrap6", 681, 677, 68, 23, "http://www.piaget.cn/珠宝/玫瑰金钻石手链-g36p8800");
        sethref(".wrap6", 848, 791, 68, 23, "http://www.piaget.cn/珠宝/玫瑰金钻石指环-g34p1b00");
        //sethref(".wrap6", 848, 791, 68, 23, "http://www.piaget.cn/珠宝/白金钻石指环-g34p4b00");

        sethref(".wrap7", 986, 601, 68, 23, "http://www.piaget.cn/珠宝/玫瑰金钻石戒指-g34p7c00");
        sethref(".wrap7", 919, 713, 68, 23, "http://www.piaget.cn/珠宝/玫瑰金钻石手链-g36px500");
        sethref(".wrap7", 609, 781, 68, 23, "http://www.piaget.cn/珠宝/玫瑰金钻石吊坠-g33p0097");


        function sethref(obj, left, top, width, height, href) {
            $(obj).append('<a href="' + href + '" target="_blank" style="position: absolute;top:' + top + 'px;left:' + left + 'px;width:' + width + 'px;height:' + height + 'px;display:block;z-index:5;"><div class="a_area"></div></a>');
        }

    }

    var mainbody = new main();
    mainbody.init();

    $("#video_center").on("click", function (e) {
        e.preventDefault();
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });


});
