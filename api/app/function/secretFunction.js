


function GetMessage(message) {
    const finalMessage=[]
    message.map((satelite)=>{
        const messageSatellite = satelite.message
     for (let i = 0; i < messageSatellite.length; i++) {
         if(messageSatellite[i]){
             finalMessage[i]=messageSatellite[i]
         }  
         if(!finalMessage[i]) finalMessage[i]=""
     }
    })

    if(finalMessage.includes("")) return []
    
    return finalMessage.join(" ")
}

function GetTrilateration(ubication) {
    if(ubication.length!==2) return 
        var xa = ubication[0].x;
        var ya = ubication[0].y;
        var xb = ubication[1].x;
        var yb = ubication[1].y;
        var xc = ubication[2].x;
        var yc = ubication[2].y;
        

        var ra = ubication[0].distance;
        var rb = ubication[1].distance;
        var rc = ubication[2].distance;
    
        var S = (Math.pow(xc, 2.) - Math.pow(xb, 2.) + Math.pow(yc, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(rc, 2.)) / 2.0;
        var T = (Math.pow(xa, 2.) - Math.pow(xb, 2.) + Math.pow(ya, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(ra, 2.)) / 2.0;
        var y = ((T * (xb - xc)) - (S * (xb - xa))) / (((ya - yb) * (xb - xc)) - ((yc - yb) * (xb - xa)));
        var x = ((y * (ya - yb)) - T) / (xb - xa);
    
        return {
            x: x,
            y: y
    }
    
    
}



module.exports = { GetMessage,GetTrilateration}