# find-naming

Suggests a nice English name for a variable or function name when entered in Japanese..


## Install

Install with [npm](https://www.npmjs.com/package/find-naming):

```sh
$ npm install --save find-naming
```


## Why use this?

変数名を
[codic](https://codic.jp/docs/api) の API を使用し、
※ このライブラリを使用するには、ご自身の codic の APIキーが必要です。


## Setup: set your API key into .env file
`.env.sample` ファイルをコピーして、取得したAPIキーを設定してください
```
CODIC_ACCESS_TOKEN=YOUR_API_KEY
```

🔑  You need codic account to create API key.  
More info is [here](https://codic.jp/docs/api).

## Usage
