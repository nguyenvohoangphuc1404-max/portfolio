export default function Hero() {
  return (
    <section className="hero">
      <h2 className="text-3xl font-bold text-blue-600">Xin chào, mình là Phúc 👋</h2>
      <p>Sinh viên Vật lý & Kỹ thuật | Đam mê lập trình mô phỏng và phát triển web.</p>
      
      {/* Thêm nút bấm test theme màu thương hiệu */}
      <button className="rounded bg-brand-700 px-4 py-2 text-white font-medium mt-3 cursor-pointer">
        Nút thương hiệu
      </button>
    </section>
  );
}