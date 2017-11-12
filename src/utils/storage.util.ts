export default class Storage
{
    /**
     * save a value in localStorage
     * @param key
     * @param value
     * @return {Storage}
     */
    saveKey(key: string, value: any): Storage
    {
        if(typeof value != "string") value = JSON.stringify(value);

        localStorage.setItem(key, value);

        return this;
    }

    /**
     * load stored data, parse and return required value
     * @param key
     * @return {null}
     */
    getKey(key: string): any
    {
        let loaded: any = localStorage.getItem(key);

        if(loaded != null)
        {
            let output = null;

            try {
                output = JSON.parse(loaded);
            }
            catch (error)
            {
                output = loaded;
            }

            return output;
        }

        return null;
    }
}