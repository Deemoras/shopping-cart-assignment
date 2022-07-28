import React, {useEffect, useState} from 'react'
import SimpleSlider from '../../components/Carousel/SimpleSlider';
import axios from 'axios';

import './HomePageStyle.scss'
import CategorySection from '../../components/Category/CategorySection';
import Navbar from '../../components/NavBar/Navbar';

export default function HomePage() {
    const [bannerList, setBannerList] = useState([])
    const [categoryList, setCategoryList] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/banners').then(
          (res) => setBannerList(res.data)
        )
    },[])

    useEffect(() => {
      axios
        .get("http://localhost:5000/categories")
        .then((res) => {
            let list = res.data.filter((item) => item.imageUrl !== undefined )
            setCategoryList(list)
        });
    }, []);

  return (
    <main>
        <Navbar/>
        <div className='carousal-container'>
          <SimpleSlider SliderListData = {bannerList}/>
        </div>
        <div>
          <CategorySection categoryList={categoryList}/>
        </div>
        <footer className='copyright'>
        <div className='copyright-container'>
          <p>Copyright © 2011-2018 Sabka Bazar Grocery Supplies Pvt Ltd</p>
        </div>
      </footer>
    </main>
  )
}
