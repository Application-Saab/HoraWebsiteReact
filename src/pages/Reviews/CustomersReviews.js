import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const RatingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: green;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Star = styled.span`
  color: gold;
  margin-right: 5px;
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const VerifiedReviews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: green;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ReviewContainer1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ccc;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const BookingInfo = styled.div`
  font-size: 12px;
  color: #666;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const BookingDate = styled.span`
  margin-top: 20px;
  font-size: 12px;
  color: #666;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
const UserRating = styled.div`
   position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  .filled {
    color: gold;
  }

  .blank {
    color: grey;
  }
`;

const ReviewContainer = styled.div`
  position: relative;
  padding: 20px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

const Indicators = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
`;

const Indicator = styled.span`
  font-size: 12px;
  color: #4a4a4a;
  background-color: #f0f0f0;
  padding: 2px 5px;
  border-radius: 3px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const ReviewText = styled.div`
  font-size: 14px;
  color: #333;
  max-height: 100px;
  overflow-y: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #9252aa;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const getStars = (rating) => {
    const filledStars = Array(rating).fill(<span className="filled">★</span>);
    const blankStars = Array(5 - rating).fill(<span className="blank">★</span>);
    return [...filledStars, ...blankStars];
  };

const CustomersReviews = () => {
    const allReviewsData = [
        {
            name: "hemant singh",
            booking: "Booked Chef in Mumbai",
            date: "19 Mar 2024",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjU_D6MAIAmJm4BrWTwjmEUcdUPXGbQOutY3YUmEfozjR0EDCDlbfQ=s32-rw",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: false,
                Punctuality: false,
            },
            text: "HORA have experienced and trained staff. Despite the tight timeline, they effortlessly executed my event with grace. The food was not only delicious but also elegantly presented, leaving my guests raving about the taste and variety. I couldn't have asked for a better partner in planning my special day!",
        },
        {
            "name": "Neha Patel",
            "booking": "Booked Chef and Balloon Decoration",
            "date": "12 May 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/10.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The chef and balloon decorations were excellent for our housewarming party. The service was prompt, and everything looked great. Minor hiccup with the setup time, but overall, a positive experience."
        },
        {
            "name": "Harikrishna Thakur",
            "booking": "Booked Decor Service for Party",
            "date": "10 Jan 24",
            "rating": 4,
            "avatar": "data:image/jpeg;base64,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",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Very responsive to communication. Team were very polite in addressing all of my concerns and answering my endless questions in a timely matter.Reasonable prices too! Highly recommend!!"
        },
        {
            name: "SANDIP RAI",
            booking: "Booked Decoration services in Bhopal",
            date: "3 April 24",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a/ACg8ocJ3rwU_SQsSWbLiTYa9DsB3xjuM1Qa2oUzyowa6bka5AsXukg=s32-rw-mo",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "The decoration was so good and magical.I booked this decoration for my lil ones bday and I was very happy the way the canopy was set up and decorated by Sandeep from Hora.Will definitely recommend to anyone looking for decoration services",
        },
        {
            name: "Hari krishna",
            booking: "Booked Chef in Mumbai",
            date: "10 Jul 2024",
            rating: 5,
            avatar: "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "Very responsive to communication. Team were very polite in addressing all of my concerns and answering my endless questions in a timely matter.Reasonable prices too! Highly recommend!!",
        },


        {
            name: "Raju",
            booking: "Booked party in Delhi",
            date: "28 Jan 2024",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjVOQrKBRar3UK4sK6KyxFymcvdJgZR5N12qq_CKezcxylA5icHmIg=s32-rw",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "It was actually a better and less expensive option than ordering cold deliveries from online delivery apps. Atleast when i know the party is hosted by me, I would not trust anything but Hora",
        },

       

        {
            name: "Ashu Tiwari",
            booking: "Booked Chef in Mumbai",
            date: "28 Aug 2023",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjWDqzjOJ19p-lbksp72dtFtEozrxlyX3-grQi0fSoiFSm8RrR9H=s32-rw",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "Food was too good . I mean all dishes were good and quantity was good .everyguest appreciated the taste. Plus cook and his assistant behaviour politeness and willingness to make good food made ocassion special. Will definitely consider this option again Thanks alot",
        },

        {
            name: "sachin verma",
            booking: "Booked Cook in Mumbai",
            date: "28 Aug 2023",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjXind0jrmxF4pkdsh_ywls3oMCOIX34mvEP4JHDenRA_QDYP6ij=s32-rw",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "It was my first experience, I loved it, I booked for my brother birthday & chef made it memorable. The way chef was preparing was in a very professional way, taste was too good. I will be booking often for the occasions. Thank you Hora",
        },

        {
            name: "Vijeta Sunda",
            booking: "Booked Stall in Mumbai",
            date: "25 Dec 2023",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjVFRB3pRXxtJgvV6QWB7tLW9JFDG-QiY8oHr22n_pQIQJaN_WD87w=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: false,
                Hygiene: false,
                Punctuality: true,
            },
            text: "What a delightful experience we had..I'm so grateful for sending me the best Chef Vipin Kumar Arya who was so so experienced and skilled and dedicated...we had a party of 25people and he made it so easy for me..Thank you to the waiter Tara who was really very helpful..they are really so experienced...Thank you once again.my guests loved the lip smacking food..",
        },

        {
            name: "Harsha",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjWYlq3OV6In6sCw_X91EexqX7q9FdazSyOJ-ROxRw63-BEbUnuB_A=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "Festive Flair Solutions did an outstanding job with our holiday party. The decorations were festive and vibrant, creating the perfect atmosphere for our celebration. Their professionalism and creativity were top-notch. Highly recommended",
        },

        {
            name: "David",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjWFDTqDTGwEO4_z-t3k8FPAL4YavkPwEyOvVkiDzcnN3zjZ6k51=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: false,
                Punctuality: true,
            },
            text: "Elite Celebration Designs transformed our anniversary party into something truly special. The creative decorations and personalized touches made the event memorable. The team was great to work with, and I couldn't have asked for more",
        },


        {
            name: "Lisa",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjUChSgkPLahgkjxnEzmsFYxYlZzzJ-r38LWTOwr4xvQFEq1ffI=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: false,
                Hygiene: false,
                Punctuality: true,
            },
            text: "I hired Party Perfectionists for my corporate event, and they did not disappoint. The decorations were elegant, and the entire setup was exactly what we needed to impress our clients. Excellent service and very reliable",
        },


        {
            name: "Vijeta Sunda",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjXt1BScAlFKvlv8oaTMTuJ5hS9raN3b3ZNpG-oFmc5zjyOeU7-H=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: false,
                Hygiene: false,
                Punctuality: true,
            },
            text: "What a delightful experience we had..I'm so grateful for sending me the best Chef Vipin Kumar Arya who was so so experienced and skilled and dedicated...we had a party of 25people and he made it so easy for me..Thank you to the waiter Tara who was really very helpful..they are really so experienced...Thank you once again.my guests loved the lip smacking food..",
        },


        {
            name: "Michael",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjXtTD4G9gbxQz1RSCSnAEkBxESsZuZI2pSfXLzd6WjXDJ3muobz6w=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: false,
                Hygiene: false,
                Punctuality: true,
            },
            text: "Glamour & Glow Creations made my wedding day unforgettable. The attention to detail and creative designs were exceptional. The team was professional and went above and beyond to ensure everything was perfect. Thank you for making our day so magical!",
        },


        {
            name: "Aarav Singh",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 4,
            avatar: "data:image/jpeg;base64,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",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: false,
                Hygiene: false,
                Punctuality: true,
            },
            text: "I had an amazing experience with Sparkle Events! They turned my vision for my daughter's birthday party into a reality with beautiful decorations and seamless service. Highly recommend for anyone looking to make their event extra special",
        },

         
            {
                "name": "Olivia Brown",
                "booking": "Booked Party Planning",
                "date": "22 Feb 24",
                "rating": 3,
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw-LgCtrI4A6tR4seUyLctAtgrTbzOLKHQg0wP1CdrCmc_rUUnK0hG8r6-w&s",
                "indicators": {
                    "Taste": false,
                    "Behaviour": true,
                    "Presentation": true,
                    "Quantity": true,
                    "Hygiene": true,
                    "Punctuality": false
                },
                "text": "Party Perfectionists did a great job with our corporate event. The decorations were elegant, and the overall presentation was excellent. There was a slight delay in setup, but it was handled professionally."
            },
            {
                "name": "Yash Jadav",
                "booking": "Booked Themed Decor for Birthday Party",
                "date": "14 Mar 24",
                "rating": 3,
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9gbKLIRaf9WtoLCRkyRduQC-YAwEnAyPZ6t7AVEjI-tkhupfOgKk0heFjw&s",
                "indicators": {
                    "Taste": false,
                    "Behaviour": false,
                    "Presentation": true,
                    "Quantity": false,
                    "Hygiene": true,
                    "Punctuality": true
                },
                "text": "The decorations from Glamour & Glow Creations were good, but there were some issues with the quantity and placement. The team was polite, but there were areas that could be improved."
            },
            {
                "name": "Radika Sharma",
                "booking": "Booked Event Styling for Anniversary",
                "date": "30 Apr 24",
                "rating": 5,
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVR5kfELoNTyq9ooySzzeGiAnrEBQvsrkNTOTvJxyeCgTUgJo3vnLUQVaUMA&s",
                "indicators": {
                    "Taste": false,
                    "Behaviour": true,
                    "Presentation": true,
                    "Quantity": true,
                    "Hygiene": true,
                    "Punctuality": true
                },
                "text": "Elite Celebration Designs exceeded our expectations with their exceptional service. The anniversary celebration was beautifully styled, and every detail was perfect. Highly recommend their services!"
            },
            {
                "name": "Akshay Singh",
                "booking": "Booked Decoration for Baby Shower",
                "date": "15 May 24",
                "rating": 4,
                "avatar": "data:image/jpeg;base64,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",
                "indicators": {
                    "Taste": false,
                    "Behaviour": true,
                    "Presentation": true,
                    "Quantity": true,
                    "Hygiene": false,
                    "Punctuality": true
                },
                "text": "Creative Moments did a great job with our baby shower decorations. The setup was lovely, and the team was very professional. However, there were minor cleanliness issues that could be addressed."
            },
        {
            "name": "Aarav Sharma",
            "booking": "Booked Balloon Decoration and Live Catering",
            "date": "10 July 24",
            "rating": 5,
            "avatar": "data:image/jpeg;base64,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",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Creative Moments truly exceeded our expectations! The balloon decorations were stunning, and the live catering was a hit with everyone. The team was punctual and very attentive to our needs. Highly recommend their services for any event!"
        },
        {
            "name": "Saanvi Patel",
            "booking": "Booked Chef for Dinner Party",
            "date": "22 June 24",
            "rating": 4,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzT_SZfAqq_hXIf7fkgW-YXau_Zspa6NOr5Q&s",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": false
            },
            "text": "The chef provided by Creative Moments was fantastic! The food was delicious, and the presentation was impressive. However, there was a slight delay in service, which affected the overall experience."
        },
        {
            "name": "Vivaan Gupta",
            "booking": "Booked Balloon Decoration for Engagement",
            "date": "05 June 24",
            "rating": 5,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTg91JA93ToyH1NM8NK_SccXsulq6dV7YFsrF3gmYTFgg4-POPyiLZwNE2SQ&s",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Absolutely wonderful service! The balloon decorations for our engagement party were perfect, and everything was handled with great professionalism. Couldn’t have asked for a better team to make our day special."
        },
        {
            "name": "Isha Mehta",
            "booking": "Booked Decoration for Baby Shower",
            "date": "15 May 24",
            "rating": 4,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDUBbpoQx3WhJ7ayiPLckWj-Khz6NHLo9wA&s",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": false,
                "Punctuality": true
            },
            "text": "Creative Moments did a great job with our baby shower decorations. The setup was lovely, and the team was very professional. However, there were minor cleanliness issues that could be addressed."
        },
        {
            "name": "Arjun Singh",
            "booking": "Booked Live Catering for Corporate Event",
            "date": "30 April 24",
            "rating": 3,
            "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": false,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The catering was good, but the quantity of food provided was less than expected for the size of our corporate event. The team was friendly and the food was tasty, but there’s room for improvement."
        },
        {
            "name": "Ananya Joshi",
            "booking": "Booked Decoration and Chef for Reception",
            "date": "18 March 24",
            "rating": 5,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQx6P0wIMO9cPCuEtrpJdPpiGMr73MYVr-Rg&s",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Our wedding reception was a huge success thanks to Creative Moments. Both the decorations and the food were exceptional. Everything was handled perfectly, and the team was incredibly professional and accommodating."
        },
        {
            "name": "Kartik Agarwal",
            "booking": "Booked Balloon Decoration for Kid's Birthday",
            "date": "01 July 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/men/7.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations for my child’s birthday party were fantastic! The kids loved it. The only issue was that the setup took a bit longer than expected, but it was worth the wait."
        },
        {
            "name": "Priya Sharma",
            "booking": "Booked Chef and Live Catering for Party",
            "date": "14 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/8.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Creative Moments made our graduation party memorable with excellent catering and service. The food was superb, and the team was punctual and professional. Highly recommend them for any event."
        },
        {
            "name": "Rohan Kapoor",
            "booking": "Booked Balloon Decoration for Baby Shower",
            "date": "25 April 24",
            "rating": 3,
            "avatar": "data:image/jpeg;base64,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",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": false,
                "Hygiene": false,
                "Punctuality": true
            },
            "text": "The decorations were nice, but there were some issues with cleanliness and the quantity of balloons. The team was friendly and punctual, but these issues affected the overall experience."
        },
        {
            "name": "Neha Patel",
            "booking": "Booked Chef and Balloon Decoration",
            "date": "12 May 24",
            "rating": 4,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZZEY1r3qDULEABP81st64QFqKN4gfd1q5w&s",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The chef and balloon decorations were excellent for our housewarming party. The service was prompt, and everything looked great. Minor hiccup with the setup time, but overall, a positive experience."
        },
        {
            "name": "Amit Kumar",
            "booking": "Booked Live Catering for Birthday Party",
            "date": "03 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/men/11.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Everything was perfect for our birthday party. The live catering was outstanding, and the team was professional and courteous. The food was delicious and everyone had a great time."
        },
        {
            "name": "Shruti Agarwal",
            "booking": "Booked Decoration for Corporate Event",
            "date": "29 June 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/12.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The decorations for our corporate event were impressive, and the team was very professional. The only downside was that there were some issues with food taste, but overall, the event was a success."
        },
        {
            "name": "Ravi Kumar",
            "booking": "Booked Balloon Decoration and Live Catering",
            "date": "08 July 24",
            "rating": 4,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgVBAyAYhwzE8-nMv3BTAMfJkLDBPUVE2d1ne82D_pcdzI9R90PIKKm7jsQ&s",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Creative Moments did a wonderful job with the balloon decorations and live catering. The setup was beautiful, and the food was tasty. The team was professional, although there was a slight delay in the setup."
        },
        {
            "name": "Aanya Verma",
            "booking": "Booked Chef for Anniversary Party",
            "date": "21 June 24",
            "rating": 5,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiagz2aGCIyINKdEkMCBXcuocJxqKRsD4xcw&s",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The chef and catering service provided by Creative Moments for our anniversary party were exceptional. The food was delicious and the service was flawless. Highly recommend them for any special occasion!"
        },
        {
            "name": "Kiran Reddy",
            "booking": "Booked Balloon Decoration for Office Party",
            "date": "27 May 24",
            "rating": 4,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fB6DKvAtwqb_li3GYgaisdvLkfJL49PnYA&s",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations for our office party were impressive and the team was very professional. The only issue was that the balloons didn’t last as long as expected, but overall, it was a great experience."
        },
        {
            "name": "Maya Singh",
            "booking": "Booked Live Catering for Family Reunion",
            "date": "15 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/16.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Creative Moments made our family reunion memorable with their excellent live catering service. The food was superb, and the team was very accommodating. We received many compliments from our guests."
        },
        {
            "name": "Nikhil Joshi",
            "booking": "Booked Balloon Decoration for Wedding",
            "date": "20 May 24",
            "rating": 3,
            "avatar": "data:image/jpeg;base64,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",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": false,
                "Hygiene": false,
                "Punctuality": true
            },
            "text": "The decorations for our wedding were nice but had some issues with hygiene and quantity. The team was punctual and polite, but these problems impacted the overall satisfaction."
        },
        {
            "name": "Riya Gupta",
            "booking": "Booked Balloon Decoration for Baby Shower",
            "date": "05 June 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/18.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations and catering for our baby shower were excellent. The food was delicious, and the decorations were beautiful. Minor delay in setup, but overall a great service."
        },
        {
            "name": "Aditya Patel",
            "booking": "Booked Live Catering for Graduation Party",
            "date": "12 July 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/men/19.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The live catering service was fantastic for our graduation party. The food was amazing, and the team was very professional. The event went off without a hitch, thanks to Creative Moments."
        },
        {
            "name": "Siddhi Rao",
            "booking": "Booked Balloon Decoration",
            "date": "01 July 24",
            "rating": 4,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHlwOp4_lKii_6yF4LPl4PpUCIVc3cgDICQ&s",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The decorations for our Diwali celebration were beautiful and the team was very friendly. There were minor issues with the quantity of balloons, but overall, the service was very satisfactory."
        },
        {
            "name": "Kabir Sharma",
            "booking": "Booked Chef for Housewarming",
            "date": "19 June 24",
            "rating": 5,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlNf5jgOoa-aQGv7RmXrrkvbOK_7WNF6ZYA&s",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Creative Moments provided excellent chef and decoration services for our housewarming. The food was delicious and the decorations were perfect. The team was very professional and timely."
        },
        {
            "name": "Pooja Agarwal",
            "booking": "Booked Live Catering for Engagement Party",
            "date": "28 April 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/22.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The catering for our engagement party was very good. The food was well-prepared and the team was courteous. There was a slight delay in the setup, but the overall quality of service was impressive."
        },
        {
            "name": "Ishaan Kapoor",
            "booking": "Booked Balloon Decoration for Corporate Event",
            "date": "02 June 24",
            "rating": 3,
            "avatar": "https://randomuser.me/api/portraits/men/23.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": false,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The decorations were decent for our corporate event, but there were some issues with the quantity and cleanliness. The team was punctual and friendly, but these issues affected our overall satisfaction."
        },
        {
            "name": "Meera Desai",
            "booking": "Booked Chef and Balloon Decoration for Birthday Party",
            "date": "09 May 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/24.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Everything was perfect for our birthday party. The food was delicious, and the balloon decorations were exactly what we wanted. The team was very professional and the event went smoothly."
        },
        {
            "name": "Rajesh Mehta",
            "booking": "Booked Balloon Decoration for Baby Shower",
            "date": "23 June 24",
            "rating": 4,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLu3fAFlzMFl1UlScY7-lV67pm1txZYLfHQ&s",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations for our baby shower were lovely and the team was very professional. There were minor issues with the setup time, but it was well worth it for the beautiful results."
        },
        {
            "name": "Sanya Verma",
            "booking": "Booked Live Catering for Wedding Reception",
            "date": "12 April 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/25.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The live catering for our wedding reception was excellent. The food was delicious and the service was impeccable. The team was very accommodating and made sure everything was perfect."
        },
        {
            "name": "Ankit Singh",
            "booking": "Booked Balloon Decoration for Anniversary Party",
            "date": "29 May 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/men/25.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations for our anniversary party were beautiful, and the team was professional. There were a few issues with the setup timing, but overall, the service was good."
        },
        {
            "name": "Jia Patel",
            "booking": "Booked Chef for Graduation Party",
            "date": "17 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/26.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The chef provided by Creative Moments was outstanding. The food was amazing and the service was top-notch. Our graduation party was a success thanks to their excellent catering."
        },
        {
            "name": "Gaurav Kumar",
            "booking": "Booked Balloon Decoration and Live Catering for Birthday Party",
            "date": "06 July 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/men/26.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations and catering for our birthday party were great. The food was good, and the decorations were beautiful. There was a small delay in setup, but it was managed well."
        },
        {
            "name": "Neelam Yadav",
            "booking": "Booked Chef and Balloon Decoration for Family Gathering",
            "date": "10 June 24",
            "rating": 5,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvkea3YQX04ZdCAbxqDvcKc7G3mtXaQEs8w&s",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Everything was perfect for our family gathering. The food was excellent, and the balloon decorations were exactly what we hoped for. The team was very professional and everything went smoothly."
        }

    ]

    const [visibleReviews, setVisibleReviews] = useState(10);

    const loadMore = () => {
        setVisibleReviews((prevVisible) => Math.min(prevVisible + 10, allReviewsData.length));
    };

    return (
        <Container>
            <Header>
                <h1>Ratings & Reviews</h1>
                <p>HORA has Served 5 Lakh people in 20+ cities!</p>
                <RatingHeader>
                    <Star>★</Star> 4.7 / 5 Average Rating
                </RatingHeader>
                <VerifiedReviews>✔ 10238 Verified Reviews</VerifiedReviews>
            </Header>
            <ReviewContainer1>
                {allReviewsData.slice(0, visibleReviews).map((review, index) => (
                    <ReviewCard key={index}>
                        <UserInfo>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar src={review.avatar} />
                                <div>
                                    <UserName>{review.name}</UserName>
                                    <BookingInfo>{review.booking}</BookingInfo>
                                </div>
                            </div>
                            <BookingDate>{review.date}</BookingDate>
                        </UserInfo>
                        <UserRating>{getStars(review.rating)}</UserRating>
                        {/* <Indicators>
                            {Object.entries(review.indicators).map(([key, value]) => (
                                value && <Indicator key={key}>{key}👍</Indicator>
                            ))}
                        </Indicators> */}
                        <ReviewText>{review.text}</ReviewText>
                    </ReviewCard>
                ))}
            </ReviewContainer1>
            {visibleReviews < allReviewsData.length && (
                <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
            )}
        </Container>
    );
};

export default CustomersReviews;
