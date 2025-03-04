import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='expolre-menu'>
      <h1>Explore our menu</h1>
    <p className='expolre-menu-text'>Choose from diverse menu featuring a delceectable array dishes.our mossion is to the satisfy your carvings and alavated your dining experiance. one deliciouse meal at time</p>
    <div className='explore-name-list'>
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>  
            )
            

})}

    </div>
    <hr />
 </div>
  )
}

export default ExploreMenu
