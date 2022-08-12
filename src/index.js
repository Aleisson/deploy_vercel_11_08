import axios from "axios";
const request = axios.get("https://catfact.ninja/facts?limit=100");
const root = document.querySelector(".root");

request.then(response => {
  root.innerHTML = `
    <ul>
      ${response.data.data.map(f => `
        <li>${f.fact}</li>
      `).join('')}
    </ul>
  `;
});

