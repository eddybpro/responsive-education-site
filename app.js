const profile = document.querySelector('.profile');
const userBtn = document.getElementById('user-btn');
const searchForm = document.querySelector('.search-form')
const searchBtn = document.getElementById('search-btn')
const sideBar = document.querySelector('.side-bar')
const menuBtn = document.getElementById('menu-btn')
const body = document.body;
const closeSideBar = document.querySelector('.close-side-bar')
const toggleBtn = document.getElementById('toggle-btn')



userBtn.addEventListener('click',()=>{
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
})

searchBtn.addEventListener('click',()=>{
    searchForm.classList.toggle('active')
    profile.classList.remove('active');
})

menuBtn.addEventListener('click',()=>{
    sideBar.classList.toggle('active')
    body.classList.toggle('active')
})

closeSideBar.addEventListener('click',()=>{
    sideBar.classList.remove('active')
    body.classList.remove('active')
})

window.onscroll = ()=>{
    profile.classList.remove('active');
    searchForm.classList.remove('active');
    if(window.innerWidth < 1200){
        sideBar.classList.remove('active')
        body.classList.remove('active') 
    }
}

let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = ()=>{
    toggleBtn.classList.replace('fa-sun','fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode','enabled')
}

const disableDarkMode = ()=>{
    toggleBtn.classList.replace('fa-moon','fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode','disabled')
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

toggleBtn.addEventListener('click',(e)=>{
    let darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'enabled') {
        disableDarkMode();
    }else{
        enableDarkMode();
    }
})
















