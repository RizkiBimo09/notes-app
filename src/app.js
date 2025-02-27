// Impor file CSS agar diproses oleh Webpack
import './style.css';

// Impor fungsi-fungsi API (termasuk yang baru)
import {
  getActiveNotes,
  getArchivedNotes,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from './api';

// Impor anime.js untuk animasi
import anime from 'animejs';

/* =======================
   CUSTOM ELEMENT: Loading Indicator
   ======================= */
class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          font-weight: bold;
        }
      </style>
      <div class="loading">Loading...</div>
    `;
  }
}
customElements.define('loading-indicator', LoadingIndicator);

/* =======================
   Ambil elemen DOM yang dibutuhkan
   ======================= */
const notesContainer = document.getElementById('notes-container');
const archivedContainer = document.getElementById('archived-container');
const addForm = document.getElementById('add-form');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');

/**
 * Fungsi untuk menampilkan daftar catatan aktif dan arsip.
 */
async function renderNotes() {
  // Tampilkan indikator loading di kedua container
  notesContainer.innerHTML = '<loading-indicator></loading-indicator>';
  archivedContainer.innerHTML = '<loading-indicator></loading-indicator>';

  // Ambil catatan aktif dan arsip dari API
  const activeNotes = await getActiveNotes();
  const archivedNotes = await getArchivedNotes();

  // Render catatan aktif
  notesContainer.innerHTML = activeNotes.length
    ? activeNotes
        .map(
          (note) => `
    <div class="note">
          <h3>${note.title}</h3>
          <p>${note.body}</p>
          <div class="note-actions">
            <button class="archive-btn" onclick="handleArchive('${note.id}')">Arsipkan</button>
            <button class="delete-btn" onclick="handleDelete('${note.id}')">Hapus</button>
          </div>
        </div>
      `
        )
        .join('')
    : '<p>Tidak ada catatan aktif.</p>';

  // Render catatan arsip
  archivedContainer.innerHTML = archivedNotes.length
    ? archivedNotes
        .map(
          (note) => `
        <div class="note archived">
          <h3>${note.title}</h3>
          <p>${note.body}</p>
          <div class="note-actions">
            <button class="unarchive-btn" onclick="handleUnarchive('${note.id}')">Pulihkan</button>
            <button class="delete-btn" onclick="handleDelete('${note.id}')">Hapus</button>
          </div>
        </div>
      `
        )
        .join('')
    : '<p>Tidak ada catatan arsip.</p>';

  // anime.js
  anime({
    targets: '.note',
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: anime.stagger(100), // Setiap elemen animasi bergeser dengan delay 100ms
  });
}

/**
 * Event listener untuk form tambah catatan.
 */
addForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (!title || !body) {
    alert('Judul dan isi catatan tidak boleh kosong.');
    return;
  }

  // Tampilkan loading indicator saat menambahkan catatan
  notesContainer.innerHTML = '<loading-indicator></loading-indicator>';

  await addNote(title, body);

  titleInput.value = '';
  bodyInput.value = '';

  renderNotes();
});

/**
 * Fungsi global untuk menghapus catatan.
 */
window.handleDelete = async (id) => {
  const confirmed = confirm('Yakin ingin menghapus catatan ini?');
  if (!confirmed) return;

  notesContainer.innerHTML = '<loading-indicator></loading-indicator>';
  await deleteNote(id);
  renderNotes();
};

/**
 * Fungsi global untuk mengarsipkan catatan.
 */
window.handleArchive = async (id) => {
  const confirmed = confirm('Yakin ingin arsip catatan ini?');
  if (!confirmed) return;

  notesContainer.innerHTML = '<loading-indicator></loading-indicator>';
  await archiveNote(id);
  renderNotes();
};

/**
 * Fungsi global untuk memulihkan (unarchive) catatan.
 */
window.handleUnarchive = async (id) => {
  const confirmed = confirm('Yakin ingin memulihkan catatan ini?');
  if (!confirmed) return;

  notesContainer.innerHTML = '<loading-indicator></loading-indicator>';
  await unarchiveNote(id);
  renderNotes();
};

document.addEventListener('DOMContentLoaded', renderNotes);
