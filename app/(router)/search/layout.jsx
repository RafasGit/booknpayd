'use client'
import React from "react";
import { useState, useEffect } from "react";
import {signIn, useSession } from "next-auth/react";
//import React from "react";

import SideCategoryBar from "./_components/SideCategoryBar";
//import { useRouter } from "next/navigation"; 

const layout = ({ children }) => {
  
  
   

  // useEffect(() => {
  //   // Update state when session changes
  //   setSessionUser(session.user);

  //   // Check if the user is not authenticated
  //   if (!sessionUser ) {
  //     signIn('descope') 
  //   }
  // }, [sessionUser]);

 // const { userId } = auth()

  // if (!userId) {
  //   return redirect('/')
  // }

 



  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-8">
        <div className="md:block">
          <SideCategoryBar />
        </div>
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default layout;