import PropTypes from "prop-types";

const Categorie = ({ categorie }) => {
  const { logo, category_name, availability } = categorie;
  return (
    <div className="p-5 bg-indigo-50 rounded-sm">
      <div  className="mb-5">
        <img src={logo} alt="" className="p-3 bg-indigo-100 rounded-sm"/>
      </div>
      <h1 className="text-xl">{category_name}</h1>
      <p className="text-base">{availability}</p>
    </div>
  );
};
Categorie.propTypes = {
  categorie: PropTypes.object.isRequired,
};
export default Categorie;
