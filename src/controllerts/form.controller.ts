import ArtistModel from "../models/artist.model";
import Dom from "../utils/dom";

export default class FormController
{
    /**
     * load form and fillup artist model
     * @return {ArtistModel}
     */
    loadForm(validateForm: boolean = false) : ArtistModel
    {
        let domManager: Dom = new Dom();
        let artist: ArtistModel = new ArtistModel(domManager.input("#name").value);

        artist.image = domManager.input("#image").value;
        artist.url = domManager.input("#url").value

        if(validateForm) {
            // add form validation
        }

        return artist;
    }
}