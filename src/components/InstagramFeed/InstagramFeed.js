import React, { useState } from "react";
import "./InstagramFeed.css";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";

function InstagramFeed() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  let data = [
    {
      id: 1,
      imgSrc:
        "https://d23abykesh9wm6.cloudfront.net/t_detail/dpr_2.0/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/58c261480df14ffaf856aada4658f487b876cb5d87cb67f34ba2ed66.jpg",
    },
    {
      id: 2,
      imgSrc:
        "https://d3gs7vyexhyssp.cloudfront.net/t_detail/dpr_2.0/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/d758539184640a0db262a0021a3fbb8b622ae8a301c48d36775634cf.jpg",
    },
    {
      id: 3,
      imgSrc:
        "https://d3gs7vyexhyssp.cloudfront.net/t_detail/dpr_2.0/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/37d2147411de5bc3f98acb4d7e0d24fd5e770e0766ffd46050085096.jpg",
    },
    {
      id: 4,
      imgSrc:
        "https://du66ttpehq3tn.cloudfront.net/t_detail/dpr_2.0/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/e5841af5477333780aa3cbbed5332cef8cbf301ac1c05113b094f754.jpg",
    },
    {
      id: 5,
      imgSrc:
        "https://d3gs7vyexhyssp.cloudfront.net/t_detail/dpr_2.0/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/204e5144a8708046d11e046822234ee6fc01078529e694b62e79f4eb.jpg",
    },
    {
      id: 6,
      imgSrc:
        "https://d3gs7vyexhyssp.cloudfront.net/t_detail/dpr_2.0/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/d1743aa159517ec1648b0e2a2e428141db3569d5eaeaced385d97a52.jpg",
    },
    {
      id: 7,
      imgSrc:
        "https://d2vykwbochoala.cloudfront.net/t_detail/dpr_2.0/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/9973e48f0605a71257802fce1369c6a26a38df329bf2d0b8279241b2.jpg",
    },
    {
      id: 8,
      imgSrc:
        "https://d23abykesh9wm6.cloudfront.net/t_detail/dpr_2.0/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/fecaf7b03de38694db77457890e77e16f7d002c83a7ac632f9828c6f.jpg",
    },
  ];

  const getPost = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />

        <div className="insta-post__description">
          <h3>samsays_pt</h3>
          <p>30 Mar 2022</p>
          <p className="descp">
            WOOO HOOOOO crufts HERE WE COME! 🙌🏻 Honestly this is one of my
            favourite times of the year and I couldn’t sleep last night cos I
            was too excited! 😂 We’re with whimzees_dog_treats today so and I’ll
            pop in our stories what time we’ll be there so Please say hi if you
            see us today we’d love to meet you! 🤗 📷 - Canon 6D with 35mm 1.4
            Sigma Art lens with remote #cockerspaniel #cockerspanielsofinstagram
            #cockerspanielpuppy #workingcockerspaniel #workingcocker
          </p>
        </div>
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="insta-feed__heading">Shop Our Instagram</div>
      <div className="insta-feed">
        {data.map((item, index) => {
          return (
            <div
              className="insta-feed__post"
              key={index}
              onClick={() => getPost(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                alt="InstaFeed"
                style={{ width: "100%" }}
              />

              <InstagramIcon className="Instgram-icon" />
              <Button className="shopnow-btn">Shop now</Button>
            </div>
          );
        })}
      </div>
      <div className="loadmore">
        <Button>Load more</Button>
      </div>
    </>
  );
}

export default InstagramFeed;
