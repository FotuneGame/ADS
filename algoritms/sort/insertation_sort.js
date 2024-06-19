export function insertation_sort(array){
    if(!array.length) return null;

    let current, j;
    for(let i = 1; i<array.length;i++){
        current = array[i];
        for(j=i-1; j > -1 && current < array[j];j--){
            array[j+1] = array[j];
        }
        array[j+1] = current;
    }

    return array;
}