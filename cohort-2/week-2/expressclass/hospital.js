const express = require ("express") //import express from "express"
const app = express() // create an instance of express

var user = { // database
	name : 'animesh',
	age : 24,
	kidneys : {
		healthy : false
	}
}
	 
	app.use(express.json()) // middleware to parse json data from the request body
	app.get("/",function(req,res){ // create a route
		const johnKidney = user.kidneys // get the kidneys from the user object
        const noOfKidneys = johnKidney.length // get the number of kidneys
        let noOfHealthyKidneys = 0 // initialize the number of healthy kidneys
        for(let i=0;i<johnKidney.length;i++){
            noOfHealthyKidneys = noOfHealthyKidneys +1 // increment the number of healthy kidneys
        }
        const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys
        res.json({ // send a response to the client in json format , This is what gets diaplyed in the screen 
            johnKidney,
            noOfHealthyKidneys,
            noOfUnhealthyKidneys   
        })
        console.log(johnKidney)
    })
    app.post("/",function(req,res){
        const isHealthy = req.body.isHealthy
        user.kidneys.push({healthy : isHealthy})
        res.json({msg : "Done!"} )
    })
    app.put("/",function(req,res){ // replace the kidney at the given index with the new kidney
        const index = req.body.index
        const isHealthy = req.body.isHealthy
        user.kidneys[index] = {healthy : isHealthy}
        res.json({msg : "Done!"} )
    })
    app.delete("/",function(req,res){ // delete the kidney at the given index
        const index = req.body.index
        user.kidneys.splice(index,1)
        res.json({msg : "Done!"} )
    }) 
	
	app.listen(3000)
    
		
		
