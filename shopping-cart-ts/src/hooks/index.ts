import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { COUNT_TYPE } from "../components/Detail/Selector";
import { getPhones } from "../services";
import { SET_PHONE_LIST } from "../store/actionTypes";
import { IFlatPhones, IPhoneColor, IPhones, IState } from "../typings";

function usePhoneList():IPhones[] {
  const [phoneList,setPhoneList] = useState<IPhones[]>([])
  const dispatch:Dispatch = useDispatch()
  useEffect(() =>{
    getPhones<IPhones[]>().then((data:IPhones[])=>{
      dispatch({
        type:SET_PHONE_LIST,
        payload:data
      })
      setPhoneList(data)


    }).catch((err)=>{
      console.log(err);
      
    })

  },[dispatch])

  return phoneList

}

function usePhoneDetail(id:string):IPhones | undefined {
  const phoneList = useSelector((state:IState)=>state.phoneList);
  return phoneList.find((phone:IPhones)=>phone.id === parseInt(id))
}

function useFlatPhoneList (phoneList:IPhones[]):IFlatPhones[] {
  let flatPhoneList:IFlatPhones[] = []
  phoneList.map((phone:IPhones) =>{
    phone.color.map((c:IPhoneColor) =>{
      const _phone:IFlatPhones = {...phone,currentColor:c}
      flatPhoneList.push(_phone)
      return c
    })
    return phone
  })
  return flatPhoneList

}



function useSelectorCount(defaultCount:number,limit:number):[number,(type:COUNT_TYPE)=>void] {
  const [count,setCount] = useState<number>(defaultCount)

  const setCurrentCount = function (type:COUNT_TYPE) {
    setCount((count:number) =>{
      switch(type){
      case COUNT_TYPE.MINUS:
        if(count <=1) {
          return count
        }
          return count -1
        case COUNT_TYPE.PLUS:
          if(count >=limit) {
            return count
          }
          return count +1
          default:
            return count;
        }
      

    })
  }


  return [count,setCurrentCount]


  
}

export {
  usePhoneList,
  useFlatPhoneList,
  usePhoneDetail,
  useSelectorCount
  
}


