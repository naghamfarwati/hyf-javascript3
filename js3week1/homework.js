class Movie{
    set newStar(newStar) {
        this.star.push(newStar);
    }
    set newWriter(newWriter) {
        this.writer.push(newWriter);
    }
    set newRate(newRate) {
        this.rate.push(newRate);
    }
    constructor(title, director) {
        this.title = title;
        this.star = [];
        this.writer = [];
        this.director = director;
        this.rate = [];
        if (this.title === '') {
            throw new Error('Missing the title of the movie');
        }
        if (this.director === '') {
            throw new Error('Missing the name of the director');
        }
    }
    

    getTitle(){
        return `Title of the film: ${this.title}`;
    }
    getStars() {
        return `The Stars of this film: ${this.star}`;
    }
    getWriters() {
        return `The writer/s of this film: ${this.writer}`;
    }
    getDirector() {
        return `The director of this film: ${this.director}`;
    }
    getRating() {
        let rateAverage = 0;
        for (let i = 0; i < this.rate.length; i++){
            rateAverage += this.rate[i];
        }
        return `The Rating: ${rateAverage / this.rate.length}`;
    }

}

class staff {
    constructor(name, rol, birth) {
        this.name = name;
        this.rol = rol;
        this.birth = new Date(birth);
            if (this.name === '') {
                throw new Error('Missing name');
            }
            if (this.rol === '') {
                throw new Error('Missing rol');
            }
    }
    getName() {
        return `Actor: ${this.name}`;
    }
    getRol() {
        return `Rol: ${this.rol}`;
    }
    getAge() {
        let currentYear = new Date().getFullYear();
        return `Age: ${currentYear - this.birth.getFullYear()}`;
    }
    
}
//here i declared the stuff of leon's film //
const Reno = new staff(' Jean Reno', 'actor', '1948-7-30');
const Portman = new staff('Natalie Portman', 'actor', '1981-6-9');
const Besson = new staff('Luc Besson', 'director & writer', '1959-3-18');
//here i declared new movie Leon, and the all properties of my movie//
const Leon = new Movie('Leon');
Leon.newStar = Reno;
Leon.newStar = Portman;
Leon.newWriter = Besson;
Leon.director = Besson;
Leon.newRate = 7;
Leon.newRate = 8;
Leon.newRate = 9;
Leon.newRate = 10;
//here i tried to show if my methods work or not, and see the result//
//first my class Movies//
console.log(Leon.getTitle());
console.log('The Actors: ',Leon.star);
console.log('The writer: ',Leon.writer);
console.log('The director: ',Leon.director);
console.log(Leon.getRating());
console.log(Leon);
//second my class Staff//
//here Natali Portman//
console.log(Portman.getName());
console.log(Portman.getRol());
console.log(Portman.getAge());
//and here Jean Reno//
console.log(Reno.getName());
console.log(Reno.getRol());
console.log(Reno.getAge());
//console.log(Leon.getStars().map(actor => `${actor.getName()} ${actor.getAge}`));
//const director = Leon.getDirector();
//console.log(`Director: ${director.getName()}`);