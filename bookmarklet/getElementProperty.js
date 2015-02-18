(function(){
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


		//	メイン処理の予定
		main	:	{
			//	イメージとしては、システム値を元にsceneを切り替える処理になります
			//	システム処理の中枢になる想定です
			//	なので、UIから呼ばれた際に、最初に必ず通ります
			//	シーンにとらわれずに行う処理系をまとめます
		},

		//	システム管理系です
		_controler	:	{
			// システム起動から終了までは、処理を場面ごとに管理します
			scene	:	{
				//	準備段階
				preparation	: function(){
					//	起動するかの対話
				},
				//	起動処理
				startup	:	function(){
					//	稼働用の設定等
				}, 
				//	メイン稼働
				begin	:	function(){
					//	基本はこの繰り返しの予定
				}, 
				//	待機
				standby	:	function(){
					//	メイン稼働もしくは、こちらが動く予定
				}, 
				//	終了処理用
				end	:	function(){
					//	完全に停止させる
				}, 

			}
			//	段階的に管理する処理はこちらに記載（とりあえず）
			stage	:	{
				//処理名でobjectを命名したい
			}
		}
		//	ユーザーからの入力を求める処理系をまとめます
		_imput	:	{
			//	prompt表示
			prompt	:	function(text){
				return window.prompt(text);
			},
		},

		//	ユーザーに情報を通知する系をまとめます
		_output	:	{
			//	モーダル系をまとめる用のオブジェクトにする
			alert	:	function(text){
				window.alert(text);
			},
			//	非同期に出力する系をまとめる用のオブジェクトにする
			console	:	function(text){
				window.console.log(text);
			},
		},

		//	処理系をまとめる
		_modul	:	{
			//	対話系
			ask	:	{
				//	プラグインを使用するか
				use	:	function(){

				},
				//	プラグインを終了するか
				quit	:	function(){

				},
			},
		},
		//	システムプロパティです
		_system	:	{
			//	システムの初期状態は「準備」にします
			scene	:	'preparation',
			//	まだなにもかんがえてない
			stage	:	,
			},
		},
	};

})();

// var0.013
jQuery(document).ready(function() {
	/* 実行テスト */
	// jQuery(document.body).on('click', function(event) {
	// 	/* Act on the event */
	// });
  jQuery(document.body).plugin.id();
});
