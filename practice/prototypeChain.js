var func = function(){};
func.prototype = {
	string	:	new String,
	array	:	new Array(),
	getString	:	function(string){
		this.string = string;
	},

};

func.prototype.getString('プロトの時点での代入');
//	型として渡します
var func2 = new func();

//	渡されてから代入します
func2.getString('渡された(インスタンス)時点での代入');

//	インスタンスのプロパティにわたされているか確認
console.log(func.prototype.string);
console.log(func2.string);


//	プロトタイプをいじるのはなんとなく処理の型を作るというイメージ
//	定義と処理をわける的な？
//	本体の関数が無駄になっている感がひどいので実用はまだの見通し
var object = function(){};
//	thisが同階層のオブジェクトにしかきいてないので使いづらい
object.prototype	=	{
	storage	:	new	Array(),
	//	しまっちゃうおじさん
	putAwayAtStorage	:	function(){
		// 引数は全て取得しまっちゃおうね
		for (var at in arguments){
			var isValue	=	arguments[at];
			this.storage.push(isValue);
		}
	},
	//	出力する
	readStorageString	:	function(){
		return this.storage.join(' ');
	},

}

var ojisan = new object();

ojisan.putAwayAtStorage('南無三','テー→','テー↑','テー↓');
console.log(ojisan.storage);
console.log(ojisan.readStorageString());