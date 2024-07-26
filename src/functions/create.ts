export default function createComponent(
    element: string = "div",
    parent: HTMLElement = document.body,
    value: string
) {
    const component = document.createElement(element);
    component.innerHTML = value;
    parent.appendChild(component);
    return component;
}
