const title = ["Discover innovative ways to decorate","We are available all across the globe","Manufactured with the best materials"]
const article = [`We provide unmatched quality, comfort, and style for property owners across the country. 
Our experts combine form and function in bringing your vision to life. Create a room in your 
own style with our collection and make your property a reflection of you and what you love.`,
` With stores all over the world, it's easy for you to find furniture for your home or place of business. 
Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
store locator. Any questions? Don't hesitate to contact us today.`,
`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
to ensure that every product is made as perfect and as consistent as possible. With three decades of 
experience in this industry, we understand what customers want for their home and office.`]

const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const swapTitle = document.querySelector(".swap_title")
const swapArticle = document.querySelector(".swap_article")
let siteWidth = 0
let i = 0

if(document.body.getBoundingClientRect().width > 1200){
    for(let j = 1; j < 4 ;j++){
        document.querySelector(".mobile").src = `images/desktop-image-hero-${j}.jpg`
        document.querySelector(".mobile").classList.add("desktop")
        document.querySelector(".mobile").classList.remove("mobile")
        siteWidth = (document.body.getBoundingClientRect().width*0.6)
    }
}else{
    siteWidth = document.body.getBoundingClientRect().width
}
document.querySelector(".img2").style.left = `-${siteWidth}px`
rightBtn.addEventListener("click",function(){
    console.log
    if(i < 2){
        i++
        document.querySelector(`.img${i}`).style.left = `-${siteWidth * i}px`
        swapTitle.textContent = title[i]
        swapArticle.textContent = article[i]
    }else{
        document.querySelector(".img1").style.left = "0px"
        document.querySelector(".img2").style.left = `-${siteWidth}px`
        i = 0
        swapTitle.textContent = title[i]
        swapArticle.textContent = article[i]
    }
})
leftBtn.addEventListener("click",function(){
    if(i > 0){
        document.querySelector(`.img${i}`).style.left = `${-siteWidth * (i-1)}px`
        i--
        swapTitle.textContent = title[i]
        swapArticle.textContent = article[i]
    }else{
        document.querySelector(".img1").style.left = `-${siteWidth}px`
        document.querySelector(".img2").style.left = `-${siteWidth * 2}px`
        i = 2
        swapTitle.textContent = title[i]
        swapArticle.textContent = article[i]
    }
})

const xBtn = document.querySelector(".xbtn")
const menuBtn = document.querySelector(".menu_btn")
xBtn.addEventListener("click",function(){
    document.querySelector(".list_wrapper").style.maxHeight = "0px"
    setTimeout(function(){
        document.querySelector(".menu_wrapper").style.display = "flex"
        document.getElementsByTagName("main")[0].classList.remove("cover")
    }
        ,800)
    
})
menuBtn.addEventListener("click",function(){
    document.querySelector(".list_wrapper").style.maxHeight = "150px"
    document.querySelector(".menu_wrapper").style.display = "none"
    document.getElementsByTagName("main")[0].classList.add("cover")
})