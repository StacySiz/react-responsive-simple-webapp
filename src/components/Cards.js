import React from "react";
import {CardItem} from "./CardItem";
import './Cards.css'

export default function Cards() {
  return (
      <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <div className='cards__items'>
              <CardItem
                  src='/images/img-3.jpg'
                  description='Caribbean Sea view '
                  label='Resort'/>
              <CardItem
                  src='/images/img-4.jpg'
                  description='Football court on island, amazing  '
                  label='Sport'/>
              <CardItem
                  src='/images/img-5.jpg'
                  description='Wonderful china town, book now  '
                  label='HOT'/>
              <CardItem
                  src='/images/img-6.jpg'
                  description='Wonderful china town, book now  '
                  label='HOT'/>
              <CardItem
                  src='/images/img-7.jpg'
                  description='Wonderful china town, book now  '
                  label='HOT'/>
              <CardItem
                  src='/images/img-8.jpg'
                  description='Wonderful china town, book now  '
                  label='HOT'/>
            </div>
          </div>
        </div>
      </div>
  )
}
