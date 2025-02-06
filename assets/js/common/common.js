/* guide-style > nav */
const wrap = document.querySelector(".wrap");
const navigation = document.querySelector(".navigation");
const navigationItems = navigation.querySelectorAll(".navigation-list li");
navigationItems.forEach((item) => {
  const targetLink = item.querySelector("a.navigation__link");
  targetLink.addEventListener("click", (event) => {
    navigationItems.forEach((li) => li.classList.remove("is-active"));
    item.classList.add("is-active");
  });
});

/* guide-style > button : nav more*/
const navigationMore = navigation.querySelector(".navigation__more");
if (navigationMore) {
  navigationMore.addEventListener("click", (event) => {
    if (!navigation.classList.contains("is-active") && !wrap.classList.contains("nav-active")) {
      wrap.classList.add("nav-active");
      navigation.classList.add("is-active");
    } else {
      wrap.classList.remove("nav-active");
      navigation.classList.remove("is-active");
    }
  });
}

/* guide-style > accordion */
const accordion = document.querySelectorAll(".guide-style-accordion");
if(accordion) {
  accordion.forEach((accordion) => {
    const accordionBtn = accordion.querySelector(".guide-style-accordion__button");
    const accordionCont = accordion.querySelector(".guide-style-accordion__content");
    accordionBtn.addEventListener("click", (event) => {
      const accordionWrap = accordionBtn.closest(".guide-style-accordion");
      if(!accordionWrap.classList.contains("is-active")) {
        accordionWrap.classList.add("is-active");
      } else {
        accordionWrap.classList.remove("is-active");
      }
    })
  });
}