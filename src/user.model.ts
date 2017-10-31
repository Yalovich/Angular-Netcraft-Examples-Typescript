class UserModel
{
    private image: string;

    constructor(public name?: string, private age?: number) {}

    /**
     *
     * @param age
     * @return {UserModel}
     */
    setAge(age: number): UserModel
    {
        this.age = age;
        return this;
    }

    /**
     * describe user model
     * @return {string}
     */
    describe(): string
    {
        let me: string = `ME: ${this.name}`;

        if(this.age) return me.concat(` (${this.age})`);

        return me;
    }
}

export default UserModel;