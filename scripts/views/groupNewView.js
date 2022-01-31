function updateGroupNewView() {
  return /*html*/ `
    <style>
    .group-new {
      display: grid;
      grid-template-columns: auto auto;
      padding: 1rem;
      color: hsl(0, 0%, 90%);
      width: 70%;
    }

    .flex-right {
      display: flex;
    }

    .flex-down {
      display: flex;
      flex-direction: column;
      width: 30%;
    }
  </style>    
  <div class="group-new">
    <div class="right">
      <h1>Ny Gruppe</h1>
      <div class="input-items">
        <label>Lag ny gruppe</label>
        <input type="text" placeholder="Skriv gruppe navn.." required />
      </div>
      <div class="input-items">
        <label>Beskrivelse av gruppen</label>
        <textarea cols="30" rows="10"></textarea>
      </div>
      <div>
        <div class="input-items">
          <label>Tidsintervall</label>
          <select>
              <option value="">1 uker</option>
              <option value="">2 uker</option>
              <option value="">3 uker</option>
              <option value="">4 uker</option>
              <option value="">5 uker</option>
              <option value="">6 uker</option>
              <option value="">7 uker</option>
          </select>
        </div>
        <div class="input-items">
          <label>Startdato</label>
          <input type="date" placeholder="Velg Stardato" required />
        </div>
        <div class="input-items">
          <label>Svarfrits</label>
          <select>
            <option value="">1 dager</option>
            <option value="">2 dager</option>
            <option value="">3 dager</option>
            <option value="">4 dager</option>
            <option value="">5 dager</option>
            <option value="">6 dager</option>
            <option value="">7 dager</option>
          </select>
        </div>
      </div>

      <label>Send varsel</label>
      <div>
        <input type="checkbox" id="notification1" checked />
        <label for="notification1">Ved ny undersøkelse</label>
      </div>
      <div>
        <input type="checkbox" id="notification2" checked />
        <label for="notification2">Dagen før svarfrist</label>
      </div>
    </div>
    <div class="left">
      <button>Fullfør gruppen</button>
      <div class="flex-right">
        <div class="flex-down">
          <label>Managerliste</label>
          <div>
            <select>
              <option>Bruker 1</option>
              <option>Bruker 2</option>
            </select>
            <button>+</button>
          </div>
          <ul>
            <li>Bruker</li>
          </ul>
        </div>

        <div class="flex-down">
          <label>Deltakerliste</label>
          <div>
            <select>
              <option>Bruker 1</option>
              <option>Bruker 2</option>
            </select>
            <button>+</button>
          </div>
          <ul>
            <li>Gjertrud</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    `;
}
