export class Keg {
    public price: number;
    constructor(public name: string, 
        public brewery: string, 
        public alcohol: number, 
        public volume: number, 
        public ibu: number, 
        /*public img: string,*/ 
        public description: string) { 
            this.price = this.alcohol * .5 + 3;
        }
}

export class Taproom{
    public kegs: Keg[] = [];
    public till: number = 0;
    constructor(public name: string) {
        this.kegs.push(
            new Keg('Number Six Saison', 'Battlebar Beerlactica', 6, 124, 66, 'This full-bodied saison may lead you to bad decisions.'), 
            new Keg('Skin Job Stout', 'Battlebar Beerlactica', 8.9, 72, 100, 'Made from 100% synthetic components, this smooth stout with surprise you'), 
            new Keg('Adama Pale Ale', 'Battlebar Beerlactica', 5.5, 75, 23, 'This traditional ale will command your taste buds'), 
            new Keg('The Wheat-eenth Colony', 'Battlebar Beerlactica', 7, 103, 43, 'This illusive wheat ale is a great way to end the night, if you can find it'), 
            new Keg('Col. Tigh Rye', 'Battlebar Beerlactica', 12, 9, 98, 'This rye, aged in bourban barrels for an unknown abount of time, will declare marshall law on your tastebuds, and affect your depth perception.'))
    }

    addKeg(keg: Keg) {
        this.kegs.push(keg);
    }
    
    getLowKegs() {
        return this.kegs.filter(keg => keg.volume < 11);
    }

    sellPint(keg) {
        if(keg.volume > 0) {
            keg.volume -= 1;
            this.till += keg.price;
        }
    }

    sellGrowler(keg) {
        if(keg.volume > 1) {
            keg.volume -= 2;
            this.till += keg.price * 1.5;
        }
    }

    sellLargeGrowler(keg) {
        if(keg.volume > 3) {
            keg.volume -= 4;
            this.till += keg.price * 3;
        }
    }
}