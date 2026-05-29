# 🔄 サイト更新手順

公開サイトの文言、画像、デザインを更新する手順です。

## 作業場所

Windows側の `site` リポジトリで作業します。

```powershell
cd C:\Users\mcadmin\minecraft\servers\ninjin-mcserver\site
```

## 主な編集対象

```text
index.html              文言とページ構造
style.css               見た目
script.js               コピー通知などの動き
assets/main-header.png  ヘッダー画像
assets/favicon.png      favicon
README.md               サイト作業の入口
docs/                   サイト作業ドキュメント
```

## 文言を更新する

`index.html` を編集します。

よく触る場所:

```text
ヒーロー文言
接続情報
参加までの流れ
参加ルール
メンテナンス文
連絡先
```

## ヘッダー画像を更新する

差し替えるファイル:

```text
assets/main-header.png
```

画像を差し替えたら、`style.css` のヒーロー表示が崩れていないか確認します。

## faviconを更新する

差し替えるファイル:

```text
assets/favicon.png
```

`index.html` の `<head>` で読み込んでいます。
サーバーアイコンやBlueMap左下ボタンと雰囲気を揃えると、全体の印象がまとまります。

## ローカル確認

`index.html` をブラウザで直接開きます。

見るところ:

```text
スマホ幅で文字が途中で割れていないか
接続先コピーが動くか
BlueMapリンクが正しいか
メールリンクが正しいか
画像が表示されるか
faviconが表示されるか
```

## GitHub Pagesへ反映

```powershell
git status
git add .
git commit -m "Update site content"
git push
```

公開URL:

```text
https://ninjin-mcserver.github.io/site/
```

反映に少し時間がかかることがあります。

## サーバー設定も変えた場合

最大人数、接続先、BlueMap URLなどを変えた場合は、`main` リポジトリ側のドキュメントや `.env.example` も更新します。

```text
C:\Users\mcadmin\minecraft\servers\ninjin-mcserver\main
```
