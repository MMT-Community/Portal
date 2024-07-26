import { settings, mmt } from "../JSON/default.json";
import landing from "./Components/landing";
export default function app() {
    return `
                ${landing()}
            `;
}
