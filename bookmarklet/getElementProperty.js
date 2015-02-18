(function(){
	jQuery.fn.plugin = {
		//	プラグイン使用
		enable		:	function(){
			//	メインに飛ばす
		},


		//	メイン処理の予定
		_main	:	{
			//	イメージとしては、システム値を元にsceneを切り替える処理になります
			//	システム処理の中枢になる想定です
			//	なので、UIから呼ばれた際に、最初に必ず通ります
			//	シーンにとらわれずに行う処理系をまとめます

			//　とりあえず起動・待機は画面上にUIを設置し、切り替えられるようにします
		},

		//	システム管理系です
		_controler	:	{
			// システム起動から終了までは、処理を場面ごとに管理します
			scene	:	{
				//	準備状態
				preparation	: function(){
					//	起動するかの対話
				},
				//	起動時
				startup	:	function(){
					//	稼働用の設定等
				}, 
				//	メイン稼働状態
				begin	:	function(){
					//	基本はこの繰り返しの予定
					//	マウスクリックされたら、ユーザーから確認した通りに内容を出力します
					//	・出力したい属性
					//	・出力方法
				}, 
				//	待機時
				standby	:	function(){
					//	メイン稼働を中止した場合こちらが動きます
					//	システムを待機させます
				}, 
				//	終了状態
				end	:	function(){
					//	完全に停止させる
				}, 

			},
			//	段階的に管理する処理はこちらに記載（とりあえず）
			stage	:	{
				//処理名でobjectを命名したい
			}
		},


		//	ユーザーからの入力を求める処理系をまとめます
		_imput	:	{
			//	prompt表示
			prompt	:	function(text){
				return window.prompt(text);
			},
		},

		//	ユーザーに情報を通知する系をまとめます
		_output	:	{
			//	表示形態で分ける予定です　表示用データ形式はどれも共通にします
			alert	:	function(text){
				window.alert(text);
			},
		},

		//	処理系をまとめます
		_modul	:	{
			//	対話系です
			ask	:	{
				//	プラグインを起動するか確認します
				use	:	function(){

				},
				//	プラグインを終了するか確認します
				quit	:	function(){

				},
			},
		},
		//	システムプロパティです
		_system	:	{
			//	システムの初期状態は「準備」にします
			scene	:	'preparation',
			//	まだなにもかんがえてない
			stage	:	'',
			},
	};

})();

// var0.013
jQuery(document).ready(function() {
	/* 実行テスト */
	// jQuery(document.body).on('click', function(event) {
	// 	/* Act on the event */
	// });
  jQuery(document.body).plugin.enable();
});
