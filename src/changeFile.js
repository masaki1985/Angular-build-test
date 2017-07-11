//ファイル置換スクリプト
//使い方 node changeFile.js srcFilePath dstFilePath
const fs = require('fs'); //file APIモジュールImport
var src = process.argv[2]; //コマンド引数１番目
var dst = process.argv[3]; //コマンド引数２番目
fs.unlinkSync(dst); //宛先ファイル削除
//宛先ファイル名でコピー
fs.createReadStream(src).pipe(fs.createWriteStream(dst));