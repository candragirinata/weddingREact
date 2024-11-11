const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-e-ticket-js": hot(preferDefault(require("/home/tky/Documents/gitclone/thekusuma/src/pages/e-ticket.js"))),
  "component---src-pages-generate-link-js": hot(preferDefault(require("/home/tky/Documents/gitclone/thekusuma/src/pages/generate-link.js"))),
  "component---src-pages-generate-qr-js": hot(preferDefault(require("/home/tky/Documents/gitclone/thekusuma/src/pages/generate-qr.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/tky/Documents/gitclone/thekusuma/src/pages/index.js")))
}

