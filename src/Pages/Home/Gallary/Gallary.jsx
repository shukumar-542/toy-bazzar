import './Gallary.css'
import img1 from '../../../assets/engin1.jpg'
import img2 from '../../../assets/engine2.jpg'
import img3 from '../../../assets/engine3.jpg'



const Gallary = () => {
 
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">

                <div className="gallery-item bg-gray-900">
                    <img src={img1} alt="Image 1" className="w-full h-auto" />
                </div>


                <div className="gallery-item">
                    <img src={img2} alt="Image 2" className="w-full h-auto" />
                    <img src="" alt="" />
                </div>


                <div className="gallery-item">
                    <img src={img3} alt="Image 3" className="w-full h-auto" />
                </div>


                <div className="gallery-item">
                    <img src={img1} alt="Image 4" className="w-full h-auto" />
                </div>


                <div className="gallery-item">
                    <img src={img1} alt="Image 5" className="w-full h-auto" />
                </div>


                <div className="gallery-item">
                    <img src={img1} alt="Image 6" className="w-full h-auto" />
                </div>

            </div>
        </div>
    );
};

export default Gallary;