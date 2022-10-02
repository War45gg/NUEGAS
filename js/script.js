const activ_select = document.querySelector('.activity-select')
const activ_dropdown = activ_select.querySelector('.dropdown')
const mentor_follow = document.querySelectorAll('.mentor-like')
const taskbar_left = document.querySelector('.taskbar-left')
const grerting = document.querySelector('.greeting')
const grerting_mob = document.querySelector('.greeting-mob')
const burger = document.querySelector('.burger')
const mentor = document.querySelector('.mentor')
const task = document.querySelector('.task')
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
    burger.classList.remove('_hidden')
    burger.addEventListener('click', function () {
        burger.querySelector('.burger-list').classList.toggle('_hidden')
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
