$(function() {
	countDown('time-cn', '2016/04/12 12:00:00');
	toggle();
	getDate();
	/**
	 * 功能描述：倒计时
	 * @param {Object} str
	 * @param {Object} countTime
	 */
	function countDown(str, countTime) {
		var count = new CountDownTime(str, countTime);
		count.show();
	}

	function CountDownTime(str, countTime) {
		this.show = function() {
			showT();

			function showT() {
				var timeStart = new Date().getTime();
				var timeEnd = new Date(countTime).getTime();
				//计算时间差
				var time_distance = timeEnd - timeStart;
				//天
				var int_day = Math.floor(time_distance / 86400000);
				time_distance -= int_day * 86400000;
				//时
				var int_hour = Math.floor(time_distance / 3600000);
				time_distance -= int_hour * 3600000;
				// 分
				var int_minute = Math.floor(time_distance / 60000);
				time_distance -= int_minute * 60000;
				// 秒 
				var int_second = Math.floor(time_distance / 1000);
				if (int_day < 10) {
					int_day = "0" + int_day;
				}
				if (int_hour < 10) {
					int_hour = "0" + int_hour;
				}
				if (int_minute < 10) {
					int_minute = "0" + int_minute;
				}
				if (int_second < 10) {
					int_second = "0" + int_second;
				}
				$('.' + str).find('.show_day').html(int_day + "天");
				$('.' + str).find('.show_hour').html(int_hour + "时");
				$('.' + str).find('.show_minute').html(int_minute + "分");
				$('.' + str).find('.show_second').html(int_second + "秒");
			}
			window.setInterval(showT, 1000);
		};
	}
	
	function toggle() {
		var attrs;
		$('.unfold').on('click', function() {
			attrs = $(this).attr('isCheck')
			if (attrs == 'true') {
				$(this).css('background', 'url(../images/bg.png) -104px 0 no-repeat');
				$(this).attr('isCheck', false);
				$('.intro').css('max-height', '0.8rem');
			} else {
				$(this).css('background', 'url(../images/bg.png) -135px 0 no-repeat');
				$(this).attr('isCheck', true);
				$('.intro').css('max-height', '100%');
			}
		});
	}
	/*$('#main').on('click', function() {alert();});*/
	window.onload = function() {
		loaded();
	}
	var myScroll;
	function loaded() {
		myScroll = new IScroll("#wrapper", {
			scrollbars: true, //监听鼠标滚轮事件
			mouseWheel: true, //是否显示为默认的滚动条
			interactiveScrollbars: true, //允许推拽
			shrinkScrollbars: 'scale', //是否弹性
			fadeScrollbars: false, //不使用滚动条淡入淡出事件，节省资源
			click: true,
			bounce: true, //到达边界后反弹
		});
	}
	
	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	}, false);
	myScroll.on('scrollEnd', function() {
		if(isRefresh) {
			$('#main').html('../goodsList.html');
			isRefresh = false;
		}
		if(isLoad) {
			addDom();
			isLoad = false;
		}
		if(canReload) {
			$('#touch-load').text('上拉加载');
			canReload = false;
		}
	});
	var reloadY = 30;
	var canReload = false;
	var isRefresh = false;
	var isLoad = false;
	$('#wrapper').on('touchmove', function() {
		if(myScroll.y >= reloadY) {
			canReload = true;
			$('.touch-load').text('松开加载');
			isRefresh = true;
		}
		if(myScroll.maxScrollY < 0 && myScroll.y <= myScroll.maxScrollY-60) {
			$('#upRefresh').text('松开加载');
			isLoad = true;
		}
	});
	$('#wrapper').on('touchend', function() {
		$('#upRefresh').text('上拉加载');
	});
	var start = 0;
	function getDate() {
		var list = [];
		$.ajax({
			url: '../pb.json',
			dataType: 'json',
			type: 'GET',
			success: function(data) {
				list = data;
				addDom();
			}
		});

		function addDom() {
			for (var i = 0; i < 4; i++) {

				var dt = list[start];
				var li = $('<li><a href="">' +
					'<div><img src="' + dt.src + '"/></div>' +
					'<div class="goods_mess">' +
					'<div class="goods_name">' + dt.goods_name + '</div>' +
					'<div class="goods_prices">' +
					'<div class="price_nw">' +
					'<span class="price_now">' + dt.price_now + '</span>' +
					'<span class="price_after">' + dt.price_after + '</span>' +
					'</div>' +
					'<div class="discount">' + dt.discount + '</div>' +
					'<div class="fixClear"></div>' +
					'</div>' +
					'</div>' +
					'</a></li>');
				if (start % 2 == 0) {
					$('#list1').append(li);
				} else {
					$('#list2').append(li);
				}
				start++;
			}
		}
	}
});