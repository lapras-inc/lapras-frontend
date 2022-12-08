# lapras frontend

LAPRASで使用するフロントエンド関連の共通ライブラリ

## Directory

```
─ fonts font関連を収める
─ src/components component関連を収める
```

## Styleguide

https://lapras-inc.github.io/lapras-frontend/

## Commit Message Guide

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)の書式を強制している
- [standard-version](https://github.com/conventional-changelog/standard-version)でconventional-changelogの書式を自動で判定してversion upをしてくれる

#### commit messageの作成方法

yarn installでcommitizenをinstallすると

```shell
$ git cz
# or
$ npx git-cz
# or
$ yarn commit
```

のいずれかを実行するとガイド付きでmessageの作成ができる

また、commit -mなどを使用してもコミットメッセージを作成できるが、huskyによってフォーマットに不備があるとcommitされないようにしている

## Tips
#### 新しいIconの追加方法
外部サービスの [IcoMoon](https://icomoon.io/) にアクセスし、
新規に追加したいIconのsvgをImportする<br>
同様に既存アイコンのsvgファイル`fonts/scouty-icon.svg`アイコンを選択してImportを行う<br>
※新規のアイコンが末尾に来るように『Move UP/Move Down』等でSetの入れ替えを行うこと

アイコン登録後、右下の『Generate Font』をクリックし、フォントを生成しダウンロード

zip解凍後、``$ for f in `ls`; do mv $f ${f/icomoon/scouty-icon}; done``で
ファイル名を変更して、`fonts/`ディレクトリ下に配置

最後に`src/components/Icon/iconMap.ts`にアイコン名とコード( [IcoMoon](https://icomoon.io/) にて確認出来る)を追加


## Release
※ Vue2.6 >=
1. `legacy-release`ブランチへのPRを手動で作成する
2. [PRをマージするとGitHubでリリースされる](.github/workflows/npm-release-legacy.yml)

※ Vue2.7
1. `legacy`ブランチへのPRを作成する
2. [PRをマージするとGitHubでリリースされる](.github/workflows/npm-release.yml)

