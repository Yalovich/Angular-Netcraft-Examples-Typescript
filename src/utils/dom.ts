export default class Dom
{
    /**
     *
     * @param selector
     * @return {HTMLElement}
     */
    elm(selector: string): HTMLElement
    {
        return document.querySelector(selector) as HTMLElement;
    }

    /**
     * return element as HTML Input Element Object
     * @param selector
     * @return {HTMLInputElement}
     */
    input(selector: string): HTMLInputElement
    {
        return (this.elm(selector) as HTMLInputElement);
    }

    /**
     *
     * @param selector
     * @param event
     * @param callback
     */
    addListener(selector: string, event: string, callback: any)
    {
        document.querySelector(selector).addEventListener(event, event => {

            if(typeof(callback) == "function") callback.call(this, event);

        }, false)
    }
}