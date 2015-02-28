// キーの無効化をコントロールします
addEventListener('DOMContentLoaded', function() {

	(function(KEY_CODE,disables){
	/*		この関数で使うであろうプロパティです	*/
	//	コマンド入力などする場合、これを見る感じです
		// ユーザー操作状況の管理定義体
		var state = {
			keyIs		:	'',
			clickIs		:	'',
			targetKey	:	'',
		};

		//	危険な記述を禁止しますよ
		"use strict";

	/*		定義データから処理用データ生成です	*/
		//	インターフェイスは配列にし、内部でオブジェクトにする予定

		//	キーの有効・無効の設定です
		var underControl = {};
		for (var key in KEY_CODE) {
			var code	=	KEY_CODE[key];
			var	status	=	(disables[key] === undefined)?	'enable':	'disable';

			underControl[code] = {
				name	:	key,
				state	:	status,
			}
		};
		console.log(underControl);


	/*		コントロール系処理です。	*/
	// 検知する操作にひもづくメソッドの登録です
	var detection ={
		click	:	function () {return isClicked() },
		keydown	:	function () {return isDownKey() },
		keyup	:	function () {return isUpKey() },
	}

	/*		処理系です。	*/
	var test =0;
	function isClicked () {

		console.log("クリック:"+test++);
		window.event.returnValue = false;

	}
	function isDownKey () {
		console.log("キーダウン:"+test++);
		if (underControl[window.event.keyCode].state == 'disable') {
			alert('今押したのは'+underControl[window.event.keyCode].name+'ですね？どやぁ');

			window.event.returnValue = false;
		}
	}
	function isUpKey () {
		window.event.returnValue = false;
		console.log("キーアップ:"+test++);
		if (underControl[window.event.keyCode].state == 'disable') {
			window.event.returnValue = false;
		}
	}

	/*		イベントのハンドリングです	*/
	// HTMLにイベント登録します
	for (var key in detection) {
		var data = detection[key];
		document.addEventListener(key,data, false);
	}

	})(KEY_CODE,disables)

});

//	画面ごとに下記を書きます　インターフェイスの予定。配列にする予定
var disables = {
	'Z':'',
	'BackSpace':'',
};
