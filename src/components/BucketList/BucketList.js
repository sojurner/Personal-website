import React, { Component } from 'react';
import { bucketList } from '../../assets/data/PersonalData';
import './BucketList.css';

class BucketList extends Component {
  constructor() {
    super();
    this.state = {
      listType: 'personal'
    };
  }

  setType = listType => {
    return this.state.listType !== listType
      ? this.setState({ listType })
      : null;
  };

  render() {
    const { bucketRef } = this.props;
    const { listType } = this.state;
    const selectedItems = bucketList.filter(item => item.type === listType);
    return (
      <section className="bucket-items" ref={bucketRef}>
        <h3>Goals...</h3>
        <div>
          <button
            className={
              listType === 'personal'
                ? 'bucket-btn bucket-btn-active'
                : 'bucket-btn'
            }
            onClick={this.setType.bind(null, 'personal')}
          >
            <i className="fas fa-user-circle bucket-user" />
          </button>
          <button
            className={
              listType === 'professional'
                ? 'bucket-btn bucket-btn-active'
                : 'bucket-btn'
            }
            onClick={this.setType.bind(null, 'professional')}
          >
            <i className="fas fa-laptop-code bucket-code" />
          </button>
        </div>
        <ul>
          {selectedItems.map((item, index) => {
            return <li>{item.description}</li>;
          })}
        </ul>
      </section>
    );
  }
}
export default BucketList;
