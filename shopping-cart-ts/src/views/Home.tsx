import React,{FC, ReactElement} from "react";
import Header from "../components/Header";
import { useFlatPhoneList, usePhoneList } from "../hooks";
import PhoneList from "../components/PhoneList";

import { IFlatPhones, IPhones } from "../typings";

interface IProps {

}

//  watchEffect & useEffect 
/**
 *  
 *  watchEffect has a hooks   可以清除副作用
 *   await return Promise
 *   useEffect has return clean() {}
 * 
 * 
 * 
 */

const Home:FC<IProps> = ():ReactElement => {


const phoneList:IPhones[] = usePhoneList();
// const flatPhoneList:IFlatPhones[] = useFlatPhoneList(phoneList)
// console.log(flatPhoneList);


    return (
      <div className="container">
       <Header
       headerTitle="商品列表"
       iconShow={false}
       />
      {phoneList &&
       <PhoneList phoneList={phoneList}/>
      }
      </div>
    )




}

export default Home