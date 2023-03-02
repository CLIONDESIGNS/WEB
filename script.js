<script>

// select the favicon
const faviconEl = document.querySelector('link[rel="icon"]')

// watch for changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
mediaQuery.addEventListener('change', themeChange)

// listener
function themeChange(event) {
  if (event.matches) {
    faviconEl.setAttribute('href', 'favicon-32x32_w.png')
  } else {
    faviconEl.setAttribute('href', 'favicon-32x32.png')
  }
}

// select the apple-touch-icon
const apple-touch-iconEl = document.querySelector('link[rel="apple-touch-icon"]')

// watch for changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
mediaQuery.addEventListener('change', themeChange)

// listener
function themeChange(event) {
  if (event.matches) {
    apple-touch-iconEl.setAttribute('href', 'apple-touch-icon_w.png')
  } else {
    apple-touch-iconEl.setAttribute('href', 'apple-touch-icon.png')
  }
}

/*
// watch for changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', themeChange)

// listener
function themeChange(event) {
  if (event.matches) = function() {
    document.body.classList.toggle("dark-theme");

}
*/
</script>
