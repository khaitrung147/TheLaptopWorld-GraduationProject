/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

const News = () => {
  const [product, setData] = useState([]);

  useEffect(() => {
    const arr = [
      {
        name: "Những lý do mà bạn nên trải nghiệm thử laptop xoay gập 360 độ",
      },
      {
        name: "Top laptop làm việc, học tập online tốt nhất trong tầm giá 15 triệu Đồng",
      },
      {
        name: "Microsoft xác nhận Windows 11 sẽ không hỗ trợ SoC Apple M1",
      },
      {
        name: "Microsoft xác nhận Windows 11 sẽ không hỗ trợ SoC Apple M1",
      },
      {
        name: "Microsoft xác nhận Windows 11 sẽ không hỗ trợ SoC Apple M1",
      },
      {
        name: "Microsoft xác nhận Windows 11 sẽ không hỗ trợ SoC Apple M1",
      },
      {
        name: "ASUS ROG Strix G15 (G513)",
      },
      {
        name: "ASUS ROG Strix G15 (G513)",
      },
      {
        name: "ASUS ROG Strix G15 (G513)",
      },
    ];
    setData(arr);
  }, []);

  return (
    <div className="">
      {product.slice(0, 3).map((e) => (
        <div className="w-100 fw-bold news-box">
          <p className="p-4 news">
            {" "}
            <a href="" className="text-decoration-none">
              {e.name}
            </a>{" "}
          </p>
        </div>
      ))}
    </div>
  );
};
export default News;
