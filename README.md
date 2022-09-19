# naming-gen

Suggests a nice English name for a variable or function name when entered in Japanese.  
変数名や関数名を日本語で入力すると、わかりやすい英語名を提案してくれます。


## Install

Install with [npm](https://www.npmjs.com/package/naming-gen):  
インストール方法: 

```sh
$ npm install -g naming-gen
```

## Why use this?
When wondering what kind of variable or function name to use, we will suggest a nice English name from Japanese.  
※ To use this library, you need your own API key for [codic](https://codic.jp/docs/api).  

どんな変数名や関数名をつけたらいいか迷った時、これを使用するとわかりやすい英語名を提案してくれます。  
※ このライブラリを使用するには、ご自身の [codic](https://codic.jp/docs/api) の APIキーが必要です。


## Setup: set your API key
```
export CODIC_ACCESS_TOKEN=YOUR_API_KEY
```

🔑  You need codic account to create API key. More info is [here](https://codic.jp/docs/api).

If it is not set, you will get a message like this.  
もし設定していなければ、このようなメッセージが表示され、使用することができません。  
<img width="288" alt="error" src="https://user-images.githubusercontent.com/5979966/190945988-6fca1025-6dd4-42f7-82fa-32b4b35e0124.png">


## Usage

![how_to_use](https://user-images.githubusercontent.com/5979966/190947247-70a6a9c1-8e2a-4333-8d53-bf4b9550bf00.gif)

