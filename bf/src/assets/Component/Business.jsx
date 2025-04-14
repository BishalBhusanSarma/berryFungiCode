import a from '../image/a.jpg'
import b from '../image/d.jpg'
import c from '../image/c.jpg'
import d from '../image/img1.jpg'
function Business() {
  return (
    <>
      <div className='min-h-screen text-black ' id="business">
        <h1 className="pt-2 text-5xl">Our Business</h1>
        <div className=" flex">
      <div className="w-1/2">
         <div className="flex gap-12 mt-10 ml-16">
           <div className="w-52 h-52 bg-orange-300">
            <img className='h-52' src={a} />
           </div>
           <div className="w-64 h-64 bg-blue-200">
           <img className='h-64' src={b} />
           </div>
         </div>
         <div className="flex gap-12 mt-16 ml-16">
          <div className="w-64 h-64 bg-blue-200 -mt-11">
          <img className='h-64' src={c} />
          </div>
           <div className="w-52 h-52 bg-orange-300">
            <img className='h-52' src={d} />
           </div>
         </div>
      </div>
      <div className="w-1/2">
      <p className="text-start font-light mt-10  px-7 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet auctor ligula, vitae commodo lectus. Donec iaculis, enim
                sed tempus consectetur, justo massa consequat ex, vel fringilla
                metus sapien nec neque. Nullam nec nunc nec nunc ultricies
                ultricies. Nullam ultricies, nunc nec ultricies ultricies, nunc
                nec ultricies ultricies, nunc nec ultricies

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet auctor ligula, vitae commodo lectus. Donec iaculis, enim
                sed tempus consectetur, justo massa consequat ex, vel fringilla
                metus sapien nec neque. Nullam nec nunc nec nunc ultricies
                ultricies. Nullam ultricies, nunc nec ultricies ultricies, nunc
                nec ultricies ultricies, nunc nec ultricies
              </p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Business
