import React from 'react';
import Gifs from './Gifs';

describe('Gifs', () => {
  let wrapper;
  let mockGifs = [
    {
      type: 'gif',
      id: 'ZXdPWPdzDTFlK',
      slug: 'john-paul-george-ZXdPWPdzDTFlK',
      url: 'https://giphy.com/gifs/john-paul-george-ZXdPWPdzDTFlK',
      bitly_gif_url: 'https://gph.is/Ko8iP9',
      bitly_url: 'https://gph.is/Ko8iP9',
      embed_url: 'https://giphy.com/embed/ZXdPWPdzDTFlK',
      username: '',
      source: 'https://dreaming-in-the-60s.tumblr.com/post/43739719119',
      rating: 'g',
      content_url: '',
      source_tld: 'dreaming-in-the-60s.tumblr.com',
      source_post_url:
        'https://dreaming-in-the-60s.tumblr.com/post/43739719119',
      is_sticker: 0,
      import_datetime: '2014-01-03 23:41:17',
      trending_datetime: '2014-12-11 18:48:23',
      images: {
        fixed_height_still: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200_s.gif',
          width: '241',
          height: '200'
        },
        original_still: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy_s.gif',
          width: '275',
          height: '228'
        },
        fixed_width: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200w.gif',
          width: '200',
          height: '166',
          size: '786205',
          mp4: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200w.mp4',
          mp4_size: '64712',
          webp: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200w.webp',
          webp_size: '198578'
        },
        fixed_height_small_still: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/100_s.gif',
          width: '121',
          height: '100'
        },
        fixed_height_downsampled: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200_d.gif',
          width: '241',
          height: '200',
          size: '235844',
          webp: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200_d.webp',
          webp_size: '54672'
        },
        preview: {
          width: '168',
          height: '138',
          mp4: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy-preview.mp4',
          mp4_size: '41804'
        },
        fixed_height_small: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/100.gif',
          width: '121',
          height: '100',
          size: '326593',
          mp4: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/100.mp4',
          mp4_size: '33121',
          webp: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/100.webp',
          webp_size: '95102'
        },
        downsized_still: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy_s.gif',
          width: '275',
          height: '228'
        },
        downsized: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy.gif',
          width: '275',
          height: '228',
          size: '1277013'
        },
        downsized_large: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy.gif',
          width: '275',
          height: '228',
          size: '1277013'
        },
        fixed_width_small_still: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/100w_s.gif',
          width: '100',
          height: '83'
        },
        preview_webp: {
          url:
            'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy-preview.webp',
          width: '145',
          height: '120',
          size: '49368'
        },
        fixed_width_still: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200w_s.gif',
          width: '200',
          height: '166'
        },
        fixed_width_small: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/100w.gif',
          width: '100',
          height: '83',
          size: '231634',
          mp4: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/100w.mp4',
          mp4_size: '26614',
          webp: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/100w.webp',
          webp_size: '74706'
        },
        downsized_small: {
          width: '274',
          height: '228',
          mp4:
            'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy-downsized-small.mp4',
          mp4_size: '131092'
        },
        fixed_width_downsampled: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200w_d.gif',
          width: '200',
          height: '166',
          size: '170389',
          webp: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200w_d.webp',
          webp_size: '43140'
        },
        downsized_medium: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy.gif',
          width: '275',
          height: '228',
          size: '1277013'
        },
        original: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy.gif',
          width: '275',
          height: '228',
          size: '1277013',
          frames: '28',
          mp4: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy.mp4',
          mp4_size: '254030',
          webp: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy.webp',
          webp_size: '351092'
        },
        fixed_height: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200.gif',
          width: '241',
          height: '200',
          size: '1088717',
          mp4: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200.mp4',
          mp4_size: '81947',
          webp: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/200.webp',
          webp_size: '252538'
        },
        looping: {
          mp4: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy-loop.mp4',
          mp4_size: '1372569'
        },
        original_mp4: {
          width: '480',
          height: '396',
          mp4: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy.mp4',
          mp4_size: '254030'
        },
        preview_gif: {
          url: 'https://media3.giphy.com/media/ZXdPWPdzDTFlK/giphy-preview.gif',
          width: '81',
          height: '67',
          size: '48946'
        },
        '480w_still': {
          url: 'https://media4.giphy.com/media/ZXdPWPdzDTFlK/480w_s.jpg',
          width: '480',
          height: '398'
        }
      },
      title: 'john paul GIF',
      _score: 2500023.5,
      analytics: {
        onload: {
          url:
            'https://giphy_analytics.giphy.com/simple_analytics?response_id=5bf9b9906672516451c16e27&event_type=GIF_SEARCH&gif_id=ZXdPWPdzDTFlK&action_type=SEEN'
        },
        onclick: {
          url:
            'https://giphy_analytics.giphy.com/simple_analytics?response_id=5bf9b9906672516451c16e27&event_type=GIF_SEARCH&gif_id=ZXdPWPdzDTFlK&action_type=CLICK'
        },
        onsent: {
          url:
            'https://giphy_analytics.giphy.com/simple_analytics?response_id=5bf9b9906672516451c16e27&event_type=GIF_SEARCH&gif_id=ZXdPWPdzDTFlK&action_type=SENT'
        }
      }
    }
  ];

  window.fetch = jest.fn().mockImplementation(() => {
    Promise.resolve({
      json: () => Promise.resolve(mockGifs)
    });
  });

  beforeEach(() => {
    wrapper = shallow(<Gifs />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch gifs on CDM', () => {
    wrapper.instance().getGifs();
    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.giphy.com/v1/gifs/search?q=paul&api_key=undefined&limit=200'
    );
  });

  it('should handle input change', () => {
    const mockEvent = { target: { value: 'cats' } };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state().input).toEqual('cats');
  });

  it('should render gifs', () => {});
});
