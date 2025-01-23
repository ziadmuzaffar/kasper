document.getElementById('collapse-navbar').onclick = function () {
  document.querySelector('ul').classList.toggle('collapse-nav')
}

document.querySelectorAll('.navbar .container div ul li a').forEach(link => {
  link.onclick = function () {
    document.querySelector('ul').classList.remove('collapse-nav')
  }
})