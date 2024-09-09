import React from 'react';
import './Page2.css';

const Page2 = () => {
  const containerData = [
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
  ];

  return (
    <div className="page2-container">
      <h1 className="page2-title">Title</h1>
      <p className="page2-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="grid-container">
        {containerData.map((item, index) => (
          <div className="content-container" key={index}>
            <img src={item.img} alt="Placeholder" className="image-placeholder" />
            <div className="description">
              <p>{item.description1}</p>
              <p>{item.description2}</p>
              <p>{item.description3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
