"use client";
import {signIn, useSession } from "next-auth/react";
import BusinessList from "@/app/_components/BusinessList";
import GlobalApi from "@/app/_services/GlobalApi";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation"; 

const BusinessByCategory = ({params}) => {
  const userId = descopeClient.management.user.loadByUserId(userId)
  const router = useRouter();
  const { data: session, status } = useSession(); // Destructure session data and status

  // Initialize state with session data
  const [sessionState, setSessionState] = useState(session);

  useEffect(() => {
    // Update state when session changes
    setSessionState(session);

    // Check if the user is not authenticated
    if (!sessionState?.user) {
      signIn('descope').then(() => {
        // After successful sign-in, redirect the user
        router.push('/search/datascience');
      }).catch(error => {
        console.error("Sign-in failed:", error);
      });
    }
  }, [sessionState]);

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
      <div></div>
    )
   
  
  };
  
  export default BusinessByCategory;