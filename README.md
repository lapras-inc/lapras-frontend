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

また、commit -m などを使用してもコミットメッセージを作成できるが、husky によってフォーマットに不備があると commit されないようにしている

package.json の version は一度リリースしているパッケージと剥離してしまって、管理が煩雑になったので更新せず、0.0.0 で固定しています。
(OSS で公開したくなったら、ここもちゃんと管理する。)

## Release

- [releaseブランチにマージするとリリースされる](.github/workflows/npm-push-event.yml)
