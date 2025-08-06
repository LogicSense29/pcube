import Praise from "/Praise2.png";
import Nimi from "/Nimi2.png";
import Sam from "/samlolo.png";

const executives = [
  {
    image: Praise,
    name: "Praise Philips",
    position: "Chief Executive Officer",
  },
  {
    image: Nimi,
    name: "Praise Philips",
    position: "Chief Executive Officer",
  },
  {
    image: Sam,
    name: "Praise Philips",
    position: "Chief Executive Officer",
  },
];
function ExecutivesSection() {
  return (
    <section className='md:h-screen flex flex-col bg-main-bg px-8 md:px-30 space-y-8 mb-[200px] '>
      <h2 className='text-center text-4xl md:text-5xl font-normal break-words'>
        The leadership that <br className='hidden md:block' />
        carried your information
      </h2>
      <div className='flex justify-between flex-col md:flex-row'>
        {executives.map((item, index) => (
          <div
            key={index}
            className='bg-transparent flex flex-col relative md:w-[30%]'>
            <div className='h-[90%]'>
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-full object-contain object-center rounded-t-3xl'
              />
            </div>
            <div className='relative bg-white px-6 py-10 rounded-t-3xl rounded-b-3xl outline outline-[#FFFF0145] bottom-4'>
              <h3 className='text-2xl font-normal'>{item.name}</h3>
              <p className='text-base font-normal text-gray-500'>
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExecutivesSection;
