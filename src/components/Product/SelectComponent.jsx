import { useEffect, useState } from 'react'

import style from '../../styles/select-component.module.css'
import { useCartStore } from '../../hooks/useCartStore'

export default function SelectComponent({ productData, children }) {
	const [selectedSize, setSelectedSize] = useState('')
	const [isOutOfStock, setIsOutOfStock] = useState(false)
	const [status, setStatus] = useState('')
	const addToCart = useCartStore(state => state.addToCart)
	const cartItems = useCartStore(state => state.cart)

	const handleAddToBag = () => {
		if (!selectedSize) {
			setStatus(`Please select a size!`)
			return
		}

		// Verificar si el producto ya está en el carrito con el mismo tamaño
		const alreadyInCart = cartItems.some(item => item.id === productData.id && item.selectedSize === selectedSize)

		if (alreadyInCart) {
			setStatus(`SIZE ${selectedSize} IS ALREADY IN THE CART`)
		} else {
			const uniqueId = `${productData.id}-${selectedSize}`
			addToCart({
				...productData,
				selectedSize,
				uniqueId,
			})
			setStatus(`SIZE ${selectedSize} ADDED TO BAG`)
		}
	}

	useEffect(() => {
		const allOutOfStock = Object.values(productData.sizes).every(size => !size.stock)
		setIsOutOfStock(allOutOfStock)
	}, [productData.sizes])

	return (
		<>
			<div className={style.container}>
				<div className={style['custom-select']}>
					<select className={style.select} onChange={e => setSelectedSize(e.target.value)}>
						<option value={selectedSize} disabled selected>
							Select a Size
						</option>
						{productData.sizes ? (
							Object.values(productData.sizes).map((size, index) => (
								<option value={size.name} disabled={!size.stock} key={index}>
									{size.stock ? size.name : `${size.name} - SOLD OUT`}
								</option>
							))
						) : (
							<option disabled>US CUSTOM ORDER - SOLD OUT</option>
						)}
					</select>
					{children}
				</div>
				<button
					className={isOutOfStock ? style['submit-disabled'] : style.submit}
					onClick={handleAddToBag}
					disabled={isOutOfStock}
				>
					Add to Bag
				</button>
			</div>
			<p className={style.message}>{status}</p>
		</>
	)
}
