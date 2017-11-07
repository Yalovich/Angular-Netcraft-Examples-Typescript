/**
 *
 */

const VERSION = "20";

class ArtistModel
{
    youtubeUrl: string;
    id: number;

    constructor(public name?: string, public image?: string) {
        this.id = Math.random();
    }

    /**
     *
     * @param url
     * @return {ArtistModel}
     */
    setYoutubeUrl(url: string)
    {
        // validate URL

        this.youtubeUrl = url;
        return this;
    }

    /**
     *
     */
    registerUser()
    {
        console.log("Calling Server and register the user");
    }

    /**
     *
     * @return {string}
     */
    json(): string
    {
        return JSON.stringify({
            name: this.name,
            image: this.image,
            youtubeUrl: this.youtubeUrl,
            id: this.id
        })
    }
}

export default ArtistModel;

export {
    VERSION
}