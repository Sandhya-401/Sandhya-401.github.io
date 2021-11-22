var accItem = document.getElementsByClassName('accordionitem');
var accHeading = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHeading.length; i++) {
    accHeading[i].addEventListener('click', toggleItem);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionitem close';
    }
    if (itemClass == 'accordionitem close') {
        this.parentNode.className = 'accordionitem open';
    }
}

