export default function newTab<T>(link: T) {
    setTimeout(function () {
        window.open(<string>link, "_blank");
    }, 1000);
}
