"use client";

import PDFGenerator from "@/components/handlepdf";

export default function DaysPass() {
    return (
        <div className="mt-[120px] text-center">
        <div className="text-center text-[#00234E] text-[32px] px-10 font-bold">Congratulations! You have been selected for the 
            3 months Software Engineering Mentorship Programme.
        </div>
        <div className="flex items-center border-4 border-[#00234E] p-10 rounded-md justify-center w-[35%] h-full mt-[80px]">
          <p className="text-[#00234E] text-[32px] pb-10 text-center font-bold">Download Certificate</p>
          <PDFGenerator />
        </div>
        </div>
    )
}