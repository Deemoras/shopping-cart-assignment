import React, {useEffect, useState} from 'react'
import SimpleSlider from '../../components/Carousel/SimpleSlider';
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/Category/categoryActions";
import { fetchBanners } from "../../redux/Banner/bannerActions";
import axios from 'axios';

import './HomePageStyle.scss'
import CategorySection from '../../components/Category/CategorySection';

export default function HomePage() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.data);
    const loading = useSelector((state) => state.categories.loading);
    const error = useSelector((state) => state.categories.error);
    const banners = useSelector((state) => state.banners.data);


    useEffect(() => {
      dispatch(fetchBanners());
      dispatch(fetchCategories());
     
    //   axios.get('http://localhost:5000/banners').then(
    //       (res) => setBannerList(res.data)
    //     )
    },[])



    // useEffect(() => {
    //   axios
    //     .get("http://localhost:5000/categories")
    //     .then((res) => {
    //         let list = res.data.filter((item) => item.imageUrl !== undefined )
    //         setCategoryList(list)
    //     });
    // }, []);

  return (
    <section>
        <div className='carousal-container'>
          <SimpleSlider SliderListData = {banners}/>
        </div>
        <div>
          <CategorySection categoryList={categories}/>
        </div>
    </section>
  )
}
