const DEFAULT_MENU = `
# Antipasti
Arancino di riso | 3.50 | Dorato e cremoso, come da tradizione
Caponata siciliana | 6.00 | Melanzane in agrodolce, profumo di basilico
Panelle | 4.50 | Farina di ceci, limone e sale

# Primi
Pasta alla norma | 9.00 | Pomodoro, melanzane, ricotta salata
Casarecci al pistacchio | 10.00 | Pistacchio, olio, pepe nero
Ragu della casa | 9.50 | Lento e avvolgente, servito con pasta fresca

# Secondi
Pesce spada alla griglia | 12.00 | Limone, olio e origano
Involtini di pesce spada | 12.00 | Ripieno morbido e saporito
Polpette al sugo | 10.00 | Ricetta di famiglia

# Contorni
Insalata di stagione | 4.00 | Verdure fresche di mercato
Patate al forno | 4.50 | Rosmarino e sale grosso

# Dolci
Cannolo siciliano | 4.50 | Ricotta, scorza e granella
Torta di casa | 4.50 | Dolce del giorno

# Bevande
Acqua naturale o frizzante | 2.00
Vino della casa | 4.00
Birra artigianale | 5.00
`;

let revealObserver;

function parseMenu(text) {
  const lines = text.split(/\r?\n/);
  const sections = [];
  let current = null;

  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line || line.startsWith("//") || line.startsWith(";")) {
      return;
    }

    if (line.startsWith("#")) {
      const title = line.replace(/^#+\s*/, "").trim();
      if (!title) {
        return;
      }
      current = { title, items: [] };
      sections.push(current);
      return;
    }

    const parts = line.split("|").map((part) => part.trim());
    const name = parts[0];
    const price = parts[1] || "";
    const desc = parts[2] || "";

    if (!name) {
      return;
    }

    if (!current) {
      current = { title: "Menu", items: [] };
      sections.push(current);
    }

    current.items.push({ name, price, desc });
  });

  return sections;
}

function renderMenu(sections) {
  const grid = document.querySelector("#menu-grid");
  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  sections.forEach((section) => {
    const card = document.createElement("div");
    card.className = "menu-section";
    card.setAttribute("data-reveal", "");

    const title = document.createElement("h3");
    title.textContent = section.title;
    card.appendChild(title);

    const list = document.createElement("div");
    list.className = "menu-items";

    section.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "menu-item";

      const left = document.createElement("div");
      const name = document.createElement("h4");
      name.textContent = item.name;
      left.appendChild(name);

      if (item.desc) {
        const desc = document.createElement("p");
        desc.className = "desc";
        desc.textContent = item.desc;
        left.appendChild(desc);
      }

      row.appendChild(left);

      if (item.price) {
        const price = document.createElement("div");
        price.className = "price";
        price.textContent = item.price;
        row.appendChild(price);
      }

      list.appendChild(row);
    });

    card.appendChild(list);
    grid.appendChild(card);
    observeReveal(card);
  });
}

async function loadMenu() {
  try {
    const response = await fetch("menu.txt", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Menu fetch failed");
    }
    const text = await response.text();
    renderMenu(parseMenu(text));
  } catch (error) {
    renderMenu(parseMenu(DEFAULT_MENU));
  }
}

function revealOnScroll() {
  const elements = document.querySelectorAll("[data-reveal]");
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = Math.min(index * 60, 360);
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => revealObserver.observe(el));
}

function observeReveal(element) {
  if (!revealObserver) {
    return;
  }
  revealObserver.observe(element);
}

document.addEventListener("DOMContentLoaded", () => {
  revealOnScroll();
  loadMenu();
});
