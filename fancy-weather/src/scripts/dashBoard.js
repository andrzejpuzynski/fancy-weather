import { getLinkToImage } from './getLinkToImage.js';

export default class DashBoard {
    constructor() {
        this.isButtonDegreeCelciusActive = true;
        this.isButtonDegreeFarenheitActive = false;
        this.isButtonLanguageEnActive = true;
        this.isButtonLanguagePlActive = false;
        this.isLanguageListOpen = false;
        this.isLanguageEnActive = true;
        this.isLanguagePlAcitve = false;
        this.renderDashboard();
        this.setActiveButtons();
        this.setActiveListLanguage()
        this.addDashboardEventListeners();
    }

    renderDashboard() {
        const dashboard = document.querySelector('.dashboard');
        
        const dashboardButtons = document.createElement('div');
        dashboardButtons.classList.add('dashboard-buttons');

        const dashboardSearch = document.createElement('div');
        dashboardSearch.classList.add('dashboard-search');

        const buttonRefreshBackground = this.renderRefreshBackgroundButton();
        const buttonsLanguageList = this.renderButtonsLanguageList();
        const buttonDegreeCelsius = this.renderButtonDegreeCelcius();
        const buttonDegreeFarenheit = this.renderButtonDegreeFarenheit();

        const inputSearch = this.renderSearchInput();
        const buttonSearch = this.renderSearchButton();

        dashboardButtons.appendChild(buttonRefreshBackground);
        dashboardButtons.appendChild(buttonsLanguageList);
        dashboardButtons.appendChild(buttonDegreeCelsius);
        dashboardButtons.appendChild(buttonDegreeFarenheit);

        dashboardSearch.appendChild(inputSearch);
        dashboardSearch.appendChild(buttonSearch);

        dashboard.appendChild(dashboardButtons);
        dashboard.appendChild(dashboardSearch);

    }

    renderRefreshBackgroundButton() {
        this.buttonRefreshBackground = document.createElement('button');
        this.buttonRefreshBackground.className = 'button dashboard-button-background';
    
        this.buttonRefreshBackgroundSpinner = document.createElement('div');
        this.buttonRefreshBackgroundSpinner.className = 'spinner';
        
        this.buttonRefreshBackgroundButtonIcon = document.createElement('i');
        this.buttonRefreshBackgroundButtonIcon.className = 'fas fa-sync-alt';

        this.buttonRefreshBackground.appendChild(this.buttonRefreshBackgroundSpinner);
        this.buttonRefreshBackgroundSpinner.appendChild(this.buttonRefreshBackgroundButtonIcon);

        return this.buttonRefreshBackground;
    }

    renderButtonsLanguageList() {
        this.buttonsLanguageContainer = document.createElement('div');
        this.buttonsLanguageContainer.className = 'dashboard-buttons-language';

        this.buttonLanguageListTop = document.createElement('button');
        this.buttonLanguageListTop.className = 'button dashboard-button-language-top';

        this.buttonLanguageListTopIcon = document.createElement('i');
        this.buttonLanguageListTopIcon.className = 'fas fa-chevron-down arrow-down';

        this.buttonLanguageList = document.createElement('div');
        this.buttonLanguageList.className = 'dashboard-buttons-language-list';
        
        this.buttonLanguageEn = document.createElement('button');
        this.buttonLanguageEn.className = 'dashboard-button-language-list button';
        this.buttonLanguageEn.innerText = 'en';
        
        this.buttonLanguagePl = document.createElement('button');
        this.buttonLanguagePl.className = 'dashboard-button-language-list button';
        this.buttonLanguagePl.innerText = 'pl';
        
        this.buttonLanguageList.appendChild(this.buttonLanguageEn);
        this.buttonLanguageList.appendChild(this.buttonLanguagePl);
        
        this.buttonsLanguageContainer.appendChild(this.buttonLanguageListTopIcon);
        this.buttonsLanguageContainer.appendChild(this.buttonLanguageListTop);
        this.buttonsLanguageContainer.appendChild(this.buttonLanguageList);

        return this.buttonsLanguageContainer;
    }

    renderButtonDegreeCelcius() {
        this.buttonDegreeCelcius = document.createElement('button');
        this.buttonDegreeCelcius.className = 'button dashboard-buttons-c';
        this.buttonDegreeCelcius.innerText = "°C";
        return this.buttonDegreeCelcius;
    }
    
    renderButtonDegreeFarenheit() {
        this.buttonDegreeFarenheit = document.createElement('button');
        this.buttonDegreeFarenheit.className = 'button dashboard-buttons-f';
        this.buttonDegreeFarenheit.innerText = "°F";
        return this.buttonDegreeFarenheit;
    } 
    
    renderSearchInput() {
        this.inputSearch = document.createElement('input');
        this.inputSearch.className = 'dashboard-search-input';
        this.inputSearch.setAttribute("type", "search");
        this.inputSearch.setAttribute("name", "search-city");
        this.inputSearch.setAttribute("required", "");
        this.inputSearch.setAttribute("placeholder", "Search city or ZIP");

        return this.inputSearch;  
    }

    renderSearchButton() {
        this.buttonSearch = document.createElement('button');
        this.buttonSearch.className = 'button dashboard-search-button';
        this.buttonSearch.innerText = 'search';

        return this.buttonSearch;  
    }

    setActiveButtons() {
        this.isButtonDegreeCelciusActive
            ? this.buttonDegreeCelcius.classList.remove('inactive')
            : this.buttonDegreeCelcius.classList.add('inactive');
        this.isButtonDegreeFarenheitActive
            ? this.buttonDegreeFarenheit.classList.remove('inactive')
            : this.buttonDegreeFarenheit.classList.add('inactive');
        this.isButtonLanguageEnActive
            ? this.buttonLanguageEn.classList.remove('inactive')
            : this.buttonLanguageEn.classList.add('inactive');
        this.isButtonLanguagePlActive
            ? this.buttonLanguagePl.classList.remove('inactive')
            : this.buttonLanguagePl.classList.add('inactive');
        if (this.isLanguageListOpen) {
            this.buttonLanguageListTop.classList.add('top-open');
            this.buttonLanguageListTopIcon.classList.add('arrow-down-open');
            this.buttonLanguageList.classList.add('list-open')
        } else {
            this.buttonLanguageListTop.classList.remove('top-open');
            this.buttonLanguageListTopIcon.classList.remove('arrow-down-open');
            this.buttonLanguageList.classList.remove('list-open')
        };
        if (this.isLanguageEnActive) {
            this.buttonLanguageEn.classList.remove('inactive');
            this.buttonLanguagePl.classList.add('inactive');
        } else {
            this.buttonLanguagePl.classList.remove('inactive');
            this.buttonLanguageEn.classList.add('inactive');       
        }
    }

    setActiveListLanguage() {
        let activeLanguage = this.isLanguageEnActive ? 'en' : 'pl';
        this.buttonLanguageListTop.innerHTML = activeLanguage;
    }

    addDashboardEventListeners() {
    // /-------------------------
        this.buttonRefreshBackground.addEventListener('click', (e) => {
            this.buttonRefreshBackgroundSpinner.classList.add('round');
            this.buttonRefreshBackground.classList.toggle('inactive')
            getLinkToImage();
            setTimeout(() => {
                this.buttonRefreshBackgroundSpinner.classList.remove('round');
                this.buttonRefreshBackground.classList.toggle('inactive')
            },
            1000)
        });

        this.buttonRefreshBackground.addEventListener('click', (e) => {
            getLinkToImage();
        })
        this.buttonDegreeCelcius.addEventListener('click', (e) => {
            if (!this.isButtonDegreeCelciusActive) {
                this.isButtonDegreeCelciusActive = !this.isButtonDegreeCelciusActive;
                this.isButtonDegreeFarenheitActive = !this.isButtonDegreeFarenheitActive;
                this.setActiveButtons();
                // this.changeDegrees(this.isButtonDegreeCelciusActive);
            }
        });
        this.buttonDegreeFarenheit.addEventListener('click', (e) => {
            if (!this.isButtonDegreeFarenheitActive) {
                this.isButtonDegreeCelciusActive = !this.isButtonDegreeCelciusActive;
                this.isButtonDegreeFarenheitActive = !this.isButtonDegreeFarenheitActive;
                this.setActiveButtons();
                // this.changeDegrees(this.isButtonDegreeCelciusActive);
            }
        });
        this.buttonLanguageListTop.addEventListener('click', (e) => {
            this.isLanguageListOpen = !this.isLanguageListOpen;
            this.setActiveButtons();
        });
        this.buttonLanguageListTopIcon.addEventListener('click', (e) => {
            this.isLanguageListOpen = !this.isLanguageListOpen;
            this.setActiveButtons();
        });
        this.buttonLanguageEn.addEventListener('click', (e) => {
            if (!this.isLanguageEnActive) {
                this.isLanguageEnActive = !this.isLanguageEnActive;
                this.isLanguagePlActive = !this.isLanguagePlActive;
            }
            this.isLanguageListOpen = !this.isLanguageListOpen;
            this.setActiveButtons();
            this.setActiveListLanguage()
        });
        this.buttonLanguagePl.addEventListener('click', (e) => {
            if (!this.isLanguagePlActive) {
                this.isLanguageEnActive = !this.isLanguageEnActive;
                this.isLanguagePlActive = !this.isLanguagePlActive;
            }
            this.isLanguageListOpen = !this.isLanguageListOpen;
            this.setActiveButtons();
            this.setActiveListLanguage();
        });
        this.buttonSearch.addEventListener('click', (e) => {
            if(this.inputSearch.value !== "Search city or ZIP") {
                let nextSearchLocationPlace = this.inputSearch.value;
                console.log(nextSearchLocationPlace);
            }
            this.inputSearch.value = "Search city or ZIP";
        });
        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 13) {
                if(this.inputSearch.value !== "Search city or ZIP") {
                    let nextSearchLocationPlace = this.inputSearch.value;
                    console.log(nextSearchLocationPlace);
                }
                this.inputSearch.value = "Search city or ZIP";
            }
        });
    }

}