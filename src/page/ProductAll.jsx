import React from "react";
import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ProductAll.scss";
import { Container, Row, Col } from "react-bootstrap";
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
			<Container>
				<img src="https://static.zara.net/photos///2022/I/0/1/p/3046/301/800/17/w/1015/3046301800_15_13_1.jpg?ts=1665045126307" alt="" className="main_img"/>
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