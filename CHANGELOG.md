# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.1.0](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.13...v0.1.0) (2022-11-22)


### ⚠ BREAKING CHANGES

* Vueのアップデート

### Features

* chromatic ([1eb4e04](https://github.com/lapras-inc/lapras-frontend/commit/1eb4e04f2889cfe726f53096b9139364b5cdc69d))
* ci でのリリース用のタスク追加 ([dc2a522](https://github.com/lapras-inc/lapras-frontend/commit/dc2a5225a9b5ea98dea5a9292e12d578d0a5b34f))
* **component:** shortModal はスマフォで大きく表示する ([c4572d2](https://github.com/lapras-inc/lapras-frontend/commit/c4572d27bb5d486db9bf639ea62c0a005bb22a7c))
* **component:** 短かめの内容向けに ShortModal を追加 ([3a15954](https://github.com/lapras-inc/lapras-frontend/commit/3a1595462ba06c79fc917e84c0cac2442ce06fe0))
* debug ([df1a56f](https://github.com/lapras-inc/lapras-frontend/commit/df1a56f1167e43c91d10129553efe01801219621))
* debug2 ([153bc52](https://github.com/lapras-inc/lapras-frontend/commit/153bc52d44b7753e3752cf4fa237eb1b1c56ac3c))
* emit v-on listeners of TextInput ([96b4c2b](https://github.com/lapras-inc/lapras-frontend/commit/96b4c2b4bfea3a069fb197c20346e296d2a1d7e8))
* essentials addonの追加 ([c85b465](https://github.com/lapras-inc/lapras-frontend/commit/c85b465a549870ec867fcddb2d4be64d565e223b))
* essentials addonを有効化 ([ce6b6ee](https://github.com/lapras-inc/lapras-frontend/commit/ce6b6eecbbb5418f3a381823e5da564136ca6ba9))
* **flatbutton.vue:** add important skin to flatbutton component ([7fe2215](https://github.com/lapras-inc/lapras-frontend/commit/7fe22159597fe09b479e434e9c09390d0afbb15c))
* **flatbutton:** https://github.com/lapras-inc/scouty/issues/10806 ([7dc075d](https://github.com/lapras-inc/lapras-frontend/commit/7dc075dc53804ad111cadf5664ffd21aa23b86e1))
* **flatbutton:** 点滅するバリエーション ([317dafd](https://github.com/lapras-inc/lapras-frontend/commit/317dafd9c38bb4a12723ffe124e8b26d001d7945))
* github actions ([bafdca5](https://github.com/lapras-inc/lapras-frontend/commit/bafdca59cb4512dd70da30a8c4c030880cf09deb))
* **icon:** [clean] StoryBook でアイコンを個々の Story として出力するようにした ([a7bc204](https://github.com/lapras-inc/lapras-frontend/commit/a7bc204fc2e767a57b1320d4189f0b2f63b02bb3))
* **icon:** add balloon icon ([70f8d21](https://github.com/lapras-inc/lapras-frontend/commit/70f8d2153f723be1d89e538a096e66202ba6d87a))
* **icon:** add lightbulb icon ([5b343aa](https://github.com/lapras-inc/lapras-frontend/commit/5b343aada781737e116cd0d50a93698eb5a6cd2e))
* **icon:** icon ([e9caaf6](https://github.com/lapras-inc/lapras-frontend/commit/e9caaf65921207457b5fa83f186c4232f62b743d))
* **icon:** likeアイコンを追加 ([674f85b](https://github.com/lapras-inc/lapras-frontend/commit/674f85b06c6a0af1e87be9c8c6b8587cc2a0ae19))
* package.json の version は固定にする ([1c20713](https://github.com/lapras-inc/lapras-frontend/commit/1c207136ef8c8ce5a9ca52b217bb1875cc28b63e))
* **protectedlink:** httpsだけでなくHTTPSも許容する ([26e0872](https://github.com/lapras-inc/lapras-frontend/commit/26e08720b8524025e56e043e7c562ab59967aea1))
* **protectedlink:** 別タブで開くときは rel="noopener" をつける ([054fbdd](https://github.com/lapras-inc/lapras-frontend/commit/054fbddf4311bb5a80a9b967fa10a133285e92bc)), closes [lapras-inc/scouty#10930](https://github.com/lapras-inc/scouty/issues/10930)
* release 12/14 ([d60885f](https://github.com/lapras-inc/lapras-frontend/commit/d60885f547dfedb1385c1ab5ec440913b344bcea))
* storybook をリリース時にデプロイする ([904864a](https://github.com/lapras-inc/lapras-frontend/commit/904864a1aa8adbba633316ff867c9c4d3f52b1b2))
* textareaを自動拡張するオプションを追加 ([f9fe753](https://github.com/lapras-inc/lapras-frontend/commit/f9fe753bd17d4e4616dc93fd081fbbd4090a93bb))
* update version ([98235c4](https://github.com/lapras-inc/lapras-frontend/commit/98235c4ba88dd3f4329f295d848186648b56aece))
* 環境変数渡すの忘れてた ([2b98c59](https://github.com/lapras-inc/lapras-frontend/commit/2b98c59b2d9a5bc6ef6ac4d1966d3b041ae89a45))

### Bug Fixes

* 🐛 ciでdistをリリースに含むときのコミットメッセージを修正 ([5779bec](https://github.com/lapras-inc/lapras-frontend/commit/5779bec1683af06943103c70453896be2ec91b45))
* add username ([99342e1](https://github.com/lapras-inc/lapras-frontend/commit/99342e16845fb8f2e20cd9c7f030921fd5017fb1))
* build storybook assets before dploying ([a2e14ee](https://github.com/lapras-inc/lapras-frontend/commit/a2e14ee9a8bdfba8389832c588aac7e0ee8c9aa7))
* build時にtemplate内の型アノテーション部分でなぜかパースエラーが起きるので、script内に型アノテーションを移動 ([7b7c100](https://github.com/lapras-inc/lapras-frontend/commit/7b7c1007ad4159eb3cdb622150b8a64fb8c18f70))
* **component:** shortModal で click を stopPropagation しない ([43800c5](https://github.com/lapras-inc/lapras-frontend/commit/43800c540be300a5b8b130b716fdbf93c51e4f0d))
* **dist files:** execute forgotten build for formaer commits ([b4b2674](https://github.com/lapras-inc/lapras-frontend/commit/b4b2674468a58c857c3c576e47700463e6ec43b7))
* gh-pages の設定間違えてたので修正 ([ebfde0e](https://github.com/lapras-inc/lapras-frontend/commit/ebfde0e1a6c08c4961196193dc2bc80a567a1cd2))
* github actions ([4aba0cb](https://github.com/lapras-inc/lapras-frontend/commit/4aba0cb8d9ccb020ee4c24c9137a0c0bd83d3254))
* **gitignore:** remove dist from gitignore ([09aaeef](https://github.com/lapras-inc/lapras-frontend/commit/09aaeefc929a85d72190be0b9aca5ff7d396bee8))
* **modal:** modal の DOM 構造を修正し event.stopPropagation を使わないようにした ([353fbc5](https://github.com/lapras-inc/lapras-frontend/commit/353fbc59790897650b01c0d0bed4abd240ea2275))
* **modal:** setup 関数内で watch() を使わないようにする ([29b8ed5](https://github.com/lapras-inc/lapras-frontend/commit/29b8ed5b764d5a896288364815a798822f5a85e5)), closes [#139](https://github.com/lapras-inc/lapras-frontend/issues/139)
* release 時に build して差分がないときコケないようにする ([99dfe3e](https://github.com/lapras-inc/lapras-frontend/commit/99dfe3e877d0a2a9c90f684937642c01521097fb))
* **textinput:** v-on:input が使えなくなってしまっていたので修正 ([8b60683](https://github.com/lapras-inc/lapras-frontend/commit/8b606830eb92a6cc8b12f5fb61a2a322ca657a2d)), closes [#134](https://github.com/lapras-inc/lapras-frontend/issues/134)
* typesがnode_modulesに含まれるようにする ([35bc62f](https://github.com/lapras-inc/lapras-frontend/commit/35bc62fc7d00032ae771e3aa668af78b152a0088))
* vue composition api の api が使えない件の修正 ([1164c00](https://github.com/lapras-inc/lapras-frontend/commit/1164c0062f42be68160a20df2bb7b2421fa52bf8))
* スマホでTagを非表示にしようとしたときに出るモーダルの x ボタンが効かない(または推しにくくて押せていない) ([0485214](https://github.com/lapras-inc/lapras-frontend/commit/0485214006f118c8f8f770f620d5a0da55d309a9))
* ライブラリとして使うとリアクティブが失われる件の修正 ([a124419](https://github.com/lapras-inc/lapras-frontend/commit/a1244192bffa497cda5a7bd480f1009f682441c5))


* vueを2.7にアップデート ([6d8438a](https://github.com/lapras-inc/lapras-frontend/commit/6d8438a270f8dec410e591a060c6ec9475d29319))

### [0.0.23](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.22...v0.0.23) (2020-11-05)

### [0.0.22](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.21...v0.0.22) (2020-11-05)

### [0.0.21](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.20...v0.0.21) (2020-11-05)

### [0.0.20](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.19...v0.0.20) (2020-11-05)

### [0.0.19](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.18...v0.0.19) (2020-11-05)

### [0.0.18](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.17...v0.0.18) (2020-11-05)

### [0.0.17](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.16...v0.0.17) (2020-11-05)

### [0.0.16](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.15...v0.0.16) (2020-11-05)

### [0.0.15](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.14...v0.0.15) (2020-11-05)

### [0.0.14](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.13...v0.0.14) (2020-11-05)

### [0.0.13](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.12...v0.0.13) (2020-11-04)


### Features

* **icons:** added icons ([99a4e2d](https://github.com/lapras-inc/lapras-frontend/commit/99a4e2d7ee9f3c9f81883fc8f938d607d808833c))
* add type definitions and type tests ([158578d](https://github.com/lapras-inc/lapras-frontend/commit/158578ddb24b08c0e681d1c89e1425fffd81ae59))


### Bug Fixes

* **lapras-frontend.d.ts:** 型定義ファイルがbuildする度に消されてしまうので、src配下に移動 ([54e2968](https://github.com/lapras-inc/lapras-frontend/commit/54e2968f8b73b18062bd484db774e124e1e6ebbd))

### [0.0.12](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.11...v0.0.12) (2020-06-16)

### [0.0.11](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.9...v0.0.11) (2020-06-16)

### [0.0.10](https://github.com/lapras-inc/lapras-frontend/compare/v0.0.9...v0.0.10) (2020-06-16)
