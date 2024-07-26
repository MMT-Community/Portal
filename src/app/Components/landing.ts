import terminal from "./Header/terminal";
import urls from "./Header/urls";

export default function landing() {
    return `    
                <div class="header-wrapper">
                    ${terminal()}
                    ${urls()}
                </div>
            `;
}
