export default class ArtistModel
{
    image: string;
    url: string;

    constructor(public name?: string) {}

    /**
     * return Artist model as string
     * @return {string}
     */
    json(): string
    {
        return JSON.stringify({
            image: this.image,
            youtubeUrl: this.url,
            name: this.name
        })
    }
}