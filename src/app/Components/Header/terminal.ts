import { mmt, settings } from "../../../JSON/default.json";
export default function terminal() {
    return /*html*/ `
        <div class="terminal-wrapper">
            <div class="terminal-logo">
                <img src="${settings.logo}" alt="${mmt.name} Logo" />
                <p>${mmt.name}</p>
            </div>
            <div class="terminal-body" >
                <div class="output">
                    <p>Type <span id="command" >'help'</span> for a list of available commands.</p>
                </div>
                <div class="prompt">
                    <span class="user-prompt"> - ${mmt.name}~/ $</span>
                    <input id="prompt" type="text" placeholder="Type your command here..." />
                </div>
                
            </div>
        </div>
    `;
}
