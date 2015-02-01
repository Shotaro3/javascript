/* メソッド追加 */
jQuery.fn.plugin = {
	alert:	function(text){
				window.alert('プラグインテスト'+':'+text);
			},
	prompt: function(text){
				window.prompt('プラグインテスト',text);
			},
	confirm: function(text){
				window.confirm('プラグイン'+':'+text);
			},
	}
/* 実行テスト */
$(document).plugin.alert('確認');
$(document).plugin.prompt('確認');
$(document).plugin.confirm('確認');