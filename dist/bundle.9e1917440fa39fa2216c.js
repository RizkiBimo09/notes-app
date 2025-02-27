(() => {
  "use strict";
  var n = {
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], s = 0; s < n.length; s++) {
            var d = n[s],
              c = r.base ? d[0] + r.base : d[0],
              l = a[c] || 0,
              u = "".concat(c, " ").concat(l);
            a[c] = l + 1;
            var p = t(u),
              m = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(m);
            else {
              var f = o(m, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: u, updater: f, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              e[s].references--;
            }
            for (var d = r(n, o), c = 0; c < a.length; c++) {
              var l = t(a[c]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = d;
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      208: (n, e, t) => {
        t.d(e, { A: () => s });
        var r = t(354),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o());
        i.push([
          n.id,
          "/* Global styles */\nbody {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background-color: #f0f4f8;\n  color: #333;\n}\n\nmain {\n  max-width: 1200px;\n  margin: auto;\n  padding: 1rem;\n}\n\n/* Container daftra catatan */\n#notes-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n/* Responsive */\n@media (max-width: 600px) {\n  main {\n    padding: 0.5rem;\n  }\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA,kBAAkB;AAClB;EACE,SAAS;EACT,8BAA8B;EAC9B,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;AACf;;AAEA,6BAA6B;AAC7B;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,gBAAgB;AAClB;;AAEA,eAAe;AACf;EACE;IACE,eAAe;EACjB;AACF",
            sourcesContent: [
              "/* Global styles */\r\nbody {\r\n  margin: 0;\r\n  font-family: Arial, sans-serif;\r\n  background-color: #f0f4f8;\r\n  color: #333;\r\n}\r\n\r\nmain {\r\n  max-width: 1200px;\r\n  margin: auto;\r\n  padding: 1rem;\r\n}\r\n\r\n/* Container daftra catatan */\r\n#notes-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  gap: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n/* Responsive */\r\n@media (max-width: 600px) {\r\n  main {\r\n    padding: 0.5rem;\r\n  }\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]);
        const s = i;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var d = this[s][0];
                  null != d && (i[d] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var l = [].concat(n[c]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      354: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              a = "/*# ".concat(o, " */");
            return [e].concat([a]).join("\n");
          }
          return [e].join("\n");
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return n[r](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0);
  var r = t(72),
    o = t.n(r),
    a = t(825),
    i = t.n(a),
    s = t(659),
    d = t.n(s),
    c = t(56),
    l = t.n(c),
    u = t(540),
    p = t.n(u),
    m = t(113),
    f = t.n(m),
    h = t(208),
    b = {};
  (b.styleTagTransform = f()),
    (b.setAttributes = l()),
    (b.insert = d().bind(null, "head")),
    (b.domAPI = i()),
    (b.insertStyleElement = p()),
    o()(h.A, b),
    h.A && h.A.locals && h.A.locals;
  const g = "https://notes-api.dicoding.dev/v2";
  class A extends HTMLElement {
    constructor() {
      super(),
        this.attachShadow({ mode: "open" }),
        (this.shadowRoot.innerHTML =
          "\n      <style>\n        header {\n          background-color: #A9B5DF;\n          color: #2D336B;\n          padding: 1rem;\n          text-align: center;\n          box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n        }\n      </style>\n      <header>\n        <h1>Notes App</h1>\n      </header>\n    ");
    }
  }
  customElements.define("app-bar", A);
  class y extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["note-id", "title", "body", "created-at"];
    }
    attributeChangedCallback(n, e, t) {
      this.render();
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const n = this.getAttribute("title") || "",
        e = this.getAttribute("body") || "",
        t = this.getAttribute("created-at") || "",
        r = this.getAttribute("note-id") || "";
      (this.shadowRoot.innerHTML = `\n      <style>\n        .note {\n          background-color: #FFF2F2;\n          border: 1px solid #ddd;\n          border-radius: 8px;\n          padding: 1rem;\n          box-shadow: 2px 2px 5px rgba(0,0,0,0.05);\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between;\n          position: relative;\n        }\n        .note h2 {\n          margin: 0 0 0.5rem 0;\n          font-size: 1.25rem;\n        }\n        .note p {\n          flex-grow: 1;\n          margin: 0;\n          font-size: 1rem;\n        }\n        .note time {\n          margin-top: 0.5rem;\n          font-size: 0.8rem;\n          color: #777;\n          text-align: right;\n        }\n        .delete-btn {\n          position: absolute;\n          top: 8px;\n          right: 8px;\n          background-color: #e74c3c;\n          border: none;\n          color: #fff;\n          padding: 0.2rem 0.5rem;\n          border-radius: 4px;\n          cursor: pointer;\n          font-size: 0.8rem;\n        }\n      </style>\n      <div class="note">\n        <button class="delete-btn">Hapus</button>\n        <h2>${n}</h2>\n        <p>${e}</p>\n        <time>${new Date(t).toLocaleString()}</time>\n      </div>\n    `),
        this.shadowRoot
          .querySelector(".delete-btn")
          .addEventListener("click", () => {
            this.dispatchEvent(
              new CustomEvent("note-deleted", {
                detail: { id: r },
                bubbles: !0,
                composed: !0,
              }),
            );
          });
    }
  }
  customElements.define("note-item", y);
  class v extends HTMLElement {
    constructor() {
      super(),
        this.attachShadow({ mode: "open" }),
        (this.shadowRoot.innerHTML =
          '\n      <style>\n        form {\n          display: flex;\n          flex-direction: column;\n          gap: 0.5rem;\n          padding: 1rem;\n          border: 1px solid #ddd;\n          border-radius: 8px;\n          background-color: #FFF2F2;\n          box-shadow: 2px 2px 5px rgba(0,0,0,0.05);\n        }\n        label {\n          display: flex;\n          flex-direction: column;\n          font-size: 0.9rem;\n        }\n        input, textarea {\n          padding: 0.5rem;\n          margin-top: 0.25rem;\n          border: 1px solid #ccc;\n          border-radius: 4px;\n          font-size: 1rem;\n        }\n        button {\n          padding: 0.5rem;\n          border: none;\n          border-radius: 4px;\n          background-color: #7886C7;\n          color: white;\n          font-size: 1rem;\n          cursor: pointer;\n          margin-top: 0.5rem;\n        }\n        button:hover {\n          background-color: #2D336B;\n        }\n        .error {\n          color: red;\n          font-size: 0.8rem;\n          margin-top: 0.25rem;\n        }\n      </style>\n      <form id="noteForm">\n        <label>\n          Judul:\n          <input type="text" id="title" name="title" required />\n          <span id="titleError" class="error"></span>\n        </label>\n        <label>\n          Isi:\n          <textarea id="body" name="body" rows="4" required></textarea>\n          <span id="bodyError" class="error"></span>\n        </label>\n        <button type="submit">Tambah Catatan</button>\n      </form>\n    ');
    }
    connectedCallback() {
      const n = this.shadowRoot.getElementById("noteForm"),
        e = this.shadowRoot.getElementById("title"),
        t = this.shadowRoot.getElementById("body"),
        r = this.shadowRoot.getElementById("titleError"),
        o = this.shadowRoot.getElementById("bodyError");
      e.addEventListener("input", () => {
        "" === e.value.trim()
          ? (r.textContent = "Judul tidak boleh kosong")
          : (r.textContent = "");
      }),
        t.addEventListener("input", () => {
          "" === t.value.trim()
            ? (o.textContent = "Isi catatan tidak boleh kosong")
            : (o.textContent = "");
        }),
        n.addEventListener("submit", (a) => {
          a.preventDefault();
          let i = !0;
          if (
            ("" === e.value.trim() &&
              ((r.textContent = "Judul tidak boleh kosong"), (i = !1)),
            "" === t.value.trim() &&
              ((o.textContent = "Isi catatan tidak boleh kosong"), (i = !1)),
            !i)
          )
            return;
          const s = { title: e.value, body: t.value };
          this.dispatchEvent(
            new CustomEvent("note-added", {
              detail: s,
              bubbles: !0,
              composed: !0,
            }),
          ),
            n.reset();
        });
    }
  }
  async function x() {
    const n = document.getElementById("notes-container"),
      e = await (async function () {
        try {
          const n = await fetch(`${g}/notes`),
            e = await n.json();
          return "success" === e.status
            ? e.data
            : (console.error("Gagal mengambil catatan:", e), []);
        } catch (n) {
          return console.error("Error fetching notes:", n), [];
        }
      })();
    let t = "";
    e.forEach((n) => {
      t += `\n          <note-item\n            note-id="${n.id}"\n            title="${n.title}"\n            body="${n.body}"\n            created-at="${n.createdAt}">\n          </note-item>\n        `;
    }),
      (n.innerHTML = t);
  }
  customElements.define("note-form", v),
    document.addEventListener("DOMContentLoaded", () => {
      x();
    }),
    document.body.addEventListener("note-added", async (n) => {
      const e = n.detail;
      await (async function (n) {
        try {
          const e = await fetch(`${g}/notes`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(n),
            }),
            t = await e.json();
          if ("success" === t.status) return t.data;
          console.error("Gagal menambahkan catatan:", t);
        } catch (n) {
          console.error("Error adding note:", n);
        }
      })(e),
        x();
    }),
    document.body.addEventListener("note-deleted", async (n) => {
      const e = n.detail.id,
        t = await (async function (n) {
          try {
            const e = await fetch(`${g}/notes/${n}`, { method: "DELETE" }),
              t = await e.json();
            return (
              "success" === t.status ||
              (console.error("Gagal menghapus catatan:", t), !1)
            );
          } catch (n) {
            return console.error("Error deleting note:", n), !1;
          }
        })(e);
      t && x();
    });
})();
//# sourceMappingURL=bundle.9e1917440fa39fa2216c.js.map
