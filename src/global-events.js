class GlobalEvents {
    constructor() {
        this.lId = 0;
        this.clicksArray = [];


        window.addEventListener('click', (e) => {
            this.clicksArray.forEach(r => r.cb.call(this, e));
        }, true);
    }

    onClick(cb, item) {
        let a = Number(this.lId++);
        let obj = {
            cb, 
            id: a,
            unsubscribe: () => {
                this.unsubscribe(a, item);
            }
        };

        this.clicksArray.push(obj);
        return obj;
    }

    unsubscribe(id, item) {
       // console.log(id);
        this.clicksArray = this.clicksArray.filter(r => {
            let res = r.id !== id;
            return res;
        });

        // console.log(this.clicksArray.length);
    }
}


export default new GlobalEvents();
