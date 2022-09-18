#!/usr/bin/env node

const axios = require('axios')
const c = require('ansi-colors')
const { Input } = require('enquirer')

main()

async function main () {
  welcomeMsg()
  const result = checkApiKey()
  if (result) inputWord()
}

function welcomeMsg () {
  console.log(c.yellow("\n  Welcome to NAMING-GEN!!🎉 \n  Let's find good variable name 😁 \n"))
}

function checkApiKey () {
  if (!process.env.CODIC_ACCESS_TOKEN) {
    console.log(c.red('👀 Please set your API key.'))
  } else {
    return true
  }
}

function inputWord () {
  const prompt = new Input({
    message: 'ネーミングを作成してほしい言葉を日本語で入力してください 👉'
  })

  prompt.run()
    .then(async (answer) => {
      const result = await seatchName(answer)
      console.log('👉 ' + c.cyan(result.translated_text) + '\n')
    })
    .catch(err => console.error(err))
}

async function seatchName (word, casing = 'camel') {
  const url = `https://api.codic.jp/v1/engine/translate.json?text=${word}&casing=${casing}`
  const encodedUrl = encodeURI(url)
  const token = process.env.CODIC_ACCESS_TOKEN

  const response = await axios.get(encodedUrl, { headers: { Authorization: `Bearer ${token}` } })
    .catch(err => console.error(err))
  return response.data[0]
}
