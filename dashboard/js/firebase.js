
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js" ;
import { 
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    saveTask,
    onGetTasks
}
from"https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";



const addRoom=document.getElementById('addRoom')
const roomDetails=document.getElementById('roomDetails')
const roomFacilities=document.getElementById('roomFacilities')
const roomImage=document.getElementById('roomImage')


addRoom.addEventListener('submit',async (e)=> {
    e.preventDefault()
    let roomType = addRoom['roomType'].value
    let roomId = addRoom['roomId'].value
    let cost = addRoom['cost'].value
    let bookingFee = addRoom['bookingFee'].value
   
})


roomDetails.addEventListener('submit', async (e)=> {
    e.preventDefault()
    let comment=roomDetails['comment'].value
})

roomFacilities.addEventListener('submit', async (e)=> {
    let sel2=roomFacilities['sel2'].value
})


roomImage.addEventListener('submit', async (e)=> {
    let image=roomImage['image'].value
})

floorNumber.addEventListener('submit', async (e)=> {
    let inputState=floorNumber['inputState'].value
})


try {
    await saveTask(roomDetails.value, roomFacilities.value, roomImage.value, roomType.value, roomId.value, cost.value, bookingFee.value, comment.value, sel2.value, image.value, inputState.value)
}
catch(error){
    console.log(error)
}

addRoom.reset()
roomDetails.focus()

export const db=getFirestore()
export const saveTask=(roomDetails, roomFacilities, roomImage, roomType, roomId, cost, bookingFee, comment, sel2, image, inputState => {
        addDoc(collection(db,'form'), {roomDetails, roomFacilities, roomImage, roomType, roomId, cost, bookingFee, comment, sel2, image, inputState})
    })

export const onGetTasks=(callback)=> {
    onSnapshot(collection(db,"form"), callback)
}    






// **********************data write to firebase **************************************************//



// let data = '{"rooms":[' +

// '{"location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipPsIw0mAgsZpIChnCA072opHYQ1Agqv1lWFdw7c", 
//    "data";
//    {

//     "roomType"; "Single Room",
//     "roomNumber"; "001",
//     "facilities"; "Free DSTv, Breakfast, Free swimming",
//     "bookingFee"; "UGX 50,000",
//     "payment"; "UGX 250,000"

//    } 
//   }

//  ]

// }


// '{"roomType":"John","lastName":"Doe" },' +
// '{"firstName":"Anna","lastName":"Smith" },' +
// '{"firstName":"Peter","lastName":"Jones" }]}';




let room_data = 
{
    "rooms": [
      { 
        "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipPsIw0mAgsZpIChnCA072opHYQ1Agqv1lWFdw7c",
        "data": 
          {
            "roomType": "Single Room",
            "roomNo": "001",
            "facilities": ["Free DSTv", "Breakfast", "Free swimming"],
            "bookingFee": 50000,
            "payment": 250000
          }
        
      },

      {
        "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipMb7bC4G2O4pyb33Dr51vdZuriASo-UCO6equaY",
        "data": 
          {
            "roomType": "Single Room",
            "roomNo": "002",
            "facilities": ["Free DSTv", "Breakfast", "Free swimming"],
            "bookingFee": 50000,
            "payment": 250000
          }

        },

        {
            "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipNY1hNgJ1W3_0-qqobFwvf953O6pocvcAsux0de",
            "data": 
              {
                "roomType": "Single Room",
                "roomNo": "003",
                "facilities": ["Free DSTv", "Breakfast", "Free swimming"],
                "bookingFee": 50000,
                "payment": 200000
              }
    
            },
            {
                "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipODzdwmlkLN6squhjoWosAth8wWotZ5JFnHJPOm",
                "data": 
                  {
                    "roomType": "Single Room",
                    "roomNo": "004",
                    "facilities": ["Free DSTv", "Breakfast", "Free swimming"],
                    "bookingFee": 50000,
                    "payment": 250000
                  }
        
                },

                {
                    "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipMF1arlt488CNiNluJztaDIMJP9MUIzelpntmoP",
                    "data": 
                      {
                        "roomType": "Single Room",
                        "roomNo": "005",
                        "facilities": ["Free DSTv", "Breakfast", "Free swimming"],
                        "bookingFee": 50000,
                        "payment": 300000
                      }
            
                    },

                    {
                        "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipOmGV_GOVBL_B0AzycEXAq4oE0RXTrOWx-WMRYf",
                        "data": 
                          {
                            "roomType": "Twin Room",
                            "roomNo": "006",
                            "facilities": ["Free DSTv", "Breakfast", "Free swimming", "Free pool"],
                            "bookingFee": 100000,
                            "payment": 400000
                          }
                
                        },

                        {
                            "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipNVemihuTdIX1zNpTLXoDw-Cc2gm5i_gcvkdGLN",
                            "data": 
                              {
                                "roomType": "Twin Room",
                                "roomNo": "007",
                                "facilities": ["Free DSTv", "Breakfast", "Free swimming", "Free pool"],
                                "bookingFee": 100000,
                                "payment": 400000
                              }
                    
                            },

                            {
                                "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipOm87R24tvrMm07yXw4cZGunw9pcb9z8Ji70T7C",
                                "data": 
                                  {
                                    "roomType": "Twin Room",
                                    "roomNo": "008",
                                    "facilities": ["Free DSTv", "Breakfast", "Free swimming", "Free pool"],
                                    "bookingFee": 100000,
                                    "payment": 400000
                                  }
                        
                                },

                                {
                                    "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipO22qjm07gcLr5BN83wZp6pzoA5QujBcwRcXPBa",
                                    "data": 
                                      {
                                        "roomType": "Twin Room",
                                        "roomNo": "009",
                                        "facilities": ["Free DSTv", "Breakfast", "Free swimming", "Free pool"],
                                        "bookingFee": 100000,
                                        "payment": 400000
                                      }
                            
                                    },

                                    {
                                        "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipPWnF2JC_atz_bdcGXdj6U06adfLZIqHypbHdCq",
                                        "data": 
                                          {
                                            "roomType": "Twin Room",
                                            "roomNo": "010",
                                            "facilities": ["Free DSTv", "Breakfast", "Free swimming", "Free pool"],
                                            "bookingFee": 100000,
                                            "payment": 400000
                                          }
                                
                                        },

                                        

                                {
                                    "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipNImwzZ3umD2B2w9bW_b1-lunkWCzdMthJ38yV8",
                                    "data": 
                                      {
                                        "roomType": "Tripple Room",
                                        "roomNo": "011",
                                        "facilities": ["Free DSTv", "Breakfast"],
                                        "bookingFee": 150000,
                                        "payment": 500000
                                      }
                            
                                    },

                                    {
                                        "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipMETDH5ALiVdLRZ_saKMGyxSBecNhX8i3hYjeF7",
                                        "data": 
                                          {
                                            "roomType": "Tripple Room",
                                            "roomNo": "012",
                                            "facilities": ["Free DSTv", "Breakfast"],
                                            "bookingFee": 150000,
                                            "payment": 500000
                                          }
                                
                                        },

                                        {
                                            "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipMHq7hfDDLrcoegHAgY2dvXmsqAawUgfYaI8s2M",
                                            "data": 
                                              {
                                                "roomType": "Family Room",
                                                "roomNo": "013",
                                                "facilities": ["Free DSTv", "Breakfast", "Free Wi-Fi"],
                                                "bookingFee": 200000,
                                                "payment": 600000
                                              }
                                    
                                            },

                                            {
                                                "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipNGqjnqQ3jt_5YQfGufwN3SMHimW0zZOmlzjuG8",
                                                "data": 
                                                  {
                                                    "roomType": "Family Room",
                                                "roomNo": "014",
                                                "facilities": ["Free DSTv", "Breakfast", "Free Wi-Fi"],
                                                "bookingFee": 200000,
                                                "payment": 600000
                                                  }
                                        
                                                },

                                                {
                                                    "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipMF1arlt488CNiNluJztaDIMJP9MUIzelpntmoP",
                                                    "data": 
                                                      {
                                                        "roomType": "Family Room",
                                                        "roomNo": "015",
                                                        "facilities": ["Free DSTv", "Breakfast", "Free Wi-Fi"],
                                                        "bookingFee": 200000,
                                                        "payment": 600000
                                                      }
                                            
                                                    },

                                                    {
                                                        "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipPn3VLQG5qOiyFkEddhJ91CdChRRj02fFfZHp1B",
                                                        "data": 
                                                          {
                                                            "service": "Swimming pool",
                                                            
                                                          }
                                                
                                                        },

                                                        {
                                                            "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipNkjMqCT4pmjvUNIhWoPqJ-UQLwGXPahUhOQf5G",
                                                            "data": 
                                                              {
                                                                "service": "Swimming pool area",

                                                                
                                                              }
                                                    
                                                            },

                                                            {
                                                                "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipMETDH5ALiVdLRZ_saKMGyxSBecNhX8i3hYjeF7",
                                                                "data": 
                                                                  {
                                                                    "service": "party",
                                                                    
                                                                  }
                                                        
                                                                },

                                                                {
                                                                    "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipMETDH5ALiVdLRZ_saKMGyxSBecNhX8i3hYjeF7",
                                                                    "data": 
                                                                      {
                                                                        "service": "party venue",
                                                                        
                                                                      }
                                                            
                                                                    },

                                                                    {
                                                                        "location": "https://photos.google.com/album/AF1QipNU6FnyAcOyvJaHPen1Cx4nPGfvBov7mSTXd_8b/photo/AF1QipMETDH5ALiVdLRZ_saKMGyxSBecNhX8i3hYjeF7",
                                                                        "data": 
                                                                          {
                                                                            "service": "wedding venue",
                                                                            
                                                                          }
                                                                
                                                                        },

                                        

    ]
  }


  const obj = JSON.parse(room_data);
document.getElementById("demo").innerHTML =
obj.rooms[1].roomType + " " + obj.rooms[1].roomNo + " " + obj.rooms[1].facilities + " " + obj.rooms[1].bookingFee + " " + obj.rooms[1].payment;




