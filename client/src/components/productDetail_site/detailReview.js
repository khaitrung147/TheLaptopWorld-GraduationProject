import React, { useEffect, useState } from "react";

const Review = () => {
  const [review, setData] = useState([]);

  useEffect(() => {
    const arr = {
      advance:
        "Laptop ultrabook mỏng nhẹ, thiết kế sang trọng, tinh tế nhưng vẫn rất chắc chắn. Màn hình 13 có độ phân giải FHD+, tỉ lệ màn hình 16:10, viền màn hình mỏng, tối đa trải nghiệm về mặt hình ảnh của người dùng ",
      defect:
        "Số lượng cổng kết nối còn hạn chế, gây bất tiện với những người dùng cần cắm nhiều thiết bị bên ngoài",

      content:
        "Dell XPS 13 9300 là sản phẩm laptop doanh nhân, với thiết kế mỏng nhẹ, tinh tế và sang trọng nhưng vẫn đủ mạnh mẽ để xử lý các tác vụ hằng ngày của người dùng. Đây là sự lựa chọn phù hợp dành cho các doanh nhân, những người làm văn phòng, hay thậm chí là học sinh sinh viên, những người thường xuyên phải mang máy theo bên mình trong những buổi học, cafe hay những chuyến công tác.",
    };

    setData(arr);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-xl-6">
          <div className="card p-3">
            Ưu điểm
            <li>{review.advance}</li>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card p-3">
            Nhược điểm
            <li>{review.defect}</li>
          </div>
        </div>
      </div>
      <p className="mt-3">{review.content} </p>
    </>
  );
};
export default Review;
