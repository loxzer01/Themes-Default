/* 

    // themes Dark
    '--primary-color': '#bfb'

    //themes light 
    '--primary-color': '#ff2'

    // themes blue
    '--primary-color': '#1AF'


*/

const chMode = (vr, ch) => document.documentElement.style.setProperty(vr, ch)
const vaMode = localStorage.getItem('mode')
const boolDark = window.matchMedia('(prefers-color-scheme:dark)').matches
const typeMode = document.querySelector('#typeMode')

const modeDark = ()=> {
    chMode('--primary-color', '#bfb')
    chMode('--secondary-color', '#fff')
    chMode('--tertiary-color', '#000')
    typeMode.textContent = 'Dark'
    localStorage.setItem('mode', 'dark')
}

const modeLight = ()=> {
    chMode('--primary-color', '#ff2')
    chMode('--secondary-color', '#000')
    chMode('--tertiary-color', '#fff')
    typeMode.textContent = 'Light'
    localStorage.setItem('mode', 'light')
}

const modeBlue = ()=> {
    chMode('--primary-color', '#1AF')
    chMode('--secondary-color', '#0a0c53')
    chMode('--tertiary-color', '#e3fbff')
    typeMode.textContent = 'Blue'
    localStorage.setItem('mode', 'blue')
}

const mdchange = (mode) => {
    if (mode === "dark") {
        modeDark()
    }else if (mode === "light") {
        modeLight()
    }else if(mode === 'blue'){
        modeBlue()
    }
}

if (vaMode === null) {
    if(boolDark) {
        modeDark()
    }else {
        modeBlue()
    }
}else {
    mdchange(vaMode)
}