import { useLoaderData, useParams } from "react-router-dom";

const JobsDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const jobs = useLoaderData();
  const job = jobs.find((job) => job.id === idInt);

  return (
    <div>
      <div className="h-80 bg-indigo-50" id="job-details-bg"></div>
      <div className="w-[80%] mx-auto h-screen my-10">
        <div className=" h-10 grid lg:grid-cols-4 gap-5">
          <div className=" md:col-span-3 mt-3">
            <div className="space-y-5">
              <p>
                <span className="font-bold">Description : </span>{" "}
                {job.job_description}
              </p>
              <p>
                <span className="font-bold">Responsivility : </span>
                {job.job_responsibility}
              </p>
              <p>
                <span className="font-bold">Educational Requerments : </span>
                {job.educational_requirements}
              </p>
              <p>
                <span className="font-bold">Experience : </span> <br />
                {job.experiences}
              </p>
            </div>
          </div>
          <div>
            <div className=" bg-indigo-100 p-5 rounded-lg space-y-3">
              <p className="font-bold text-xl">Job Details</p>
              <hr className="border border-slate-300" />
              <p>
                <span className="font-bold">Salary : </span>
                {job.salary}
              </p>
              <p>
                <span className="font-bold">Title : </span>
                {job.job_title}
              </p>
              <p className="font-bold text-xl">Contact Information</p>
              <hr className="border border-slate-300" />
              <p>
                <span className="font-bold">Phone : </span>
                {job.contact_information.phone}
              </p>
              <p>
                <span className="font-bold">Email : </span>
                {job.contact_information.email}
              </p>
              <p>
                <span className="font-bold">Address : </span>
                {job.contact_information.address}
              </p>
            </div>
            <div className="mt-3">
              <button className="p-3 w-full bg-indigo-400 text-white rounded-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
