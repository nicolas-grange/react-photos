import React from 'react';

import PretitleTitle from '../PretitleTitle/PretitleTitle';
import NavLinks from '../NavLinks/NavLinks';
import GalleryPhotos from '../GalleryPhotos/GalleryPhotos';

const data = {
	pretitleTitle: {
		pretitle: "Discover my",
		title: "Portfolio"
	},
	links: [
		{
			id: 1,
			label: "All",
			parameter: "all"
		},
		{
			id: 2,
			label: "Portraits",
			parameter: "portraits",
		},
		{
			id: 3,
			label: "Animals",
			parameter: "animals"
		},
		{
			id: 4,
			label: "Landscapes",
			parameter: "landscapes"
		}
	],
	photos: [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
]
};

class Portfolio extends React.Component {
  render() {
    return (
    	<section className="portfolio-container">
    		<PretitleTitle data={data.pretitleTitle}/>
    		<NavLinks links={data.links} />
    		<GalleryPhotos photos={data.photos} />
    	</section>
    );
  }
}

export default Portfolio;
