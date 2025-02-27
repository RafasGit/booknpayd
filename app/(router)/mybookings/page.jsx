"use client";
import React, { useEffect, useState } from "react";
 import BookingHistoryList from "./_components/BookingHistory";
import GlobalApi from "@/app/_services/GlobalApi";
import { signIn, useSession } from "next-auth/react";
 

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const MyBooking = () => {
    const [bookingHistory, setBookingHistory] = useState([]);
    const { data, status } = useSession();
 

   

    useEffect(() => {
      data && GetUserBookingHistory();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
  
    const GetUserBookingHistory = () => {
      GlobalApi.getUserBookingHistory(data.user.email).then((res) => {
        setBookingHistory(res.bookings);
      });
    };


    const filterData = (type) => {
        const result = bookingHistory.filter((item) =>
          type == "booked"
            ? new Date(item.date) >= new Date()
            : new Date(item.date) <= new Date()
        );
    
        return result;
      };

      useEffect(() => {
        checkUserAuth();
      }, []);

      const checkUserAuth = () => {
        if (status == "loading") {
          <p>Loading</p>;
        }
    
        if (status == "unauthenticated") {
          //redirect to login page
          signIn("descope");
        }
      }
     

      return (
        <div className="my-10 mx-5 md:mx-36">
          <h2 className="font-bold text-[20px] my-2">My Bookings</h2>
          <Tabs defaultValue="booked" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="booked">Booked</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="booked">
              <BookingHistoryList bookingHistory={filterData("booked")} />
            </TabsContent>
            <TabsContent value="completed">
                
              <BookingHistoryList
                bookingHistory={bookingHistory}
                type="completed"
              />
            </TabsContent>
          </Tabs>
        </div>
      );
    };
    
    export default MyBooking;