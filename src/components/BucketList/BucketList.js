import React, { Component } from 'react';
import { bucketList } from '../../assets/data/PersonalData';
import './BucketList.css';

class BucketList extends Component {
  constructor() {
    super();
    this.state = {
      listType: 'personal',
      visible: false
    };
    this.contentRef = React.createRef();
  }

  componentDidMount = () => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        this.setState({ visible: entry.isIntersecting });
      },
      { rootMargin: '-300px' }
    );
    if (this.contentRef) {
      observer.observe(this.contentRef);
    }
  };

  setType = () => {
    this.setState(prev => {
      return prev.listType === 'personal'
        ? (prev.listType = 'professional')
        : (prev.listType = 'personal');
    });
  };

  render() {
    const { bucketRef } = this.props;
    const { listType } = this.state;
    const selectedItems = bucketList.filter(item => item.type === listType);
    return (
      <section className="bucket-items" ref={bucketRef}>
        <h3>Goals</h3>
        <div onClick={this.setType} className="bucket-tabs">
          <div
            className={
              listType === 'personal'
                ? 'bucket-toggle bucket-toggle-personal'
                : 'bucket-toggle bucket-toggle-professional'
            }
          />
          <button className="bucket-btn">
            <i className="fas fa-user-circle bucket-user" />
          </button>
          <button className="bucket-btn">
            <i className="fas fa-laptop-code bucket-code" />
          </button>
        </div>
        <content
          ref={ref => (this.contentRef = ref)}
          className={
            this.state.visible ? 'bucket-content' : 'bucket-content-hide'
          }
        >
          <div>
            <h4 className="bucket-type">{listType}</h4>
            <table>
              <tbody>
                {selectedItems.map((item, index) => {
                  return (
                    <tr key={`bucket-${index}`}>
                      <td>
                        {item.in_progress ? '》' : item.completed ? '✓' : '~'}
                      </td>
                      <td
                        className={
                          item.in_progress
                            ? 'bucket-in-progress'
                            : item.completed
                            ? 'bucket-completed'
                            : 'bucket-incomplete'
                        }
                      >
                        {item.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <img
            alt="family relatives"
            src={
              listType === 'personal'
                ? 'https://res.cloudinary.com/paulkim/image/upload/v1552394092/images/misc/family-cropped.jpg'
                : 'https://res.cloudinary.com/paulkim/image/upload/v1552393702/images/professional/army_photo.jpg'
            }
            className={listType === 'personal' ? 'family-img' : 'army-img'}
          />
        </content>
      </section>
    );
  }
}
export default BucketList;
