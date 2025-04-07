const json = '[{"title": "Home","url" : "/"},{"title" : "Producten","url" : "/producten/"},{"title": "Over ons","url" : "/overons/"},{"title": "Contact","url" : "/contact/"}]';
const menuItems = JSON.parse(json);

const ul = document.createElement('ul');

menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.title;
    a.href = item.url;
    li.appendChild(a);
    ul.appendChild(li);
});

document.body.appendChild(ul);