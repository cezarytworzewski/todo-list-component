// - (UI-user interface) input
// - (UI) lista - dodawanie elementów listy
// - (Logic) manager - będzie łączył input z listą
const ENTER_KEY_CODE = 13;

class Manager {
  constructor(options) {
    this.settings = {
      $input: null,
      $button: null,
      $ul: null
    };
    Object.assign(this.settings, options);
    this.setup();
  }

  setup() {
    const $input = this.settings.$input;
    $input.addEventListener('keydown', (event) => {
      if (event.keyCode === ENTER_KEY_CODE) {
        this.render();
      }
    });
    this.settings.$button.addEventListener('click', () => this.render());
  }

  render() {
    const $li = document.createElement('li');
    $li.textContent = this.settings.$input.value;
    this.settings.$ul.appendChild($li);
    this.deleteTask($li);
    this.settings.$input.value = '';
  }

  deleteTask($li) {
    const $x = document.createElement('button');
    $x.style.backgroundColor = '#d43f3a';
    $x.style.marginLeft = '20px';
    $x.textContent = ' Usuń';
    $li.appendChild($x);
    $x.addEventListener('click', function () {
      $li.parentNode.removeChild($li);
    });
  }
}
