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

const ReviewContainer = styled.div`
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
  color: gold;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
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
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #357ae8;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

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
            name: "Hari krishna",
            booking: "Booked Chef in Mumbai",
            date: "10 Jul 2024",
            rating: 4,
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
            name: "SANDIP RAI",
            booking: "Booked services in Bhopal",
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
            rating: 4,
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
            name: "Emily",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 4,
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
            rating: 4,
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
            rating: 4,
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
            name: "Samantha Jones",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjX75wkzXlHbOA2P8ql-iy0PiLPcz-6NErfy9RBwPcCx3zwHKxLd=s32-rw",
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
                "name": "Liam Smith",
                "booking": "Booked Decor Service for Wedding",
                "date": "10 Jan 24",
                "rating": 5,
                "avatar": "https://example.com/avatars/liam-smith.jpg",
                "indicators": {
                    "Taste": false,
                    "Behaviour": true,
                    "Presentation": true,
                    "Quantity": true,
                    "Hygiene": true,
                    "Punctuality": true
                },
                "text": "The decoration provided by Festive Flair Solutions was simply stunning. They captured the essence of our wedding theme perfectly. Everything was on time, and the quality of the decor exceeded our expectations!"
            },
            {
                "name": "Olivia Brown",
                "booking": "Booked Party Planning",
                "date": "22 Feb 24",
                "rating": 4,
                "avatar": "https://example.com/avatars/olivia-brown.jpg",
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
                "name": "Noah Johnson",
                "booking": "Booked Themed Decor for Birthday Party",
                "date": "14 Mar 24",
                "rating": 3,
                "avatar": "https://example.com/avatars/noah-johnson.jpg",
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
                "name": "Emma Wilson",
                "booking": "Booked Event Styling for Anniversary Celebration",
                "date": "30 Apr 24",
                "rating": 5,
                "avatar": "https://example.com/avatars/emma-wilson.jpg",
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
                "name": "Aiden Taylor",
                "booking": "Booked Decoration for Baby Shower",
                "date": "15 May 24",
                "rating": 4,
                "avatar": "https://example.com/avatars/aiden-taylor.jpg",
                "indicators": {
                    "Taste": false,
                    "Behaviour": true,
                    "Presentation": true,
                    "Quantity": true,
                    "Hygiene": false,
                    "Punctuality": true
                },
                "text": "Creative Moments did a great job with our baby shower decorations. The setup was lovely, and the team was very professional. However, there were minor cleanliness issues that could be addressed."
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
            <ReviewContainer>
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
                        <UserRating>{"★".repeat(review.rating)}</UserRating>
                        <Indicators>
                            {Object.entries(review.indicators).map(([key, value]) => (
                                value && <Indicator key={key}>{key}👍</Indicator>
                            ))}
                        </Indicators>
                        <ReviewText>{review.text}</ReviewText>
                    </ReviewCard>
                ))}
            </ReviewContainer>
            {visibleReviews < allReviewsData.length && (
                <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
            )}
        </Container>
    );
};

export default CustomersReviews;
