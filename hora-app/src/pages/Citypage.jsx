import React from 'react';
import { useLocation } from 'react-router-dom';

function Citypage() {
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
        Kanpur:{
            bannerImage: "OIP1.jpg",
        },
        Lucknow:{
            bannerImage: "OIP1.jpg",
        },
        Goa:{
            bannerImage: "OIP1.jpg",
        },
        Jaipur:{
            bannerImage: "OIP1.jpg",
        },
        Ahmedabad:{
            bannerImage: "OIP1.jpg",
        },
        Chandigarh:{
            bannerImage: "OIP1.jpg",
        }
    };
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const city = searchParams.get('city');
    const bannerImage = cityData[city]?.bannerImage;
    console.log(`../assets/${bannerImage}`)
  return (
    <main>
    <div className="footSec2">
        <h2>Serving In {city}</h2>
        <div className="occasions-banner" id="occation-intro-inner">
            {/* Dynamically set the src attribute using the bannerImage variable */}
            <img id="city-banner" src={require(`../assets/${bannerImage}`).default} alt="City Banner" style={{ width: '100%' }} />
            <h1 id="city-title">Cooks and Chefs in {city}</h1>
            <div className="citybanneroverlay"></div>
        </div>
        <section id="section1" className="sectionidsec">
            <div className="p-4 tab-inner">
                <h1 className="mb-3">Services</h1>
                <div className="d-flex flex-row services justify-content-between">
                    <div className="card d-flex flex-row services justify-content-between text-center">
                        <div>
                            <div className="card-body">
                                <img src="content/img/services1.png" alt="Service 1" />
                                <h5 className="card-title">Starting @ just ₹ 89</h5>
                            </div>
                            <div className="cart-foot">
                                <p className="card-text">Chef on Demand at Home</p>
                                <a className="card-text" target="_blank" href="https://play.google.com/store/apps/details?id=com.hora" rel="noopener noreferrer" role="button">
                                    Download Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card d-flex flex-row services justify-content-between text-center">
                        <div>
                            <div className="card-body">
                                <img src="content/img/services2.png" alt="Service 2" />
                                <h5 className="card-title">Starting @ just ₹ 89</h5>
                            </div>
                            <div className="cart-foot">
                                <p className="card-text">Chef Made Food Delivery</p>
                                <a className="card-text" target="_blank" href="https://play.google.com/store/apps/details?id=com.hora" rel="noopener noreferrer" role="button">
                                    Download Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card d-flex flex-row services justify-content-between text-center">
                        <div>
                            <div className="card-body">
                                <img src="content/img/services3.png" alt="Service 3" />
                                <h5 className="card-title">Starting @ just ₹ 89</h5>
                            </div>
                            <div className="cart-foot">
                                <p className="card-text">Party Decorations</p>
                                <a className="card-text" target="_blank" href="https://play.google.com/store/apps/details?id=com.hora" rel="noopener noreferrer" role="button">
                                    Download Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="section2" className="sectionidsec" style={{ backgroundImage: `url('content/img/citypage-about-bg.png')` }}>
    <div className="tab-inner">
        <h1>About</h1>
        <p>
            Imagine enjoying a restaurant-class party experience in the comfort of your home. With Hora, this dream becomes a reality. Our team of skilled private chefs and decorators is dedicated to delivering culinary and party excellence tailored to your unique preferences and occasion. From crafting enticing menus to showcasing their culinary artistry, our chefs and decorators will create a feast that leaves a lasting impression on your guests.
        </p>
        <ul className="aboutul">
            <li>Hygiene: Our Top Priority</li>
            <li>Exquisite Menus for Every Occasion</li>
            <li>Savour the Convenience</li>
            <li>Discover the Hora Difference</li>
        </ul>
    </div>
</section>
<section id="section3" className="sectionidsec">
    <div className="tab-inner">
        <h1 className="mb-4">How It Works</h1>
        <div className="d-flex flex-row services justify-content-between">
            <div className="card d-flex flex-row services justify-content-between text-center">
                <div className="w-full">
                    <div className="card-body1">
                        <img src="content/img/hw2.png" width="120px" />
                    </div>
                    <div className="cart-foot">
                        <h5 className="card-title1">Order Fulfilment</h5>
                        <ul className="hw-list">
                            <li>Chef will arrive at decided time and location</li>
                            <li>Chef would prepare the dishes using your ingredient and appliances in kitchen</li>
                            <li>Chef cleans the kitchen after the service and leaves.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card d-flex flex-row services justify-content-between text-center">
                <div className="w-full">
                    <div className="card-body1">
                        <img src="content/img/hw1.png" width="120px" />
                    </div>
                    <div className="cart-foot">
                        <h5 className="card-title1">Order Fulfilment</h5>
                        <ul className="hw-list">
                            <li>Chef will arrive at decided time and location</li>
                            <li>Chef would prepare the dishes using your ingredient and appliances in kitchen</li>
                            <li>Chef cleans the kitchen after the service and leaves.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card d-flex flex-row services justify-content-between text-center">
                <div className="w-full">
                    <div className="card-body1">
                        <img src="content/img/hw3.png" width="120px" />
                    </div>
                    <div className="cart-foot">
                        <h5 className="card-title1">Confirm Order</h5>
                        <ul className="hw-list">
                            <li>Confirm your order and rest back we will take it from here</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="hw-booknow-sec">
            <h1 id="city-looking-chef-title">
            Looking for Chefs and Cooks in  {city}   
            </h1>
            <div>
                <a href="https://play.google.com/store/apps/details?id=com.hora" target="_blank" rel="noopener noreferrer">Download Here</a>
            </div>
        </div>
        <div className="veified-chef d-flex flex-row align-items-center justify-content-between">
            <div className="card d-flex flex-row services justify-content-between text-center">
                <div className="card-body1">
                    <img src="content/img/verified.png" />
                </div>
                <div className="cart-foot">
                    Verified Trained chefs and decorators
                </div>
            </div>
            <div className="card d-flex flex-row services justify-content-between text-center">
                <div className="card-body1">
                    <img src="content/img/verified.png" />
                </div>
                <div className="cart-foot">
                    40% cost effective than restaurants
                </div>
            </div>
            <div className="card d-flex flex-row services justify-content-between text-center">
                <div className="card-body1">
                    <img src="content/img/verified.png" />
                </div>
                <div className="cart-foot">
                    Assurity of Dedicated call supports
                </div>
            </div>
        </div>
    </div>
</section>
<section id="section6" class="sectionidsec">
                        <h1>Area</h1>
                        <p id="city-area-title">Serving all Areas in {city}</p>
                        <p>All localities are here</p>
                        <div id="city-area-list">
                            {cityData[city]?.cityLocalitiesList.map((item)=>{
                                    return(
                                        <>{item.name}</>
                                    )
                            })}
                        </div>
                       
                        </section>

                        <section id="section7" class="sectionidsec">
                            <h1>Other Cities</h1>
                            <div class="tab-inner">

                                <ul id="myList">
                                    <li class="city-link" data-city="Delhi"><a href="city.html?city=Delhi">Cooks and
                                            Chefs in Delhi</a></li>
                                    <li class="city-link" data-city="Gurugram"><a href="city.html?city=Gurugram">Cooks
                                            and Chefs in Gurugram</a></li>
                                    <li class="city-link" data-city="Ghaziabad"><a href="city.html?city=Ghaziabad">Cooks
                                            and Chefs in Ghaziabad</a></li>
                                    <li class="city-link" data-city="Faridabad"><a href="city.html?city=Faridabad">Cooks
                                            and Chefs in Faridabad</a></li>
                                    <li class="city-link" data-city="Noida"><a href="city.html?city=Noida">Cooks and
                                            Chefs in Greater Noida</a></li>
                                    <li class="city-link" data-city="Bengaluru"><a href="city.html?city=Bengaluru">Cooks
                                            and Chefs in Bengaluru</a></li>
                                    <li class="city-link" data-city="Hyderabad"><a href="city.html?city=Hyderabad">Cooks
                                            and Chefs in Hyderabad</a></li>
                                    <li class="city-link" data-city="Mumbai"><a href="city.html?city=Mumbai">Cooks
                                            and Chefs in Mumbai</a></li>
                                    <li class="city-link" data-city="Indore"><a href="city.html?city=Indore">Cooks
                                            and Chefs in Indore</a></li>
                                </ul>


                            </div>
                            <div id="city-content">
                                <div class="des-city-area">
                                    <h1>Description</h1>
                                    <p id="city-description">
                                    Book professional Cooks and Chefs in {city} for House Parties, Birthday Parties, Special Breakfast, Lunch and Dinner at Home. Hire trained and verified personal Chefs and Cooks near you for a private dining experience at home with the best cooks and chef services at home.
                                    </p>
                                </div>
                            </div>



                        </section>

                        <section id="section8" class="sectionidsec">
                        <h1>FAQ</h1>
                        <div class="tab-inner">
                            <div id="faqQ"></div>
                        </div>
                        </section>

                        <p id="city-seo-content">
                            Online chef for hire in {city}, Best caterers for small parties in  {city}, Best home-made cooking service in  {city}, Mini party caterers in  {city}, Book a chef in  {city}, Book a cook in  {city}, Book a private chef in  {city}, Book a private cook in  {city}, Book a trained verified cook near you in  {city}, Bookacook in  {city}, Caterers for small parties in  {city}, Top caterers in  {city}, Chef for a party in  {city}, Catering services in  {city}, Chef at home service in  {city}, Chef for a day in  {city}, Chef for a night in  {city}, Chef for hire in  {city}, Chef cooking at my home in  {city}, Chef near me in  {city}, Chef on demand in  {city}, Chef required at home in  {city}, Chefs for hire in  {city}, Chefs for home in  {city}, Hire a private chef in  {city}, Chefs on hire in  {city}, Cook chef near me in  {city}, Cook at home services in  {city}, Cook for a day in  {city}, Cook for a night in  {city}, Cook for one day in  {city}, Cook for a party in  {city}, Cook service near me in  {city}, Cook home services in  {city}, Cook near me in  {city}, Cook on demand in  {city}, Cook on hire near me in  {city}, Cook required at home in  {city}, Cooking as a service in Delhi, Cooking maids near me in  {city}, Cooking services near me in  {city}, Cooks for hire in  {city}, Cooks for home in  {city}, Cooks near me in  {city}, Cooks on hire in  {city}, Domestic cook near me in  {city}, Find a chef in  {city}, Find a cook in  {city}, Hire a chef in  {city}, Hire a chef for a day in  {city}, Hire personal chef in  {city}, Hire a chef for home in  {city}, Hire a chef near me in  {city}, Take a Chef in  {city}, Hire a cook in  {city}, Hire a cook at home in  {city}, Hire a cook for home in  {city}, Hire a cook near me in  {city}, Hire a personal chef for a night in  {city}, Hire a personal cook in  {city}, Hire a professional chef in  {city}, Hire chef at home in  {city}, Hire cook near me in  {city}, Hire cook online in  {city}, Hire private chef in  {city}, Hire someone to cook for you in  {city}, Hiring a personal chef in  {city}, Home caterers in  {city}, Home chef near me in  {city}, Home cook near me in  {city}, Home cooking service in  {city}, Home cooking service near me in  {city}, Home party catering in  {city}, House chef near me in  {city}, House cook near me in  {city}, In-home cooking service in  {city}, In-house cooking service in  {city}, Local chefs for hire in  {city}, Looking for chef in  {city}, Looking for cook in  {city}, Mini caterers in  {city}, Need a chef in  {city}, Need a cook in  {city}, Online cook service in  {city}, Party caterers in  {city}, Personal chef in  {city}, Personal chefs for hire near me in  {city}, Personal Cook in  {city}, Personal cook near me in  {city}, Private chef in  {city}, Private chef hire in  {city}, Private chef near me in  {city}, Private chef services near me in  {city}, Private cook in  {city}, Private cook for hire in  {city}, Private personal chef in  {city}, Professional chef for hire in  {city}, Top rated chefs in  {city}, Top rated cooks in  {city}, Want to hire a cook in  {city}
                        </p>
    </div>
</main>
  );
}


export default Citypage;
