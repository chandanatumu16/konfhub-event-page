import { useRef } from 'react';

const Tabs = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const ticketsRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const workshopRef = useRef<HTMLDivElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex border-b border-gray-200">
        <button onClick={() => handleTabClick(aboutRef)} className="py-2 px-4 font-medium text-sm text-gray-500">
          About
        </button>
        <button onClick={() => handleTabClick(ticketsRef)} className="py-2 px-4 font-medium text-sm text-gray-500">
          Tickets
        </button>
        <button onClick={() => handleTabClick(speakersRef)} className="py-2 px-4 font-medium text-sm text-gray-500">
          Speakers
        </button>
        <button onClick={() => handleTabClick(workshopRef)} className="py-2 px-4 font-medium text-sm text-gray-500">
          Workshop
        </button>
        <button onClick={() => handleTabClick(sponsorsRef)} className="py-2 px-4 font-medium text-sm text-gray-500">
          Sponsors
        </button>
      </div>
      <div ref={aboutRef} className="mt-4 p-4 bg-white border border-gray-300 rounded">
        <h2 className="text-2xl font-bold">ABOUT EVENT</h2>
        <p className="mt-2">This is the description of an event...</p>
        {/* Add your images or other content here */}
      </div>
      <div ref={ticketsRef} className="mt-4 p-4 bg-white border border-gray-300 rounded">
        <h2 className="text-2xl font-bold">TICKETS</h2>
        <p className="mt-2">This is tickets section...</p>
      </div>
      <div ref={speakersRef} className="mt-4 p-4 bg-white border border-gray-300 rounded">
        <h2 className="text-2xl font-bold">SPEAKERS</h2>
        <p className="mt-2">This is speakers section...</p>
      </div>
      <div ref={workshopRef} className="mt-4 p-4 bg-white border border-gray-300 rounded">
        <h2 className="text-2xl font-bold">WORKSHOP</h2>
        <p className="mt-2">This is workshop section...</p>
      </div>
      <div ref={sponsorsRef} className="mt-4 p-4 bg-white border border-gray-300 rounded">
        <h2 className="text-2xl font-bold">SPONSORS</h2>
        <p className="mt-2">This is sponsors section...</p>
      </div>
    </div>
  );
};

export default Tabs;
