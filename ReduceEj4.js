const arr = [fetchData, updateData,postData, showData];
const response = arr.reduce((acc,current)=>{
    return acc.then(current);
}, Promise.resolve(userId));

response.then(data =>{
    //data is final response
})