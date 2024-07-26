import app from "./app/app";
import getCommand from "./functions/promptCommands";
import { mmt, settings } from "./JSON/default.json";
import "./style.css";

// Setting Up Our Root Element (HTML Div)
const root = document.querySelector<HTMLDivElement>("#root");
if (root) root.innerHTML = app();

// Dynamic Shit
getCommand();
// Settings
const favicon = document.querySelector<HTMLLinkElement>("#favicon");
favicon!.href = settings.logo;
document.title = mmt.name;
