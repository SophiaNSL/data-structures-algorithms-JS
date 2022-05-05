const ransomeNote = (note, magazineText) => {
    const noteArray = note.split(' ');
    const magazineArray = magazineText.split(' ');
    const magazineObj = {};

    magazineArray.forEach( word => {
        magazineObj[word] = magazineObj[word] + 1 || 1;
    })

    let noteIsPossible = true;

    noteArray.forEach(word => {
        if(magazineObj[word]){
            magazineObj[word]--;
            if(magazineObj[word] < 0){
                noteIsPossible = false;
            }
        }else {
            noteIsPossible = false;
        }
    })

    return noteIsPossible;

}

const note = 'hello sophia so glad to meet you';
const magazineText = 'hello world world sophia you meet to glad so';

console.log(ransomeNote(note, magazineText));