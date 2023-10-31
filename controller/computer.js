const getComputers = (req, res) => {
  res.send("This is the store of our computers.");
};
const getOneComputer =(req,res)=>{
  res.send("we get one computer");
}
const addComputer =(req,res)=>{
  // res.send("this is our page")//iyi ni midleware tu yihamagaza json tu kayishira muri app.js
  res.json(req.body)
};
const updateComputer =(req,res)=>{
  res.json({id:req.params.id})
}
const deleteComputer =(req,res)=>{
  res.json({id:req.params.id})
}

module.exports = { getComputers,getOneComputer,addComputer,updateComputer,deleteComputer };
