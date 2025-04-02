import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Product() {
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)

      })
      .catch(err => {
        console.log('ERROR', err);
      })

  }, [])

  return (
    <>
      <main>
        {
          !product ? ('Loading ...')
            : (
              <>
                <div style={{ minHeight: '50vh', backgroundImage: `url(${product.image})` }}></div>

                <section id="product_details" className="mt-5">
                  <div className="container">
                    <div className="row g-4">
                      <div className="col-12 col-md-5">
                        <img className="img-fluid" src={product.image} alt={product.title} />
                      </div>
                      <div className="col-12 col-md-7">
                        <button onClick={() => navigate(-1)} >go back</button>
                        <h1>Product: {product.title}</h1>
                        <p>{product.description}</p>
                        <div className="price fw-bold fs-2">${product.price}</div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )
        }
      </main>

    </>
  )
}