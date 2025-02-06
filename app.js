/**
 * Data dummy.
 * Struktur data: id, title, body, createdAt, archived.
 */
const notes = [
  {
    id: 'notes-jT-jjsyz61J8XKiI',
    title: 'Welcome to Notes, Dimas!',
    body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
    createdAt: '2022-07-28T10:03:12.594Z',
    archived: false,
  },
  {
    id: 'notes-aB-cdefg12345',
    title: 'Meeting Agenda',
    body: 'Discuss project updates and assign tasks for the upcoming week.',
    createdAt: '2022-08-05T15:30:00.000Z',
    archived: false,
  },
  {
    id: 'notes-XyZ-789012345',
    title: 'Shopping List',
    body: 'Milk, eggs, bread, fruits, and vegetables.',
    createdAt: '2022-08-10T08:45:23.120Z',
    archived: false,
  },
  {
    id: 'notes-1a-2b3c4d5e6f',
    title: 'Personal Goals',
    body: 'Read two books per month, exercise three times a week, learn a new language.',
    createdAt: '2022-08-15T18:12:55.789Z',
    archived: false,
  },
  {
    id: 'notes-LMN-456789',
    title: 'Recipe: Spaghetti Bolognese',
    body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
    createdAt: '2022-08-20T12:30:40.200Z',
    archived: false,
  },
  {
    id: 'notes-QwErTyUiOp',
    title: 'Workout Routine',
    body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
    createdAt: '2022-08-25T09:15:17.890Z',
    archived: false,
  },
  {
    id: 'notes-abcdef-987654',
    title: 'Book Recommendations',
    body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
    createdAt: '2022-09-01T14:20:05.321Z',
    archived: false,
  },
  {
    id: 'notes-zyxwv-54321',
    title: 'Daily Reflections',
    body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
    createdAt: '2022-09-07T20:40:30.150Z',
    archived: false,
  },
  {
    id: 'notes-poiuyt-987654',
    title: 'Travel Bucket List',
    body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
    createdAt: '2022-09-15T11:55:44.678Z',
    archived: false,
  },
  {
    id: 'notes-asdfgh-123456',
    title: 'Coding Projects',
    body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
    createdAt: '2022-09-20T17:10:12.987Z',
    archived: false,
  },
  {
    id: 'notes-5678-abcd-efgh',
    title: 'Project Deadline',
    body: 'Complete project tasks by the deadline on October 1st.',
    createdAt: '2022-09-28T14:00:00.000Z',
    archived: false,
  },
  {
    id: 'notes-9876-wxyz-1234',
    title: 'Health Checkup',
    body: 'Schedule a routine health checkup with the doctor.',
    createdAt: '2022-10-05T09:30:45.600Z',
    archived: false,
  },
  {
    id: 'notes-qwerty-8765-4321',
    title: 'Financial Goals',
    body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
    createdAt: '2022-10-12T12:15:30.890Z',
    archived: false,
  },
  {
    id: 'notes-98765-54321-12345',
    title: 'Holiday Plans',
    body: 'Research and plan for the upcoming holiday destination.',
    createdAt: '2022-10-20T16:45:00.000Z',
    archived: false,
  },
  {
    id: 'notes-1234-abcd-5678',
    title: 'Language Learning',
    body: 'Practice Spanish vocabulary for 30 minutes every day.',
    createdAt: '2022-10-28T08:00:20.120Z',
    archived: false,
  },
];

/* =======================
   CUSTOM ELEMENT: App Bar
   ======================= */
class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background-color: #4CAF50;
          color: white;
          padding: 1rem;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      </style>
      <header>
        <h1>Notes App</h1>
      </header>
    `;
  }
}
customElements.define("app-bar", AppBar);

/* =========================
   CUSTOM ELEMENT: Note Item
   ========================= */
class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  // Mengamati atribut custom (custom attributes)
  static get observedAttributes() {
    return ["note-id", "title", "body", "created-at"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const title = this.getAttribute("title") || "";
    const body = this.getAttribute("body") || "";
    const createdAt = this.getAttribute("created-at") || "";
    this.shadowRoot.innerHTML = `
      <style>
        .note {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .note h2 {
          margin: 0 0 0.5rem 0;
          font-size: 1.25rem;
        }
        .note p {
          flex-grow: 1;
          margin: 0;
          font-size: 1rem;
        }
        .note time {
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: #777;
          text-align: right;
        }
      </style>
      <div class="note">
        <h2>${title}</h2>
        <p>${body}</p>
        <time>${new Date(createdAt).toLocaleString()}</time>
      </div>
    `;
  }
}
customElements.define("note-item", NoteItem);

/* =======================
   CUSTOM ELEMENT: Note Form
   ======================= */
class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        form {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
        }
        label {
          display: flex;
          flex-direction: column;
          font-size: 0.9rem;
        }
        input, textarea {
          padding: 0.5rem;
          margin-top: 0.25rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        button {
          padding: 0.5rem;
          border: none;
          border-radius: 4px;
          background-color: #4CAF50;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          margin-top: 0.5rem;
        }
        button:hover {
          background-color: #45a049;
        }
        .error {
          color: red;
          font-size: 0.8rem;
          margin-top: 0.25rem;
        }
      </style>
      <form id="noteForm">
        <label>
          Judul:
          <input type="text" id="title" name="title" required />
          <span id="titleError" class="error"></span>
        </label>
        <label>
          Isi:
          <textarea id="body" name="body" rows="4" required></textarea>
          <span id="bodyError" class="error"></span>
        </label>
        <button type="submit">Tambah Catatan</button>
      </form>
    `;
  }
  connectedCallback() {
    const form = this.shadowRoot.getElementById("noteForm");
    const titleInput = this.shadowRoot.getElementById("title");
    const bodyInput = this.shadowRoot.getElementById("body");
    const titleError = this.shadowRoot.getElementById("titleError");
    const bodyError = this.shadowRoot.getElementById("bodyError");

    // Realtime Validation untuk input judul
    titleInput.addEventListener("input", () => {
      if (titleInput.value.trim() === "") {
        titleError.textContent = "Judul tidak boleh kosong";
      } else {
        titleError.textContent = "";
      }
    });
    // Realtime Validation untuk input isi catatan
    bodyInput.addEventListener("input", () => {
      if (bodyInput.value.trim() === "") {
        bodyError.textContent = "Isi catatan tidak boleh kosong";
      } else {
        bodyError.textContent = "";
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      if (titleInput.value.trim() === "") {
        titleError.textContent = "Judul tidak boleh kosong";
        valid = false;
      }
      if (bodyInput.value.trim() === "") {
        bodyError.textContent = "Isi catatan tidak boleh kosong";
        valid = false;
      }
      if (!valid) return;

      // Buat catatan baru
      const newNote = {
        id: Date.now(),
        title: titleInput.value,
        body: bodyInput.value,
        archived: false,
        createdAt: new Date().toISOString(),
      };

      // Kirim custom event untuk menambahkan catatan baru
      this.dispatchEvent(
        new CustomEvent("note-added", {
          detail: newNote,
          bubbles: true,
          composed: true,
        })
      );

      // Reset formulir
      form.reset();
    });
  }
}
customElements.define("note-form", NoteForm);

/* ========================
   LOGIKA APLIKASI UTAMA
   ======================== */
   document.addEventListener("DOMContentLoaded", () => {
    const notesContainer = document.getElementById("notes-container");

    // Fungsi untuk merender daftar catatan menggunakan innerHTML
    function renderNotes() {
      let notesHTML = "";
      notes.forEach((note) => {
        notesHTML += `
          <note-item
            note-id="${note.id}"
            title="${note.title}"
            body="${note.body}"
            created-at="${note.createdAt}">
          </note-item>
        `;
      });
      notesContainer.innerHTML = notesHTML;
    }

    renderNotes();

    // Menangani event "note-added" dari <note-form>
    document.body.addEventListener("note-added", (e) => {
      notes.push(e.detail);
      renderNotes();
    });
  });
