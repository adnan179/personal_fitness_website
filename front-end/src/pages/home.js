//data
import data from '../data/categorydata';

//components
import Categories from '../components/catergories';


const Home = () =>{

  return(
    <section className="w-screen min-h-screen justify-center items-center mt-[100px] px-[50px]  p-10">
      <div className='grid laptop:grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1 gap-4'>
        {data && data.map((category,index) => (
          <Categories key={index} category={category} />
        ))}
      </div>
    </section>
  )
}

export default Home;