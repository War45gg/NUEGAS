const activ_select = document.querySelector('.activity-select')
const activ_dropdown = activ_select.querySelector('.dropdown')
const mentor_follow = document.querySelectorAll('.mentor-like')
const taskbar_left = document.querySelector('.taskbar-left')
const grerting = document.querySelector('.greeting')
const grerting_mob = document.querySelector('.greeting-mob')
const burger = document.querySelector('.burger')
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