import Dom from "./utils/dom"
import FormController from "./controllerts/form.controller";
import ArtistController from "./controllerts/artist.controller";
import ArtistModel from "./models/artist.model";

import ARTIST_TEMPALTE from "./artists.template";

class App
{
    dom: Dom;
    formController: FormController;
    artistController: ArtistController;

    listContainerSelector: string = ".playlist ul";

    /**
     * init relevant classes
     * @return App
     */
    constructor()
    {
        this.dom = new Dom();
        this.formController = new FormController();
        this.artistController = new ArtistController();
    }

    /**
     * booting up the app
     * @return void
     */
    boostrap()
    {
        this.artistController.loadArtists();

        this.buildList();
        this.attachMouseEvents();
    }

    /**
     * attaching mouse events to relevant buttons / elements
     * @return void
     */
    attachMouseEvents()
    {
        this.dom.addListener("#add", "click", this.onAddClick.bind(this));
    }

    /**
     * dispatched when user click on add button and wants to add
     * the artist to its local Storage
     * @param event
     */
    onAddClick(event: MouseEvent)
    {
        let newArtist = this.formController.loadForm();
        this.artistController.saveArtist(newArtist);

        this.buildList();
    }

    /**
     * Build un-ordered list of artists
     * @return void
     */
    buildList()
    {
        let artists: ArtistModel[] = this.artistController.loadArtists();
        let domParser: DOMParser = new DOMParser();

        this.clearList();

        artists.forEach((artist: ArtistModel, index: number) => {

            if(!artist.name || artist.name.length == 0) return;

            let currentTpl = ARTIST_TEMPALTE;

            currentTpl = currentTpl.replace("{{name}}", artist.name).replace("{{image}}", artist.image).replace("{{url}}", artist.url);

            let listItem: HTMLElement = document.createElement("li");
            listItem.innerHTML = currentTpl;

            this.dom.elm(this.listContainerSelector).appendChild(listItem);
        });
    }

    /**
     * clear list from child elements
     * @return void
     */
    clearList()
    {
        this.dom.elm(`${this.listContainerSelector}`).innerHTML = "";
    }
}

(new App()).boostrap();
