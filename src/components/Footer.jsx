import { storeInfo, socials } from './index.js';
function Footer({prop}) {
    return (
        
        <div id={prop}>
            <div className='w-full col-center py-10 px-4'>
                <h1 className='style-font text-2xl md:text-4xl'>{storeInfo.heading}</h1>
                <p className='text-xl'>{storeInfo.address}</p>
            </div>
            <div className='px-4 py-4 flex justify-between items-end'>
                <div>
                    <p>Built using - React(js), GSAP</p>
                    <h1>Images provided by Pexels</h1>
                </div>
                <div className='flex gap-4'>
                    {socials.map((social, index) => (
                        <div key={index}><span className='sr-only'>{social.name}</span>
                        <img  src={social.icon} alt="" className='w-6'/></div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;