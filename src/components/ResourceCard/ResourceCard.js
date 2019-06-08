import React from 'react';
import { resourceList } from '../../assets/data/PersonalData';
import { withState } from 'recompose';
import './ResourceCard.css';

const ResourceCard = ({ handleHover }) => {
  const resourceCard = resourceList.map((item, index) => {
    return (
      <card className="resource-card">
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
        <cardcontent className="resource-content-section">
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
        </cardcontent>
      </card>
    );
  });

  return (
    <section style={{ width: 'max-content', margin: '10rem auto' }}>
      <cards className="resource-cards">{resourceCard}</cards>
    </section>
  );
};

export default withState('detailDisplay', 'handleHover', '')(ResourceCard);
