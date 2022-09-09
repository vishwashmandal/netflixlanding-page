const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item')


for(let item of tabItems){
    item.addEventListener("click",  function(e) {
        for(let item of  tabItems){item.classList.remove('tab-border');}
        for(let item of tabContentItems){item.classList.remove('show');}
        const tabContentItem = document.querySelector(`#${this.id}-content`);
        tabContentItem.classList.add('show')
        
        
      this.classList.add('tab-border');
    
    });
}