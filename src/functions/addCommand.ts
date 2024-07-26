export default function addCommnad<T>(command: string, where: HTMLElement) {
    const newElement = document.createElement("p");
    let t = "";
    for (let i = 0; i < command.length; i++) {
        if (command.charAt(i) == " " && command.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else if (command.charAt(i) == ",") {
            t += "<br />";
        } else {
            t += command.charAt(i);
        }
    }
    newElement.innerHTML = t;
    where.appendChild(newElement);
}
