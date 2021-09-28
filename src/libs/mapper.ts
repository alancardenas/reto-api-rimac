
export function mapper(input, traduceKeys){
    return input.map(item=>{
        const keys = Object.keys(item);
        const mappedItems = keys.reduce((acc,currentItem)=>{
            const newObject={...acc};
            const newKey = traduceKeys[currentItem];
            if(newKey){
                newObject[newKey]=item[currentItem];
            }
            return newObject;
        },{});
        return mappedItems;
    });
}