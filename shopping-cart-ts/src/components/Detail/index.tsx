import React, {FC,ReactElement, useCallback, useState} from "react";
import { useSelectorCount } from "../../hooks";
import { IPhones } from "../../typings";

import Banner from './Banner'
import Bottom from "./Bottom";
import ColorGroup from "./ColorGroup";
import  {useColor, useVersion } from "./hooks";
import './index.scss'
import Price from "./Price";
import Selector from "./Selector";
import Title from "./Title";
import VersionGroup from "./VersionGroup";



interface IProps {
  phoneDetail:IPhones;
  cid:number;
  vid:number;
  totalCount:number

}
const DetailPage:FC<IProps> = (
  {
    phoneDetail,
    cid,
    vid,
    totalCount
  }
):ReactElement =>{
  const [colorId,setColorId] = useState<number>(cid)
  const [versionId,setVersionId] = useState<number>(vid)
  const {name,color,version,limit} = phoneDetail  
  const currentColor = useColor(color,colorId )
  const currentVersion = useVersion(version,versionId)
  const [count,setCurrentCount] = useSelectorCount(totalCount,limit)
 
  const addToCart = useCallback((total:number)=>{
    // alert('加入购物车成功')
    console.log(total);
    

  },[])
 

return (
  <div className="detail-wrapper">

    <Banner img={currentColor.img}  name={name}/>
    <div className="info-wrap">
      <Title 
      name={name}
      color={currentColor.title}
      version={currentVersion.title}
      />
      <Price
      limit={limit}
      price={currentVersion.price}
      />
      <Selector
      count={count}
      setCount={setCurrentCount}
      />
      <ColorGroup
      colorId={colorId}
      colors={color}
      setColorId={setColorId}
      />
      <VersionGroup
      versionId={versionId}
      versions={version}
      setVersionId={setVersionId}
      />
      <Bottom
      count={count}
      price={currentVersion.price}
      addToCart={addToCart}
      />



    </div>

  </div>
)
}


export default DetailPage