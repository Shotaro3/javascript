javascript:
// var0.1
jQuery(document).ready(function() {

	var flg = false;

	// ポップアップポップアップコントロール
	jQuery(document.body).on('click',function(event){
		if (flg) {
				// ポップアップ除去
				if ($(event.target).prop('id') == 'overlay') {
					$(document.body).find('div#popup').remove();
					$(document.body).find('div#overlay').remove();
					flg = false;
				}

		} else {
			var contents = {id:'',class:'',name:''};
			var $target = $(event.target);
			contents.id  = '<p>id:'+$target.attr('id')+'</p>';
			contents.class  = '<p>class:'+$target.attr('class')+'</p>';
			contents.name  = '<p>name:'+$target.attr('name')+'</p>';
			console.log(contents);


			var position = {x:'',y:''};
			position.y = event.clientY+"px";
			position.x = event.clientX+"px";
			console.log(position);

			// 表示する要素を生成
			$wraper = $('<div/>')
						.attr('id','popup')
						.css({
							top : position.y,
							left: position.x,
						})
						.append('<section/>');

			$title = $("<h1/>").text('ポップアップパネル');

			// ポップアップパネル作成
			$panel = $wraper
						.find('section')
							.append($title)
							.append(contents.id)
							.append(contents.class)
							.append(contents.name)
						.end();

			// ポップアップパネルを画面に追加
			$(document.body).append($panel);

			$gray = $("<div/>").prop({id:"overlay"});
			$(document.body).append($gray);

			// エフェクト
			$(document.body)
					.find('div#overlay').fadeIn('fast')
				.end()
					.find('div#popup').fadeIn('fast');
			flg = true;
		}

	});

});
