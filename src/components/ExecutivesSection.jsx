import Praise from "/Praise2.png";
import Nimi from "/Nimi2.png";
import Sam from "/samlolo.png";

const executives = [
  {
    image: Praise,
    name: "Praise Philips",
    position: "Chief Executive Officer",
    bio: "Visionary leader dedicated to transforming brands through innovative design solutions.",
  },
  {
    image: Nimi,
    name: "Nimi Williams",
    position: "Creative Director",
    bio: "Experienced creative mind specializing in visual storytelling and brand identity.",
  },
  {
    image: Sam,
    name: "Samuel Lolo",
    position: "Operations Manager",
    bio: "Operational strategist focused on seamless project delivery and client satisfaction.",
  },
];
function ExecutivesSection() {
  return (
    <section className='py-24 bg-main-bg px-6 md:px-20 lg:px-32'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl md:text-6xl font-black mb-6 tracking-tighter'>
          The <span className="text-gradient">Visionaries</span> Behind <br /> Pcube
        </h2>
        <p className='text-slate-600 text-lg max-w-2xl mx-auto'>
          Meet the dedicated team bringing creativity and strategy together to elevate your brand to new heights.
        </p>
      </div>
      
      <div className='grid md:grid-cols-3 gap-10'>
        {executives.map((item, index) => (
          <div
            key={index}
            className='group flex flex-col'>
            <div className='relative overflow-hidden rounded-3xl aspect-[4/5] mb-6'>
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white text-sm leading-relaxed">
                  {item.bio}
                </p>
              </div>
            </div>
            
            <div className='space-y-2'>
              <h3 className='text-2xl font-bold group-hover:text-primary transition-colors'>{item.name}</h3>
              <p className='text-primary font-medium tracking-wide text-sm uppercase'>
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
