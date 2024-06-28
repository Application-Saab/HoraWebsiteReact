import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import bannerSvgImage from '../assets/banner-home-bg.svg';
import bannerDecorationImage from '../assets/decoration-home-banner.png';
import bannerChefImage from '../assets/chef-home-banner.png';
import bannerHospitalityImage from '../assets/hospitality.png';
import bannerReturnGiftImage from '../assets/return-gift-banner-home.png';
import bannerEntertainmentImage from '../assets/entertainment-banner-home.png';
import bannerFoodDeliveryImage from '../assets/food-delivery-home-banner.png';
import Celebrate1Image from '../assets/Birthday&Celebration.png';
import Celebrate2Image from '../assets/corporate-party.png';
import Celebrate3Image from '../assets/house-party.png';
import Celebrate4Image from '../assets/wedding-event.png';
import Celebrate5Image from '../assets/gathering.png';
import Celebrate6Image from '../assets/kids-event.png';

function DecorationCity() {
    const [showButton, setShowButton] = useState(window.innerWidth > 800);
    const openLink = () => {
        window.open("https://play.google.com/store/apps/details?id=com.hora", "_blank");
    };
    useEffect(() => {
        function handleResize() {
            setShowButton(window.innerWidth > 800);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const cityData = {
        Delhi: {
            bannerImage: "OIP1.jpg",
            cityLocalitiesList:
                [
                    { name: "Adarsh Nagar", },
                    { name: "adchini", },
                    { name: "Ajmeri Gate", },
                    { name: "akshardham", },
                    { name: "Alaknanda", },
                    { name: "Aman Vihar", },
                    { name: "Amar Colony", },
                    { name: "Ambedkar Nagar", },
                    { name: "Amrit Nagar", },
                    { name: "Amritpuri", },
                    { name: "Anand Lok", },
                    { name: "Anand Niketan" },
                    { name: "Anand Parbat" },
                    { name: "Anand Vihar" },
                    { name: "Andrews Ganj" },
                    { name: "Ansari Nagar East" },
                    { name: "Aradhna Enclave" },
                    { name: "Arjun Garh" },
                    { name: "Arjun Nagar" },
                    { name: "Arya Nagar" },
                    { name: "Ashok Nagar" },
                    { name: "Ashok Vihar" },
                    { name: "Ashoka Niketan" },
                    { name: "Ashram" },
                    { name: "Asiad Village" },
                    { name: "Asola" },
                    { name: "Aya Nagar" },
                    { name: "Azad Nagar" },
                    { name: "Azadpur" },
                    { name: "Badarpur" },
                    { name: "Batla house" },
                    { name: "Bawana" },
                    { name: "Bengali Market" },
                    { name: "Ber Sarai" },
                    { name: "Bhagya Vihar" },
                    { name: "Bhajanpura" },
                    { name: "Bhera Enclave" },
                    { name: "Bhikaji Cama Place" },
                    { name: "Budh Nagar" },
                    { name: "Chanakya Place" },
                    { name: "Chanakyapuri" },
                    { name: "Chander Nagar" },
                    { name: "Chandni Chowk" },
                    { name: "Chattarpur" },
                    { name: "Chawri Bazar" },
                    { name: "Chirag Delhi" },
                    { name: "Chirag Enclave" },
                    { name: "Chittaranjan Park" },
                    { name: "Civil Lines" },
                    { name: "Commonwealth Games Village" },
                    { name: "Connaught Place" },
                    { name: "CR Park" },
                    { name: "Dakshini Pitampura" },
                    { name: "Dakshinpuri" },
                    { name: "Darave" },
                    { name: "Daryaganj" },
                    { name: "Dayanand Colony" },
                    { name: "Dayanand Vihar" },
                    { name: "Defence Colony" },
                    { name: "Defence Enclave" },
                    { name: "Delhi Cantonment" },
                    { name: "Deoli" },
                    { name: "Dhansa" },
                    { name: "Dharampura" },
                    { name: "Dhaula Kuan" },
                    { name: "Dilshad Garden" },
                    { name: "Diplomatic Enclave" },
                    { name: "Dr Ambedkar Nagar" },
                    { name: "Dwarka" },
                    { name: "East Of Kailash" },
                    { name: "Fatehpuri" },
                    { name: "Freedom Fighter Enclave" },
                    { name: "Friends Colony" },
                    { name: "G T Karnal Road Industrial Area" },
                    { name: "Gagan Vihar" },
                    { name: "Gandhi Nagar" },
                    { name: "Gautam Nagar" },
                    { name: "Geeta Colony" },
                    { name: "Geetanjali Enclave" },
                    { name: "Ghaffar Manzil Colony" }

                ]
        },
        Gurugram: {
            bannerImage: "OIP1.jpg",
            cityLocalitiesList: [
                { name: "Ardee city" },
                { name: "Arjun Nagar" },
                { name: "Ashok Vihar Phase I" },
                { name: "Badshapur" },
                { name: "Chakkarpur" },
                { name: "Dlf Phase 1" },
                { name: "Dlf Phase 2" },
                { name: "Dlf Phase 3" },
                { name: "Dlf Phase 4" },
                { name: "Dlf Phase 5" },
                { name: "Fazilpur" },
                { name: "Feroz Gandhi Colony" },
                { name: "Gandhi Nagar" },
                { name: "Garhi Harsaru" },
                { name: "Golf Course Extension" },
                { name: "Greenwood city" },
                { name: "Hans Enclave" },
                { name: "Hari Nagar" },
                { name: "Heera Nagar" },
                { name: "Islampur" },
                { name: "Jharsa" },
                { name: "Jyoti Park" },
                { name: "Kadipur" },
                { name: "Khandsa" },
                { name: "Krishna Colony" },
                { name: "Laxman Vihar" },
                { name: "Madan Puri" },
                { name: "Malibu Town" },
                { name: "Manesar Sector M1" },
                { name: "May Field Gardens" },
                { name: "MG road" },
                { name: "Model Town" },
                { name: "Mohyal Colony" },
                { name: "Nathupur" },
                { name: "New Basti" },
                { name: "New Colony" },
                { name: "New Palam Vihar" },
                { name: "Pace city" },
                { name: "Palam Vihar" },
                { name: "Pataudi Sector 1" },
                { name: "Patel Nagar" },
                { name: "Rajendra Park" },
                { name: "Rajiv Nagar" },
                { name: "Ram Nagar" },
                { name: "Ratan Vihar" },
                { name: "Ravi Nagar" },
                { name: "Rosewood city" },
                { name: "Sadar Bazar" },
                { name: "Saraswati Kunj" },
                { name: "Saraswati Vihar" },
                { name: "Sector 1" },
                { name: "Sector 10" },
                { name: "Sector 100" },
                { name: "Sector 101" },
                { name: "Sector 102" },
                { name: "Sector 103" },
                { name: "Sector 104" },
                { name: "Sector 105" },
                { name: "Sector 106" },
                { name: "Sector 107" },
                { name: "Sector 108" },
                { name: "Sector 109" },
                { name: "Sector 11" },
                { name: "Sector 110" },
                { name: "Sector 111" },
                { name: "Sector 112" },
                { name: "Sector 113" },
                { name: "Sector 114" },
                { name: "Sector 115" },
                { name: "Sector 12" },
                { name: "Sector 13" },
                { name: "Sector 14" },
                { name: "Sector 15 Part I" },
                { name: "Sector 16" },
                { name: "Sector 17" },
                { name: "Sector 18" },
                { name: "Sector 19" },
                { name: "Sector 2" },
                { name: "Sector 20" },
                { name: "Sector 21" },
                { name: "Sector 22" },
                { name: "Sector 23" },
                { name: "Sector 24" },
                { name: "Sector 25" },
                { name: "Sector 26" },
                { name: "Sector 27" },
                { name: "Sector 28" },
                { name: "Sector 29" },
                { name: "Sector 3" },
                { name: "Sector 30" },
                { name: "Sector 31" },
                { name: "Sector 32" },
                { name: "Sector 33" },
                { name: "Sector 34" },
                { name: "Sector 35" },
                { name: "Sector 36" },
                { name: "Sector 37 Part I Industrial" },
                { name: "Sector 38" },
                { name: "Sector 39" },
                { name: "Sector 4" },
                { name: "Sector 41" },
                { name: "Sector 42" },
                { name: "Sector 43" },
                { name: "Sector 44" },
                { name: "Sector 45" },
                { name: "Sector 46" },
                { name: "Sector 47" },
                { name: "Sector 48" },
                { name: "Sector 49" },
                { name: "Sector 5" },
                { name: "Sector 50" },
                { name: "Sector 51" },
                { name: "Sector 52" },
                { name: "Sector 53" },
                { name: "Sector 54" },
                { name: "Sector 55" },
                { name: "Sector 56" },
                { name: "Sector 57" },
                { name: "Sector 58" },
                { name: "Sector 59" }
            ]
        },
        Ghaziabad: {
            bannerImage: "OIP1.jpg",
            cityLocalitiesList: [
                { "name": "Abhay Khand" },
                { "name": "Ahinsa Khand" },
                { "name": "Amrit Nagar" },
                { "name": "Ankur Vihar" },
                { "name": "Avantika" },
                { "name": "Baghpat" },
                { "name": "Bamheta" },
                { "name": "Behta Colony" },
                { "name": "Behta Hazipur" },
                { "name": "Bhim Nagar" },
                { "name": "Bhopura" },
                { "name": "Bhram Puri" },
                { "name": "Bhuapur" },
                { "name": "Brij Vihar" },
                { "name": "Budh Vihar" },
                { "name": "Chander Nagar" },
                { "name": "Chhapraula" },
                { "name": "Chipiyana Buzurg" },
                { "name": "Chiranjiv Vihar" },
                { "name": "Crossings Republik" },
                { "name": "Dadri" },
                { "name": "Dasna" },
                { "name": "Daulatpur" },
                { "name": "Defence Colony" },
                { "name": "Dilshad Garden" },
                { "name": "Duhai" },
                { "name": "Dundahera" },
                { "name": "Gagan Vihar" },
                { "name": "Gandhi Nagar" },
                { "name": "Ganeshpuri" },
                { "name": "Garhmukteshwar" },
                { "name": "Ghantaghar" },
                { "name": "Ghukna" },
                { "name": "Govindpuram" },
                { "name": "Gulab Vatika" },
                { "name": "Gyan Khand" },
                { "name": "Hapur" },
                { "name": "Hindan Residential Area" },
                { "name": "Indirapuram" },
                { "name": "Indraprastha" },
                { "name": "Jassipur" },
                { "name": "Jawahar Nagar" },
                { "name": "Judges Enclave" },
                { "name": "Kamla Nehru Nagar" },
                { "name": "Kaushambhi" },
                { "name": "Kavi Nagar" },
                { "name": "Kavi Nagar Industrial Area" },
                { "name": "Kot Gaon" },
                { "name": "Krishna Vihar" },
                { "name": "Lohia Nagar" },
                { "name": "Loni" },
                { "name": "Loni Industrial Area" },
                { "name": "Madhopura" },
                { "name": "Mahurali" },
                { "name": "Maliwara" },
                { "name": "Marium Nagar" },
                { "name": "Masuri" },
                { "name": "Meerut Road Industrial Area" },
                { "name": "Mirzapur" },
                { "name": "Model Town" },
                { "name": "Modi Nagar" },
                { "name": "Mohan Meakin Industrial Estate" },
                { "name": "Mohan Nagar" },
                { "name": "Morta" },
                { "name": "Morti" },
                { "name": "Murad Nagar" },
                { "name": "Nai Basti Dundahera" },
                { "name": "Nandgram" },
                { "name": "Nasbandi Colony" },
                { "name": "Naya Ganj" },
                { "name": "Neelmani Colony" },
                { "name": "Nehru Nagar" },
                { "name": "New Vijay Nagar" },
                { "name": "NH 24" },
                { "name": "Niti Khand I" },
                { "name": "Niti Khand-Indirapuram" },
                { "name": "Nyay Khand I" },
                { "name": "Pandav Nagar" },
                { "name": "Pasaunda" },
                { "name": "Patel Nagar I" }
            ]
        },
        Faridabad: {
            bannerImage: "OIP1.jpg",
            cityLocalitiesList: [
                { "name": "Adarsh Colony" },
                { "name": "Agwanpur" },
                { "name": "Ajit Nagar" },
                { "name": "Ajronda" },
                { "name": "ALL SECTORS" },
                { "name": "Amru" },
                { "name": "Anangpur" },
                { "name": "Ankhir" },
                { "name": "Aravali" },
                { "name": "Aravali Vihar" },
                { "name": "Arya Nagar" },
                { "name": "Ashoka Enclave" },
                { "name": "Badarpur Border" },
                { "name": "Badkhal" },
                { "name": "Ballabhgarh" },
                { "name": "Barauli" },
                { "name": "Basantpur" },
                { "name": "Basilva Colony" },
                { "name": "Bhatia Colony" },
                { "name": "Bhoor Colony" },
                { "name": "Bhopani" },
                { "name": "Camp Market" },
                { "name": "Chandpur" },
                { "name": "Charmwood Village" },
                { "name": "Chawla Colony" },
                { "name": "Dabua Colony" },
                { "name": "Dayal Bagh" },
                { "name": "Dayal Basti" },
                { "name": "Dayalpur" },
                { "name": "Dhauj" },
                { "name": "Dher Colony" },
                { "name": "DLF Industrial Area" },
                { "name": "Faridpur" },
                { "name": "Friends Colony" },
                { "name": "Frontier Colony" },
                { "name": "Fruit Garden" },
                { "name": "Hodal" },
                { "name": "Housing Board colony" },
                { "name": "HUDA Sector 2" },
                { "name": "Indira Gandhi Colony" },
                { "name": "Indraprastha Colony" },
                { "name": "Jasna" },
                { "name": "Jawahar Colony" },
                { "name": "Jeevan Nagar" },
                { "name": "Jiwan Nagar" },
                { "name": "Kabulpur Bangar" },
                { "name": "Kanoongo Maholla" },
                { "name": "Kant Enclave" },
                { "name": "Kanungo Maholla" },
                { "name": "Kanwara" },
                { "name": "Kapra Colony" },
                { "name": "Karna" },
                { "name": "Katan Pahari" },
                { "name": "Krishna Colony" },
                { "name": "Lakewood city" },
                { "name": "Lakkarpur" },
                { "name": "Lane Pura" },
                { "name": "Lohagrah" },
                { "name": "Manjhawali" },
                { "name": "Mewla Maharajpur" },
                { "name": "Mohan Nagar" },
                { "name": "Moti Colony" },
                { "name": "Mujesar" },
                { "name": "Neelam Bata Colony" },
                { "name": "Neharpar" },
                { "name": "Nehru Colony" },
                { "name": "New Baselwa Colony" },
                { "name": "New Colony" },
                { "name": "Old Faridabad" },
                { "name": "Pali Village" },
                { "name": "Panchwati Colony" },
                { "name": "Panna Vihar" },
                { "name": "Piyala" },
                { "name": "Prakash Vihar" },
                { "name": "Prithla" },
                { "name": "Railway Colony" },
                { "name": "Rajeev Nagar" },
                { "name": "Rajiv Nagar" },
                { "name": "Rajpur Kalan" },
                { "name": "Ram Nagar" }
                // Add more localities here
            ]

        },
        Noida: {
            bannerImage: "OIP1.jpg",
            cityLocalitiesList: [
                { "name": "Ambedkar city" },
                { "name": "Baraula" },
                { "name": "Bhangel" },
                { "name": "Hajipur" },
                { "name": "Indirapuram" },
                { "name": "Mamura" },
                { "name": "Noida Extension" },
                { "name": "Parthala Khanjarpur" },
                { "name": "Sarfbad" },
                { "name": "Sector 1" },
                { "name": "Sector 10" },
                { "name": "Sector 100" },
                { "name": "Sector 101" },
                { "name": "Sector 102" },
                { "name": "Sector 103" },
                { "name": "Sector 104" },
                { "name": "Sector 105" },
                { "name": "Sector 106" },
                { "name": "Sector 107" },
                { "name": "Sector 108" },
                { "name": "Sector 109" },
                { "name": "Sector 110" },
                { "name": "Sector 111" },
                { "name": "Sector 112" },
                { "name": "Sector 113" },
                { "name": "Sector 114" },
                { "name": "Sector 115" },
                { "name": "Sector 116" },
                { "name": "Sector 117" },
                { "name": "Sector 118" },
                { "name": "Sector 119" },
                { "name": "Sector 12" },
                { "name": "Sector 120" },
                { "name": "Sector 121" },
                { "name": "Sector 122" },
                { "name": "Sector 123" },
                { "name": "Sector 124" },
                { "name": "Sector 125" },
                { "name": "Sector 126" },
                { "name": "Sector 127" },
                { "name": "Sector 128" },
                { "name": "Sector 129" },
                { "name": "Sector 130" },
                { "name": "Sector 131" },
                { "name": "Sector 132" },
                { "name": "Sector 133" },
                { "name": "Sector 134" },
                { "name": "Sector 135" },
                { "name": "Sector 136" },
                { "name": "Sector 137" },
                { "name": "Sector 138" },
                { "name": "Sector 139" },
                { "name": "Sector 14" },
                { "name": "Sector 140" },
                { "name": "Sector 141" },
                { "name": "Sector 142" },
                { "name": "Sector 143" },
                { "name": "Sector 144" },
                { "name": "Sector 145" },
                { "name": "Sector 146" },
                { "name": "Sector 147" },
                { "name": "Sector 148" },
                { "name": "Sector 149" },
                { "name": "Sector 15" },
                { "name": "Sector 150" },
                { "name": "Sector 151" },
                { "name": "Sector 152" },
                { "name": "Sector 153" },
                { "name": "Sector 154" },
                { "name": "Sector 155" },
                { "name": "Sector 156" },
                { "name": "Sector 157" },
                { "name": "Sector 158" },
                { "name": "Sector 159" },
                { "name": "Sector 16" },
                { "name": "Sector 160" },
                { "name": "Sector 161" },
                { "name": "Sector 162" },
                { "name": "Sector 163" },
                { "name": "Sector 164" }
                // Add more localities here
            ]

        },
        Bengaluru: {
            bannerImage: "OIP1.jpg",
            cityLocalitiesList:
                [
                    { "name": "A Narayanapura" },
                    { "name": "Akshya Nagar" },
                    { "name": "Allalasandra" },
                    { "name": "Ambalipura" },
                    { "name": "Anagalapura" },
                    { "name": "Anand Nagar" },
                    { "name": "Azad Nagar" },
                    { "name": "B Narayanapura" },
                    { "name": "Babusapalaya" },
                    { "name": "Bagalakunte" },
                    { "name": "Bagalur" },
                    { "name": "Bagaluru" },
                    { "name": "Bagepalli" },
                    { "name": "Baiyappanahalli" },
                    { "name": "Balagere" },
                    { "name": "Balaji Nagar" },
                    { "name": "Baliganapalli" },
                    { "name": "Banashankari" },
                    { "name": "Banaswadi" },
                    { "name": "Banjara Layout" },
                    { "name": "Bank Avenue Colony" },
                    { "name": "Bannerghatta" },
                    { "name": "Bapuji Nagar" },
                    { "name": "Basapura" },
                    { "name": "Basavanagar" },
                    { "name": "Basavanagudi" },
                    { "name": "Basavanna Nagar" },
                    { "name": "Basaveshwara Nagar" },
                    { "name": "Battarahalli" },
                    { "name": "Begur" },
                    { "name": "Belathur" },
                    { "name": "Bellahalli" },
                    { "name": "Bellandur" },
                    { "name": "Bennigana Halli" },
                    { "name": "Benson Town" },
                    { "name": "Bettahalasur" },
                    { "name": "Bhoganhalli" },
                    { "name": "Bhoopasandra" },
                    { "name": "Bidadi" },
                    { "name": "Bidrahalli" },
                    { "name": "Bikkanahalli" },
                    { "name": "Bilekahalli" },
                    { "name": "Bommanahalli" },
                    { "name": "Bommasandra" },
                    { "name": "Bommenahalli" },
                    { "name": "Brookefield" },
                    { "name": "BTM Layout" },
                    { "name": "Budigere" },
                    { "name": "Budigere Cross" },
                    { "name": "Byatarayanapura" },
                    { "name": "Cambridge Layout" },
                    { "name": "Carmelaram" },
                    { "name": "Challaghatta" },
                    { "name": "Chamarajpet" },
                    { "name": "Channasandra" },
                    { "name": "Cheemasandra" },
                    { "name": "Chickpet" },
                    { "name": "Chikballapur" },
                    { "name": "Chikbanavara" },
                    { "name": "Chikka Tirupathi" },
                    { "name": "Chikkaballapur" },
                    { "name": "Chikkabanavara" },
                    { "name": "Chikkabidarakallu" },
                    { "name": "Chikkalasandra" },
                    { "name": "Chikkanagamangala" },
                    { "name": "Chikkanahalli" },
                    { "name": "Chikkasandra" },
                    { "name": "Chinnapanahalli" },
                    { "name": "Chintamani" },
                    { "name": "Choodasandra" },
                    { "name": "Cooke Town" },
                    { "name": "Cottonpet" },
                    { "name": "Cox Town" },
                    { "name": "Cubbon Park" },
                    { "name": "CV Raman Nagar" },
                    { "name": "Dabaspete" },
                    { "name": "Dasarahalli" },
                    { "name": "Dayananda Nagar" },
                    { "name": "Deepanjali Nagar" },
                    { "name": "Defence Colony" }
                    // Add more localities here
                ]
        },
        Hyderabad: {
            bannerImage: "OIP1.jpg",
            cityLocalitiesList:
                [
                    { "name": "Aghapura" },
                    { "name": "Ahmed Nagar" },
                    { "name": "Aliabad" },
                    { "name": "Ambedkar Nagar" },
                    { "name": "Amber Nagar" },
                    { "name": "Ameenpur" },
                    { "name": "Ameerpet" },
                    { "name": "Aminpur" },
                    { "name": "Asif Nagar" },
                    { "name": "Azamabad" },
                    { "name": "Baber Bagh" },
                    { "name": "Badangpet" },
                    { "name": "Badi Chowdi" },
                    { "name": "Bagh Amberpet" },
                    { "name": "Bahadurpally" },
                    { "name": "Bahadurpura" },
                    { "name": "Balamrai" },
                    { "name": "Balanagar" },
                    { "name": "Balapur" },
                    { "name": "Bandimet" },
                    { "name": "Bandlaguda" },
                    { "name": "Banjara Hills" },
                    { "name": "Bapuji Nagar" },
                    { "name": "Barkatpura" },
                    { "name": "Basheer Bagh" },
                    { "name": "Beeramguda" },
                    { "name": "Begum Bazaar" },
                    { "name": "Begumpet" },
                    { "name": "Bhagya Nagar Colony" },
                    { "name": "Bharat Nagar" },
                    { "name": "Bholakpur" },
                    { "name": "Bhuvanagiri" },
                    { "name": "Bibinagar" },
                    { "name": "BN Reddy Nagar" },
                    { "name": "Boiguda" },
                    { "name": "Bolarum" },
                    { "name": "Borabanda" },
                    { "name": "Bowenpally" },
                    { "name": "Bowrampet" },
                    { "name": "Brahim Patnam" },
                    { "name": "Buddha Nagar" },
                    { "name": "Chanda Nagar" },
                    { "name": "Chandulal Baradari" },
                    { "name": "Charlapally" },
                    { "name": "Charminar" },
                    { "name": "Chatta Bazar" },
                    { "name": "Cherlapally" },
                    { "name": "Chevalla" },
                    { "name": "Chikkadpally" },
                    { "name": "Chintal Basti" },
                    { "name": "Chintapallyguda" },
                    { "name": "Cyberabad" },
                    { "name": "Dabeerpura North" },
                    { "name": "Dammaiguda" },
                    { "name": "Darul Shifa" },
                    { "name": "Darus Salam" },
                    { "name": "Dasarlapally" },
                    { "name": "Dattatreya Colony" },
                    { "name": "Devan Devdi" },
                    { "name": "Dhoolpet" },
                    { "name": "Dilshad Nagar" },
                    { "name": "Dilsukh Nagar" },
                    { "name": "Dundigal" },
                    { "name": "Dwarkapuri Colony" },
                    { "name": "East Marredpally" },
                    { "name": "Falaknuma" },
                    { "name": "Farooqnagar" },
                    { "name": "Fateh Maidan" },
                    { "name": "Fateh Nagar" },
                    { "name": "Feelkhana" },
                    { "name": "Film Nagar" },
                    { "name": "Financial District" },
                    { "name": "Gachibowli" },
                    { "name": "Gagan Mahal" },
                    { "name": "Gandhi Bhavan" },
                    { "name": "Gandhi Nagar" },
                    { "name": "Gandipet" },
                    { "name": "Ghasmandi" },
                    { "name": "Ghatkesar" },
                    { "name": "Golconda" }
                    // Add more localities here
                ]

        },
        Mumbai: {
            bannerImage: "OIP1.jpg",
            cityLocalitiesList:
                [
                    { "name": "Aarey Milk Colony" },
                    { "name": "Abhyudaya Nagar" },
                    { "name": "Adharwadi" },
                    { "name": "Agripada" },
                    { "name": "Airport Area" },
                    { "name": "Akurli Nagar" },
                    { "name": "Alibag" },
                    { "name": "Ambarnath" },
                    { "name": "Ambedkar Nagar" },
                    { "name": "Ambewadi" },
                    { "name": "Ambivali" },
                    { "name": "Amboli" },
                    { "name": "Anand Nagar" },
                    { "name": "Antop Hill" },
                    { "name": "Apollo Bunder" },
                    { "name": "Asangaon" },
                    { "name": "Asha Nagar" },
                    { "name": "August Kranti Maidan" },
                    { "name": "Azad Nagar" },
                    { "name": "Badlapur" },
                    { "name": "Balkum" },
                    { "name": "Ballard Estate" },
                    { "name": "Bandra East" },
                    { "name": "Bandra Kurla Complex" },
                    { "name": "Bandra West" },
                    { "name": "Bangur Nagar" },
                    { "name": "Bazargate" },
                    { "name": "Behram Baug" },
                    { "name": "Beverly Park" },
                    { "name": "Bhakti Park" },
                    { "name": "Bhandup" },
                    { "name": "Bharat Nagar" },
                    { "name": "Bhayandar" },
                    { "name": "Bhiwandi" },
                    { "name": "Bhuleshwar" },
                    { "name": "BN Bhavan" },
                    { "name": "Boisar" },
                    { "name": "Bolinj" },
                    { "name": "Borivali" },
                    { "name": "BPT Colony" },
                    { "name": "Brahmand" },
                    { "name": "Breach Candy" },
                    { "name": "Byculla" },
                    { "name": "CGS Colony" },
                    { "name": "Chakala" },
                    { "name": "Chamar Baug" },
                    { "name": "Chandan Shanti" },
                    { "name": "Chandivali" },
                    { "name": "Charai" },
                    { "name": "Charkop" },
                    { "name": "Chembur" },
                    { "name": "Chikholi" },
                    { "name": "Chikuwadi" },
                    { "name": "Chinch Bandar" },
                    { "name": "Chincholi Bunder" },
                    { "name": "Chinchpokli" },
                    { "name": "Chiplun" },
                    { "name": "Chira Bazaar" },
                    { "name": "Chowk" },
                    { "name": "Chowpatty" },
                    { "name": "Chuna Bhatti" },
                    { "name": "Churchgate" },
                    { "name": "Colaba" },
                    { "name": "Cotton Green" },
                    { "name": "Cotton Green West" },
                    { "name": "CP Tank" },
                    { "name": "Crawford Market" },
                    { "name": "CST Area" },
                    { "name": "Cuffe Parade" },
                    { "name": "Dadar" },
                    { "name": "Dahisar" },
                    { "name": "Dahivali" },
                    { "name": "Dana Bunder" },
                    { "name": "Danda" },
                    { "name": "Dattapada" },
                    { "name": "Deonar" },
                    { "name": "Devdaya Nagar" },
                    { "name": "Dharavi" },
                    { "name": "Dhobi Ali" },
                    { "name": "Dhobi Talao" },
                    { "name": "Dhokali" },
                    { "name": "Dindoshi" },
                    { "name": "Dockyard" },
                    { "name": "Dombivali" },
                    { "name": "Dongri" },
                    { "name": "Dronagiri" },
                    { "name": "Eden Wood" },
                    { "name": "Eksar" },
                    { "name": "Ekvira Darshan" },
                    { "name": "Evershine Nagar" },
                    { "name": "Flora Fountain" },
                    { "name": "Fort" },
                    { "name": "Four Bungalows" },
                    { "name": "Gamdevi" },
                    { "name": "Gandhi Nagar" },
                    { "name": "Gauripada" },
                    { "name": "Gawand Baug" },
                    { "name": "Ghati Pada" },
                    { "name": "Ghatkopar" },
                    { "name": "Girgaon" },
                    { "name": "Girgaum" },
                    { "name": "Gokul Township" },
                    { "name": "Gokuldham" },
                    { "name": "Gorai" },
                    { "name": "Goregaon" },
                    { "name": "Govandi" },
                    { "name": "Government Colony" },
                    { "name": "Gowalia Tank" },
                    { "name": "Grant Road East" },
                    { "name": "Green Park Extension" },
                    { "name": "GTB Nagar" },
                    { "name": "Gulalwadi" },
                    { "name": "Haji Ali" },
                    { "name": "Hanuman Nagar" },
                    { "name": "Hatkesh Udhog Nagar" },
                    { "name": "Horiman Circle" },
                    { "name": "Hutatma Chowk" },
                    { "name": "Huzefa Nagar" },
                    { "name": "IC Colony" },
                    { "name": "Industrial Area" }
                ]

        },
        Indore: {
            bannerImage: "OIP1.jpg",
        },
        Chennai: {
            bannerImage: "OIP1.jpg",
        },
        Pune: {
            bannerImage: "OIP1.jpg",
        },
        Surat: {
            bannerImage: "OIP1.jpg",
        },
        Bhopal: {
            bannerImage: "OIP1.jpg",
        },
        kolkata: {
            bannerImage: "OIP1.jpg",
        },
        Kanpur: {
            bannerImage: "OIP1.jpg",
        },
        Lucknow: {
            bannerImage: "OIP1.jpg",
        },
        Goa: {
            bannerImage: "OIP1.jpg",
        },
        Jaipur: {
            bannerImage: "OIP1.jpg",
        },
        Ahmedabad: {
            bannerImage: "OIP1.jpg",
        },
        Chandigarh: {
            bannerImage: "OIP1.jpg",
        }
    };
    const location = useLocation();
    const { city } = useParams();
    return (
        <div>
            <div style={styles.homebanner} className="homebanner">
                <div style={styles.bgImg} className="bgImg">
                    <div style={styles.pageWidth}>
                        <div style={styles.textContainer} className="textContainerhome">
                            <h1 style={{ fontSize: "40px", fontWeight: "500", margin: "0" }}>{"Simplifying and Enhancing celebrations."}</h1>
                            <h2 style={{ fontSize: "72px", fontWeight: "900", margin: "0 0 10px", lineHeight: "77px", margin: "0px 0 10px", padding: "3px 14% 5px 14%", textTransform: "uppercase" }}>{"DECORATION IN YOUR "}{city}</h2>
                        </div>
                    </div>
                    <div style={styles.bannerBottomSec} className="bannerBottomSec">
                        <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
                            <a href={`/citypage/${city}/decoration`} style={{ textDecoration: "none" }}>
                                <img src={bannerDecorationImage} alt="Decoration Near me" />
                                <h2 style={{ fontSize: "16px", fontWeight: "normal", color: "#fff", textAlign: "center" }}>Decoration</h2>
                            </a>
                        </div>
                        <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
                            <a href="/chefOrder" style={{ textDecoration: "none" }}>
                                <img src={bannerChefImage} alt="Chef Near me" />
                                <h2 style={{ fontSize: "18px", fontWeight: "normal", color: "#fff", textAlign: "center" }}>Hire Chef</h2>
                            </a>
                        </div>
                        <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
                            <a href="/" style={{ textDecoration: "none" }}>
                                <img src={bannerReturnGiftImage} alt="Return Gift Near me" />
                                <h2 style={{ fontSize: "18px", fontWeight: "normal", color: "#fff", textAlign: "center" }}>Gift & Party Supplies</h2>
                            </a>
                        </div>
                        <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
                            <a href="/" style={{ textDecoration: "none" }}>
                                <img src={bannerEntertainmentImage} alt="Entertainment Near me" />
                                <h2 style={{ fontSize: "18px", fontWeight: "normal", color: "#fff", textAlign: "center" }}>Entertainment</h2>
                            </a>
                        </div>
                        <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
                            <a href="/" style={{ textDecoration: "none" }}>
                                <img src={bannerFoodDeliveryImage} alt="Food Delivery Near me" />
                                <h2 style={{ fontSize: "18px", fontWeight: "normal", color: "#fff", textAlign: "center" }}>Food Delivery</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles.celebrateWithUs} className="celebrateWithUs">
                <div style={{ padding: "0 6%" }}>
                    <h3 style={{ fontSize: "70px", fontWeight: "bold", color: "#E6756B", margin: "35px 0 20px", textAlign: "center" }}>CELEBRATE WITH US</h3>
                    <div style={styles.celebrateBottomSec} className="celebrateBottomSec">
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate1Image} alt="Birthday and Anniversary" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Birthday and Anniversary'}</h3>
                        </div>
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate2Image} alt="House Parties" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'House Parties'}</h3>
                        </div>
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate3Image} alt="Corporate Events" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Corporate Events'}</h3>
                        </div>
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate4Image} alt="Wedding Events" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Wedding Events'}</h3>
                        </div>
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate5Image} alt="Gatherings" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Gatherings'}</h3>
                        </div>
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate6Image} alt="Kids Events" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Kids Events'}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <section id="section6" class="sectionidsec">
                <div style={styles.pageWidth}>
                    <div id="faqQ">
                        <div>
                            <h1 style={{ fontSize: "70px", textTransform: "uppercase", fontWeight: "bold", color: "#E6756B", margin: "35px 0 0px", textAlign: "center" }}>Faq</h1>
                        </div>
                        <div>
                            <strong>1: Do you provide Balloon Room Decoration Services in {city.toUpperCase()}?</strong>
                            <p>A: Yes, we have a huge range to offer Room Balloon Decoration services in the vibrant city of  {city.toUpperCase()} </p>
                            <p>A: Our skilled and well-experienced team can beautifully transform any room with balloons as per your occasion and your mood of celebration.</p>
                        </div>
                        <div>
                            <strong>2: Do you offer same-day bookings for Birthday Decoration at Home in {city.toUpperCase()}?</strong>
                            <p>A:Yes, we understand that plans can change, and sometimes you need decorations on short notice. At HORA, we strive to accommodate same-day birthday decoration bookings possible. Contact our customer support team, and we'll do our best to make your event special, even on short notice..</p>
                        </div>
                        <div>
                            <strong>3: Can you provide me some budget-friendly suggestions for 1st Birthday Party Decorations?</strong>
                            <p>A: Of course! Consider themes for a first birthday such as Jungle Theme, Princess or Barbie Theme, Unicorn Theme, Space Theme and many more. For wonderful photo options, add bright colors, balloons, customized banners, and a cake smash setup. Visit our website and explore a wide range of decoration options for first birthday.</p>
                        </div>
                        <div>
                            <strong>4: What is the cost of Anniversary Balloon Decoration in  {city.toUpperCase()}?</strong>
                            <p>A: The cost of our Anniversary Decoration services depends on various factors such as the type of decoration, the size of the event, and the location. We offer packages starting from Rs.1200 for a simple yet elegant Anniversary Decoration.</p>
                        </div>
                        <div>
                            <strong>5: How can I arrange for Balloon Decoration at Home in {city.toUpperCase()} for any celebration?</strong>
                            <p>A: 7eventzz makes it simple to bring the joy of Balloon Decoration to your doorstep for any celebration in Bangalore. Our website serves as your guide to planning memorable parties from the comfort of your own home. Choose the "Balloon Decoration at Home" option, enter the event details, modify your requirements, and complete the simple booking process. Our skilled team will handle all of the details, ensuring that your celebration is both seamless and extraordinary.</p>
                        </div>
                        <div>
                            <strong>6: Areas we provide our services across {city.toUpperCase()} </strong>
                            <p>A: We provide decorations in all areas of Bengaluru- Sarjapur, Bellandur, Marathahalli, HSR Layout, Madiwala, MG Road, Kundalahalli, Brookefield, Defence Colony Bagalagunte, Bannerghatta, Azad Nagar, Banashankari, Banaswadi, Bapuji Nagar, Basavanagar, Bhuvaneshwari Nagar, Bidadi, Bommasandra, BTM Layout, Chandapura, Chandra Layout, Electronic City, Frazer Town, Ganga Nagar, HBR Layout, Hebbal, Hegde Nagar, Hennur, HRBR Layout, Indira Nagar, Jagajeevanram Nagar, Jayanagar, Jayamahal, Kalyan Nagar, Kammanahalli, Kanakapura, Hebbal Kempapura, Koramangala, Kothanur, LB Shastri Nagar, Mahadevpura, Malleshpalya, Malleshwaram, Sahakara Nagar, Sarjapur, Shanthi Nagar, Shivaji Nagar, Ulsoor, Uttarahalli, Whitefield, Williams Town, K R Puram, Vijayanagar, JP Nagar, Vittal Nagar, Bellandur, Prashanth Nagar, Vijaypura, Kamala Nagar, Gandhi Nagar, HSR Layout, Rajiv Gandhi Nagar, Chinnapa Garden, Raghavendra Colony, Madhava Nagar, Munireddypalya, Kartik Nagar, Bikasipura, Essel Gardens, Nehru Nagar, Shankarapura, Tilak Nagar, Ayyappa Nagar, ITPL, Budigere Cross and Nearby Locations in Bengaluru.</p>
                        </div>
                        <div>
                            <strong>6: Our Services in  {city.toUpperCase()} </strong>
                            <p>A: We provide decorations in all areas of Bengaluru - Sarjapur, Bellandur, Marathahalli, HSR Layout, Madiwala, MG Road, Kundalahalli, Brookefield, Defence Colony Bagalagunte, Bannerghatta, Azad Nagar, Banashankari, Banaswadi, Bapuji Nagar, Basavanagar, Bhuvaneshwari Nagar, Bidadi, Bommasandra, BTM Layout, Chandapura, Chandra Layout, Electronic City, Frazer Town, Ganga Nagar, HBR Layout, Hebbal, Hegde Nagar, Hennur, HRBR Layout, Indira Nagar, Jagajeevanram Nagar, Jayanagar, Jayamahal, Kalyan Nagar, Kammanahalli, Kanakapura, Hebbal Kempapura, Koramangala, Kothanur, LB Shastri Nagar, Mahadevpura, Malleshpalya, Malleshwaram, Sahakara Nagar, Sarjapur, Shanthi Nagar, Shivaji Nagar, Ulsoor, Uttarahalli, Whitefield, Williams Town, K R Puram, Vijayanagar, JP Nagar, Vittal Nagar, Bellandur, Prashanth Nagar, Vijaypura, Kamala Nagar, Gandhi Nagar, HSR Layout, Rajiv Gandhi Nagar, Chinnapa Garden, Raghavendra Colony, Madhava Nagar, Munireddypalya, Kartik Nagar, Bikasipura, Essel Gardens, Nehru Nagar, Shankarapura, Tilak Nagar, Ayyappa Nagar, ITPL, Budigere Cross and Nearby Locations in Bengaluru.</p>
                        </div>
                        <div>
                            <p>
                                Decorator near me in {city.toUpperCase()},
                                Balloon Decorator near me in {city.toUpperCase()},
                                Flower Decorator near me in {city.toUpperCase()},
                                Decoration service near me in {city.toUpperCase()},
                                Balloon Decoration service near me in {city.toUpperCase()},
                                Flower Decoration service near me in {city.toUpperCase()},
                                Birthday Decoration service near me in {city.toUpperCase()},
                                Anniversary decoration service near me in {city.toUpperCase()},
                                baby shower Decoration service near me in {city.toUpperCase()},
                                Baby welome Decoration service near me in {city.toUpperCase()},
                                Online balloon decoration in {city.toUpperCase()};
                                Best balloon decorations{city.toUpperCase()};
                                Kids birthday decoration service near me in {city.toUpperCase()}
                            </p>
                        </div>
                    </div>
                    {/* <p id="city-area-title" style={{ fontSize: "70px", textTransform: "uppercase", fontWeight: "bold", color: "#E6756B", margin: "35px 0 2px", textAlign: "center" }}>Serving all Areas in {city}</p>
                    <p style={{ fontSize: "10px", fontWeight: "bold", color: "#E6756B", margin: "2px 0 2px", textAlign: "center" }}>All localities are here</p>
                    <div id="city-area-list">
                        <ul style={{ listStyle: "none", padding: "20px 0" }}>
                            {cityData[city]?.cityLocalitiesList.map((item) => {
                                return (
                                    <li style={{ padding: "0 10px", display: "inline-block" }}><a href="/">{item.name}</a></li>
                                )
                            })}
                        </ul>
                    </div> */}
                </div>
            </section>
            <section id="section7" class="sectionidsec">
                <div style={styles.pageWidth}>
                    <p style={{ fontSize: "70px", textTransform: "uppercase", fontWeight: "bold", color: "#E6756B", margin: "35px 0 2px", textAlign: "center" }} className="other-cities">Other Cities</p>
                    <div class="tab-inner">
                        <ul style={{ listStyle: "none", padding: "20px 0" }}>
                            <li className="city-link" data-city="Delhi" style={{ padding: "0 10px", display: "inline-block" }} >
                                <a href="/decoration/delhi">Delhi</a>
                            </li>
                            <li className="city-link" data-city="Gurugram" style={{ padding: "0 10px", display: "inline-block" }}>
                               
                                <a href="/decoration/delhi">Gurugram</a>
                            </li>
                            <li className="city-link" data-city="Ghaziabad" style={{ padding: "0 10px", display: "inline-block" }}>
                               
                                <a href="/decoration/delhi">Ghaziabad</a>
                            </li>
                            <li className="city-link" data-city="Faridabad" style={{ padding: "0 10px", display: "inline-block" }}>
                               
                                <a href="/decoration/delhi">Faridabad</a>
                            </li>
                            <li className="city-link" data-city="Noida" style={{ padding: "0 10px", display: "inline-block" }}>
                              
                                <a href="/decoration/delhi">Noida</a>
                            </li>
                            <li className="city-link" data-city="Bengaluru" style={{ padding: "0 10px", display: "inline-block" }}>
                                
                                <a href="/decoration/delhi">Bengaluru</a>
                            </li>
                            <li className="city-link" data-city="Hyderabad" style={{ padding: "0 10px", display: "inline-block" }}>
                              
                                <a href="/decoration/delhi">Hyderabad</a>
                            </li>
                            <li className="city-link" data-city="Mumbai" style={{ padding: "0 10px", display: "inline-block" }}>
                               
                                <a href="/decoration/delhi">Mumbai</a>
                            </li>
                            <li className="city-link" data-city="Indore" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="decoration/indore">Indore</a>
                            </li>
                            <li className="city-link" data-city="Chennai" style={{ padding: "0 10px", display: "inline-block" }}>
                              
                                <a href="/decoration/chennai">Chennai</a>
                            </li>
                            <li className="city-link" data-city="Pune" style={{ padding: "0 10px", display: "inline-block" }}>
                            
                                <a href="/decoration/pune">Pune</a>
                            </li>
                            <li className="city-link" data-city="Surat" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link to="#" >Surat</Link>
                               
                            </li>
                            <li className="city-link" data-city="Bhopal" style={{ padding: "0 10px", display: "inline-block" }}>
                              
                                <a href="/decoration/bhopal">Bhopal</a>
                            </li>
                            <li className="city-link" data-city="kanpur" style={{ padding: "0 10px", display: "inline-block" }}>
                            <a href="/decoration/kanpur">Kanpur</a>
                            </li>
                            <li className="city-link" data-city="Lucknow" style={{ padding: "0 10px", display: "inline-block" }}>
                            <a href="/decoration/Lucknow">Lucknow</a>
                            </li>
                            <li className="city-link" data-city="kolkata" style={{ padding: "0 10px", display: "inline-block" }}>
                            <a href="/decoration/kolkata">kolkata</a>
                            </li>
                            <li className="city-link" data-city="Goa" style={{ padding: "0 10px", display: "inline-block" }}>
                            <a href="/decoration/Goa">Goa</a>
                            </li>
                        </ul>



                        <div id="city-content">
                            <div class="des-city-area">
                                <h1 style={{ fontSize: "70px", textTransform: "uppercase", fontWeight: "bold", color: "#E6756B", margin: "35px 0 0px", textAlign: "center" }}>Description</h1>
                                <div id="city-description" style={{ fontSize:"10px" , padding:"0 10px"}}>
                                    <p>Home Balloon Decoration in {city} for Birthday Party celebrations</p>
                                    <p>Decorations and Gifts can make anybody happy. Who doesn’t love getting pampered? Everybody does, though all may not ask for it. A birthday is an occasion to rejoice with our friends and loved ones. These days’ birthday themes and decorations seem to play a major role in any birthday party. Balloons are a necessary thing when it comes to decorating for birthday parties not because Online balloon decoration is cheap and colorful but because balloon decoration adds warm fuzzies to the party which creates a blissful moment in the hearts of people. Balloons are party highlighters! They not only brighten up birthday parties but also bring the group together in balloon bursting activities. Balloon birthday themes have always been fun and easy. The bright and colorful balloons are an ideal choice for any birthday party. When people hear the name of balloons decoration, they anticipate a happy moment to come which makes them feel extremely happy from within. It enlightens the festive mood with its elegant design, color and pattern. There are so many things you can do to create the best balloon decoration with the help of the best party planner in Bangalore or balloon decorators in {city}. These are the things you can do to make your birthday parties memorable.</p>
                                    <p>Birthday Balloon Decoration in {city}</p>
                                    <p>Birthdays are memorable occasions for all of us. Who does not love celebrating their birthday, kids love gifts, youngsters love to get their dream stuff and grown-up loves to get all the attention and special treatment by their near and dear ones, birthday is the happiest day of one’s life. This day not only makes the birthday boy or girl happy but also injects the family members with cheerful vibes. That’s the reason everyone is so excited to celebrate birthdays. And this is the sole reason that in India and across the globe, birthdays are no less than festivals, So celebrate your birthday with beautiful balloon decoration at home in {city}. Are you looking for the Best Balloon decorator in {city}? You want to opt for the Professional balloon decoration services but at the same time wanted it to be budget friendly? Our on-site balloon decorating service in Bangalore by HORA had created a wow and stunning backdrop for your corporate as well as personal events. The variety of balloon designs includes Backdrop, Ring Decoration, Sequence photo booth and so on. If you want to introduce fun to your events and looking for some unique assortment of party decoration then book Best Balloon Decoration in {city} from us.</p>
                                    <p>Online Balloon Decoration Shop in {city}</p>
                                    <p>Organizing and managing an event yourself can be tedious and, not to mention, time consuming. With everyday activities becoming simpler, the fun-filled episodes in your life have become even more precious. Celebrating them in a fashionable and classy manner is what makes the best memories. Whenever people gather, regardless of their number or purpose, someone needs to handle the intricacies to ensure the celebration is a success. stands the vitality of time, cooperation, and every other aspect that surrounds the planning of an event. With a fresh team of skilled, creative and motivated professionals, HORA offers the coolest event planning services in more than 100+ Cities in India Being young in this business; we bring to you a blend of innovation and style that’s simply new. Our focus is to provide you with the latest in trend and to create new trends. Taking your personal preferences into consideration and mixing it with new-age design layouts and themes, our primary goal is to help you create amazing memories to cherish for a lifetime. So what are you waiting for? book your favourite occasion from the best balloon decoration shop near me in {city}.</p>
                                    <p>Choose HORA for all your celebrations and parties at cheapest rates</p>
                                    <p>Get all your decoration requirements under one roof on HORA, from Baby Shower decoration to Welcome Baby decorations at home in {city}. We specialize in creating dreamy and delightful setups for various events, ensuring every moment is special and memorable.</p>
                                    <p>
                                        Decorator near me in {city.toUpperCase()},
                                        Balloon Decorator near me in {city.toUpperCase()},
                                        Flower Decorator near me in {city.toUpperCase()},
                                        Decoration service near me in {city.toUpperCase()},
                                        Balloon Decoration service near me in {city.toUpperCase()},
                                        Flower Decoration service near me in {city.toUpperCase()},
                                        Birthday Decoration service near me in {city.toUpperCase()},
                                        Anniversary decoration service near me in {city.toUpperCase()},
                                        baby shower Decoration service near me in {city.toUpperCase()},
                                        Baby welome Decoration service near me in {city.toUpperCase()},
                                        Online balloon decoration in {city.toUpperCase()};
                                        Best balloon decorations{city.toUpperCase()};
                                        Kids birthday decoration service near me in {city.toUpperCase()}
                                    </p>
                                    <p>
                                    event planning certification,event organizing courses,event planner classes,event planner training,event planning course,event mangement certification,how to become a certified event planner,event certification,how to plan an event,event planning,event planners,helena paschal,how to plan an event houston,corporate event planner,business event planner,how to become an event planner,how to start an event planner business,event planning for beginners

                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <p id="city-seo-content"  style={{ fontSize:"10px" , padding:"0 10px"}}>

                        Online balloon decoration in {city}, Online decoration in {city}, Online balloon decorators in {city}, Online decorator in {city}; top balloon decorator in {city}; top balloon decorator in {city}; Excellent birthday party balloon decoration in {city}; event organising companies in {city}; beautiful theme balloon balloon decoration in {city}; beautiful theme flower balloon decoration in {city}; Hire balloon decoration at home in {city}; Best balloon decoration in {city}, Best decoration in {city}, Best balloon decorator in {city}; Best decorator in {city}; Balloon decoration at home in {city}; Balloon decorator at home in {city}; Best Balloon decorator at home in {city}; Best Balloon decoration at home in {city}; Professional balloon decoration services in {city}; Room Balloon Decoration; Hall Decoration; Large Decorations, Premium Decorations; Room decoration designs; Home Decoration; Stage decoration; Venue decoration; Best Room Balloon Decoration; Best Hall Decoration; Best Large Decorations, Best Premium Decorations; Best Room decoration designs; Best Home Decoration; Best Stage decoration; Best Venue decoration;
                        Same-day bookings for Birthday Decoration at Home in {city}; Same-day bookings for Anniversary Decoration at Home in {city}; Same-day bookings for Birthday Decoration at in {city}. Same-day bookings for Baby shower Decoration at Home in {city}; Same-day bookings for Car Decoration at Home in {city}; Same-day bookings for first night Decoration at Home in {city}; Same-day bookings for welcome baby Decoration at Home in {city}
                        Jungle Theme Decoration design, Jungle Theme Decorator near me; Jungle theme decoration under 1500; Jungle theme decoration under 5000; Jungle theme decoration under 10000; Jungle Theme balloon Decoration design; Jungle Theme balloon Decorator near me; Princess or Barbie Theme Decoration design, Princess or Barbie Theme Decorator near me; Princess or Barbie theme decoration under 1500; Princess or Barbie theme decoration under 5000; Jungle theme decoration under 10000; Princess or Barbie Theme balloon Decoration design; Princess or Barbie Theme balloon Decorator near me; Unicorn Theme Decoration design, Unicorn Theme Decorator near me; Unicorn theme decoration under 1500; Unicorn theme decoration under 5000; Unicorn theme decoration under 10000; Unicorn Theme balloon Decoration design; Unicorn Theme balloon Decorator near me; Space Theme Decoration design, Space Theme Decorator near me; Space theme decoration under 1500; Space theme decoration under 5000; Space theme decoration under 10000; Space Theme balloon Decoration design; Space Theme balloon Decorator near me;

                        First birthday decoration; Second year birthday decoration, 5th year birthday decoration, 10th Birthday decoration; Anniversary Balloon Decoration in Bangalore; Kids birthday decoration; Birthday decoration; Decoration starting 1200 Rs; Budget-friendly suggestions for 1st Birthday Party Decorations; Budget-friendly suggestions for 2nd Birthday Party Decorations; Budget-friendly suggestions for 5th Birthday Party Decorations; Budget-friendly suggestions for 10th Birthday Party Decorations; Best balloon decorator for small parties in {city}, Best balloon decoration for small parties in {city}; Mini Decoration in {city},
                        Book a decorator in {city}, Book a decoration in {city}, Book a balloon decorator in {city}, Book a flower decoration in {city}, Book a balloon decoration in {city}, Book a flower decorator in {city}; Book a trained verified decorator near you in {city}, Bookadecortor in {city},
                        Decoration for small parties in {city}, Top Decorator in {city}, Decoration services in {city}, Decorator at home service in {city}, Decorator for a night in {city}, Decoration for a night in {city}, Decorator for hire in {city}, Decoration at my home in {city}, Decorator near me in {city}, Balloon Decorator near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; Simple birthday decoration at home; Simple birthday decoration in {city};

                        Balloon Decoration for small parties in {city}, Top balloon Decorator in {city}, balloon Decoration services in {city}, balloon Decorator at home service in {city}, balloon Decorator for a night in {city}, Decorator for hire in {city}, balloon Decoration at my home in {city}, balloon Decorator near me in {city}, Balloon Decoration near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; balloon decoration for birthday at home in {city};
                        balloon decoration ideas; Astronaut Space Theme balloon decoration; Avenger Space Theme balloon decoration; Boss Baby Theme balloon decoration; Baby Shark Theme balloon decoration; Barbie Theme balloon decoration; Cocomelon Theme balloon decoration; Car Theme balloon decoration; Circus Theme balloon decoration; Dinosaur Theme balloon decoration; Jungle Theme balloon decoration; Kitty Theme balloon decoration; Lion Theme balloon decoration; Mickey Mouse Theme balloon decoration; Minecraft Theme balloon decoration; Mermail Theme balloon decoration; Pokemon Theme balloon decoration; Princess Theme balloon decoration; Panda Theme balloon decoration; Traffic Theme balloon decoration; Super Dog Theme balloon decoration; Unicorn Theme balloon decoration                    </p>
                </div>



            </section>
            <section id="section7" class="sectionidsec">
                <div style={styles.pageWidth}>
                    <p style={{ fontSize: "70px", textTransform: "uppercase", fontWeight: "bold", color: "#E6756B", margin: "35px 0 2px", textAlign: "center" }} className="other-cities">Other Services</p>
                    <div class="tab-inner">
                        <ul style={{ listStyle: "none", padding: "20px 0" }}>
                            <li className="city-link" data-city={city} style={{ padding: "0 10px", display: "inline-block" }} >
                                <a href="/decoration">Birthday Decoration in {city}</a>
                            </li>
                            <li className="city-link" data-city="Gurugram" style={{ padding: "0 10px", display: "inline-block" }}>
                            <a href="/decoration">Baby Shower Decoration in {city}</a>
                            </li>
                            <li className="city-link" data-city="Ghaziabad" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">Baby Welcome Decoration in {city}</a>
                            </li>
                            <li className="city-link" data-city="Faridabad" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">First Night Decoration in {city}</a>
                            </li>
                            <li className="city-link" data-city="Noida" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="deocration">Kids Birthday Decoration in  {city}</a>
                            </li>
                            <li className="city-link" data-city="Bengaluru" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">Anniversary Decoration in {city}</a>
                            </li>
                            <li className="city-link" data-city="Hyderabad" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">Candle Light Dinner in  {city}</a>
                            </li>
                            <li className="city-link" data-city="Mumbai" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">Car Decoration in  {city}</a>
                            </li>
                            <li className="city-link" data-city="Indore" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">Naming Ceremony Decoration in {city}</a>
                            </li>
                            <li className="city-link" data-city="Chennai" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">Terrace Decoration in{city}</a>
                            </li>
                            <li className="city-link" data-city="Pune" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">Proposal Decoration in {city}</a>
                            </li>
                            <li className="city-link" data-city="Surat" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">Bride-to-be Decoration in {city}</a>
                            </li>
                            <li className="city-link" data-city="Bhopal" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">Cabana Decoration in {city}</a>
                            </li>
                            <li className="city-link" data-city="kanpur" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">Haldi Decoration in {city}</a>
                            </li>
                            <li className="city-link" data-city="Lucknow" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration">Balloon Decoration in {city}</a>
                            </li>
                            <li className="city-link" data-city="kolkata" style={{ padding: "0 10px", display: "inline-block" }}>
                                <a href="/decoration" >Office Decoration in  {city}</a>
                            </li>
                            <li className="city-link" data-city="Goa" style={{ padding: "0 10px", display: "inline-block" }}>
                     
                                <a href="/decoration">Engagement Ring Platter in {city}</a>
                            </li>
                        </ul>

                    </div>
                    <p id="city-seo-content" style={{ fontSize: "5px", margin: "20px 0 20px " }}>

                        Online balloon decoration in {city}, Online decoration in {city}, Online balloon decorators in {city}, Online decorator in {city}; top balloon decorator in {city}; top balloon decorator in {city}; Excellent birthday party balloon decoration in {city}; event organising companies in {city}; beautiful theme balloon balloon decoration in {city}; beautiful theme flower balloon decoration in {city}; Hire balloon decoration at home in {city}; Best balloon decoration in {city}, Best decoration in {city}, Best balloon decorator in {city}; Best decorator in {city}; Balloon decoration at home in {city}; Balloon decorator at home in {city}; Best Balloon decorator at home in {city}; Best Balloon decoration at home in {city}; Professional balloon decoration services in {city}; Room Balloon Decoration; Hall Decoration; Large Decorations, Premium Decorations; Room decoration designs; Home Decoration; Stage decoration; Venue decoration; Best Room Balloon Decoration; Best Hall Decoration; Best Large Decorations, Best Premium Decorations; Best Room decoration designs; Best Home Decoration; Best Stage decoration; Best Venue decoration;
                        Same-day bookings for Birthday Decoration at Home in {city}; Same-day bookings for Anniversary Decoration at Home in {city}; Same-day bookings for Birthday Decoration at in {city}. Same-day bookings for Baby shower Decoration at Home in {city}; Same-day bookings for Car Decoration at Home in {city}; Same-day bookings for first night Decoration at Home in {city}; Same-day bookings for welcome baby Decoration at Home in {city}
                        Jungle Theme Decoration design, Jungle Theme Decorator near me; Jungle theme decoration under 1500; Jungle theme decoration under 5000; Jungle theme decoration under 10000; Jungle Theme balloon Decoration design; Jungle Theme balloon Decorator near me; Princess or Barbie Theme Decoration design, Princess or Barbie Theme Decorator near me; Princess or Barbie theme decoration under 1500; Princess or Barbie theme decoration under 5000; Jungle theme decoration under 10000; Princess or Barbie Theme balloon Decoration design; Princess or Barbie Theme balloon Decorator near me; Unicorn Theme Decoration design, Unicorn Theme Decorator near me; Unicorn theme decoration under 1500; Unicorn theme decoration under 5000; Unicorn theme decoration under 10000; Unicorn Theme balloon Decoration design; Unicorn Theme balloon Decorator near me; Space Theme Decoration design, Space Theme Decorator near me; Space theme decoration under 1500; Space theme decoration under 5000; Space theme decoration under 10000; Space Theme balloon Decoration design; Space Theme balloon Decorator near me;

                        First birthday decoration; Second year birthday decoration, 5th year birthday decoration, 10th Birthday decoration; Anniversary Balloon Decoration in Bangalore; Kids birthday decoration; Birthday decoration; Decoration starting 1200 Rs; Budget-friendly suggestions for 1st Birthday Party Decorations; Budget-friendly suggestions for 2nd Birthday Party Decorations; Budget-friendly suggestions for 5th Birthday Party Decorations; Budget-friendly suggestions for 10th Birthday Party Decorations; Best balloon decorator for small parties in {city}, Best balloon decoration for small parties in {city}; Mini Decoration in {city},
                        Book a decorator in {city}, Book a decoration in {city}, Book a balloon decorator in {city}, Book a flower decoration in {city}, Book a balloon decoration in {city}, Book a flower decorator in {city}; Book a trained verified decorator near you in {city}, Bookadecortor in {city},
                        Decoration for small parties in {city}, Top Decorator in {city}, Decoration services in {city}, Decorator at home service in {city}, Decorator for a night in {city}, Decoration for a night in {city}, Decorator for hire in {city}, Decoration at my home in {city}, Decorator near me in {city}, Balloon Decorator near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; Simple birthday decoration at home; Simple birthday decoration in {city};

                        Balloon Decoration for small parties in {city}, Top balloon Decorator in {city}, balloon Decoration services in {city}, balloon Decorator at home service in {city}, balloon Decorator for a night in {city}, Decorator for hire in {city}, balloon Decoration at my home in {city}, balloon Decorator near me in {city}, Balloon Decoration near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; balloon decoration for birthday at home in {city};
                        balloon decoration ideas; Astronaut Space Theme balloon decoration; Avenger Space Theme balloon decoration; Boss Baby Theme balloon decoration; Baby Shark Theme balloon decoration; Barbie Theme balloon decoration; Cocomelon Theme balloon decoration; Car Theme balloon decoration; Circus Theme balloon decoration; Dinosaur Theme balloon decoration; Jungle Theme balloon decoration; Kitty Theme balloon decoration; Lion Theme balloon decoration; Mickey Mouse Theme balloon decoration; Minecraft Theme balloon decoration; Mermail Theme balloon decoration; Pokemon Theme balloon decoration; Princess Theme balloon decoration; Panda Theme balloon decoration; Traffic Theme balloon decoration; Super Dog Theme balloon decoration; Unicorn Theme balloon decoration                    </p>
                </div>



            </section>

        </div>
    );
}

const styles = {
    homebanner: {
        marginTop: "-76px",
    },
    pageWidth: {
        maxWidth: "100%",
        width: "1200px",
        margin: "0 auto",
    },
    bgImg: {
        background: `url(${bannerSvgImage})`,
        backgroundSize: "cover",
        paddingTop: "110px",
        paddingBottom: "30px",
    },
    pageWidth: {
        maxWidth: "100%",
        width: "1200px",
        margin: "0 auto",
    },
    textContainer: {
        textAlign: "center",
        color: "white", // Adjust text color as needed
        margin: "0 0 70px 0",
    },
    bannerBottomSec: {
        display: "flex",
        justifyContent: "center",
        alignItems: "top",
        flexDirection: "row",
        padding: "0px 6%",
        margin: "0 auto",
        flexWrap: "wrap",
    },
    celebrateBottomSec: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
        margin: "0 auto",
        flexWrap: "wrap",
    },
    celebrateBox: {
        margin: "0 1%",
        width: "20%",
    },
    bannerDecorationImage: {
        margin: "0 1%",
        width: "14%",
    },
    serviceSec: {
        backgroundColor: "rgba(230, 117, 107, 0.2)",
        borderRadius: "59px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px",
        marginBottom: "50px",
    },
    serviceSecRight: {
        width: "53%",
    },
    serviceSecLeft: {
        width: "40%",
    }

};

export default DecorationCity;
