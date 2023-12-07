import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Блок цилиндров',
          img: 'photo_5462985623993437625_x.jpg',
          desc: 'Porsche Cayenne Turbo WP1ZZZ9Yykda929630P2103023M',
          category: '51',
          price: '330.001' 
        },
        {
          id: 2,
          title: 'Маховик',
          img: 'photo_5462985623993437626_x.jpg',
          desc: 'AUDI A7/RS7/S7 (4K41150960) в Брянске',
          category: '50',
          price: '3.391' 
        },
        {
          id: 3,
          title: 'Клапан Рециркуляции',
          img: 'photo_5462985623993437627_m.jpg',
          desc: 'Vw Golf/Passat, Skoda Octavia 1.4-2.0I o4> Pierburg',
          category: '50',
          price: '5.057' 
        },
        {
          id: 4,
          title: 'Турбина',
          img: 'photo_5462985623993437628_x.jpg',
          desc: 'Volkswagen Passat B7 (2010-2015)CAX 1.4L',
          category: '50',
          price: '20.001' 
        },
        {
          id: 5,
          title: 'Фара левая диодная',
          img: 'photo_5462985623993437629_x.jpg',
          desc: 'Audi A7 RS7',
          category: '51',
          price: '50.471' 
        },
        {
          id: 6,
          title: 'Колодки тормозные',
          img: 'photo_5462985623993437630_x.jpg',
          desc: 'Дисковые Brembo P50127 передние',
          category: '50',
          price: '14.255' 
        },
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}  onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    )
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})
  }

  chooseCategory(category){
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }
}


export default App;
