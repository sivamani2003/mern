import Tour from '../models/Tour.js'
export const createTour = async(req,res)=>{
    const newTour = new Tour(req.body)

    try {

        const savedTour = await newTour.save()
        res
            .status(200)
            .json({
                sucess:true,
                message:'Sucessfully created',
                data:savedTour
            })

    } catch (err) {
        res.status(500).json({sucess:false,message:'Failed to create.Try again'})
    }
}


export const updateTour = async(req,res)=>{
    try {
        
    } catch (err) {
        
    }
}