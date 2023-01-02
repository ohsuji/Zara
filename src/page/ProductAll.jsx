import React from "react";
import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ProductAll.scss";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
	const [ProductsList, setProductsList] = useState([]);
	let [query, setQuery] = useSearchParams();
	
	const getProducts = async() => {
		let keyword = query.get("q") || "";
		let url = `https://my-json-server.typicode.com/ohsuji/Zara/products?q=${keyword}`;
		let response = await fetch(url); 
		let data = await response.json();
		setProductsList(data);
	}	
	useEffect(() => {
		getProducts();
	},[query]); 
	getProducts();

	return (
		<div>
			<div className="slide_wrap">
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100 h-80"
						src="https://static.zara.net/photos///contents/mkt/spots/aw22-sale/subhome-xmedia-launch-man//w/1184/IMAGE-landscape-fill-66a75652-22f2-430e-a113-434d1941129d-ca_ES@AD_0.jpg?ts=1672068273294"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://static.zara.net/photos///contents/mkt/spots/aw22-man-north-shoesandbags/subhome-xmedia-48//w/1184/IMAGE-landscape-fill-b24b0454-105d-41bd-80f4-604d93d15bb3-default_0.jpg?ts=1669655003956"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://static.zara.net/photos///contents/mkt/spots/aw22-sale/subhome-xmedia-launch-kids//w/1184/IMAGE-landscape-fill-ec8819cc-0643-40f4-b59d-a1331dc684d1-ca_ES@AD_0.jpg?ts=1672068354681"
						alt="Third slide"
					/>
				</Carousel.Item>
      </Carousel>
			</div>
			<Container>
				<Row>
					{ProductsList.map((menu) => (
						<Col sm={6} lg={3}>
							<ProductCard item={menu} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductAll;