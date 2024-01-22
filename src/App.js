
import './App.css';
import Random from './components/Random'
import Tag from './components/Tag'
function App() {
  return (
    <div className=" w-full h-screen flex flex-col background relative items-center overflow-x-hidden ">
        <h1 className='bg-white rounded-lg absolute w-11/12 text-center mt-[40px]  text-3xl py-2 px-10 font-bold  '>RANDOM GIFS</h1>
        
        <div className='flex flex-col  w-full items-center gap-y-10 mt-[30px]'>
          <Random></Random>
          <Tag></Tag>
        </div>
    </div>
  );
}

export default App;
