import { commandsValue } from "../JSON/commands";
import { mmt } from "../JSON/default.json";
import addCommand from "./addCommand";
import newTab from "./openLink";

export default function getCommand() {
    const commandHistory: string[] = [];
    const terminal = document.querySelector<HTMLInputElement>("#prompt");
    const output = document.querySelector<HTMLParagraphElement>(".output");

    terminal.addEventListener("change", () => {
        if (terminal.value == "clear" || terminal.value == "cls") {
            output.innerHTML = "";
        } else if (terminal.value in commandsValue) {
            addCommand(`${commandsValue[terminal.value]}`, output);
        } else if (terminal.value in mmt.socialMedia) {
            output.innerHTML = `Visiting ${terminal.value}...`;
            newTab(mmt.socialMedia[terminal.value]);
        } else if (terminal.value == "history") {
            output.innerHTML = `<h2 class='terminal-header' >Command History</h2>`;
            commandHistory.forEach((command, i) => {
                output.innerHTML += `<p>&nbsp;&nbsp;&nbsp;&nbsp;${
                    i + 1
                }. ${command}`;
            });
        } else {
            addCommand(
                `Command ${terminal.value}: not found. Type <span id="command" >'help'</span> for a list of available commands.`,
                output
            );
        }
        commandHistory.push(terminal.value);
        output?.scrollTo(0, output.scrollHeight);
        terminal.value = "";
    });
}
