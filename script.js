const gallery = document.getElementById('gallery-grid');
const items = [
  { title: 'Gravür Plaketi 1', type: 'foto' },
  { title: 'Ahşap Gravür', type: 'foto' },
  { title: 'Cam Üstü İşlem', type: 'video' },
  { title: 'Metal Plaka', type: 'foto' },
  { title: 'Şerit Detayı', type: 'foto' },
  { title: 'Atölye Görüntüsü', type: 'video' },
];

items.forEach(item => {
  const div = document.createElement('div');
  div.className = 'gallery-item border border-stone-200 group cursor-pointer';
  div.innerHTML = `
    <div class="text-center opacity-0 group-hover:opacity-100 transition">
      <div class="text-2xl mb-1">${item.type === 'video' ? '🎥' : '🖼️'}</div>
      <div class="font-medium text-stone-700">${item.title}</div>
    </div>
  `;
  gallery.appendChild(div);
});