"use strict"
const tabItem= document.querySelectorAll('.tabs_btn_item');
const tabContent =document.querySelectorAll('.tabs_content_item');


tabItem.forEach(element =>{
    element.addEventListener('click',openItem);
});
function openItem(e){
    const tabTarget =e.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(item =>{
        item.classList.remove('tabs_btn_item-active');
    });

    tabContent.forEach(item =>{
        item.classList.remove('tabs_content_item-active');
    });

    tabTarget.classList.add('tabs_btn_item-active');
    document.querySelector(`#${button}`).classList.add('tabs_content_item-active');
}