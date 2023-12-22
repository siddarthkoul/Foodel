import React, {useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
export default function Home() {

const [search,setSearch] = useState('');
const [foodCat,setFoodCat] = useState([]);
const [foodItem,setFoodItem] = useState([]);


const loadData = async () => {
   try {
      let response = await fetch("http://localhost:5000/api/foodData", {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         }
      });

      response = await response.json();
      // console.log(response[0],response[1]);
      setFoodItem(response[0])
      setFoodCat(response[1])
   } catch (error) {
      console.error("Error fetching data:", error);
   }
};

useEffect(()=>{
   loadData()
},[])


   return (
      <div>
         <div>
            <Navbar />
         </div>
         <div>
         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex:"10"}}>
      <div class="d-flex justify-content-center">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e=>{setSearch(e.target.value)})}/>
      {/* <button class="btn btn-outline-success text-white bg-warning" type="submit">Search</button> */}
    </div>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?coffee" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?cake" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className="container">
   {foodCat.length !== 0 ? (
      foodCat.map(({ _id, CategoryName }) => (
         <div key={_id} className="row mb-3">
            <div className="fs-3 m-3">
               {CategoryName}
            </div>
            <hr />
            {foodItem.length !== 0 ? (
               foodItem
                  .filter((item) => 
                     item.CategoryName === CategoryName &&
                     item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map(({ _id: itemId, name, options, img }) => (
                     <div key={itemId} className="col-12 col-md-6 col-lg-3">
                        <Card
                           foodName={name}
                           options={options[0]}
                           imgSrc={img}
                        />
                     </div>
                  ))
            ) : (
               <div>No such data found</div>
            )}
         </div>
      ))
   ) : (
      <div>No data available</div>
   )}
</div>

         <div>
            <Footer />
         </div>
      </div>
   );
}
