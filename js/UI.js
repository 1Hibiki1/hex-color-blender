class UI{
    constructor(){
        this.outEl = document.querySelector('.card');
        this.outList = document.querySelector('.colorList');
        this.alert = document.querySelector('.alert');
    }

    showAlert = text => {
        this.alert.innerText = `Copied ${text} to clipboard! :)`;
        this.alert.classList.add('showAlert');
    }

    clearAlert = () => {
        this.alert.classList.remove('showAlert');
    }

    addColors = colorList => {
        let out = '', outl = '';
        colorList.forEach((color, index) => {
            out += `
            <div class="colorWrapper">
                <div class="color" style="background: ${color};" data-clipboard-text="${color}"></div>
                <p class="number">${index+1}</p>
            </div>
            `;
            outl += `<p class="colorListText">${index+1}) ${color}</p>`;
        });
        this.outEl.innerHTML = out;
        this.outList.innerHTML = outl;
    }
}

const ui = new UI();
export default ui;