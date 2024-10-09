import { useState, useEffect } from 'react'

import { useCartStore } from '../../hooks/useCartStore'

export default function SubTotalBag() {
  const [loading, setLoading] = useState(true)
	const cartItems = useCartStore(state => state.cart)

	const subtotal = cartItems.reduce((acc, item) => {
		const cleanPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
		return acc + cleanPrice
	}, 0)

  useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		})

		return () => clearTimeout(timer)
	}, [cartItems])

	return (
		<>
			<p style={{ fontSize: '12px' }}>${loading ? '...' : subtotal.toFixed(2)} CAD</p>
		</>
	)
}
