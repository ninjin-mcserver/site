# 🥕 にんじん.mcserver / site

にんじん.mcserver の公開サイト用リポジトリです。
この README は、サイト作業のトップページです。

## 公開情報

```text
公開URL: https://ninjin-mcserver.github.io/site/
Minecraft: ninjin-mcserver.freeddns.org:25565
BlueMap: http://ninjin-mcserver.freeddns.org:8123/
```

## ドキュメント

| 目的 | 読むもの |
| --- | --- |
| サイト全体の構成を知る | [docs/README.md](docs/README.md) |
| 文言や画像を更新する | [docs/update-site.md](docs/update-site.md) |
| 公開前に確認する | [docs/release-checklist.md](docs/release-checklist.md) |

サーバー本体の運用は `main` リポジトリで管理します。

```text
https://github.com/ninjin-mcserver/main
```

## よく使う入口

ローカル確認:

```text
index.html をブラウザで直接開く
```

反映:

```powershell
git status
git add .
git commit -m "Update site content"
git push
```

GitHub Pages の反映には少し時間がかかることがあります。

## ファイル構成

```text
site
+-- README.md
+-- index.html
+-- style.css
+-- script.js
+-- assets/
|   +-- main-header.png
|   +-- favicon.png
+-- docs/
    +-- README.md
    +-- update-site.md
    +-- release-checklist.md
```
