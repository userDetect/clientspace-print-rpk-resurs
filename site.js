const form = document.querySelector('#brief');
const product = form.elements.namedItem('product');
const summary = document.querySelector('#brief-summary');
const output = document.querySelector('#summary-text');
const status = document.querySelector('#copy-status');
const order = document.querySelector('#order');
const catalogSearch = document.querySelector('#catalog-search');
const entries = [...document.querySelectorAll('[data-catalog-item]')];

function syncFields() {
  const selected = String(product.selectedIndex - 1);
  for (const label of form.querySelectorAll('[data-products]')) {
    const matches = label.dataset.products.split(',').includes(selected);
    label.hidden = !matches;
    label.querySelector('input, select, textarea').disabled = !matches;
  }
}

product.addEventListener('change', syncFields);
syncFields();

catalogSearch.addEventListener('input', () => {
  const query = catalogSearch.value.trim().toLocaleLowerCase('ru');
  for (const entry of entries) entry.hidden = !entry.textContent.toLocaleLowerCase('ru').includes(query);
  document.querySelector('#no-products').hidden = entries.some(entry => !entry.hidden);
});
let preparedBrief = '';

for (const button of document.querySelectorAll('[data-product]')) {
  button.addEventListener('click', () => {
    product.value = button.dataset.product;
    syncFields();
    summary.hidden = true;
    order.scrollIntoView({ block: 'start' });
    product.focus({ preventScroll: true });
  });
}

form.addEventListener('input', () => {
  summary.hidden = true;
  status.textContent = '';
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const values = new FormData(form);
  const lines = [];
  for (const field of form.querySelectorAll('[name]')) {
    const value = values.get(field.name);
    const answer = value instanceof File ? value.name : String(value || '').trim();
    if (answer) lines.push(field.labels[0].querySelector('span').textContent + ' — ' + answer);
  }
  preparedBrief = [document.querySelector('meta[name="business"]').content, ...lines].join('\n');
  output.textContent = preparedBrief;
  status.textContent = 'Данные остались в браузере. Файлы не загружались.';
  summary.hidden = false;
  summary.focus();
});

document.querySelector('#copy-brief').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(preparedBrief);
    status.textContent = 'Бриф скопирован.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(output);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Текст выделен. Скопируйте его сочетанием клавиш.';
  }
});

document.querySelector('#download-brief').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob([preparedBrief], {type: 'text/plain;charset=utf-8'}));
  const download = document.createElement('a');
  download.download = 'brief.txt';
  download.href = url;
  download.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
