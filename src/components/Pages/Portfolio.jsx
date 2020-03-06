import React from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Route
} from "react-router-dom";

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
			path: "/portfolio/all"
		},
		{
			id: 2,
			label: "Portraits",
			path: "/portfolio/portraits",
		},
		{
			id: 3,
			label: "Animals",
			path: "/portfolio/animals"
		},
		{
			id: 4,
			label: "Landscapes",
			path: "/portfolio/landscapes"
		}
	],
	photos: [
		{
			category: "Portraits",
			id: 1,
			photos: [
				{
			    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
			    width: 4,
			    height: 3,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
			    width: 3,
			    height: 4,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
			    width: 4,
			    height: 3,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
			    width: 4,
			    height: 3,
			    alt: "Daguet Photographie"
			  }
			]
		},
		{
			category: "Animals",
			id: 2,
			photos: [
				{
			    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
			    width: 4,
			    height: 3,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
			    width: 1,
			    height: 1,
			    alt: "Daguet Photographie"
			  },
			]
		},
		{
			category: "Landscapes",
			id: 3,
			photos: [
				{
			    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
			    width: 1,
			    height: 1,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
			    width: 3,
			    height: 4,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
			    width: 3,
			    height: 4,
			    alt: "Daguet Photographie"
			  }
			]
		}
	]
};

class Portfolio extends React.Component {
  render() {

  	const pathRootPage = "/" + this.props.location.pathname.split("/")[1];
  	const Gallery = ({ match }) => {
				return (
	      <div>
	        <h3>ID: {match.params.category}</h3>
	        <GalleryPhotos photos={data.photos} />
	      </div>
	    );
    };

    return (
    	<section className="portfolio-container">
    		<PretitleTitle data={data.pretitleTitle}/>
    		<Router>
    			<nav>
    				<NavLinks links={data.links} />
    			</nav>
          <Route path={pathRootPage + "/:category"} component={Gallery}/>
        </Router>	
    	</section>
    );
  }
}

export default withRouter(Portfolio);
