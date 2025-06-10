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
    console.log(minSalary);
    const jobs = await jobModel.find({
        salary: {
            $gte : minSalary
        }
    });
    
     res.json({
        success: true,
        message: "list job api",
        results : jobs
    });
};


const editJob = (req, res) => {
    res.json({
        success: true,
        message: "edit job api"
    })
}



const deleteJob =(req, res) => {
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