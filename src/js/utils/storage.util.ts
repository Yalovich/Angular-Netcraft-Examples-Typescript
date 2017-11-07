

export default class Storage
{
    /**
     *
     * @param key
     * @param value
     */
    set(key: string, value: string): Storage
    {
        localStorage.setItem(key, value);
        return this;
    }

    /**
     *
     * @param key
     * @return {any}
     */
    get(key: string) : any
    {
        return localStorage.getItem(key);
    }
}
