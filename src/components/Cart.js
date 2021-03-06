import React, { useContext, useEffect, useState } from 'react';
//all ok
import { Link } from 'gatsby';
import { Button, StyledCart } from '../styles/components';
import priceFormat from '../utils/priceFormat';
import { CartContext } from '../context';

export default function Cart() {
	const { cart } = useContext(CartContext);

	const [ total, setTotal ] = useState(0);
	const [ stripe, setStripe ] = useState();

	const getTotal = () => {
		setTotal(cart.reduce((acc, current) => acc + current.price * current.quantity, 0));
	};

	useEffect(() => {
		setStripe(window.Stripe(process.env.STRIPE_PK, { betas: [ 'checkout_beta_4' ] }));
		getTotal();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { error } = await stripe.redirectToCheckout({
			items: cart.map(({ sku, quantity }) => ({ sku, quantity })),
			successUrl: process.env.SUCCESS_REDIRECT,
			cancelUrl: process.env.CANCEL_REDIRECT
		});
		if (error) {
			throw error;
		}
	};

	return (
		<StyledCart>
			<h2>Carrito de Compras</h2>
			<table>
				<tbody>
					<tr>
						<th>Producto</th>
						<th>Precio</th>
						<th>Cantidad</th>
						<th>Total</th>
					</tr>
					{cart.map((productos) => (
						<tr key={productos.sku}>
							<td>
								<img src={productos.metadata.img} alt={productos.name} /> {productos.name}
							</td>
							<td>MXN {priceFormat(productos.price)}</td>
							<td>{productos.quantity}</td>
							<td>{priceFormat(productos.quantity * productos.price)} </td>
						</tr>
					))}
				</tbody>
			</table>
			<nav>
				<div>
					<h3>Subtotal: </h3>
					<small> MXN {priceFormat(total)}</small>
				</div>
				<div>
					<Link to="/">
						<Button type="outline"> Volver</Button>
					</Link>
					<Button onClick={handleSubmit} disabled={cart.lenght === 0}>
						Comprar
					</Button>
				</div>
			</nav>
		</StyledCart>
	);
}
