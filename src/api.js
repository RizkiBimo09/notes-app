const BASE_URL = 'https://notes-api.dicoding.dev/v2';

/**
 * Mengambil daftar catatan (notes) dari API
 */
async function getActiveNotes() {
  try {
    const response = await fetch(`${BASE_URL}/notes`);
    const result = await response.json();
    if (result.status !== 'success') {
      throw new Error(result.message);
    }
    return result.data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    alert('Error fetching active notes: ' + error.message);
    return [];
  }
}

async function getArchivedNotes() {
  try {
    const response = await fetch(`${BASE_URL}/notes/archived`);
    const result = await response.json();
    if (result.status !== 'success') {
      throw new Error(result.message);
    }
    return result.data;
  } catch (error) {
    console.error('Error fetching archived notes:', error);
    alert('Error fetching achived notes: ' + error.message);
    return [];
  }
}

/**
 * Menambahkan catatan baru
 */
async function addNote(title, body) {
  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });
    const result = await response.json();
    if (result.status !== 'success') {
      throw new Error(result.message);
    }
    return result.data;
  } catch (error) {
    console.error('Error adding note:', error);
    alert('Error adding note: ' + error.message);
    return null;
  }
}

/**
 * Menghapus catatan berdasarkan ID
 */
async function deleteNote(id) {
  try {
    const response = await fetch(`${BASE_URL}/notes/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    if (result.status !== 'success') {
      throw new Error(result.message);
    }
    return true;
  } catch (error) {
    console.error('Error deleting note:', error);
    alert('Error deleting note: ' + error.message);
    return false;
  }
}

/**
 * Mengarsipkan catatan
 */
async function archiveNote(id) {
  try {
    const response = await fetch(`${BASE_URL}/notes/${id}/archive`, {
      method: 'POST',
    });
    const result = await response.json();
    if (result.status !== 'success') {
      throw new Error(result.message);
    }
    return true;
  } catch (error) {
    console.error('Error archiving note:', error);
    alert('Error archiving note: ' + error.message);
    return false;
  }
}

/**
 * Mengembalikan catatan dari arsip
 */
async function unarchiveNote(id) {
  try {
    const response = await fetch(`${BASE_URL}/notes/${id}/unarchive`, {
      method: 'POST',
    });
    const result = await response.json();
    if (result.status !== 'success') {
      throw new Error(result.message);
    }
    return true;
  } catch (error) {
    console.error('Error unarchiving note:', error);
    alert('Error unarchiving note: ' + error.message);
    return false;
  }
}

export {
  getActiveNotes,
  getArchivedNotes,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
};
