import { mmt } from "../../../JSON/default.json";
export default function urls() {
    return `
                <div class="url-wrapper">
                    <ul>
                        <li><a href="${mmt.socialMedia.github}" target="_blank" >GitHub</a></li>
                        <li><a href="${mmt.socialMedia.youtube}" target="_blank" >YouTube</a></li>
                        <li><a href="${mmt.socialMedia.instagram}" target="_blank" >Instagram</a></li>
                        <li><a href="${mmt.socialMedia.facebook}" target="_blank" >Facebook</a></li>
                    </ul>
                </div>
            `;
}
