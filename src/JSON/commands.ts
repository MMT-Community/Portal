import Commands from "../types/Commands";
import { mmt } from "./default.json";

export const commandsValue: Commands = {
    whois: [
        "<h2 class='terminal-header' >Who Are We?</h2>",
        "MMT is a E-Learning Community, Aims to Help anyone Start Their Career.",
    ],
    whoami: `User${Math.round(Math.random() * 9999)}`,
    time: new Date().toLocaleString(),
    clear: "",
    cls: "",
    videos: mmt.socialMedia.youtube,
    email: [
        '<h2 class="terminal-header">E-Mail</h2>',
        "- mmtcommunityguide@gmail.com",
    ],
    social: [
        "<h2 class='terminal-header' >Social Media</h2>",
        'Youtube        <a href="' +
            mmt.socialMedia.youtube +
            '" target="_blank">youtube' +
            "</a>",
        'Instagram      <a href="' +
            mmt.socialMedia.instagram +
            '" target="_blank">instagram' +
            "</a>",
        'GitHub         <a href="' +
            mmt.socialMedia.github +
            '" target="_blank">github' +
            "</a>",
        'Facebook         <a href="' +
            mmt.socialMedia.facebook +
            '" target="_blank">facebook' +
            "</a>",
        "<br />",
    ],
    help: [
        '<h2 class="terminal-header">Available Commands</h2>',
        '<span class="command">whois</span>          Who is MMT?',
        '<span class="command">whoami</span>         Who are you?',
        '<span class="command">social</span>         Display Social Networks',
        '<span class="command">videos</span>         View YouTube Videos and Tutorials',
        '<span class="command">github</span>         View Documents on Github',
        '<span class="command">history</span>        View Command History',
        '<span class="command">help</span>           You Obviously Know What This Does',
        '<span class="command">email</span>          ask us about anything',
        '<span class="command">secret</span>         Got The Password?',
        '<span class="command">clear - cls</span>    Clear terminal',
        "<br>",
    ],
};
