import ArtistModel from "../models/artist.model";
import Storage from "../utils/storage.util";

const STORAGE_KEY: string = "arts";

export default class ArtistController
{
    storage: Storage;

    constructor()
    {
        this.storage = new Storage();
    }

    /**
     * save artist in localStorage
     * @param artist
     * @return {ArtistModel[]}
     */
    saveArtist(artist: ArtistModel): ArtistModel[]
    {
        let olderArtists = this.loadArtists();
        olderArtists.push(artist);

        this.storage.saveKey(STORAGE_KEY, olderArtists);
        return this.loadArtists();
    }

    /**
     * load artists from storage
     * @return {Array}
     */
    loadArtists(): ArtistModel[]
    {
        let list = this.storage.getKey(STORAGE_KEY);
        return (list == null ? [] : list);
    }
}