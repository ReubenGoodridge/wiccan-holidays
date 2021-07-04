window.addEventListener('scroll', reveal)

function reveal () {
  var reveals = document.querySelectorAll('.reveal')

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var reavealTop = reveals[i].getBoundingClientRect().top
    var reavealPoint = 150

    if (reavealTop < windowHeight - reavealPoint) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}
