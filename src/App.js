import './App.css';
import ProductContainer from './components/ProductContainer/ProductContainer';
import Product from './components/Product/Product';
import ProductsData from './Productos.json';
function App() {
  return (
    <div className="App">
      <ProductContainer>
        {ProductsData.map(product =>
          <Product 
          key = {product.nombre}
          nombre = {product.nombre}
          oldPrice = {product.price}
          discount = {product.discount}
          newPrice = {product.price - product.price * product.discount /100}
          img = {product.url}
          />
        )}
        
      </ProductContainer>
    </div>
  );
}

export default App;
