"use client"
import React, { useState } from 'react'
import Header from '../../HomeEsComponents/Header/Header'
import Menu from 'app/HomeEsComponents/Header/Menu/Menu'
import BannerHomeEn from '../../HomeEsComponents/BannerHome/BannerHome'
import DescriptionEn from '../../HomeEsComponents/Description/DescriptionEn'
import OurHotel from '../../HomeEsComponents/OurHotels/OurHotel';
import Residence from '../../HomeEsComponents/Residence/Residence'
import Services from 'app/HomeEsComponents/Services/Services'
import Faqs from 'app/HomeEsComponents/FaqsTwo/FaqsTwo'
import Footer from 'app/HomeEsComponents/Footer/Footer'
import Sense from 'app/HomeEsComponents/Sense/SenseTwo'

export default function Page(props) {
    
    const [isOpen, setIsOpen]= useState(false)

    return (
        <>
        {!isOpen? 
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
           :<Menu isOpen={isOpen} setIsOpen={setIsOpen}/> 
        } 
        <BannerHomeEn/>
        <DescriptionEn/>
        <OurHotel/>
        <Residence/>
        <Sense/>
        <Services/>
        <Faqs/>
        <Footer/>
        </>
    )
}
