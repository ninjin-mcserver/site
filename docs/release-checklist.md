# ✅ 公開前チェックリスト

サイトを push する前に見るチェックリストです。

## 表示

- `index.html` をブラウザで開ける。
- ヘッダー画像が表示される。
- スマホ幅でも文字が不自然に折れない。
- ボタン内の文字がはみ出さない。
- セクション同士が重ならない。

## リンク

- 接続先コピーのボタンが動く。
- BlueMapリンクが開く。
- メールリンクが正しい。
- ページ上部へのリンクが動く。

## 内容

- サーバー名が `にんじん.mcserver` になっている。
- 接続先が `ninjin-mcserver.freeddns.org:25565` になっている。
- BlueMapが `http://ninjin-mcserver.freeddns.org:8123/` になっている。
- 最大人数などの表記が `main` 側の設定と矛盾していない。
- 参加ルールが現在の方針と合っている。

## Git

```powershell
git status
git diff --check
```

問題なければ:

```powershell
git add .
git commit -m "Update site content"
git push
```
