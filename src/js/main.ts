
import ArtistModel from "./models/artist.model.ts"
import Storage from "./utils/storage.util.ts"

class App
{
    storage: Storage;

    constructor()
    {
        document.querySelector("#addBtn").addEventListener("click", this.onAddClick.bind(this), false);

        this.storage = new Storage();
    }

    /**
     * adding band model to localStorage
     * @param event
     */
    onAddClick(event: MouseEvent)
    {
        let newArtist: ArtistModel = this.loadFormData();
        this.storage.set("artist", newArtist.json());

        this.triggerPromise().then(() => {

            console.log("IN THEN. Resolve.");

        }, error => {

            console.log("IN THEN. Reject", error);

        }).catch((error: Error) => {

            console.log("Exception. Bad!!", error);

        });
    }

    /**
     *
     */
    triggerPromise(): Promise<string>
    {
        return new Promise((resolve, reject) => {

            setTimeout(() => {

                console.log("Done. Success. Image processing.. Ajax Request..");
                reject();

            }, 2500);


        });
    }

    /**
     * load & validate from artist's form
     * @return ArtistModel
     */
    loadFormData() : ArtistModel
    {
        let artist = new ArtistModel();

        artist.name = (document.querySelector("#name") as HTMLInputElement).value;
        artist.image = (document.querySelector("#image") as HTMLInputElement).value;
        artist.youtubeUrl = (document.querySelector("#video") as HTMLInputElement).value;

        return artist;
    }
}

let myApp = new App();
