const db = require("../models");
const { Satellite, SatelliteInf, Transmitter, Position } = db;
const { GetMessage, GetTrilateration } = require("../function/secretFunction");

// Create and Save a new Tutorial
exports.topsecret = (satellitesinfo) => {
  
  if (!satellitesinfo && !Array.isArray(satellitesinfo)) {
    return Promise.reject(new Error("Error datos no validos"))
  }
  //Crea y asocia la informacion recibida con su satelite correspondiente, si es posible.
  const res = CreateAndAssociate(satellitesinfo)
    .then((x) => {
      return MessageAndLocation();
    })
    .then((r) => {
     if(r) Transmitter.create({finalMessage:r.message})
      return r;
    });

    return res
    
};

exports.topsecretSplit = (satellite_name,distance,message) => {
  const satellitesInfo=[{name:satellite_name,distance:distance,message:message}]
  return this.topsecret(satellitesInfo)
};

exports.topsecretSplitGet = (name) =>{
  return Satellite.findOne({
    where: { name: name },
    attributes: ['name'],
    include: [
      { model: SatelliteInf,attributes: ['distance','message'],},
      {model: Position,attributes: ['x','y'], },
    ]
  })
  .then((x)=>{
    if(!x) return Promise.reject(new Error("No se encontro el satelite: "+name))
    return x
  })
}

function CreateAndAssociate(satellitesinf) {

  let satellitesPromise =  satellitesinf.map(satellite => {
    const {name,distance,message} = satellite;
    if (typeof name !== 'string' || typeof distance !== "number" || !Array.isArray(message)) {
      return Promise.reject(new Error('Faltan datos requeridos!'))
    }
    return Satellite.findOne({
      where: { name: name },
      include: [{ model: SatelliteInf }],
    })
    .then((satellitePromise) => {
      if (satellitePromise === null) {
        return Promise.reject(new Error('No se encontro el satelite: '+name))
      }else{
        let {id, satelliteinf} = satellitePromise
        let satelliteinfId=false
        if(satelliteinf) {
          satelliteinfId=satelliteinf.id;
        }
        return Promise.resolve({
          name: name,
          id: id,
          distance:distance,
          message:message,
          satelliteinfId:satelliteinfId
        })
      }
  })
})


  let asd = Promise.all(satellitesPromise)
  .then((satellites)=>{
    return satellites.map((satellite) => {
      const body = {
        distance: satellite.distance,
        message: satellite.message,
        status: "COMPLETE",
        satelliteId: satellite.id,
      };
      if (satellite.satelliteinfId) {
        let  id  = satellite.satelliteinfId;
        return SatelliteInf.update(body, { where: { id: id } });
      } else {
        return SatelliteInf.create(body);
      }
    });
  })
  .then((asd2)=>{
   return  Promise.all(asd2)
  })
  
  return asd
}




function MessageAndLocation() {
  return Satellite.findAll({
    attributes: ['name'],
    include: [
      { model: SatelliteInf,attributes: ['distance','message'],},
      {model: Position,attributes: ['x','y'], },
    ]
  })
  .then((satellitesInfPromise) => {
    let asd = satellitesInfPromise.map((x)=>{
      if(!x.satelliteinf || !x.position) return false
      return {message:x.satelliteinf.message, distance:x.satelliteinf.distance,x:x.position.x,y:x.position.y}
    }).filter((x)=>x)
    
    let message = GetMessage(asd)
    let position =  {x:500,y:-200}//----
    
    if(!message.length) return Promise.reject(new Error('No se pudo completar el mensaje'))
    return {message:message,position:position};
  });
}
