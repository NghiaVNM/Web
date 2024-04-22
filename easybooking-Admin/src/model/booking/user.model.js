const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const COLLECTION_NAME="user";

const list=new Schema({
    name:{
        type:String,
        default:'none',
    },
    phone:{
        type:String,
        default:'none',
    },
    email:{
        type:String,
        default:'none',
    },
    birthday:{
        type:Date,
        default: Date.now(),
    },
    cccd:{
        type:String,
        default:'none',
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    place:{
        type:String,
        default:'none',
    },
});
const location=new Schema({
    city:{
        type:String,
        default:'none',
    },
    district:{
        type:String,
        default:'none',
    },
    ward:{
        type:String,
        default:'none',
    },
    street:{
        type:String,
        default:'none',
    },
})
const social=new Schema({
    facebook:{
        type:String,
        default:'none',
    },
    instagram:{
        type:String,
        default:'none',
    },
    twitter:{
        type:String,
        default:'none',
    },
    chotot:{
        type:String,
        default:'none',
    },
})

const newSchema=new Schema({
   username:{
         type:String,
         required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
        enum:["admin","user"],
    },
    userinformation:{
        type:[list],
        default: ()=>([{}]),
    },
    avatar:{
        type:String,
        default:'https://e7.pngegg.com/pngimages/922/865/png-clipart-discord-pepe-the-frog-video-games-pepe-thumbnail.png'
    },
    status:{
        type:String,
        default:"inactive",
        enum:["active","inactive"],
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    address:{
        type:[location],
        default: ()=>([{}]),
    },
    imagecccd:{
        type:String,
        default:'https://e7.pngegg.com/pngimages/922/865/png-clipart-discord-pepe-the-frog-video-games-pepe-thumbnail.png'
    },
    certificate:{
        type:String,
        default:'https://e7.pngegg.com/pngimages/922/865/png-clipart-discord-pepe-the-frog-video-games-pepe-thumbnail.png'
    },
    link:{
        type:[social],
        default:()=>([{}]),
    },
},
{
    timestamps:true,
    collection:COLLECTION_NAME,
}
);
module.exports=mongoose.model(COLLECTION_NAME,newSchema);