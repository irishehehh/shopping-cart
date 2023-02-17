import React,{FC,ReactElement} from "react";
import { useFlatPhoneList } from "../../hooks";
import { IFlatPhones, IPhones } from "../../typings";
import './index.scss'
import PhoneItem from './item'
interface IProps {
  phoneList:IPhones[]
}


const PhoneList:FC<IProps> = ({
  phoneList
}):ReactElement =>{
  const flapPhoneList:IFlatPhones[] = useFlatPhoneList(phoneList)
  return (
    <div className="phone-list">
        {
          flapPhoneList.map((phone:IFlatPhones,index:number)=>{
            return (
              <PhoneItem dataItem={phone} key={index}/>
            )

          })
        }

    </div>
  )


}

export default PhoneList