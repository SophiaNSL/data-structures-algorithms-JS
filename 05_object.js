// coding out object from scratch

class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key,value){
        const address = this._hash(key);

        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        return this.data;
    }

    get(key){
        const address = this._hash(key);
        const bucket = this.data[address];

        if(bucket){
            for(let i = 0; i < bucket.length; i++){
                if(bucket[i][0] === key){
                    return bucket[i][1];
                }
            }
        }
        return undefined
    }

    keys(){
        const keys = [];
        for( let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                if(this.data[i].length > 1){
                    for( let j = 0; j < this.data[i].length; j++){
                        keys.push(this.data[i][j][0]);
                    }
                }else {
                    keys.push(this.data[i][0][0]);
                }
            }
        }
        return keys;
    }

}

// const hash = new HashTable(20);
// hash.set('test',1);
// hash.set('some other key','some other value');
// console.log(hash.get('test'));
// console.log(hash.get('some other key'));
// console.log(hash.get('test2'));

const hash = new HashTable(20);
hash.set('test1',1);
hash.set('test2',1);
hash.set('test3',1);
hash.set('test4',1);
hash.set('test5',1);
hash.set('test6',1);
hash.set('test7',1);
hash.set('test8',1);
hash.set('test9',1);
hash.set('test10',1);

console.log(hash);
console.log(hash.keys());


