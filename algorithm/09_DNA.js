//leetcode 187 - Repeated DNA Sequences

//solution 1: using object
const dna = (str) => {
    let result = [];
    let match = {};

    for(let i = 0; i + 9 < str.length; i++){
        let seq = str.slice(i, i+10);
        match[seq] = match[seq] + 1 || 1;

        if(match[seq] === 2){
            result.push(seq);
        }

    }

    return result;
}

// solution 2: using set
const dna2 = (str) => {
    let strSet = new Set();
    let result = new Set();
    
    for(let i = 0; i + 9 < str.length; i++){
        let seq = str.substring(i, i+10);
        strSet.has(seq) ? result.add(seq) : strSet.add(seq);
    }
    return [...result]
}


const str = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
console.log(dna(str));
console.log(dna2(str));