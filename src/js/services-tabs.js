'use strict';
function changeServices () {
    let tabsTitle = document.querySelectorAll('.tab-btn'),
        tabsContent = document.querySelectorAll('.tab'),
        tabName;

    tabsTitle.forEach(item => {
        item.addEventListener('click', selectTabTitle);
    });

    function selectTabTitle() {
        tabsTitle.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabsContent.forEach(item => {
            if (!item.classList.contains(tabName)) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    }
}
changeServices();
