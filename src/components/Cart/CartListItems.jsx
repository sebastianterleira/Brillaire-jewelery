import { useState, useEffect } from 'react'

import style from '../../styles/cart-list-items-component.module.css'
import { useCartStore } from '../../hooks/useCartStore'

const formatPrice = price => {
	const cleanPrice = parseFloat(price.replace(/[^0-9.-]+/g, ''))
	return `${cleanPrice.toFixed(2)} CAD`
}

export default function CartListItems() {
	const cartItems = useCartStore(state => state.cart)
	const removeItem = useCartStore(state => state.removeFromCart)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		})

		return () => clearTimeout(timer)
	}, [cartItems])

	if (loading) {
		return <p style={{ marginTop: '2rem' }}>Cargando...</p>
	} else {
		return (
			<div className={style['cart-items-container']}>
				{cartItems.length > 0 && <h2>Your Bag[{cartItems.length}]</h2>}
				{cartItems.length > 0 ? (
					cartItems.map((item, index) => (
						<div className={style['cart-item']} key={index}>
							<div className={style['image-container']}>
								<a href={`shop/${item.url}`} aria-label={item.name}>
									<img src={item.images.item_img[0].src} alt={item.name} loading='eager' className={style['item-image']} />
								</a>
							</div>
							<div className={style['item-body']}>
								<div className={style['item-header']}>
									<a href='shop/pebblestone-bracelet' className={style['item-name']} aria-label='back to shop'>
										{item.name}
									</a>
									<p>{formatPrice(item.price)}</p>
								</div>
								<div className={style['item-options-container']}>
									<div className={style['item-options']}>
										<p>Size: {item.selectedSize}</p>
										<p style={{ marginTop: '5px' }}>Quantity: 1</p>
									</div>
									<p className={style.remove} onClick={() => removeItem(item.uniqueId)}>
										remove
									</p>
								</div>
							</div>
						</div>
					))
				) : (
					<p className={style['empty-cart']}>Your bag is empty.</p>
				)}
			</div>
		)
	}
}
