const router = require('koa-router')()
const {
  getDialog,
  getDialogBriefs
} = require('./knowledge')

router.prefix('/dialog')

router.get('/briefs', function (ctx, next) {
  ctx.body = getDialogBriefs()
})

router.get('/getDialog', function (ctx, next) {
  const {id} = ctx.params
  const dialog = getDialog(id)
  ctx.body = dialog
})

module.exports = router
