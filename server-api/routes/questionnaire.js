const questions = [
  {
    "id":1,
    "dialogId": 1,
    "title": "Web3介绍测试题",
    "questionList" : [
      {
        "question": "哪一个版本的 Web 不依赖第三方支付提供商？",
        "options": [
          "Web1",
          "Web2",
          "Web3",
          "全部版本",
        ]
      },{
        "question": "哪一个版本的 Web 不依赖第三方支付提供商？",
        "options": [
          "可读可写可出售",
          "可读可写可存储",
          "可读可写可拥有",
          "可读可写可购买",
        ]
      },{
        "question": "通过使用以下哪种方式，您可以在整个 Web 上拥有单一的、不受审查的登录?",
        "options": [
          "使用 Facebook 登录",
          "使用 Google 登录",
          "使用 Ethereum 登录",
          "使用 Twitter 登录",
        ]
      },{
        "question": "Web3 允许用户直接拥有数字资产的方式是通过：",
        "options": [
          "DAO",
          "NFTs",
          "ENS",
          "GitHub",
        ]
      },
    ]
  }
]

const answers = [
  {
    "id" : 1,
    "questionId": 1,
    "answerList": [
      "Web3", "可读可写可拥有", "使用 Ethereum 登录", "NFTs"
    ]
  }

]

function checkAnswers(dialogId, answers){
  const targets =  answers.filter(e => e.dialogId === parseInt(dialogId))
  if(!targets){
    return 0
  }
  const answer = targets[0] 
  const correctCount = 0
  answer.forEach( e,i => {  
      if(e == answers[i]){
        correctCount++
      }
   })

   return parseInt(correctCount / answer.length)
}


function getQuestionByDialogId(dialogId){
  const targets =  questions.filter(e => e.dialogId === parseInt(dialogId))
  if(targets){
    return targets[0]
  }
  return null
}

module.exports = {
  getQuestionByDialogId,
  checkAnswers
}