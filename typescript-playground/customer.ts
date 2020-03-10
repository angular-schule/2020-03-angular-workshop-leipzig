export class Customer {

    constructor(private id: number) {}

    fooBar(): void {
        setTimeout(() => {
            console.log('ID ist', this.id);
        }, 2000);
    }
}