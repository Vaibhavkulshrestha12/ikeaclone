// import logo from './logo.svg';
import './App.css';
import ButtonList from './buttonlist';
import Text from './text';
import Image from './images';
import ToggleButton from './toggle';
import ButtonList2 from './buttonlist_2';
import Card2 from './card2';
import RenderGrid from './grid';
import ImageCollage from './secondgid';
import HorizontalScrollMenu from './horimenu';
import CardRow from './Landgrid';
import YellowSquareDiv from './yellowdiv';
import VcardRow from './vertgrid';
import SofaInfo from './info';
import Navbar from './Navbar';
import Footer from './footer';
function App() {
  return (
    <>
    <div className="px-3">
      <div className="flex relative flex-row h-11 
    justify-between items-center max-w-[112rem] 
    mx-0 my-auto bg-black">
  <div className="flex relative w-full m-0 p-0 justify-center
   items-center">
    
  </div>
</div>

<div className="">
    <Navbar/>
</div>
<ButtonList/>
{/* <div className=>

</div> */}

 <Text/>
 <Image/>
 <div className="w-full h-10 flex flex-row items-start justify-between outline-none mt-9 p-0">
  <div className="">1115 items</div>
  <div className=""><div><ToggleButton/></div></div>
</div>
<ButtonList2/>
<RenderGrid/>

<div className="flex justify-center items-center h-64"> {/* Center the button within the div and set the height of the div */}
            {/* Show More button */}
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                Show More
            </button>
        </div>

<ImageCollage/>

<HorizontalScrollMenu/> 

<h1 className="font-bold text-4xl  text-gray-800 mt-9">
                Sofas in different styles and sizes.
            </h1>

<CardRow/>

<h1 className="font-bold text-4xl  text-gray-800 mt-9">
                Sofa bed for multipupose rooms.
            </h1>

<CardRow/>

<YellowSquareDiv/>

<h1 className="font-bold text-4xl  text-gray-800 mt-9">
If you need help buying a new sofa, start here
            </h1>

<VcardRow/>
<HorizontalScrollMenu/>

<SofaInfo/>
<Footer/>



 

</div>
</>
  );
}

export default App;
