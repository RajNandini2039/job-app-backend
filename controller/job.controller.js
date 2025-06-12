const jobModel = require("../model/job.model");

const createJob = async (req, res) => {
    try{
 console.log(req.body);
   await jobModel.create(req.body);
    res.json({
        success: true,
        message: "job created successfully"
    })
}catch(err){
res.status(400).json({
    success: false,
    message: "Invalid data"
})
}
    };
   

const listJob = async (req, res) => {
    const minSalary = req.query.minSalary || 0;
   
    const jobs = await jobModel.find({
        salary: {
            $gte : minSalary
        }
    });
    
     res.json({
        success: true,
        message: "list job api",
        results : jobs,
    });
};


const editJob = async (req, res) => {
    console.log(req.body);
    // await jobModel.updateOne({
    //     _id: req.body.title
    // } , {
    //     $set: {
    //         title: req.body.title
    //     }
    // });
    const fields ={...req.body};
    delete fields._id;
    await jobModel.findByIdAndUpdate(req.body._id, { ...fields});
    res.json({
        success: true,
        message: "edit job api"
    })
}



const deleteJob = async (req, res) => {
    // await jobModel.deleteOne({_id: req.body._id});
    // await jobModel.deleteMany({_id: req.body._id});

    await jobModel.findByIdAndDelete(req.body._id);
    res.json({
        success: true,
        message: "delete job api"
    })
}

const jobcontroller = {
    createJob,
    listJob,
    editJob,
    deleteJob,
};

module.exports = jobcontroller;