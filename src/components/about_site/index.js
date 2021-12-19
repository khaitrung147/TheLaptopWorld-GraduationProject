import React from "react";
import about_avatar from "./about.svg";
import chuyenmon from "./about2.jpg";
import vanchuyen from "./shipping.png";
import baohanh from "./repair.jpg";

function About() {
  return (
    <>
      <div className="container my-5">
        <h3 className="text-info text-center pt-5">VỀ CHÚNG TÔI</h3>
        <div className="row pt-5" id="thuong-hieu">
          <div className="col">
            <img alt="hinh-anh" src={about_avatar} />
          </div>
          <div className="col text-secondary fs-6">
            <h4 className="fw-bold text-secondary mt-5">Thương hiệu</h4>
            <p>
              Được thành lập vào năm 2021, với mục tiêu mang đến các mẫu laptop
              cao cấp nhập khẩu đã qua sử dụng, không được cung cấp chính thức
              tại Việt Nam như ThinkPad, HP EliteBook, Dell Latitude, Precision.
              Những dòng laptop kể trên đều phù hợp với môi trường doanh nghiệp
              Việt với hiệu suất cao, bền bỉ và khả năng bảo mật tốt. Bên cạnh
              đó, Thế giới Laptop với kinh nghiệm từ đội ngũ đã lựa chọn những
              sản phẩm đã qua sử dụng với chất lượng cao nhất, hình thức tốt
              nhất để cung cấp với mức giá tốt nhất dành cho khách hàng.
            </p>
            <p>
              Những bước đi đầu tiên dù còn nhiều trở ngại nhưng với tâm huyết
              của đội ngũ chuyên nghiệp, đặt uy tín lên hàng đầu giúp Thế giới
              Laptop có chỗ đứng trên thị trường và là nơi lựa chọn máy tính
              nhập khẩu an tâm của khách hàng.
            </p>
            <p>
              Sau nhiều nỗ lực phát triển, Thế giới Laptop khẳng định các mẫu
              máy tính xuất phát từ thị trường Mỹ luôn có chất lượng đầu ra cao
              nhất, có nhiều lựa chọn cấu hình cao cấp phù hợp với nhu cầu ngày
              càng tăng của người tiêu dùng. Thế giới laptop luôn cung cấp chính
              sách bảo hành, ưu đãi mua hàng tốt nhất.
            </p>
          </div>
        </div>

        <div className="row pt-5" id="chuyen-mon">
          <div className="col text-secondary fs-6 mt-5">
            <h4 className="fw-bold text-secondary mt-5">Chuyên môn</h4>
            <p>
              Chúng tôi chú trọng xây dựng đội ngũ với chuyên môn cao nhất, am
              hiểu tường tận thị trường, thị hiếu của khách hàng. Mỗi sản phẩm
              Thế giới Laptop bán ra đều được nghiên cứu kỹ càng, phân tích ưu,
              nhược điểm, lựa chọn cấu hình phù hợp cho người tiêu dùng Việt.
            </p>
            <p>
              Thế giới Laptop sẵn sàng phục vụ những sản phẩm đặc biệt không
              được phân phối trong nước. Đây cũng là điểm khác biệt lớn nhất của
              Thế giới Laptop với đại đa số các địa chỉ cung cấp Laptop, linh
              kiện PC trên thị trường.
            </p>
          </div>
          <div className="col-6 mt-5">
            <img alt="hinh-anh" className="img-fluid mt-2" src={chuyenmon} />
          </div>
        </div>

        <div className="row pt-5" id="van-chuyen">
          <div className="col-6 pt-5">
            <img alt="hinh-anh" className="img-fluid mt-5" src={vanchuyen} />
          </div>
          <div className="col-6 text-secondary fs-6">
            <h4 className="fw-bold text-secondary mt-5">
              Chính sách vận chuyển
            </h4>
            <h5 className="text-secondary mt-3">
              I. Chính sách vận chuyển và giao nhận
            </h5>
            <p>
              Thế giới laptop hiện tại chỉ hỗ trợ vận chuyển toàn quốc dưới 1
              hình thức:
            </p>
            <p>Giao hàng và thanh toán tại nhà (COD)</p>
            <ul>
              <li>
                Đối với hình thức này Quý khách vui lòng thanh toán 100% phí vận
                chuyển phát sinh trong quá trình vận chuyển (Sẽ có thông báo
                trước khi gửi hàng).
              </li>
              <li>
                Thế giới laptop có trách nhiệm hỗ trợ khách hàng trong toàn bộ
                quá trình vận chuyển cho tới khi khách hàng nhận sản phẩm.
              </li>
              <li>
                Đối với hình thức này quý khách hàng vui lòng đặt cọc trước
                1,000,000đ để xác nhận đơn hàng.
              </li>
            </ul>
          </div>
          <div className="col-6 text-secondary fs-6">
            <h5 className="text-secondary mt-3">II. Đối tác vận chuyển</h5>
            <ul>
              <li>
                <p>
                  Qua đơn vị chuyển phát: Thế giới Laptop hỗ trợ gửi hàng qua
                  các đơn vị chuyển phát trong nước và nước ngoài bao gồm:
                  vnpost, viettelpost, nhattin logitics…. Thế giới Laptop chịu
                  trách nhiệm tới khi sản phẩm tới tay khách hàng (Khách hàng
                  vui lòng kiểm tra sản phẩm khi nhận hàng)
                </p>
                <p>
                  Trong trường hợp sản phẩm bị rơi vỡ, móp méo, trầy xước hoặc
                  sản phẩm không đúng như thông tin ban đầu mà cửa hàng cung cấp
                  tới Quý khách, Quý khách vui lòng không nhận hàng và thông báo
                  lại với cửa hàng. Cửa hàng sẽ có trách nhiệm tự xử lý với bên
                  vận chuyển để không ảnh hưởng tới quyền lợi của Khách hàng.
                  Trường hợp sau khi đã nhận hàng mà sản phẩm có phát sinh những
                  vấn đề trên (rơi vỡ, móp méo, trầy xước… hoặc tác động vật lý
                  từ môi trường) cửa hàng sẽ không thể hỗ trợ Quý khách xử lý.
                </p>
              </li>
              <li>
                Nhà xe: Thế giới Laptop không hỗ trợ vận chuyển qua nhà xe,
                trong trường hợp KH yêu cầu vận chuyển qua nhà xe thì nhà xe
                phải do khách hàng chỉ định và trong trường hợp phát sinh vấn đề
                trong quá trình vận chuyển cửa hàng không hỗ trợ xử lý.
              </li>
              <li>
                Ship nội thành HN,HCM: Thế giới Laptop hỗ trợ vận chuyển nội
                thành HN và TPHCM hoàn toàn miễn phí.
              </li>
              <li>
                Ship ngoại thành HN, HCM: Nếu khách hàng thành toán trước 100%
                sẽ được hỗ trợ miễn phí toàn bộ chi phí vận chuyển, Đối với các
                đơn hàng ở khu vực ngoại thành HN và TPHCM, cửa hàng hỗ trợ
                khách hàng giao hàng tại nhà có tính phí (5.000đ/1km)
              </li>
            </ul>
          </div>
          <div className="col-6 text-secondary fs-6">
            <h5 className="text-secondary mt-3">III. Thời gian vận chuyển:</h5>
            <ul>
              <li>
                Đối với các đơn hàng nội thành Hà Nội và TPHCM: Thế giới Laptop
                hỗ trợ giao hàng trong vòng 1h với những sản phẩm đang có sẵn
                hàng tại cửa hàng. Đối với những sản phẩm không sẵn hàng/không
                sẵn tại khu vực khách hàng cần giao hàng Thế giới Laptop sẽ có
                thông báo tới khách hàng về thời gian cụ thể giao hàng.
              </li>
              <li>
                Đối với các đơn hàng ở các tỉnh: Thế giới Laptop giao hàng thông
                qua các đơn vị vận chuyển trên toàn quốc, thời gian giao hàng
                thông thường từ 1-3 ngày tùy theo khu vực, trong dịp lễ/tết có
                thể thời gian vận chuyển có thể delay, Thế giới Laptop sẽ thông
                báo cụ thể tới khách hàng sau khi gửi hàng.
              </li>
              <li>
                Đối với các đơn hàng ngoại thành HN và TPHCM: Với những đơn hàng
                nằm ngoài khu vực nội thành , Thế giới Laptop hỗ trợ giao hàng
                trong ngày nếu khách hàng đặt trước 12h00 sáng, đối với những
                đơn hàng đặt sau thời gian này Thế giới Laptop sẽ chủ động liên
                hệ và hẹn lịch giao hàng cụ thể tới Quý khách hàng.
              </li>
            </ul>
          </div>
        </div>

        <div className="row pt-5" id="bao-hanh">
          <div className="col-6 pt-2">
            <img alt="hinh-anh" className="img-fluid" src={baohanh} />
          </div>
          <div className="col-6 text-secondary fs-6">
            <h4 className="fw-bold text-secondary mt-5">Chính sách bảo hành</h4>
            <p>
              Đầu tiên, Thế giới Laptop chắc chắn rằng việc máy tính bị lỗi dẫn
              đến phải bảo hành là vấn đề không ai mong muốn, bởi vì nó sẽ tiêu
              tốn thời gian cũng như tiền bạc của chúng tôi cũng như của Quý
              Khách Hàng. Ngoài ra nó còn làm ảnh hưởng nghiêm trọng đến uy tín
              của cửa hàng. Chính vì vậy, Thế giới Laptop luôn yêu cầu tất cả
              các sản phẩm bán ra có chất lượng tốt nhất để giảm tối đa các sản
              phẩm phải bảo hành. Tuy nhiên, do đặc thù ngành nghề kinh doanh đồ
              điện tử, việc bảo hành là không thể tránh khỏi, nên cửa hàng Thế
              giới Laptop đã có những Chính Sách Bảo Hành rõ ràng, rất mong Quý
              Khách Hàng đọc kỹ để đảm bảo không đánh mất quyền lợi khi mua
              hàng.
            </p>
          </div>
          <div className="col-6 text-secondary fs-6">
            <h5 className="text-secondary mt-3">I. Điều kiện bảo hành</h5>
            <p className="fw-bold">
              Tất cả các sản phẩm do Thế giới Laptop bán ra đều được tuân thủ
              điều kiện bảo hành của nhà cung cấp, hãng sản xuất. Các trường hợp
              sau đây bị coi là vi phạm điều kiện bảo hành và không được bảo
              hành:
            </p>
            <ul>
              <li>
                Sản phẩm bị tiêu hao trong quá trình sử dụng (Giới hạn độ bền
                của SSD, ăn mòn bàn phím, những tác động kèm theo từ môi trường
                bên ngoài, …).
              </li>
              <li>Các phần mềm được cung cấp kèm theo máy.</li>
              <li>
                Sản phẩm hết thời hạn bảo hành (thời hạn bảo hành sản phẩm được
                ghi trên tem hoặc kiểm tra theo serial của sản phẩm tại website
                Thế giới Laptop.vn, …).
              </li>
              <li>
                Không có tem bảo hành của Công ty/nhà phân phối/hãng sản xuất
                hoặc có nhưng tem bảo hành đó không hợp lệ (bị rách, bị tẩy xoá,
                sửa chữa, mờ không đọc được, bong/tróc, …).
              </li>
              <li>
                Số serial, mã vạch, thông số kỹ thuật trên sản phẩm không hợp lệ
                (bị mờ không đọc được, bị cạo, bị sửa, bị rách, bị bong/tróc, bị
                thay đổi).
              </li>
              <li>
                Sản phẩm bị lỗi do nguyên nhân bất khả kháng (lũ lụt, hoả hoạn,
                nguồn điện không bình thường, sai điện áp quy định …).
              </li>
              <li>
                Sản phẩm bị lỗi hình thức, biến dạng vật lý do bị rơi, va đập,
                vận chuyển/lắp đặt sai quy cách, hư hỏng do chuột bọ hoặc côn
                trùng xâm nhập, sản phẩm bị mốc, bị hoen rỉ, ẩm ướt, bị biến
                dạng như: trầy, xước, lồi, lõm, móp méo, ố vàng, mờ chữ, nứt,
                vỡ, viết chữ không tẩy được...
              </li>
              <li>
                Sản phẩm tự ý tháo dỡ, sửa chữa bởi các cá nhân hoặc kỹ thuật
                viên không được sự ủy quyền của Thế giới Laptop .
              </li>
            </ul>
          </div>
          <div className="col-6 text-secondary fs-6">
            <h5 className="text-secondary mt-3">
              II. Thời gian nhận bảo hành và trả bảo hành
            </h5>
            <ul>
              <li>
                Thời gian nhận bảo hành: Từ 9h00-12h30 và từ 14h00 đến 18h00 các
                ngày làm việc từ thứ 2 đến thứ 7.
              </li>
              <li>
                Thời gian trả bảo hành: Từ 9h00-12h30 và từ 14h00 đến 18h00 các
                ngày làm việc từ thứ 2 đến thứ 7.
              </li>
              <li>
                Hỗ trợ khách hàng bảo hành: Trong thời gian bảo hành sản phẩm
                nếu phát sinh vấn đề bảo hành kéo dài thời gian cửa hàng sẽ hỗ
                trợ Quý khách sản phẩm để sử dụng tạm thời trong thời gian chờ
                bảo hành (Hoặc khi khách có yêu cầu mượn sản phẩm)
              </li>
            </ul>
            <p>
              Quý khách có thể liên hệ trực tiếp trung tâm bảo hành và chăm sóc
              khách hàng: 1900.63.3579 (Mr. Lê Văn Mạnh).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
