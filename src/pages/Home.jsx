import { Categories } from "../assets/mockData";
import HeroPng from "../assets/images/Hero.png";
function Home() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>Shop By Category</div>
            <ul>
              {Categories.map((category, index) => (
                <li key={index}>
                  <div></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src={HeroPng} alt="heropng" />
            <p> Mogili Mnikanta </p>
            <h2>WELCOME TO E_SHOP</h2>
            <p>MILLIONS+ PRODUCTS</p>
            <button>Shop Now </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
