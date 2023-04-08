const router = require('koa-router')()
const {
  getDialog,
  getDialogBriefs
} = require('./knowledge')

const {
  getQuestionByDialogId,
  checkAnswers
} = require('./questionnaire')

router.prefix('/dialog')

router.get('/briefs', function (ctx, next) {
  ctx.body = getDialogBriefs()
})

//
router.get('/:id', function (ctx, next) {
  const {id} = ctx.params
  console.log("id:", id)
  const dialog = getDialog(id)
  console.log("dialog:", dialog)
  ctx.body = dialog
})

// 
router.get('/test/:id', function (ctx, next) {
  const {id} = ctx.params
  console.log("id:", id)
  const question = getQuestionByDialogId(id)
  console.log("question:", question)
  ctx.body = question
})

//检查分数
router.post('/test/check', function (ctx, next) {
  const {dialogId, answers} = ctx.request.body
  console.log("dialogId:", dialogId, ",answers:", answers)
  const score = checkAnswers(dialogId, answers)
  console.log("score:", score)
  return ctx.body = score
})

module.exports = router
