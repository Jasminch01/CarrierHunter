import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job;
    return (
        <div className="w-full p-5 rounded-sm border border-slate-300">
            <div className="space-y-3 ">
                <img src={logo} alt={company_name} className="w-36 h-10" />
                <p className="text-2xl font-bold">{job_title}</p>
                <p className="text-lg">{company_name}</p>
                <div className="flex">
                    <button className="p-2 border border-violet-300 mr-3">{remote_or_onsite}</button>
                    <button className="p-2 border border-violet-300">{job_type}</button>
                </div>
                <p>{location}</p>
                <p> Salary : {salary} $</p>
                
                <Link to={`/jobs-details/${id}`}> <button className="p-3 bg-indigo-400 rounded text-white mt-5">Show Details</button> </Link>
            </div>
        </div>
    );
};
Job.propTypes = {
    job : PropTypes.object.isRequired,
}
export default Job;