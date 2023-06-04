import { Link } from "react-router-dom";

const Categories = ({ category }) =>{

  return(
    <Link to={category.link}>
      <div className="flex justify-center items-center w-[300px] h-[200px] phone:h-[130px] phone:w-[250px]
      rounded-lg bg-cover bg-blend-overlay"
        style={{backgroundImage:`url(${category.img})`,width:'100%'}}>
          <h1 className="text-2xl phone:text-sm text-white font-medium font-pacifico">
            {category.name}
          </h1>
        
      </div>
    </Link>
  )
}

export default Categories;

