// キーの無効化をコントロールします
//	定義からイベント登録までの開始タイミングはDOM生成後にします
addEventListener('DOMContentLoaded', function() {

	//	一応カプセル化しときます
	(function(KEY_CODE,DISABLE_KEY_NAME){
	/*		記述ルール的な	*/
	//	危険な記述を禁止しますよ
	"use strict";

	/*		受領データを処理用に整理します	*/
		var disable_key_name = {};
		for (var i = 0 ; i < DISABLE_KEY_NAME.length;i++) {
			var keyName = DISABLE_KEY_NAME[i];
			disable_key_name[keyName] = '';
		}

		//	キーの有効・無効設定の作成です
		//	ターゲットも指定すると使える感が出るっぽい
		var _key = {};
		for (var name in KEY_CODE) {
			var	code	=	KEY_CODE[name];
			var	status	=	(disable_key_name[name] === undefined)?	'enable':	'disable';

			_key[code] = {
				name	:	name,
				state	:	status,
			}
		};

	/*		プロパティ定義です	*/
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
				history	:	new Array(new Array()),
			},
			//	有効・無効の定義体です
			rule	:{
				//	キーのルールは下記のように定義してください
				//	keycode	.keyname
				//			.enable or disable
				key	:	_key,
			},
		};

	/*		システムのコントロール系処理です。	*/
	var detection ={
		click	:	function () {return isClicked() },
		keydown	:	function () {return isDownKey() },
		keyup	:	function () {return isUpKey() },
	}

	/*		処理系です。	*/
	function isClicked () {
		console.log("クリック:");

		// 本当は共通処理で更新するヒストリーから取得するが面倒なので借り書き
		systemProparty.useState.history[0][0] = window.event.type;
	}
	function isDownKey () {
		console.log("キーダウン:");
		commonDisableScript();
		commonUpdateScript();

		// 本当は共通処理で更新するヒストリーから取得するが面倒なので借り書き
		systemProparty.useState.history[0][0] = window.event.type;
	}
	function isUpKey () {
		console.log("キーアップ:");
		commonDisableScript();
		commonUpdateScript();

		// 本当は共通処理で更新するヒストリーから取得するが面倒なので借り書き
		systemProparty.useState.history[0][0] = window.event.type;
	}
	// 	共通処理まとめです
	function commonUpdateScript () {
		var type	=	window.event.type;
		var code	=	window.event.keyCode;
		var	name	=	systemProparty.rule.key[code].name
		var command =	new Array(type,name,code);

		//	今回は全く使う予定ない
		// systemProparty.useState.history.push(command);
		// console.log(systemProparty.useState.history);

		console.log(code);
	}
	function commonDisableScript () {
		var type = window.event.type;
		var code = window.event.keyCode;

		//	使用が禁止されているものを無効化
		if (systemProparty.rule.key[code].state == 'disable') {
			console.log('禁止');
			window.event.returnValue = false;
		}
		//	長押しを無効化（なんとなく）
		if (systemProparty.useState.history[0][0] == type ) {
			console.log('ざっくりすぎるが、長押し禁止');
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

//	インターフェイスの予定。
var DISABLE_KEY_NAME = new Array(
	'Z'
	,'BackSpace'
	,'Enter'
);
