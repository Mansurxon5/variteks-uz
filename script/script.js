'use strict';

// Navbar Fixed

// const nav = document.querySelector('nav');

// window.addEventListener('scroll', (event) => {
//    nav.classList.toggle(
//         "navbar-active",
//         event.path[event.path.length - 1].scrollY > 100
//     )
// })



// Language Menu


const lanMenu = document.querySelector('.language-menu'),
    chevron = document.querySelector('.chevron'),
    lanmenuOption = document.querySelectorAll('.language-menu .lang-item'),
    lang = document.getElementById('lang');

const languageToggle = () => {
    lanMenu.classList.toggle('active-menu');
    chevron.className === "chevron fas fa-chevron-up text-[10px]" ? chevron.className = "chevron fas fa-chevron-down text-[10px]" : chevron.className = "chevron fas fa-chevron-up text-[10px]";
    lanmenuOption.forEach(list => {
        list.onclick = () => {
            lang.innerText = list.innerText;
        }
    })
}


// window.location = 'salom'

// chevron


// Swiper

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



//link

const link = document.querySelector('.link'),
    chevronDown = document.getElementById('chevron-down');

const hrefLink = () => {
    link.classList.toggle('link-active');
}
// window.location = 'sa'


const chevronTwo = document.getElementById('chevronTwo'),
    contactMenu = document.querySelector('.contactMenu');

const Contact = () => {
    contactMenu.classList.toggle('conta')
    chevronTwo.className === "chevron fas fa-chevron-up text-[10px]" ? chevronTwo.className = "chevron fas fa-chevron-down text-[10px]" : chevronTwo.className = "chevron fas fa-chevron-up text-[10px]";
}



var swiper = new Swiper(".swiperComp", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


var swiper = new Swiper(".LastCategory", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const aboutUs = [
    { name: "История", text: "1958 г. Мы изготовили первый корсет. 1985 г. Компания Standart Kortex при участии Variteks Orthopaedics увеличила свои производственные мощности. 1978 г. Наша компания Standard Korstex стала первой компанией, экспортирующей продукцию, и получила Сертификат признательности от ITO. 2004 г. В качестве концепции мы начали производство универсальной продукции группы Nexus. 2006 г. Мы получили награду в категории креативной продукции за группу продукции Nexus. 2007 г. Мы осуществили первый экспорт в Китай. 2008 г. Спустя 50 лет после основания, мы осуществляли экспорт в 50 стран мира. 2010 г. Мы переехали на современное производство площадью 8 000 квадратных метров. 2011г. Мы завершили регистрацию FDA нашей компании и нашей продукции. 2012 г. Мы получили сертификат качества ISO 13485. 2012 г. Благодаря внедрению системы бесшовного кругового вязания, мы внесли инновационные решения в такие изделия как: бандаж на колено, локоть, лодыжку и для поддержки плеча. 2015 г. Мы заняли 31-е место в категории «Фармацевтическая продукция» по данным экспорта (экспортёров) İKMİB. 2018 г. Мы заняли 4-е место в категории «Медицинский экспорт» по данным экспорта (экспортёров) İKMİB. 2019 г. Мы начали производство компрессионных чулок по индивидуальному заказу. 2019 г. Мы заняли 3-е место в категории «Медицинский экспорт» по данным экспорта (экспортёров) İKMİB." },
    { name: "Наша Производственная база", text: "Наша история, начавшаяся с небольшой мастерской в 1958 году, сегодня продолжается благодаря современным возможностям, квалифицированному персоналу и современной корпоративной структуре на нашем заводе, площадью более 16.000 м2." },
    { name: "Первый экспорт", text: "Наша компания Standard Korstex стала первой компанией, осуществляющей экспорт продукции, и получила Сертификат признательности от ITO." },
    { name: "Инновации Variteks", text: "Мы лидируем в отрасли по выпуску новых продуктов и товарных групп." }
]

// aboutUs.map(post => {
//     console.log(post.name);
// })

const bodyContainer = document.querySelectorAll('#body-container #item-body'),
    aboutUsInformation = document.getElementById('aboutUsInformation');

const dec = () => {
    aboutUsInformation.classList.remove('active')
}

const information = () => {

    aboutUsInformation.innerHTML = `
     <div class="information w-[85%] min-h-[90vh] rounded-2xl py-5 bg-white">
        <div class="infoNavbar w-full min-h-[10vh] flex justify-between items-center px-6 pb-5 border-b p-0 border-b-red-600">
            <h1 id="heading" class="font-bold  text-[35px] text-red-600">Sertificate</h1>
            <div class="w-[60px] h-[60px] text-white text-xl cursor-pointer active:bg-red-700 bg-red-600 rounded-xl flex justify-center items-center" onclick="dec()"><i class="fas fa-right-from-bracket"></i></div>
        </div>
        <div class="body-text p-6 w-full" id="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae sit laboriosam repudiandae nesciunt earum fugit neque dolores, optio debitis. Laudantium id itaque nulla! Maiores, et molestias. Eius cupiditate eveniet tenetur velit aliquam, veritatis eligendi, similique voluptates sequi fugit ullam!
        </div>
    </div>
    `

    aboutUsInformation.classList.toggle('active')
}

const heading = document.getElementById('heading'),
    paragraph = document.getElementById('paragraph')

bodyContainer.forEach(list => {
    console.log(list);
    list.addEventListener('click', () => {
        information();
        // console.log(list.parentElement.childNodes[3].innerText);
    })
})

var swiper = new Swiper(".aboutSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
        
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});