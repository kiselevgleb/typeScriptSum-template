import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    allPrice(): number {
        let sum: number=0;
        this._items.forEach(e => {
            sum+=e.price;
        });
        return sum; 
    }
    allPriceWithDis(dis: number): number {
        let sum: number=0;
        this._items.forEach(e => {
            sum+=e.price;
        });
        let sumWith = sum*(1 - (dis/100));
        return sumWith;
    }
}