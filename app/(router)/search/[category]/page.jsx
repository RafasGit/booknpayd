"use client";
import BusinessList from "@/app/_components/BusinessList";
import GlobalApi from "@/app/_services/GlobalApi";
import React, { useEffect } from "react";


const BusinessByCategory = ({params}) => {
    console.log("`${params.category}` why")
 //   console.log(params.category)
    const [businessList, setBusinessList] = React.useState([]);
    useEffect(() => {
      params && getBusinessList();
    }, [params]);
  //  console.log(params.category)
    const getBusinessList = () => {
      GlobalApi.getBusinessByCat(params.category).then((res) => {
    //    console.log(params.category)
        setBusinessList(res?.businessLists);
      });
    };
  
  
    return (
      <div>
        <BusinessList title={params.category} businessList={businessList} />
      </div>
    );
  };
  
  export default BusinessByCategory;