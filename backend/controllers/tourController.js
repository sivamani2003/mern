import Tour from '../models/Tour.js'
export const createTour = async(req,res)=>{
    const newTour = new Tour(req.body)
    try {
        console.log("before tour save");
        const savedTour = await newTour.save();
        console.log("after tour save");
        res.status(200).json({success:true,message:'Sucessfully created',data:savedTour})
    } catch (err) {
        res.status(500).json({success:false,message:'Failed to create .Try again'})
    }
}