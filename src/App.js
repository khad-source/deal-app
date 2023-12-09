import React, { useState } from 'react'
import './index.css'
import NavBar from './components/Navbar'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import CtgBtn from './components/CtgBtn'
import CardM from './components/card'
import { Items } from './components/data.js'

const App = () => {
  const [itemData, setD] = useState(Items)



  /* filter by category des bouton apparaissent automatiquement */

  const arrCat = ['الكل', ...new Set(Items.map((i) => i.category))]

  const filterFunction = (cat) => {
    if (cat === 'الكل') { setD(Items) }
    else {
      const newarray = Items.filter((item) => item.category === cat)
      setD(newarray)
    }
  }
  /* خانة البحث الفورم()*/

 const searchFn = (word) =>{
  if (word !== '')
  {const newarr= Items.filter((i)=> {return i.title === word })
 setD(newarr)}
}

  return (
    <div>

      <NavBar searchFn={searchFn} />
      <Container className='colorbody'>
        <Header itemData={itemData} />
        <CtgBtn uniCat={arrCat} filterFn={filterFunction} />
        <CardM itemData={itemData} />
      </Container>
    </div>
  )
}

export default App
