import React from 'react';
import { StyledJumbo } from '../styles/components';
import { Images } from './';

export default function Jumbo({ description }) {
	return (
		<StyledJumbo>
			<div>
				<h2> ¡ El mejor producto para la Higiene que te puedo ofrecer.</h2>
				<small> {description}</small>
			</div>
			<Images name="corona1" />
		</StyledJumbo>
	);
}
