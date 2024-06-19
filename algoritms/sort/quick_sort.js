export function quick_sort(array){
    if(array.length <= 1) return array;

    let pivotIndex = Math.floor( array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let more = [];

    for(let i = 0; i < array.length; i++){
        if(i === pivotIndex) continue;
        if(array[i]<pivot)less.push(array[i]);
        else more.push(array[i])
    }


    return [...quick_sort(less), pivot, ...quick_sort(more)];
}