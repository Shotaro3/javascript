(function(){
	jQuery.fn.plugin = {
		//	プラグイン使用
		enable		:	function(){
			//	メインに飛ばす
		},


		//	基本処理
		_main	:	{
			//	イメージとしては、システム値を元にsceneを切り替える処理になります
			//	※ 処理を切り分けしやすいようにするためのクッションでもあります

			//	なので、VIEW側から呼ばれた際に最初に必ず通るようにします

			//	また、シーンにとらわれずに行う処理をよびだすのもここです
			//	各処理実行後にメインに飛ばすの為に同じような記述を何度も書きそうなのが非常に気になる
		},

		//	基本機能の処理を定義します
		_controler	:	{
			// 	状況ごとに区分けし、管理します
			scene	:	{
				//	準備する
				preparation	: function(){
					//	プラグイン有効時に呼ばれます
					//	起動するかの対話
					//	初期化系処理
				},
				//	細かな設定する
				consultation	:	function(){
					//	今は全く見えていないけれども、詳細設定したいよって時に呼ばれます
					//	深く考えていないけれども、細かな設定する際の対話
				}
				//	稼働する
				services	:	function(){
					//	マウスクリックされたら、ユーザーから確認した通りに内容を出力します
					//	・出力したい属性
					//	・出力方法
				}, 
				//	待機する
				idling	:	function(){
					//	システムを待機させます（内容はまだかんがえてない）
				}, 
				//	終了する
				ending	:	function(){
					//	完全に停止させる
				}, 

			},
			//	段階的に管理する処理はこちらに記載（とりあえず）
			stage	:	{
				//処理名でobjectを命名したい
			}
		},


		//	処理系をまとめます
		_modul	:	{
			//	対話系です
			ask	:	{
				//	プラグインを起動するか確認します
				use	:	function(){
					//	サブルーチンを呼ぶ想定
					//	結果を受けてシステムプロパティを設定し、メインを呼ぶ想定
				},
				//	プラグインを終了するか確認します
				quit	:	function(){
					//	サブルーチン呼ぶ想定
					//	結果を受けてシステムプロパティを設定し、メインを呼ぶ想定
				},
			},
	
			//	ユーザーからの入力対応サブルーチンのまとめになる予定
			_imput	:	{
				/**	//今回はおそらくプロンプト一択	**/
				//	内容を求める
				open	:	function(text){
					return window.prompt(text);
				},
				//	決定を求める
				closed	:	function(text){
					return window.confirm(text);
				},
			},

			//	ユーザーへ情報を通知するサブルーチンのまとめになる予定
			_output	:	{
				//	表示形態で分ける予定です　表示用データ形式はどれも共通にします
				alert	:	function(text){
					window.alert(text);
				},
				/**	//今回は多分手がまわらない	**/
				// //	サブルーチンのプロパティを定義します
				// data	:	{
				// 	//	表示用テキスト
				// 	text	:	'なんらかの文字列',
				// 	//	アニメーション
				// 	animation	:	true,
				// 	//	文字色
				// 	color	:	red,
				// },
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
