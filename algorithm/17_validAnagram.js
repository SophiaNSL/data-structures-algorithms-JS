// LeetCode 242 Valid Anagram

const isAnagram = (s,t) => {
    if(s.length !== t.length){
        return false;
    }

    let charCount = {};

    for(let char of s){
        if(charCount[char] === undefined){
            charCount[char] = 1;
        }else {
            charCount[char]++;
        }
    }

    for(let char of t){
        if(charCount[char] === undefined){
            return false;
        }
        if(charCount[char] < 1){
            return false;
        }

        charCount[char]--;
    }

    return true;
}

const s = 'anagram';
const t = 'nagaram';

const s2 = 'rat';
const t2 = 'car';

console.log(isAnagram(s,t));
console.log(isAnagram(s2,t2));