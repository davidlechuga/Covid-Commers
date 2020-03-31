import React, { useState, useContext } from "react"
import formatprice from "../utils/priceFormat"
import {
  Tag,
  SizeButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"
import { SEO, Stars } from "./"
import { CartContext } from "../context"

export default function ProductDetail({
  price,
  id,
  product: { name, metadata },
}) {
  const formatPrice = formatprice(price)
  const [size, setsize] = useState(2)
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({ price, sku: id, name, metadata, quantity: qty })
  }

  return (
    <StyledProductDetail>
      <SEO title={name} />
      <span>
        <img src={metadata.img} alt={name} />
      </span>
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>MXN {formatPrice}</b>
        <Stars />
        {metadata.higiene && <h3> Productos de Higiene </h3>}
        <small>{metadata.description}</small>
        {metadata.higiene && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setsize(1)}> 100L </SizeButton>
            <SizeButton onClick={() => setsize(2)}> 80L </SizeButton>
            <SizeButton onClick={() => setsize(3)}> 50L </SizeButton>
            <SizeButton onClick={() => setsize(4)}> 20L </SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad: </p>
        <QtySelect>
          <Button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</Button>
          <input type="text" disabled value={qty} />
          <Button onClick={() => setQty(qty + 1)}>+</Button>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar al Carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
