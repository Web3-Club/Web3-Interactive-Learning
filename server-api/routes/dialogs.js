const router = require('koa-router')()
const {
  getDialog,
  getDialogBriefs
} = require('./knowledge')

router.prefix('/dialog')

router.get('/briefs', function (ctx, next) {
  ctx.body = getDialogBriefs()
})

router.get('/:id', function (ctx, next) {
  const {id} = ctx.params
  console.log("id:", id)
  const dialog = getDialog(id)
  console.log("dialog:", dialog)
  ctx.body = dialog
})

module.exports = router
