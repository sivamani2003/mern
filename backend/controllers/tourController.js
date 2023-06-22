import {createTour} from './../Tour.js'
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
    
    try {
      const savedTour = await newTour.save();  // Save the new tour to the database
      
      res.status(200).json({
        success: true,
        message: 'Successfully created',
        data: savedTour
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Failed to create. Try again'
      });
    }
  };