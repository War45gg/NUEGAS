const activ_select = document.querySelector('.activity-select')
const activ_dropdown = activ_select.querySelector('.dropdown')
const mentor_follow = document.querySelectorAll('.mentor-like')
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