export function select_sort(array){
    if(!array.length) return null;

    let tmp,indexMin = 0;
    for(let i =0;i<array.length;i++){
        indexMin=i;
        for(let j = i+1; j < array.length; j++){
            if(array[j]<array[indexMin]) indexMin = j;
        }
        tmp = array[indexMin];
        array[indexMin] = array[i];
        array[i] = tmp;
    }

    return array;
}