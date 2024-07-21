import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const BusinessList = ({ businessList, title }) => {
    return (
      <div className="mt-5">
        <h2 className="font-bold text-[22px]">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 ml-8">
          {businessList.length > 0 ? businessList.map((business, index) => (
              // businessList.slice(0,3)
                <Link 
                href={"/details/" + business.id}
                  key={index}
                  className="shadow-md rounded-lg hover:shadow-lg cursor-pointer hover:shadow-primary hover:scale-105 transition-all ease-in-out"
                >
                  <Image
                    src={business?.images[0].url}
                    alt={business.name}
                    width={500}
                    height={200}
                    className="h-[150px] md:h-[200px] object-cover rounded-lg"
                  />
                  <div className="flex flex-col items-baseline p-3 gap-1">
                    <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
                      {business.category.name}
                    </h2>
                    <h2 className="font-bold text-lg">{business.name}</h2>
                    <h2 className="text-primary">{business.contactPerson}</h2>
                    <h2 className="text-gray-500 text-sm">{business.address}</h2>
                    <Button className="rounded-lg mt-3">Book Now</Button>
                  </div>
                </Link>
              ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div key={index} className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">   </div>
              ))}
        </div>
      </div>
    );
  };
  
  export default BusinessList;