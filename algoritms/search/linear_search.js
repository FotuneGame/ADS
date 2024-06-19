export function linear_search(array,search_number){
    if(!array.length) return null;
    for(let i = 0; i < array.length; i++){
        if(array[i]===search_number) return i;
    }
    return null;
}