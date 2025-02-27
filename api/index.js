import express from 'express';
import Accomodation from '../app/models/Accomodation';
import Event from '../app/models/Event';
import Registration from '../app/models/Registration';
import Tour from '../app/models/Tour';
import Tshirt from '../app/models/Tshirt';
import Users from '../app/models/Users';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: ['hello world'] });
});

/*let previewData={
        name:,
        hotelRequirement:
    }
*/
router.get("/previewData",async(req,res)=>{
    var currentUser="TestUser1";//req.body.username;
    //console.log("h1")
    var particitype,inpax,chkin,chkout,htl1,htl2,eventpart,member,foodmembers,tourop,options,quantity;
    try{//console.log("h1")
    
        await Accomodation.findOne({username:currentUser},function(err,foundUser){
            if(err){
                console.log("error")
            }else{
                //console.log(String(foundUser));
                //console.log('ttrtt');

                if(foundUser){
                    console.log("hlo4")
                     particitype=foundUser.participationType;
                     inpax=foundUser.pax;
                     chkin=foundUser.checkInDate;
                     chkout=foundUser.checkOutDate;
                     htl1=foundUser.hotel11;
                     htl2=foundUser.hotel22;
    
                }
            }
        }).clone();
        await Event.findOne({username:currentUser},function(err,foundUser){
            if(err){
                console.log("error")
            }else{
                //console.log(String(foundUser));
                if(foundUser){
                    console.log("hlo2")
                     eventpart=foundUser.Date1;
                     member=foundUser.Date2;
                     foodmembers=foundUser.Date3;
    
                }
            }
        }).clone();
        await Tour.findOne({username:currentUser},
            function(err,foundUser){
                if(err){
                    console.log("error")
                }else{
                    //console.log(String(foundUser));
                    if(foundUser){
                        console.log("hlo")
                         tourop=[foundUser.isInterested,
                        foundUser.paxCount]
                    }
                }
            }).clone();
        await Tshirt.findOne({username:currentUser},
            function(err,foundUser){
                if(err){
                    console.log(err)
                }else{
                    //console.log(String(foundUser));
                    if(foundUser){
                         options=[foundUser.menOption, foundUser.womenOption, foundUser.grandKidsOption]
                         quantity=foundUser.quantity
                          console.log('sssssss');
                          var previewData=[currentUser,particitype,inpax,chkin,chkout,htl1,htl2,eventpart,member,foodmembers,options, quantity,tourop];
                          console.log(previewData);
                          res.send(previewData)
                    }
                }
            }).clone();
        /*console.log('sssssss');    
        var previewData=[particitype,inpax,chkin,chkout,htl1,htl2,eventpart,member,foodmembers,options, quantity,tourop]
        console.log('sssssss');
        console.log(previewData);
        res.send(previewData)*/

    }
    catch(e){
        console.log(e.message)
    }
})

router.get('/registered',async(req,res)=>{
    console.log("hello");
    try{var list=[]
   /*
   Accomodation.find({},{username:1,pax:1, _id:0})
   console.log(list)
   //var grantot[(list)]*/
   await Accomodation.find(function(err,docs){
    if(err){
        console.log(err);
    }else{//console.log(docs);
        docs.forEach(function(doc){
            list.push({username:doc.username,pax:doc.pax})
            console.log(list);
            res.send(list);
        })
    }
   })
   res.send(list);
}
   catch(e){
    console.log(e.message);
   }
})

router.get('/participation',async(req,res)=>{
    var total1=[0,0,0,0], campvis=[0,0,0,0],evening24=[0,0,0,0],evening25=[0,0,0,0], singl=0,doubl=0,tripl=0,singl2=0,doubl2=0,tripl2=0,hsingl=0,hdoubl=0,htripl=0,hsingl2=0,hdoubl2=0,htripl2=0,totalum,totspo,totgrndchld,accomneed1=[0,0,0,0,0,0,0,0],accomneed2=[0,0,0,0,0,0,0,0],paxx={};
    console.log("abc")
    var accomdata=await Accomodation.find()
        console.log(accomdata)
    try{
        console.log("accom01")
        await Accomodation.find(function(err,docs){
            if(err){
                console.log(err)
            }else{console.log(docs)
                docs.forEach((doc)=>{
                    console.log("Updated -> ")
                    console.log(doc.checkInDate.getDate().toString())
                    //console.log(Date('2022-10-24T00:00:00.000Z').getDate())
                  if(doc.checkInDate.getDate().toString()=='24' &&doc.checkOutDate.getDate().toString()=='25'){
                  console.log("inin")
                  singl=singl+doc.hotel11[0]+doc.hotel11[3]+doc.hotel11[9]+doc.hotel11[6]+doc.hotel11[12];
                  doubl=doubl+doc.hotel11[1]+doc.hotel11[4]+doc.hotel11[10]+doc.hotel11[7]+doc.hotel11[13];
                  tripl=tripl+doc.hotel11[2]+doc.hotel11[5]+doc.hotel11[11]+doc.hotel11[8]+doc.hotel11[15];
                  hsingl=hsingl+doc.hotel22[0]+doc.hotel22[3]+doc.hotel22[9]+doc.hotel22[6]+doc.hotel22[12];
                  hdoubl=hdoubl+doc.hotel22[1]+doc.hotel22[4]+doc.hotel22[10]+doc.hotel22[7]+doc.hotel22[13];
                  htripl=htripl+doc.hotel22[2]+doc.hotel22[5]+doc.hotel22[11]+doc.hotel22[8]+doc.hotel22[15];}
                  if(doc.checkInDate.getDate().toString()=='24'&&doc.checkOutDate.getDate().toString()=='25'){
                  singl2=singl2+doc.hotel11[0]+doc.hotel11[3]+doc.hotel11[9]+doc.hotel11[6]+doc.hotel11[12];
                  doubl2=doubl2+doc.hotel11[1]+doc.hotel11[4]+doc.hotel11[10]+doc.hotel11[7]+doc.hotel11[13];
                  tripl2=tripl2+doc.hotel11[2]+doc.hotel11[5]+doc.hotel11[11]+doc.hotel11[8]+doc.hotel11[15];
                  hsingl2=hsingl2+doc.hotel22[0]+doc.hotel22[3]+doc.hotel22[9]+doc.hotel22[6]+doc.hotel22[12];
                  hdoubl2=hdoubl2+doc.hotel22[1]+doc.hotel22[4]+doc.hotel22[10]+doc.hotel22[7]+doc.hotel22[13];
                  htripl2=htripl2+doc.hotel22[2]+doc.hotel22[5]+doc.hotel22[11]+doc.hotel22[8]+doc.hotel22[15];}
                  
                  if(doc.checkOutDate.getDate().toString()=='24'){
                    totalum++;
                    totspo=totspo+doc.pax.spouse;
                    totgrndchld=totgrndchld+doc.pax.grandKids;
                  }
                 /* var accomneed1=[singl,doubl,tripl,(singl+tripl+doubl),hsingl,hdoubl,htripl,(hsingl+htripl+hdoubl)]
                console.log(accomneed1)*/

                })
                console.log("accom1")
                accomneed1=[singl,doubl,tripl,(singl+tripl+doubl),hsingl,hdoubl,htripl,(hsingl+htripl+hdoubl)]
                console.log(accomneed1)
                accomneed2=[singl2,doubl2,tripl2,(singl2+tripl2+doubl2),hsingl2,hdoubl2,htripl2,(hsingl2+htripl2+hdoubl2)]
            }
        }).clone()
        await Tour.find((err,doc2)=>{
            if(err){console.log(err)}
            else{
                console.log("tourstuf")
                doc2.forEach( (doc2)=>{
                     paxx=doc2.paxCount;
                })
            }
        }).clone()
        await Event.find( (err,doc3)=>{
            if(err){console.log(err)}
            else{
                doc3.forEach( (doc34)=>{
                    console.log("doc34")
                    console.log(doc34)
                    accomdata.forEach ( (user)=>{
                        if(user.username==doc34.username){
                            if(doc34.Date2.cond1==true){
                                console.log("helo")
                                console.log(user)
                                campvis[0]++;
                                campvis[1]=campvis[1]+user.pax.spouse
                                campvis[2]=campvis[2]+user.pax.familyMembers
                                campvis[3]=campvis[3]+user.pax.grandKids
                            }
                            if(doc34.Date1.cond1==true){
                            evening24[0]++;
                            evening24[1]=evening24[1]+user.pax.spouse
                            evening24[2]=evening24[2]+user.pax.familyMembers
                            evening24[3]=evening24[3]+user.pax.grandKids
                            }
                            if(doc34.Date3.cond1==true){
                            evening25[0]++;
                            evening25[1]=evening25[1]+user.pax.spouse
                            evening25[2]=evening25[2]+user.pax.familyMembers
                            evening25[3]=evening25[3]+user.pax.grandKids
                            }}
                        else{console.log("No UserFound")}})

                        total1=[(campvis[0]+evening24[0]+evening25[0]),(campvis[1]+evening24[1]+evening25[1]),(campvis[2]+evening24[2]+evening25[2]),(campvis[3]+evening24[3]+evening25[3])];
                        console.log(campvis)
                         })
                        
                        var datasend={
                    campusvisit:campvis,EveningHotel24th:evening24, EveningHotel25th:evening25,
                    totalval:total1, 
                    breezeRes:accomneed1, TamilnaduHotel:accomneed2, 
                    eventdata:total1,
                    tourdata:paxx};
                console.log(datasend)
                res.send(datasend);
            }}).clone()
                    
                    /*console.log(total1)
                    
                }
                console.log("accom13")
                //var total1=[(campvis[0]+evening24[0]+evening25[0]),(campvis[1]+evening24[1]+evening25[1]),(campvis[2]+evening24[2]+evening25[2]),(campvis[3]+evening24[3]+evening25[3])]
                var total2=[]
            }
        }).clone()*/
        
        
    }
    catch(e){
    console.log(e.message);
   }
})

router.get('/tshirt',async(req,res)=>{
    try{
        var mensPolo1=[0,0,0,0,0,0,0],mensPolo2=[0,0,0,0,0,0,0],womensshirt1=[0,0,0,0,0],womensshirt2=[0,0,0,0,0],girlshirt=[0,0,0,0],boyshirt=[0,0,0,0]
       await Tshirt.find(function(err,doc){
        if(err){console.log(err)}
        else{doc.forEach(async(data)=>{
            var supi= data.quantity.menQuantity.supimaCotton
            mensPolo1[0]=mensPolo1[0]+supi.sSize
            mensPolo1[1]=mensPolo1[1]+supi.mSize
            mensPolo1[2]=mensPolo1[2]+supi.lSize
            mensPolo1[3]=mensPolo1[3]+supi.xlSize
            mensPolo1[4]=mensPolo1[4]+supi.xxlSize
            mensPolo1[5]=mensPolo1[5]+supi.xxxlSize
            mensPolo1.forEach(x => {
                mensPolo1[6] += x;
            });

            var supi2= data.quantity.menQuantity.sweatWickingFabric
            mensPolo2[0]=mensPolo2[0]+supi2.sSize
            mensPolo2[1]=mensPolo2[1]+supi2.mSize
            mensPolo2[2]=mensPolo2[2]+supi2.lSize
            mensPolo2[3]=mensPolo2[3]+supi2.xlSize
            mensPolo2[4]=mensPolo2[4]+supi2.xxlSize
            mensPolo2[5]=mensPolo2[5]+supi2.xxxlSize 
            mensPolo2.forEach(x => {
                mensPolo2[6] += x;
            });

            var womensupi=data.quantity.womenQuantity.supimaCotton
            womensshirt1[0]=womensshirt1[0]+womensupi.sSize
            womensshirt1[1]=womensshirt1[1]+womensupi.mSize
            womensshirt1[2]=womensshirt1[2]+womensupi.lSize
            womensshirt1[3]=womensshirt1[3]+womensupi.xlSize
            womensshirt1[4]=womensshirt1[0]+womensshirt1[2]+womensshirt1[1]+womensshirt1[3]


            var womensupi2=data.quantity.womenQuantity.supimaCotton
            womensshirt2[0]=womensshirt2[0]+womensupi2.sSize
            womensshirt2[1]=womensshirt2[1]+womensupi2.mSize
            womensshirt2[2]=womensshirt2[2]+womensupi2.lSize
            womensshirt2[3]=womensshirt2[3]+womensupi2.xlSize
            womensshirt2[4]=womensshirt2[0]+womensshirt2[2]+womensshirt2[1]+womensshirt2[3]

            var girlshirt1=data.quantity.grandKids.girls
            girlshirt[0]=girlshirt[0]+girlshirt1.category1
            girlshirt[1]=girlshirt[1]+girlshirt1.category2
            girlshirt[2]=girlshirt[2]+girlshirt1.category3
            girlshirt[3]=girlshirt[0]+girlshirt[1]+girlshirt[2]

            var boyshirt1=data.quantity.grandKids.boys
            boyshirt[0]=boyshirt[0]+boyshirt1.category1
            boyshirt[1]=boyshirt[1]+boyshirt1.category2
            boyshirt[2]=boyshirt[2]+boyshirt1.category3
            boyshirt[3]=boyshirt[2]+boyshirt[0]+boyshirt[1]



        })
        var datasent={mensPolo1,mensPolo2,womensshirt1,womensshirt2,girlshirt,boyshirt}
        console.log(datasent)
        res.send(datasent)}
       }) 
    }
    catch(e){
    console.log(e.message);
   }
})

router.get("/registrationList",async(req,res)=>{
    try{
       // var userlist=[];
        Registration.find(function(err,docs){
            if(err){
                console.log(err);
            }else{
                console.log(docs);
                res.send(docs)
            }
        }).clone()
    }
    catch(e){
    console.log(e.message);
   }
})

router.get("/summary",async(req,res)=>{
    var accomdata=await Accomodation.find()
    var eventdata=await Event.find()
    var tourdata= await Tour.find()
    var tshirtData=await Tshirt.find()
    var regdata= await Registration.find()
    var datasend=[];
    try{
        regdata.forEach((user)=>{
            eventdata.forEach((user2)=>{
                if(user2.username==user.username){
                accomdata.forEach((user3)=>{
                    if(user3.username==user.username){
                    tourdata.forEach((user4)=>{
                        if(user4.username==user.username){
                        tshirtData.forEach((user5)=>{
                            if(user5.username==user.username){
                            var Branch=user.branch;
                            var Alumini_name=user.name;
                            var Spouse=user.spouse;
                            var family=user3.pax.familyMembers;
                            var granchd=user3.pax.grandKids;
                            var totalppl=2+family+granchd
                            var singl=user3.hotel11[0]+user3.hotel11[3]+user3.hotel11[6]+user3.hotel11[9]+user3.hotel11[12]+user3.hotel22[0]+user3.hotel22[3]+user3.hotel22[6]+user3.hotel22[9]+user3.hotel22[12];
                            var doubl=user3.hotel11[1]+user3.hotel11[4]+user3.hotel11[7]+user3.hotel11[10]+user3.hotel11[13]+user3.hotel22[1]+user3.hotel22[4]+user3.hotel22[7]+user3.hotel22[10]+user3.hotel22[13];
                            var Tshare=user3.hotel11[2]+user3.hotel11[5]+user3.hotel11[8]+user3.hotel11[11]+user3.hotel11[14]+user3.hotel22[2]+user3.hotel22[5]+user3.hotel22[8]+user3.hotel22[11]+user3.hotel22[14];
                            var totalrooms=singl+doubl+Tshare;

                            var event24=user2.Date1.cond2?4500:0;
                            var campus25=user2.Date2.cond1?1600:0;
                            var event25=user2.Date3.cond1?4500:0; 
                            var totEveCost=event24+campus25+event25;
                            var dinner24=user2.Date1.cond2?(totalppl*700):0;
                            var dinner25=user2.Date3.cond2?(totalppl*700):0;
                            var dinnerCost=dinner25+dinner24;

                            var singlCost=singl*2800;
                            var doublCost=doubl*3500;
                            var TshareCost=Tshare*1750;
                            var roomcost=singl*2800+doubl*3500+Tshare*1750;

                            //barFee=(2+family)*1000;
                             var trichyTour=user4.paxCount.trichy*500
                             var phuketTour=user4.paxCount.phuketKrabi*53000
                             var mysoreTour=user4.paxCount.mysoreBandipur*20000
                             var hampiTour=user4.paxCount.belurHampi*16000
                             var tourCost=trichyTour+phuketTour+mysoreTour+hampiTour;
                             
                             var grandTotal=tourCost+roomcost+dinnerCost+totEveCost
                        
                             var reportData={
                                Branch:Branch,
                                Alumini_name:Alumini_name,
                                SPouse_name:Spouse,
                                familymem:family,
                                grandchildren:granchd,
                                totalmembers:totalppl,
                                Single:singl,
                                Double:doubl,
                                Twinshare:Tshare,
                                Rooms:totalrooms,
                                Event24th:event24,
                                Campus25th:campus25,
                                Event25th:event25,
                                TotalFee:totEveCost,
                                Dinner24th:dinner24,
                                Dinner25th:dinner25,
                                totaldinner:dinnerCost,
                                singleCost:singlCost,
                                doubleCost:doublCost,
                                twinCost:TshareCost,
                                totalCost:roomcost,
                                trichy:trichyTour,
                                phuket:phuketTour,
                                mysore:mysoreTour,
                                hampi:hampiTour,
                                tourCost:tourCost,
                                FrandTotal:grandTotal,
                        
                                
                            }
                             
                            datasend.push(reportData); 
                        }}
                        )}
                    })}
                })
            }
        })
            
        res.send(datasend)
        })
    }
    catch(e){
    console.log(e.message);
   }
})

router.post('/accomodationSave', async(req,res)=>{
    try{
        const data=req.body;console.log(data);

        const roomtypes2=['standard', 'deluxe', 'familyRoom', 'suite', 'additionalMember']

        const roomtypes1=['standard', 'executive', 'deluxe', 'luxurySuite', 'grandSuite']

        const roomoccupancy=['singleOccupancy', 'doubleOccupancy', 'twinShare']
        const h1=data.hotel1,h2=data.hotel2;
        console.log(h1)
        const temp= data.hotel1.map(function(count,i){return{
            roomType:roomtypes1[i%3],
            roomOccupancy:roomoccupancy[parseInt(i/5)],
            count:count
        }
        })
        const hotel11=temp.filter(function(rooms){return rooms.count>0;})

        const temp2= data.hotel2.map(function(count,i){return{
            roomType:roomtypes2[i%3],
            roomOccupancy:roomoccupancy[parseInt(i/5)],
            count:count
        }
        })
        const hotel22=temp2.filter(function(rooms){return rooms.count>0;})

        const newAcc= new Accomodation({
            typeOfRoom:'singleOccupancy',
            username:"TestUser",
            pax:{
                alumini:1,
                spouse:1,
                familyMembers:1,
                grandKids:1
            },
            participationType:data.participationType,
            checkInDate:data.checkInDate,
            checkOutDate:data.checkOutDate,
            hotel:{
                breezeResidency:hotel11/*[
                    {roomType:'standard',
                    roomOccupancy:'singleOccupancy'},{roomType:'standard',
                    roomOccupancy:'singleOccupancy'}
                    
                ]*/,
                hotelTamilNadu:hotel22/*{
                    roomType:'standard',
                    roomOccupancy:'singleOccupancy'
                }*/
            },

                hotel11:h1,
                hotel22:h2
            
        });
        await newAcc.save();
        console.log("saved accomodation successfully")
        res.send("success")
        console.log("nope")
    
    }
    catch(e){
        console.log(e.message)
        res.send("failure")
    }
})

router.post('/eventsSave',async(req,res)=>{
    try{
        const data=req.body;console.log(data);
        const newEve= new Event({
            username:"TestUser1",
            Date1:{
                cond1:data.conditions[0],
                cond2:data.conditions[1],
                cond3:data.conditions[2],
                count:{
                    veg:parseInt(data.d1v),
                    nonveg:parseInt(data.d1nv)
                }
            },
            Date2:{
                cond1:data.conditions[3],
                cond2:data.conditions[4],
                count:parseInt(data.d2c)
            },
            Date3:{
                cond1:data.conditions[5],
                cond2:data.conditions[6],
                cond3:data.conditions[7],
                count:{
                    veg:parseInt(data.d3v),
                    nonveg:parseInt(data.d3nv)
                }
            }
        });
        await newEve.save();
        console.log("saved events successfully")
        res.send("success")
    }
    catch(e){
        console.log(e.message)
        res.send("failure")
    }
})

router.post("/registrationData",async(req,res)=>{
    try{
        const data=req.body;console.log(data);
        const newReg=new Registration({
            username: String,
    name: String,
    branch: String,
    spouse: String,
    city: String,
    country: String,
    region: String,
    mobile: String,
    email: String,
    tshirt: String
        })
    }catch(e){
        console.log(e.message);
    }
})

router.post("/ToursSave",async(req,res)=>{
    try{let interest;
        const data=req.body; console.log(data);
        //interest=data.need?True:False;
        const newTour= new Tour({
            username:"TestUser1",
            inInterested:data.need,//interest,
            paxCount:{
                trichy:data.tour[0],
                phuketKrabi:data.tour[1],
                mysoreBandipur:data.tour[2],
                belurHampi:data.tour[3]
            }
        })
        await newTour.save();
        console.log("saved tour successfully")
        res.send("success")
    }catch(e){
        console.log(e.message);
    }
})

router.post("/tshirtSave",async(req,res)=>{
    try{
        const data=req.body;
        data.men1=data.men1.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        data.men2=data.men2.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        data.women1=data.women1.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        data.women2=data.women2.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        data.girls1=data.girls1.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        data.boys1=data.boys1.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        console.log(data);
        const newTshirt=new Tshirt({
            username:"TestUser1",
            isInterested:data.c[0],
            menOption:{
                supimaCotton:data.c[1],
                sweatWickingFabric:data.c[2]
            },
            womenOption:{
                supimaCotton:data.c[3],
                sweatWickingFabric:data.c[4]
            },
            quantity:{
                menQuantity:{
                    supimaCotton:{
                        sSize:parseInt(data.men1[0]),
                        mSize:parseInt(data.men1[1]),
                        lSize:parseInt(data.men1[2]),
                        xlSize:parseInt(data.men1[3]),
                        xxlSize:parseInt(data.men1[4]),
                        xxxlSize:parseInt(data.men1[5]),   
                    },
                    sweatWickingFabric:{
                         sSize:parseInt(data.men2[0]),
                        mSize:parseInt(data.men2[1]),
                        lSize:parseInt(data.men2[2]),
                        xlSize:parseInt(data.men2[3]),
                        xxlSize:parseInt(data.men2[4]),
                        xxxlSize:parseInt(data.men2[5]),   
                    }
                },
                womenQuantity:{supimaCotton:{
                        sSize:parseInt(data.women1[0]),
                        mSize:parseInt(data.women1[1]),
                        lSize:parseInt(data.women1[2]),
                        xlSize:parseInt(data.women1[3]),
                           
                    },
                    sweatWickingFabric:{
                         sSize:parseInt(data.women2[0]),
                        mSize:parseInt(data.women2[1]),
                        lSize:parseInt(data.women2[2]),
                        xlSize:parseInt(data.women2[3]),    
                    }
            },
            grandKids:{
                girls:{
                    category1:data.girls1[0],
                    category2:data.girls1[1],
                    category3:data.girls1[2],
                },
                boys:{
                    category1:data.boys1[0],
                    category2:data.boys1[1],
                    category3:data.boys1[2],
                }
            }
        }

        })
        await newTshirt.save();
        console.log("saved tshirt successfully")
        res.send("success")
    }catch(e){
        console.log(e.message);
    }
})





module.exports = router;
