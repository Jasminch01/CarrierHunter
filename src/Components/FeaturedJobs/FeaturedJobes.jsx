import PropTypes from "prop-types";
import Job from "../Job/Job";
import { useState } from "react";

const FeaturedJobes = ({ jobsData }) => {
    const [isShowAll, setIsShowAll] = useState(false)
  return (
    <div className="my-5">
      <div>
        <p className="text-3xl font-bold  text-center">Featured Jobs</p>
        <p className="text-base text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-center my-5 items-center">
        <div className="grid grid-cols-2 gap-5 my-5">
          { isShowAll ? jobsData.map((job) => (
            <Job key={job.id} job={job}></Job>
          )):jobsData.slice(0,4).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button onClick={()=> setIsShowAll(true)} className={isShowAll? 'p-3 bg-sky-400 text-white rounded-lg hidden' : "p-3 bg-sky-400 text-white rounded-lg"}>Show All</button>
      </div>
    </div>
  );
};

FeaturedJobes.propTypes = {
  jobsData: PropTypes.array.isRequired,
};
export default FeaturedJobes;
