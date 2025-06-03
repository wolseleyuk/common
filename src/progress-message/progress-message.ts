export class ProgressMessage {

    static get createOrder(): string {
        return "Creating order...";
    }

    static addProduct(value: string): string {
        return `Adding ${value}...`;
    }

    static assignCustomer(value: string): string {
        return `Assigning customer ${value}...`;
    }

    static get saveOrder(): string {
        return "Saving order...";
    }

    static get updateQuantity(): string {
        return "Updating quantity...";
    }

    static get deleteLine(): string {
        return "Deleting line...";
    }

    static get deleteAllLines(): string {
        return "Deleting all lines...";
    }

}