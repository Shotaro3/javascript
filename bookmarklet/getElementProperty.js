jQuery.fn.plugin = {
	//	UI
	id		:	function(){
		// 固有処理の予定
		jQuery(this).plugin._controler({
			text:	'id'+':'+'test'
		});
	},
	name	:	{
	},
	class	:	{
	},

	//	共通処理
	_controler	:	function(values){
		//※	入力情報の整理	※//

			//	引数の形式チェック
			var	_prop	=	values;
				//	今回はなしの予定

			//	入力データ受領
			var	prop = _prop;

		//※	出力用データ生成処理	※//

			//	出力用データの必須項目を宣言
			var	data	=	{
				text: "なんらかの文字列",
			};

			//	今回はデータ生成の予定なし

			//	出力用にデータをざっくりマージ
			var	setting	=	jQuery.extend(false, data, prop);			

		//※	表示処理	※//

			jQuery(this).plugin._view.alert(setting.text);

	},

	//	VIEW処理
	_view	:	{
		//	alert表示
		alert	:	function(text){
			window.alert(text);
		},
	},

	//	処理系をまとめる（まだ何も考えてない）
	_modul	:	function(){
	},
};

// var0.01
jQuery(document).ready(function() {
	/* 実行テスト */
	// jQuery(document.body).on('click', function(event) {
	// 	event.preventDefault();
	// 	/* Act on the event */
	// });
	jQuery(document.body).plugin.id();
});
