// キーの無効化をコントロールします
//	定義からイベント登録までの開始タイミングはDOM度M生成後にします
addEventListener('DOMContentLoaded', function() {

	//	一応カプセル化しときます
	(function(KEY_CODE,DISABLE_KEY_NAME){
	/*		記述ルール的な	*/
	//	危険な記述を禁止しますよ
	"use strict";

	/*		受領データを処理用に整理します	*/
		//	インターフェイスは配列にし、内部でオブジェクトにする予定

		//	キーの有効・無効設定の作成です
		var _key = {};
		for (var name in KEY_CODE) {
			var code	=	KEY_CODE[name];
			var	status	=	(DISABLE_KEY_NAME[name] === undefined)?	'enable':	'disable';

			_key[code] = {
				name	:	name,
				state	:	status,
			}
		};

	/*		プロパティ定義です	*/
	//	コマンド入力などする場合、これを見る感じです
		var systemProparty ={
			// ユーザーの操作状況
			useState	:	{
				downKeyIs		:	{
					count	:	0,
					name	:	'',
				},
				clickIs		:	{
					count	:	0,
					name	:	'',
				},
			},
			//	有効・無効の定義体です
			rule	:{
				//	キーのルールは下記のように定義してください
				//	keycode	.keyname
				//			.enable or disable
				key	:	_key,
			},
		};
	console.log(systemProparty.rule.key);

	/*		システムのコントロール系処理です。	*/
	//	検知する操作にひもづくメソッドの登録です
	var detection ={
		click	:	function () {return isClicked() },
		keydown	:	function () {return isDownKey() },
		keyup	:	function () {return isUpKey() },
	}

	/*		処理系です。	*/
	//	共通処理はやっぱりわけないとダメかも
	function isClicked () {

		console.log("クリック:");
		window.event.returnValue = false;

	}
	function isDownKey () {
		console.log("キーダウン:");
		if (systemProparty.rule.key[window.event.keyCode].state == 'disable') {
			window.event.returnValue = false;
		}
	}
	function isUpKey () {
		window.event.returnValue = false;
		console.log("キーアップ:");
		if (systemProparty.rule.key[window.event.keyCode].state == 'disable') {
			window.event.returnValue = false;
		}
	}

	/*		イベントのハンドリングです	*/
	// HTMLにイベント登録します
	for (var key in detection) {
		var data = detection[key];
		document.addEventListener(key,data, false);
	}

	})(KEY_CODE,DISABLE_KEY_NAME)

});

//	画面ごとに下記を書きます　インターフェイスの予定。配列にする予定
var DISABLE_KEY_NAME = {
	'Z':'',
	'BackSpace':'',
	'Enter':'',
};
