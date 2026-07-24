const sections = [...document.querySelectorAll("main section[id], footer[id]")];
const navLinks = [...document.querySelectorAll("nav a")];

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${visible.target.id}`;
      link.toggleAttribute("aria-current", isActive);
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.4, 0.7] }
);

sections.forEach((section) => observer.observe(section));
