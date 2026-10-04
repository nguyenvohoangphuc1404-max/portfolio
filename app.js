import { projects } from './data.js';

const ul = document.querySelector('#project-list');
const tpl = document.querySelector('#project-card');
const bar = document.querySelector('#filters');

function render(list) {
  ul.textContent = '';
  for (const p of list) {
    const li = tpl.content.cloneNode(true);
    li.querySelector('h3').textContent = p.title;
    li.querySelector('.desc').textContent = p.description;
    li.querySelector('.tags-badge').textContent = p.tags.join(' • ');
    
    const link = li.querySelector('.card-link');
    if (p.link && p.link !== '#') {
      link.href = p.link;
    } else {
      link.remove();
    }

    ul.append(li);
  }
}

// Khởi tạo hiển thị ban đầu
render(projects);

// Tạo các nút lọc theo Tags
const allTags = [...new Set(projects.flatMap((p) => p.tags))];

for (const tag of ['tất cả', ...allTags]) {
  const b = document.createElement('button');
  b.textContent = tag;
  b.dataset.tag = tag === 'tất cả' ? 'all' : tag;
  if (b.dataset.tag === 'all') b.classList.add('active');
  bar.append(b);
}

// Bấm nút để lọc danh sách
bar.addEventListener('click', (e) => {
  const target = e.target.closest('button');
  if (!target) return;

  const tag = target.dataset.tag;
  if (!tag) return;

  // Cập nhật trạng thái active của nút
  bar.querySelectorAll('button').forEach((btn) => btn.classList.remove('active'));
  target.classList.add('active');

  const filtered = tag === 'all'
    ? projects
    : projects.filter((p) => p.tags.includes(tag));

  render(filtered);
});