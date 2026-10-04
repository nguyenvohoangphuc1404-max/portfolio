export const projects = [
  {
    id: 1,
    title: 'Nghiên cứu mô hình quang tối ưu chỉ số CRI của đèn LED trắng',
    description: 'Xây dựng mô hình quang học mô phỏng phổ phát xạ chip LED xanh lam và phốt-pho YAG trên MATLAB; tính toán bổ sung dải phổ đỏ (600–700 nm) giúp nâng chỉ số hoàn màu CRI từ 76 lên đến 96 và tối ưu dải đỏ sâu R9.',
    tags: ['quang-học', 'matlab', 'originlab', 'mô-phỏng'],
    link: '#'
  },
  {
    id: 2,
    title: 'Đề tài Euréka lần 27: Đánh giá chất lượng màu LED theo IES TM-30-18',
    description: 'Khảo sát chỉ số trung thực Rf, chỉ số dải màu Rg và đồ thị vectơ màu (CVG); xác định CCT, tọa độ sắc độ CIE và kiểm soát độ lệch màu Duv qua phần mềm Color Calculator & OriginLab.',
    tags: ['euréka', 'quang-học', 'originlab', 'ies-tm30'],
    link: '#'
  },
  {
    id: 3,
    title: 'Hệ sinh thái thông minh bảo tồn & ấp nở rùa biển (IoT ESP32)',
    description: 'Xây dựng hệ thống tự động hóa chu kỳ cấp thức ăn theo cảm biến quang TH373 và cảm biến siêu âm HC-SR04; giám sát mực nước và điều khiển bơm mini qua Relay; thiết lập giao tiếp không dây ESP-NOW liên trạm và đồng bộ dữ liệu thời gian thực lên ThingsBoard.',
    tags: ['iot', 'nhúng', 'c++', 'esp32'],
    link: '#'
  },
  {
    id: 4,
    title: 'Tối ưu bộ điều khiển PID bằng giải thuật PSO cho hệ LFC',
    description: 'Xây dựng mô hình điều khiển tải tần số (LFC) trên MATLAB/Simulink; ứng dụng thuật toán tối ưu bầy đàn (PSO) tối ưu thông số PID theo chỉ tiêu ITAE, nâng cao độ ổn định trước biến thiên tải ngẫu nhiên.',
    tags: ['matlab', 'điều-khiển', 'mô-phỏng'],
    link: '#'
  },
  {
    id: 5,
    title: 'Hệ thống nhận diện ngôn ngữ ký hiệu qua Hand Tracking',
    description: 'Thu thập, tiền xử lý tập dữ liệu cử chỉ tay; huấn luyện mô hình Machine Learning nhận diện ngôn ngữ ký hiệu thời gian thực sử dụng MediaPipe & Python.',
    tags: ['ai', 'python', 'computer-vision'],
    link: '#'
  },
  {
    id: 6,
    title: 'Mạch khóa số điện tử bảo mật dùng IC CD4017',
    description: 'Thiết kế sơ đồ nguyên lý mạch đếm giải mã, mô phỏng hoạt động trên Proteus, thiết kế layout PCB và gia công hàn hoàn thiện bo mạch phần cứng.',
    tags: ['phần-cứng', 'proteus', 'mạch-điện-tử'],
    link: '#'
  },
  {
    id: 7,
    title: 'Phân loại và nhận dạng chữ số viết tay (MNIST)',
    description: 'Xây dựng, huấn luyện và đánh giá các mô hình học máy (Machine Learning) phân loại chữ số viết tay trên Google Colab; tối ưu siêu tham số đạt độ chính xác cao.',
    tags: ['ai', 'python', 'data'],
    link: '#'
  },
  {
    id: 8,
    title: 'Hệ thống Web dự báo chất lượng không khí (AQI)',
    description: 'Xử lý dữ liệu chuỗi thời gian khí tượng, trích xuất đặc trưng và huấn luyện mô hình học máy dự báo chỉ số AQI; trực quan hóa dữ liệu trên nền tảng Web.',
    tags: ['web', 'ai', 'data'],
    link: '#'
  }
];