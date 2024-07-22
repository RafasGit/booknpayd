"use client";
import {signIn, useSession } from "next-auth/react";
import BusinessList from "@/app/_components/BusinessList";
import GlobalApi from "@/app/_services/GlobalApi";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation"; 

const BusinessByCategory = ({params}) => {

  const router = useRouter();
  const { data: session, status } = useSession(); // Destructure session data and status

  // Initialize state with session data
  
 
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
    )
   
  
  };
  
  export default BusinessByCategory;