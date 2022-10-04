export class DelMethod {

    shortName: string;
    deliveryTime: string;
    description: string;
    price: number;
    id: number;
    constructor(del?: any) {
        del = del || {};
        this.shortName = del.shortName || '';
        this.deliveryTime = del.deliveryTime || '';
        this.description = del.description || '';
        this.price = del.price || 0;
        this.id = del.id || 0;
        
    }
}
