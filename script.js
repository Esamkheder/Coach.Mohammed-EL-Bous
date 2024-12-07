  //plans contents
  function showContent(id) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
        content.style.opacity = '0';
    });
    const activeContent = document.getElementById(id);
    activeContent.classList.add('active');
    setTimeout(() => {
        activeContent.style.opacity = '1';
    }, 10);
}


//Alternatives Calculator contents 
// وظيفة لعرض المحتوى بناءً على التاب المحدد
function showContent(contentId) {

  const allContents = document.querySelectorAll('.food_content');
  allContents.forEach(content => content.classList.remove('active'));

  const selectedContent = document.getElementById(contentId);
  selectedContent.classList.add('active');

  fillAlternativeFoodDropdown(contentId);
}

function fillAlternativeFoodDropdown(tabId) {
  const dropdown = document.getElementById('select-alternative-food');
  dropdown.innerHTML = '';

  const selectedTabContent = document.getElementById(tabId);
  const selectElement = selectedTabContent.querySelector('select');
  
  const options = selectElement.querySelectorAll('option');
  

  options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.textContent;
      dropdown.appendChild(optionElement);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  showContent('content1'); 
});



//Certification
new Swiper('.card-wrapper', {
    // Optional parameters

    loop: true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
      0:{
        slidesPerView: 1
      } ,
      768:{
        slidesPerView: 2
      } ,
      900:{
        slidesPerView: 3
      } ,
    }
  
});

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const checkbox = document.getElementById("check");
  
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        checkbox.checked = false; // Uncheck the checkbox to close the menu
      });
    });
  });
  const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Bodybilding', 'Fat Loss','Gain weight'],
    typeSpeed: 60,
    backSpeed:60,
    backDelay: 100,
    loop:true

  });
