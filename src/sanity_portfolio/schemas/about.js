export default{
    name:'about',
    title:'About',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'description',
            title:'Description',
            type: 'string'
        },
        {
            name:'paragraph',
            title:'Paragraph',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            }, 
        },
        
    ],
};