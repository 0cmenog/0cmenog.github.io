document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('div.highlighter-rouge[class*="prompt-"] pre').forEach((block) => {
    const lines = block.innerText.split('\n');

    // Supprimer une éventuelle ligne vide à la fin
    if (lines.length && lines[lines.length - 1].trim() === '') {
      lines.pop();
    }

    // Faire la correspondance entre l'id et le préfixe
    const prefixMap = {
      "prompt-root-pm1": "root@PM1:~# ",
      "prompt-root-pm2": "root@PM2:~# ",
      "prompt-root-serveur": "root@serveur:~# ",
      "prompt-root-serveur-ssl": "root@serveur:/etc/ldap/ssl# ",
      "prompt-user-vm": "user@vm:~ ",
      "prompt-user-vm-custom-iso": "user@vm:~/custom-iso ",
    };

    const className = Array.from(block.closest('div[class*="prompt-"]').classList)
      .find(c => c.startsWith('prompt-'));
    const prefix = prefixMap[className] || "";

    const newHtml = lines.map(line => {
      return `<span class="prompt-line"><span class="prompt-prefix" aria-hidden="true">${prefix}</span><span class="prompt-content">${line}</span></span>`;
    }).join('\n');

    block.innerHTML = newHtml;
  });

  // Empêche la copie des prompts
  document.querySelectorAll('.prompt-line .prompt-prefix').forEach(el => {
    el.style.userSelect = "none";
  });

});
