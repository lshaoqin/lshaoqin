export function generateDropdown(title: string, readmeSummary: string, commitsSummary: string, url: string) {
    return `
<details>
<summary><strong>${title}</strong></summary>
Link to repo: ${url}
<br/>
${readmeSummary}

---

${commitsSummary}
</details>
`;
}

export function generateDropdowns(entries: { [name: string]: string }) {
    let dropdowns = "";
    for (const [key, value] of Object.entries(entries)) {
        dropdowns += value;
    }
    return dropdowns;
}

export function generateMarkdown(contributions: string) {
    return `
## Hi, I'm Shaoqin! 👋
I'm a Computer Science student at the National University of Singapore. I like travelling🚀, games🎮, and music🎵!

## 🔨 I've been working on:
${contributions}
<br>

<p align="center">
  <img src="https://github.com/${process.env.GH_USER}/${process.env.GH_USER}/blob/main/out.jpg" alt="My Word Cloud" />
  <br />
  <em><strong>My Github Profile in a nustshell</strong></em>
</p>

<br>

<p align="center">
📢 <strong>This README was automatically generated using <a href="https://github.com/lshaoqin/coolprofiles">coolprofiles</a>!</strong>
<br>
<em>Psst...<a href="https://github.com/lshaoqin/coolprofiles">coolprofiles</a> is a tool that I built with my team. You can fork it yourself to try it out!</em>
</p>
`;
}
