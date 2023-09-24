import JobCategories from "../JobCategories/JobCategories";

const Home = () => {
  return (
    <div className="">
      <div className="bg-indigo-50">
      <div className="lg:flex justify-between gap-10 items-center w-[80%] mx-auto bg-indigo-50">
        <div className="flex-grow-1 md:w-[570px] space-y-3">
          <h1 className="text-6xl font-extrabold">
            One Step <br /> Closer To Your <br />
            <span className="text-sky-500"> Dream Job</span>
          </h1>
          <p className="font-normal">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <button className="btn bg-indigo-400 text-white"> get Started</button>
        </div>
        <div>
          <img src="../../../public/images/user.png" alt="" className="" />
        </div>
      </div>
      </div>
      <JobCategories></JobCategories>
    </div>
  );
};

export default Home;
