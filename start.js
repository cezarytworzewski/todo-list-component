function start() {
  new Manager({
    $input: document.querySelector('.todo-list-input-1'),
    $button: document.querySelector('.add-button-to-list-1'),
    $ul: document.querySelector('.todo-list-1')
  });

  new Manager({
    $input: document.querySelector('.todo-list-input-2'),
    $button: document.querySelector('.add-button-to-list-2'),
    $ul: document.querySelector('.todo-list-2')
  });

  new Manager({
    $input: document.querySelector('.todo-list-input-3'),
    $button: document.querySelector('.add-button-to-list-3'),
    $ul: document.querySelector('.todo-list-3')
  });
}
window.addEventListener('DOMContentLoaded', start);
