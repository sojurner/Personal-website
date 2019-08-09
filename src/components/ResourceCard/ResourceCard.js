import React from 'react';
import { resourceList } from '../../assets/data/PersonalData';
import { withState } from 'recompose';
import './ResourceCard.css';

const ResourceCard = ({ handleHover }) => {
  const resourceCard = resourceList.map((item, index) => {
    return (
      <div
        className="resource-card"
        style={{
          backgroundImage: `url('${item.logo}')`,
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.78)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <h4 className="resource-container" key={`resource-${index}`}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            className="resource-title"
          >
            {item.name}
          </a>
        </h4>
        <div className="resource-content-section">
          <section className="resource-description-section">
            <p>{item.description}</p>
          </section>
          <divider className="divider" />

          <ul className="resource-subtitle-section">
            {item.subLinks.map(link => {
              return (
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.link}
                    className="resource-subtitle"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div className="resource-cards">
      <h1 className="resource-section-title">
        Immensely helpful during my Journey
      </h1>
      {resourceCard}
    </div>
  );
};

export default withState('detailDisplay', 'handleHover', '')(ResourceCard);
