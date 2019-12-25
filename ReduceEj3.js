
//docs array
const docs = [
    {
        id: 'id-1',
        name: 'K Dilkington',
        style:'orange',
    },{
        id: 'id-2',
        name: 'Lanky Fellow',
        style:'googly',
    },
]

//result
const result = {
    'id-1':{
        id:'id-1',
        name: 'K Dilkington',
        style:'orange',
    },
    'id-2':{
        id:'id-2',
        name: 'Lanky Fellow',
        style:'googly',
    },
};

const makeMap = (docs,key) =>{
    return docs.reduce((map, doc)=>{
        map[doc[key]] = doc;
        return map;
    },{});
}

const newDocs = makeMap(docs, 'id');
console.log(newDocs);