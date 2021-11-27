import React from 'react'
import FilterType from './FilterType/FilterType'
import FilterScreen from './FilterScreen/FilterScreen'

export default function Filters() {
    return (
      <div className="col-sm-3 filter">
        <FilterType/>
        <br />
        <FilterScreen/>
        <br />
      </div>
      
    )
}
/** Filter controls
<div className="item">
          <div className="title">
            <a href="#clear" data-action="open" className="down"> <i className="ion-android-arrow-dropdown" /> Open</a>
            <a href="#clear" data-action="clear-price"> <i className="ion-ios-trash-outline" /> Clear</a>
            <h1 className="h4">Price</h1>
          </div>
          <div className="controls">
            <br />
            <div id="slider-price" />
            <br />
            <p id="amount" />
          </div>
        </div>
        <br />
        <div className="item lite">
          <div className="title">
            <a href="#clear" data-action="open" className="down"> <i className="ion-android-arrow-dropdown" /> Open</a>
            <a href="#clear" data-action="clear"> <i className="ion-ios-trash-outline" /> Clear</a>
            <h1 className="h4">Manufacturer</h1>
          </div>
          <div className="controls">
            <div className="checkbox-group" data-status="inactive">
              <div className="checkbox"><i className="ion-android-done" /></div>
              <div className="label" data-value="Hp">Hp</div>
              <input type="checkbox" name="checkbox" defaultValue />
            </div>
            <div className="checkbox-group" data-status="inactive">
              <div className="checkbox"><i className="ion-android-done" /></div>
              <div className="label" data-value="ASUS">ASUS</div>
              <input type="checkbox" name="checkbox" defaultValue />
            </div>
            <div className="checkbox-group" data-status="inactive">
              <div className="checkbox"><i className="ion-android-done" /></div>
              <div className="label" data-value="Acer">Acer</div>
              <input type="checkbox" name="checkbox" defaultValue />
            </div>
            <div className="checkbox-group" data-status="inactive">
              <div className="checkbox"><i className="ion-android-done" /></div>
              <div className="label" data-value="Dell">Dell</div>
              <input type="checkbox" name="checkbox" defaultValue />
            </div>
            <div className="checkbox-group" data-status="inactive">
              <div className="checkbox"><i className="ion-android-done" /></div>
              <div className="label" data-value="Sony">Sony</div>
              <input type="checkbox" name="checkbox" defaultValue />
            </div>
            <div className="checkbox-group" data-status="inactive">
              <div className="checkbox"><i className="ion-android-done" /></div>
              <div className="label" data-value="Apple">Apple</div>
              <input type="checkbox" name="checkbox" defaultValue />
            </div>
            <div className="checkbox-group" data-status="inactive">
              <div className="checkbox"><i className="ion-android-done" /></div>
              <div className="label" data-value="Lenovo">Lenovo</div>
              <input type="checkbox" name="checkbox" defaultValue />
            </div>
            <div className="checkbox-group" data-status="inactive">
              <div className="checkbox"><i className="ion-android-done" /></div>
              <div className="label" data-value="Microsoft">Microsoft</div>
              <input type="checkbox" name="checkbox" defaultValue />
            </div>
          </div>
        </div> 
 
 */
