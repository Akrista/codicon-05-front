import DonateArea from './donateArea'
import Header from './header'
import Mounts from './mounts'
import Products from './selectedProducts'

export default function CreateOrder() {
  return (
    <div>
      <Header />
      <Products />
      <Mounts />
      <DonateArea />
    </div>
  )
}
