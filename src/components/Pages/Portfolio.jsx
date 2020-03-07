import React from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Redirect,
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
	photos: [
		{
			category: "Portraits",
			id: 1,
			heightImg: 450,
			photos: [
				{
			    src: require("../../assets/images/portfolio/portraits/1.jpg"),
			    width: 3,
			    height: 2,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/portraits/2.jpg"),
			    width: 2,
			    height: 3,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/portraits/3.jpg"),
			    width: 2,
			    height: 3,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/portraits/4.jpg"),
			    width: 2,
			    height: 3,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/portraits/5.jpg"),
			    width: 2,
			    height: 3,
			    alt: "Daguet Photographie"
			  }
			]
		},
		{
			category: "Animals",
			id: 2,
			heightImg: 400,
			photos: [
				{
			    src: require("../../assets/images/portfolio/animals/1.jpg"),
			    width: 2,
			    height: 3,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/animals/2.jpg"),
			    width: 4,
			    height: 3,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/animals/3.jpg"),
			    width: 4,
			    height: 3,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/animals/4.jpg"),
			    width: 3,
			    height: 4,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/animals/5.jpg"),
			    width: 3,
			    height: 4,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/animals/6.jpg"),
			    width: 4,
			    height: 3,
			    alt: "Daguet Photographie"
			  }
			]
		},
		{
			category: "Landscapes",
			id: 3,
			heightImg: 400,
			photos: [
				{
			    src: require("../../assets/images/portfolio/landscapes/1.jpg"),
			    width: 3,
			    height: 2,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/landscapes/2.jpg"),
			    width: 3,
			    height: 2,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/landscapes/3.jpg"),
			    width: 3,
			    height: 2,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/landscapes/4.jpg"),
			    width: 3,
			    height: 2,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/landscapes/5.jpg"),
			    width: 3,
			    height: 2,
			    alt: "Daguet Photographie"
			  },
			  {
			    src: require("../../assets/images/portfolio/landscapes/6.jpg"),
			    width: 3,
			    height: 2,
			    alt: "Daguet Photographie"
			  }
			]
		}
	]
};

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.portfolioUrl = this.props.match.url;
	}

	shufflePhotos(photos) {
		for (let i = photos.length - 1; i > 0; i--) {
	    let j = Math.floor(Math.random() * (i + 1));
	    [photos[i], photos[j]] = [photos[j], photos[i]];
	  }
	  return photos;
	}

	getPhotosByCategory(category) {
		if(category === 'all') {
			let allPhotos = [];
			data.photos.forEach((element) => {
				allPhotos = allPhotos.concat(element.photos);
			});
			allPhotos = this.shufflePhotos(allPhotos);
			return {photos: allPhotos};
		} else {
			return data.photos.filter((element) => element.category.toLowerCase() === category)[0];
		}
	}

	categoryExists(category) {
		let exists = false;
		if(category === 'all') {
			exists = true;
		}
		data.photos.forEach((element) => {
			if(element.category.toLowerCase() === category) {
				exists = true;
			}
		});
		return exists;
	}

	createNestedLinks() {
		let links = [
			{
				id: 1,
				label: "All",
				path: this.portfolioUrl + "/all"
			}
		];
		data.photos.forEach((element, index) => {
			links.push({
				id: index+2,
				label: element.category,
				path: this.portfolioUrl + "/" + element.category.toLowerCase()
			});
		});
		return links;
	}

  render() {
  	const Gallery = ({ match }) => {
  		const category = match.params.category;

  		if(this.categoryExists(category)) {
  			const photos = this.getPhotosByCategory(category);

	  		return (
		      <GalleryPhotos photos={photos.photos} heightImg={photos.heightImg}/>
		    );
  		} else {
  			return (
					<h3>Error: category {category} doesn't exist...</h3>
		    );
  		}			
    };

    const links = this.createNestedLinks();

    return (
    	<section className="portfolio-container">
    		<PretitleTitle data={data.pretitleTitle}/>
    		<Router>
    			<nav>
    				<NavLinks links={links} />
    			</nav>
    			<Switch>
    				<Redirect exact from={this.portfolioUrl} to={this.portfolioUrl + "/all"}/>
    				<Route path={this.portfolioUrl + "/:category"} component={Gallery}/>
    			</Switch>
        </Router>	
    	</section>
    );
  }
}

export default withRouter(Portfolio);
