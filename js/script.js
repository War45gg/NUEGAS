const activ_select = document.querySelector('.activity-select')
const activ_dropdown = activ_select.querySelector('.dropdown')
const mentor_follow = document.querySelectorAll('.mentor-like')
const taskbar_left = document.querySelector('.taskbar-left')
const grerting = document.querySelector('.greeting')
const grerting_mob = document.querySelector('.greeting-mob')
const burger = document.querySelectorAll('.burger')
const mentor = document.querySelector('.mentor')
const task = document.querySelector('.task')
const taskbar_right = document.querySelector('.taskbar-right')
const flex_wrapper = document.querySelector('._flex-wrapper')
const main = document.querySelector('.main')

// Отображение селекта в activity
activ_select.addEventListener('click', function() {
    activ_dropdown.classList.toggle('_hidden')
    const dropdown_iteam = activ_dropdown.querySelectorAll('.dropdown-iteam')
    dropdown_iteam.forEach(function(iteam) {
        iteam.addEventListener('click', function () {
            let i = iteam.textContent
            iteam.textContent = activ_select.querySelector('.select-header').textContent
            activ_select.querySelector('.select-header').textContent = i
        })
    })
})

// Настройка follow 
mentor_follow.forEach(function (iteam) {
    iteam.addEventListener('click', function() {
        let follow = 'Followed'
        let unfollow = '+ Follow '
        if (iteam.classList.contains('menhor-unfollow') == true) {
            console.log(7)
            iteam.classList.remove('menhor-unfollow')
            iteam.classList.add('menhor-follow')
            iteam.textContent = follow
        }
        else {
            iteam.classList.add('menhor-unfollow')
            iteam.classList.remove('menhor-follow')
            iteam.textContent = unfollow
        }
    })
})

// Скрытие taskbar-left, перемещение greeting
if (innerWidth<=1375) {
    taskbar_left.classList.add('_hidden')
    grerting.classList.add('_hidden')
    grerting_mob.classList.remove('_hidden')
}

// Отображение бургера

if (innerWidth<=1375) {
    burger.forEach(function(iteam) {
        iteam.classList.remove('_hidden')

        iteam.addEventListener('click', function () {
            iteam.querySelector('.burger-list').classList.toggle('_hidden')
        })
    })

}

// Работа слайдеров
// Task and mentors

if (innerWidth<=512) {
    // Task
    const task_slider = task.querySelector('.slider-wrapper')
    const task_iteams = Array.from(task_slider.children)
    const sliderBtn = Array.from(task.querySelectorAll('.slider-btn'))
    task_iteams.forEach(function (slide, index) {

        if (index !== 0) {
            slide.classList.add('_hidden')
        }

        slide.dataset.index = index
        task_iteams[0].setAttribute('data-active', '')

    })

    sliderBtn.forEach(function(iteam,index) {

        if (index==0) {

            iteam.addEventListener('click', function() {

                let activeSlide = task.querySelector('[data-active]')
                let i = +activeSlide.dataset.index -1

                if (i<0) {
                    i = task_iteams.length - 1
                }

                let nextSlide = task.querySelector(`[data-index = '${i}']`)

                activeSlide.classList.add('_hidden')
                activeSlide.removeAttribute('data-active')

                nextSlide.classList.remove('_hidden')
                nextSlide.setAttribute('data-active', '')

            })

        }
        else {

            iteam.addEventListener('click', function() {

                let activeSlide = task.querySelector('[data-active]')
                let i = +activeSlide.dataset.index +1

                if (i == task_iteams.length) {
                    i = 0
                }

                let nextSlide = task.querySelector(`[data-index = '${i}']`)

                activeSlide.classList.add('_hidden')
                activeSlide.removeAttribute('data-active')

                nextSlide.classList.remove('_hidden')
                nextSlide.setAttribute('data-active', '')

            })
            
        }
    })

    // Mentor

    const mentor_slider = mentor.querySelector('.slider-wrapper')
    const mentor_iteams = Array.from(mentor_slider.children)
    const sliderBtnM = Array.from(mentor.querySelectorAll('.slider-btn'))
    mentor_iteams.forEach(function (slide, index) {
        if (index !== 0) {
            slide.classList.add('_hidden')
        }
        slide.dataset.index = index
        mentor_iteams[0].setAttribute('data-active', '')
    })

    sliderBtnM.forEach(function(iteam,index) {
        if (index==0) {
            iteam.addEventListener('click', function() {
                let activeSlide = mentor.querySelector('[data-active]')
                let i = +activeSlide.dataset.index -1

                if (i<0) {
                    i = mentor_iteams.length - 1
                }

                let nextSlide = mentor.querySelector(`[data-index = '${i}']`)

                activeSlide.classList.add('_hidden')
                activeSlide.removeAttribute('data-active')

                nextSlide.classList.remove('_hidden')
                nextSlide.setAttribute('data-active', '')
            })
        }
        else {
            iteam.addEventListener('click', function() {
                let activeSlide = mentor.querySelector('[data-active]')
                let i = +activeSlide.dataset.index +1

                if (i == task_iteams.length) {
                    i = 0
                }

                let nextSlide = mentor.querySelector(`[data-index = '${i}']`)

                activeSlide.classList.add('_hidden')
                activeSlide.removeAttribute('data-active')

                nextSlide.classList.remove('_hidden')
                nextSlide.setAttribute('data-active', '')
            })
        }
    })
}

// Работа ссылок taskbar-left
// Скрытие taskbar-right 
// Настройка флекс оберток

const menuList = document.querySelector('.menu-list')
const menuLinks = Array.from(menuList.children)
const sections = Array.from((document.querySelector('.main').children))

menuLinks.forEach(function(iteam, index) {

    // Индексы
    iteam.dataset.indexLink = index

    iteam.addEventListener('click', function () {

        menuLinks.forEach(function(iteam) {
            iteam.classList.remove('_active-menu-iteam')
            iteam.querySelector('.menu-dark-icon').classList.add('_hidden')
            iteam.querySelector('.menu-icon').classList.remove('_hidden')
        })

        iteam.querySelector('.menu-dark-icon').classList.remove('_hidden')
        iteam.querySelector('.menu-icon').classList.add('_hidden')

        this.classList.add('_active-menu-iteam')
        let i = this.dataset.indexLink


// Алгоритм отображения секций
        sections.forEach(function(iteam,index) {

            iteam.dataset.IndexSection = index
            if (i == iteam.dataset.IndexSection) {
                sections.forEach(function(iteam,index) {
                    iteam.classList.add('_hidden')
                })
                iteam.classList.remove('_hidden')
                // Фикс проблем с overwie
            } else if (i!=0) {
                taskbar_right.classList.add('_hidden')
                flex_wrapper.classList.add('_flex-wrapper-second')
                main.classList.add('main-fix')

            } else if (i==0) {
                taskbar_right.classList.remove('_hidden')
                flex_wrapper.classList.remove('_flex-wrapper-second')
                main.classList.remove('main-fix')
            }

        })
        
    })

})

// Работа ссылок бургера

const burgerList = document.querySelectorAll('.burger-list')
burgerList.forEach(function(iteam) {
    const burgerLink = Array.from(iteam.children)

    burgerLink.forEach(function(iteam,index){
        iteam.dataset.indexLink = index
        iteam.addEventListener('click', function(){
    
            let i = this.dataset.indexLink
            sections.forEach(function(iteam,index) {
                
                x = iteam.dataset.IndexSection = index
                iteam.dataset.IndexSection = index
                if (i == iteam.dataset.IndexSection) {
                    sections.forEach(function(iteam,index) {
                        iteam.classList.add('_hidden')
                    })
                    iteam.classList.remove('_hidden')

                    // Фикс проблем с overwie
                } else if (i!=0) {
                    taskbar_right.classList.add('_hidden')
                    flex_wrapper.classList.add('_flex-wrapper-second')
                    main.classList.add('main-fix')
                    
                } else if (i==0) {
                    taskbar_right.classList.remove('_hidden')
                    flex_wrapper.classList.remove('_flex-wrapper-second')
                    main.classList.remove('main-fix')
                }

            })

        })
    
    })
})

// Алгоритм нажатия на task-card
const taskCard = Array.from(document.querySelectorAll('.task-card'))
const taskWrap = document.querySelector('.task-limit-wrapper')
const taskDetail = document.querySelector('.task-detail')
const overview = document.querySelector('.overview')
const taskPage = document.querySelector('.task-page')
taskCard.forEach(function (card) {
    card.addEventListener('click', function(){

        // Проверка на нахождение card на overview
        if (overview.contains(card)) {
            overview.classList.add('_hidden')
            taskbar_right.classList.add('_hidden')
            taskPage.classList.remove('_hidden')
            taskbar_right.classList.add('_hidden')
            flex_wrapper.classList.add('_flex-wrapper-second')
            main.classList.add('main-fix')
            
        }

        taskWrap.classList.add('_hidden')
        taskDetail.classList.remove('_hidden')

            // Получение img карточек и их src
        let cardImage = 0
        Array.from(card.children).forEach(function(iteam,index) {
            if (index == 0) {
                cardImage = iteam
            }
        })
        let cardImageSrc = cardImage.src.split('.png')[0] + 'D.png'

        
        const detailImage = taskDetail.querySelector('.datail-img')
        detailImage.setAttribute('src', cardImageSrc)

        // Замена заголовков
        taskDetail.querySelector('.side-title').innerText = taskDetail.querySelector('.detail-title').innerText = card.querySelector('.card-name').innerText
        taskDetail.querySelector('.side-profession').innerText = taskDetail.querySelector('.card-profession').innerText = card.querySelector('.card-profession').innerText
        taskDetail.querySelector('.detail-clock').querySelector('h5').innerText = card.querySelector('.task-time').querySelector('div').querySelector('h5').innerText 

    })

    // Переход назад путем нажатия на таск
    const taskLink = document.querySelectorAll(`[data-index-link= '1']`)
    taskLink.forEach(function (iteam) {
        iteam.addEventListener('click',function(iteam) {
            taskWrap.classList.remove('_hidden')
            taskDetail.classList.add('_hidden')
        }) 
    })
})

// Mentors slider
$('.recent-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    centerMode: true,
})