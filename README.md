# ひかげでゴー! 〜真夏の帰り道〜(PWA版)

日陰をすすんで かき氷屋さんを目指す、真夏の横スクロールアクション。
スマホのホーム画面に追加すると、アプリのように全画面で遊べます。

## ファイル構成(すべて同じ階層=フラット構造)

```
index.html                 ← ゲーム本体
manifest.webmanifest       ← アプリ情報
sw.js                      ← オフライン対応(Service Worker)
icon-192.png               ← アイコン
icon-512.png               ← アイコン
icon-maskable-512.png      ← Android用マスカブルアイコン
apple-touch-icon.png       ← iPhone用アイコン
favicon-32.png             ← ブラウザタブ用
```

※ アイコンは意図的にすべて同じ階層に置いています(サブフォルダに入れると
　 GitHubのWebアップロードで階層がくずれることがあるため)。

## GitHub Pagesで公開する手順

1. GitHubで新しいリポジトリを作る(例:`hikage-de-go`)。
2. このフォルダの中身**すべて**をリポジトリのトップに置く
   (index.html などが一番上の階層に来るように)。
3. リポジトリの **Settings → Pages** を開く。
4. 「Branch」を `main`、フォルダを `/ (root)` にして Save。
5. 少し待つと `https://ユーザー名.github.io/hikage-de-go/` で公開されます。

## スマホでアプリとして入れる

- **iPhone(Safari)**:共有ボタン → 「ホーム画面に追加」
- **Android(Chrome)**:メニュー → 「アプリをインストール」または「ホーム画面に追加」

一度開けばオフラインでも遊べます。

## ゲームを更新したとき

`index.html` を差し替えたら、`sw.js` の
`const CACHE = 'hikage-de-go-v1';` の数字を `v2`, `v3`… と上げてください。
これで、古いキャッシュが残らず新しい版が反映されます。

## アイコンを自分の絵に差し替えるには

`icon-192.png` / `icon-512.png` などを、同じファイル名・同じサイズの
自分の画像で上書きするだけでOKです(正方形のPNG推奨)。
