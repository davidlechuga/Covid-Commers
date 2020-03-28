import React from 'react';
import { SEO } from '../components';
import { Button, Purchase } from '../styles/components';
import { Link } from 'gatsby';

export default function gracias() {
	return (
		<div>
			<SEO title="Compra Exitosa" />
			<Purchase>
				<h2>Compra Exitosa</h2>
				<p> Espero que disfrutes tu ropa </p>
				<p> Te esperamos de vuelta, ayuda a más gente :D</p>
				<br />
				<span role="img" aria-label="emoji">
					{' '}
					🐬 🌕{' '}
				</span>
				<br />
				<Link to="/">
					<Button>Volver al catálogo</Button>
				</Link>
			</Purchase>
		</div>
	);
}
