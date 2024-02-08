const handleClick = () => {
  window.open('https://www.schedulicity.com/scheduling/GCC3X8', '_blank')
}

const flipCard = (e) => {
  let card = e.target.closest('.barber').classList
  if(!card.contains('flipCard')) {
  card.add('flipCard')
  } else {
    card.remove('flipCard')
  }
}

const scrollToTop = () => {
  $('body')[0].scrollIntoView()
}

$(function() {
  $('.about-us-nav').on('click', function() {
    $('.about-us')[0].scrollIntoView()
  })
  $('.services-nav').on('click', function() {
    $('.services')[0].scrollIntoView()
  })
  $('.barbers-nav').on('click', function() {
    $('.barbers')[0].scrollIntoView()
  })
  $('.contact-nav').on('click', function() {
    $('.contact')[0].scrollIntoView()
  })
  $('.book-now').on('click', () => handleClick())
  $('.service-book').on('click', () => handleClick())
  $('.mobile-service-name').on('click', () => handleClick())
  $('.see-bio').on('click', (e) => flipCard(e))
  $('.scroll-to-top').on('click', () => scrollToTop())
})

const handleScroll = () => {
  if(screen.width > 670) {
  const nav = document.querySelector('.nav')
  const toTop = document.querySelector('.scroll-to-top')
  if(window.scrollY > 100) {
    toTop.classList.add('see-to-top')
    nav.classList.add('scrolled')
  }
  if(window.scrollY < 100) {
    nav.classList.remove('scrolled')
    toTop.classList.remove('see-to-top')
  }
}
}


  if($(window).width() > 1500) {
    $('.map').height(500)
    $('.mobile-service-name').addClass('hidden')
  }
  if ($(window).width() < 481) {
    $('.service-name').addClass('hidden')
    $('.mobile-service-name').removeClass('hidden')
  }
 else {
    $('.service-name').removeClass('hidden')
    $('.mobile-service-name').addClass('hidden')
 }
window.addEventListener("scroll", handleScroll)
