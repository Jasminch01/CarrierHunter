import { useEffect, useState } from "react";
import Categorie from "../Categorie/Categorie";

const JobCategories = () => {
    const [categorieData, setCategorieData] = useState([])
    useEffect(()=> {

        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategorieData(data))

    },[])

    return (
        <div>
            <div className="w-[80%] mx-auto my-10">
                <h1 className="text-center text-3xl font-bold">Job Category List</h1>
                <p className="text-base text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="flex flex-wrap gap-5 justify-center my-5">
                {
                    categorieData.map(categorie => <Categorie key={categorie.id} categorie= {categorie}></Categorie>)
                }
            </div>
        </div>
    );
};

export default JobCategories;